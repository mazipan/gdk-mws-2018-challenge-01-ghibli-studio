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

export default class SpeciesDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
      films: [],
      peoples: [],
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

  getPeopleByURL(url) {
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
          peoples: [...currentComponent.state.peoples, data]
        });
      });
    });
  }

  getSpeciesData() {
    let currentComponent = this;
    fetch(
      "https://ghibliapi.herokuapp.com/species/" + this.state.match.params.id
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
          species: data,
          isLoading: false
        });
        data.films.map(film => {
          currentComponent.getFilmByURL(film);
        });
        data.people.map(people => {
          currentComponent.getPeopleByURL(people);
        });
      });
    });
  }

  componentWillMount() {
    this.getSpeciesData();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            {this.state.isLoading
              ? "Ghibli Studio API - Loading..."
              : "Ghibli Studio API - " + this.state.species.name}
          </title>
        </Helmet>
        <Container>
          <Columns>
            <Columns.Column size={12}>
              <h1 className="has-text-centered has-text-left-desktop">
                Species Details - {this.state.species.name}
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
                      {this.state.species.name}
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
                    <p>Classification: {this.state.species.classification}</p>
                    <p>Eye Color: {this.state.species.eye_colors}</p>
                    <p>Hair Color: {this.state.species.hair_colors}</p>
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
                    <p>
                      People :{" "}
                      {!this.state.peoples == []
                        ? this.state.peoples.map(people => {
                            return (
                              <Button
                                className="is-small margin-right-sm"
                                key={people.id}
                              >
                                <a href={"#/people/" + people.id}>
                                  {people.name}
                                </a>
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
