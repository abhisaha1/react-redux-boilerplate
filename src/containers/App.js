import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import routes from "../routes";
import Main from "./Main";

import "../../public/scss/style.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="page-container">{renderRoutes(routes)}</div>;
    }
}

export default connect()(App);
