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

export default class PeopleDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      film: [],
      species: [],
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

  getSpeciesByURL(url) {
    let currentComponent = this;
    let id = url
      .toString()
      .split("/")
      .pop();
    fetch("https://ghibliapi.herokuapp.com/species/" + id).then(function(
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
          species: data
        });
      });
    });
  }

  getPeopleData() {
    let currentComponent = this;
    fetch(
      "https://ghibliapi.herokuapp.com/people/" + this.state.match.params.id
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
          people: data,
          isLoading: false
        });
        currentComponent.getFilmByURL(data.films);
        currentComponent.getSpeciesByURL(data.species);
      });
    });
  }

  componentWillMount() {
    this.getPeopleData();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            {this.state.isLoading
              ? "Ghibli Studio API - Loading..."
              : "Ghibli Studio API - " + this.state.people.name}
          </title>
        </Helmet>
        <Container>
          <Columns>
            <Columns.Column size={12}>
              <h1 className="has-text-centered has-text-left-desktop">
                People Details - {this.state.people.name}
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
                      {this.state.people.name}
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
                    <p>Gender: {this.state.people.gender}</p>
                    <p>Eye Color: {this.state.people.eye_color}</p>
                    <p>Hair Color: {this.state.people.hair_color}</p>
                    <p>
                      Films :{" "}
                      {!this.state.film == [] ? (
                        <Button className="is-small margin-right-sm">
                          <a href={"#/film/" + this.state.film.id}>
                            {this.state.film.title}
                          </a>
                        </Button>
                      ) : (
                        ""
                      )}
                    </p>
                    <p>
                      Species :{" "}
                      {!this.state.species == [] ? (
                        <Button className="is-small margin-right-sm">
                          <a href={"#/species/" + this.state.species.id}>
                            {this.state.species.name}
                          </a>
                        </Button>
                      ) : (
                        ""
                      )}
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
