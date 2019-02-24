import React from "react";
import ReactDOM from "react-dom";
import "./_variables.scss";

import RootContainer from "./containers/Root/RootContainer/RootContainer";

ReactDOM.render(<RootContainer />, document.getElementById("app"));

module.hot.accept();
