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
export default class FilmDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      isLoading: true,
      match: this.props.data
    };
  }

  componentWillMount() {
    let currentComponent = this;
    fetch(
      "https://ghibliapi.herokuapp.com/films/" + this.state.match.params.id
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
          film: data,
          isLoading: false
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>
            {this.state.isLoading
              ? "Ghibli Studio API - Loading..."
              : "Ghibli Studio API - " + this.state.film.title}
          </title>
        </Helmet>
        <Container>
          <Columns>
            <Columns.Column size={12}>
              <h1 className="has-text-centered has-text-left-desktop">
                Film Details - {this.state.film.title}
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
                      {this.state.film.title}
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
                      <p>{this.state.film.description}</p>
                    </div>
                    <div className="padding-top-md">
                      <Heading size={4}>Details</Heading>
                      <hr />
                      <p>Director: {this.state.film.director}</p>
                      <p>Producer: {this.state.film.producer}</p>
                      <p>Release Date: {this.state.film.release_date}</p>
                      <p>Rotten Tomatoes Score: {this.state.film.rt_score}</p>
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
