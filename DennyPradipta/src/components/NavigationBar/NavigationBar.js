import React, { Component } from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bulma-components/lib/components/navbar";
import Container from "react-bulma-components/lib/components/container";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerOpened: false
    };

    this.handleNavigationBurger = this.handleNavigationBurger.bind(this);
    this.handleResetState = this.handleResetState.bind(this);
  }

  handleNavigationBurger() {
    this.setState(state => ({
      isBurgerOpened: !state.isBurgerOpened
    }));
  }

  handleResetState() {
    this.setState(state => ({
      isBurgerOpened: false
    }));
  }

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Navbar color="primary" fixed="top" transparent={false}>
            <Container>
              <Navbar.Brand>
                <Navbar.Item renderAs={Link} to="/">
                  Denny Pradipta
                </Navbar.Item>
                <Navbar.Burger
                  className={this.state.isBurgerOpened ? "is-active" : ""}
                  onClick={this.handleNavigationBurger}
                />
              </Navbar.Brand>
              <Navbar.Menu
                className={this.state.isBurgerOpened ? "is-active" : ""}
              >
                <Navbar.Container position="end">
                  <Navbar.Item
                    renderAs={Link}
                    to="/films"
                    onClick={this.handleResetState}
                  >
                    Films
                  </Navbar.Item>
                  <Navbar.Item
                    renderAs={Link}
                    to="/peoples"
                    onClick={this.handleResetState}
                  >
                    Peoples
                  </Navbar.Item>
                  <Navbar.Item
                    renderAs={Link}
                    to="/locations"
                    onClick={this.handleResetState}
                  >
                    Locations
                  </Navbar.Item>
                  <Navbar.Item
                    renderAs={Link}
                    to="/species"
                    onClick={this.handleResetState}
                  >
                    Species
                  </Navbar.Item>
                  <Navbar.Item
                    renderAs={Link}
                    to="/vehicles"
                    onClick={this.handleResetState}
                  >
                    Vehicles
                  </Navbar.Item>
                </Navbar.Container>
              </Navbar.Menu>
            </Container>
          </Navbar>
        </Container>
      </div>
    );
  }
}
