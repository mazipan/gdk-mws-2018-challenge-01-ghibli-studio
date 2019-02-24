import React from "react";
import { Helmet } from "react-helmet";

import Container from "react-bulma-components/lib/components/container";

const HomeContainer = () => {
  return (
    <div>
      <Helmet>
        <title>{"Ghibli Studio API - Home"}</title>
      </Helmet>
      <Container>
        <h1>About</h1>
        <hr />
        <h3>Denny Pradipta</h3>
        <p>
          Hello, my name is Denny Pradipta. I am currently working in
          Indorelawan as a Full Stack Developer. My main focus is UI Design and
          Front-End Development. Technologies that I've been using right now in
          Indorelawan is AngularJS, Express, MongoDB, and Node. At the moment,
          I'm planning to migrate Indorelawan to React. I'm using Ubuntu as my
          daily driver for everything, such as productivity, work, and
          entertainment. I am familiar with Ubuntu Server, because Indorelawan
          uses Ubuntu in their production server.
        </p>
        <p>
          This is a React project without Create React App Boilerplate. I use
          Bulma for this project because I am exploring another CSS frameworks
          beside bootstrap. I use Studio Ghibli API which you can access below
          to display data.
        </p>
        <div className="padding-md" />
        <h3>Studio Ghibli API</h3>
        <p>
          The Studio Ghibli API catalogs the people, places, and things found in
          the worlds of Ghibli. It was created to help users discover resources,
          consume them via HTTP requests, and interact with them in whatever way
          makes sense. Navigation can be found on the left sidebar, and the
          right sidebar shows examples of returned objects for successful calls.
        </p>
        <p>
          Users can raise an issue, ask for help, or find a contribution guide
          at the main repo:&nbsp;
          <span>
            <a href="https://github.com/janaipakos/ghibliapi" target="_blank">
              https://github.com/janaipakos/ghibliapi
            </a>
          </span>
        </p>
      </Container>
    </div>
  );
};

export default HomeContainer;
