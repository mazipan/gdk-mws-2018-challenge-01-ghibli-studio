import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Container from "react-bulma-components/lib/components/container";
import Heading from "react-bulma-components/lib/components/heading";

export default class NotFoundContainer extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>{"Ghibli Studio API - Not Found"}</title>
        </Helmet>
        <Container>
          <Heading className="has-text-centered padding-top-xl" size={1}>
            404
          </Heading>
          <h3 className="has-text-centered padding-top-xl">
            Content Not Found!
          </h3>
          <h4 className="has-text-centered" style={{ fontWeight: "normal" }}>
            Unfortunately, the content you are looking for is not available or
            maybe you mistyped something?
          </h4>
        </Container>
      </div>
    );
  }
}
