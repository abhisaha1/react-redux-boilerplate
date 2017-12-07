import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route } from "react-router";
import Main from "./Main";

import "../../public/scss/style.scss";
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page-container">
                <Route pattern="/" component={Main} />
            </div>
        );
    }
}

export default connect()(App);
