import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

import Card from "react-bulma-components/lib/components/card";
import Media from "react-bulma-components/lib/components/media";
import Image from "react-bulma-components/lib/components/image";
import Heading from "react-bulma-components/lib/components/heading";
import Content from "react-bulma-components/lib/components/content";
import Button from "react-bulma-components/lib/components/button";

import Columns from "react-bulma-components/lib/components/columns";

export default class CustomCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      url: props.url
    };
  }

  render() {
    return (
      <Columns.Column size={4}>
        <Card className="margin-md">
          <Card.Content>
            <Media>
              <Media.Item>
                <Image
                  src={require("../../images/placeholder.svg")}
                  className="is-full-image"
                />
              </Media.Item>
            </Media>
            <Content className="has-text-centered">
              <Heading className="has-text-centered" size={4}>
                {this.state.title}
              </Heading>
              <Link to={this.state.url}>
                <Button color="primary" outlined={false}>
                  Read More
                </Button>
              </Link>
            </Content>
          </Card.Content>
        </Card>
      </Columns.Column>
    );
  }
}
