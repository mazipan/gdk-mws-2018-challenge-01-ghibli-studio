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

export default class LocationDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      residents: [],
      films: [],
      location: [],
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
          films: [...currentComponent.state.films, data]
        });
      });
    });
  }

  getResidentsByURL(url) {
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
          residents: [...currentComponent.state.residents, data]
        });
      });
    });
  }

  getLocationData() {
    let currentComponent = this;
    fetch(
      "https://ghibliapi.herokuapp.com/locations/" + this.state.match.params.id
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
          location: data,
          isLoading: false
        });
        data.films.map(film => {
          currentComponent.getFilmByURL(film);
        });
        data.residents.map(resident => {
          currentComponent.getResidentsByURL(resident);
        });
      });
    });
  }

  componentWillMount() {
    this.getLocationData();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            {this.state.isLoading
              ? "Ghibli Studio API - Loading..."
              : "Ghibli Studio API - " + this.state.location.name}
          </title>
        </Helmet>
        <Container>
          <Columns>
            <Columns.Column size={12}>
              <h1 className="has-text-centered has-text-left-desktop">
                Location Details - {this.state.location.name}
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
                      {this.state.location.name}
                    </Heading>
                  </Content>
                </Card.Content>
              </Card>
            </Columns.Column>
            <Columns.Column>
              <Card>
                <Card.Content>
                  <Content>
                    <Heading size={4}>Details</Heading>
                    <hr />
                    <p>Climate: {this.state.location.climate}</p>
                    <p>Terrain: {this.state.location.terrain}</p>
                    <p>Surface Water: {this.state.location.surface_Water}</p>
                    <p>
                      Residents :{" "}
                      {!this.state.residents == []
                        ? this.state.residents.map(resident => {
                            return (
                              <Button
                                className="is-small margin-right-sm"
                                key={resident.id}
                              >
                                <a href={"#/people/" + resident.id}>
                                  {resident.name}
                                </a>
                              </Button>
                            );
                          })
                        : ""}
                    </p>
                    <p>
                      Films :{" "}
                      {!this.state.films == []
                        ? this.state.films.map(film => {
                            return (
                              <Button
                                className="is-small margin-right-sm"
                                key={film.id}
                              >
                                <a href={"#/film/" + film.id}>{film.title}</a>
                              </Button>
                            );
                          })
                        : ""}
                    </p>
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
