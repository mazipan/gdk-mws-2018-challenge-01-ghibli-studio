import React from "react";
import { Component } from "react";
import { Helmet } from "react-helmet";

import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";

import Loader from "react-bulma-components/lib/components/loader";
import Card from "react-bulma-components/lib/components/card";
import Media from "react-bulma-components/lib/components/media";
import Image from "react-bulma-components/lib/components/image";
import Heading from "react-bulma-components/lib/components/heading";
import Content from "react-bulma-components/lib/components/content";
import Button from "react-bulma-components/lib/components/button";

export default class VehicleDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pilot: [],
      film: [],
      vehicle: [],
      isLoading: true,
      match: this.props.data
    };
  }

  getFilmByURL(url) {
    let currentComponent = this;
    let id = url
      .toString()
      .split("/")
      .pop();
    fetch("https://ghibliapi.herokuapp.com/films/" + id).then(function(
      response
    ) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        currentComponent.setState({
          film: data
        });
      });
    });
  }

  getPilotByURL(url) {
    let currentComponent = this;
    let id = url
      .toString()
      .split("/")
      .pop();
    fetch("https://ghibliapi.herokuapp.com/people/" + id).then(function(
      response
    ) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        currentComponent.setState({
          pilot: data
        });
      });
    });
  }

  getVehicleData() {
    let currentComponent = this;
    fetch(
      "https://ghibliapi.herokuapp.com/vehicles/" + this.state.match.params.id
    ).then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        currentComponent.setState({
          vehicle: data,
          isLoading: false
        });
        currentComponent.getFilmByURL(data.films);
        currentComponent.getPilotByURL(data.pilot);
      });
    });
  }

  componentWillMount() {
    this.getVehicleData();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            {this.state.isLoading
              ? "Ghibli Studio API - Loading..."
              : "Ghibli Studio API - " + this.state.vehicle.name}
          </title>
        </Helmet>
        <Container>
          <Columns>
            <Columns.Column size={12}>
              <h1 className="has-text-centered has-text-left-desktop">
                Vehicle Details - {this.state.vehicle.name}
              </h1>
              <hr />
            </Columns.Column>
            <Columns.Column size={4}>
              <Card>
                <Card.Content>
                  <Media>
                    <Media.Item>
                      <Image
                        src={require("../../../images/placeholder.svg")}
                        className="is-full-image"
                      />
                    </Media.Item>
                  </Media>
                  <Content className="has-text-centered">
                    <Heading
                      className="has-text-centered padding-top-md"
                      size={4}
                    >
                      {this.state.vehicle.name}
                    </Heading>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Content>
                    <div>
                      <Heading size={4}>Description</Heading>
                      <hr />
                      <p>{this.state.vehicle.description}</p>
                    </div>
                    <div className="padding-top-md">
                      <Heading size={4}>Details</Heading>
                      <hr />
                      <p>Vehicle Class: {this.state.vehicle.vehicle_class}</p>
                      <p>Length: {this.state.vehicle.length + " meters"}</p>
                      <p>
                        Pilot:{" "}
                        <Button
                          className="is-small margin-right-sm"
                          key={this.state.pilot.id}
                        >
                          <a href={"#/people/" + this.state.pilot.id}>
                            {this.state.pilot.name}
                          </a>
                        </Button>
                      </p>
                      <p>
                        Films:{" "}
                        <Button
                          className="is-small margin-right-sm"
                          key={this.state.film.id}
                        >
                          <a href={"#/film/" + this.state.film.id}>
                            {this.state.film.title}
                          </a>
                        </Button>
                      </p>
                    </div>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
          </Columns>
        </Container>
      </div>
    );
  }
}
