/* Libraries */
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Container from "react-bulma-components/lib/components/container";

/* Custom Reusable Components */
import NavigationBar from "../../../components/NavigationBar/NavigationBar";

/* Page Containers */
import HomeContainer from "../../Home/HomeContainer";
import FilmContainer from "../../Film/FilmContainer/FilmContainer";
import PeopleContainer from "../../People/PeopleContainer/PeopleContainer";
import LocationContainer from "../../Location/LocationContainer/LocationContainer";
import SpeciesContainer from "../../Species/SpeciesContainer/SpeciesContainer";
import VehiclesContainer from "../../Vehicle/VehiclesContainer/VehiclesContainer";

/* Details Page Containers */
import FilmDetailsContainer from "../../Film/FilmDetailsContainer/FilmDetailsContainer";
import PeopleDetailsContainer from "../../People/PeopleDetailsContainer/PeopleDetailsContainer";
import LocationDetailsContainer from "../../Location/LocationDetailsContainer/LocationDetailsContainer";
import SpeciesDetailsContainer from "../../Species/SpeciesDetailsContainer/SpeciesDetailsContainer";
import VehicleDetailsContainer from "../../Vehicle/VehicleDetailsContainer/VehicleDetailsContainer";

/* Utilities Containers */
import NotFoundContainer from "../NotFoundContainer/NotFoundContainer";

export default class RootContainer extends Component {
  render() {
    return (
      <div>
        <Router>
          <Container fluid={true}>
            <NavigationBar />
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="route-wrapper"
            >
              {/* Page Routes */}
              <Route exact path="/" render={() => <HomeContainer />} />
              <Route exact path="/films" render={() => <FilmContainer />} />
              <Route exact path="/peoples" render={() => <PeopleContainer />} />
              <Route
                exact
                path="/locations"
                render={() => <LocationContainer />}
              />
              <Route
                exact
                path="/species"
                render={() => <SpeciesContainer />}
              />
              <Route
                exact
                path="/vehicles"
                render={() => <VehiclesContainer />}
              />
              {/* Details Page Routes */}
              <Route
                path={"/film/:id"}
                render={props => <FilmDetailsContainer data={props.match} />}
              />
              <Route
                path={"/people/:id"}
                render={props => <PeopleDetailsContainer data={props.match} />}
              />
              <Route
                path={"/location/:id"}
                render={props => (
                  <LocationDetailsContainer data={props.match} />
                )}
              />
              <Route
                path={"/species/:id"}
                render={props => <SpeciesDetailsContainer data={props.match} />}
              />
              <Route
                path={"/vehicle/:id"}
                render={props => <VehicleDetailsContainer data={props.match} />}
              />
              {/* Utlities Container */}
              <Route render={() => <NotFoundContainer />} />
            </AnimatedSwitch>
          </Container>
        </Router>
      </div>
    );
  }
}
