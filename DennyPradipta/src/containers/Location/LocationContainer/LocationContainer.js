import React from "react";
import { Component } from "react";
import { Helmet } from "react-helmet";

import Container from "react-bulma-components/lib/components/container";
import Columns from "react-bulma-components/lib/components/columns";
import Loader from "react-bulma-components/lib/components/loader";

import CustomCard from "../../../components/CustomCard/CustomCard";

export default class LocationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      isLoading: true
    };
  }

  componentWillMount() {
    let currentComponent = this;
    fetch("https://ghibliapi.herokuapp.com/locations").then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        currentComponent.setState({
          locations: data,
          isLoading: false
        });
      });
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{"Ghibli Studio API - All Locations"}</title>
        </Helmet>
        <Container>
          <h1 className="has-text-centered has-text-left-desktop">
            List of Locations
          </h1>
          <hr />
          {this.state.isLoading ? (
            <Loader
              className="has-text-centered"
              style={{
                width: 300,
                height: 300,
                border: "4px solid #00E2B3",
                borderTopColor: "transparent",
                borderRightColor: "transparent",
                margin: "0 auto",
                marginTop: "4rem"
              }}
            />
          ) : (
            <Columns gapless>
              {this.state.locations.map(location => {
                return (
                  <CustomCard
                    title={location.name}
                    url={"/location/" + location.id}
                    key={location.id}
                  />
                );
              })}
            </Columns>
          )}
        </Container>
      </div>
    );
  }
}
