import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { bindActionCreators } from "redux";
import { getWelcomeData, loginAction } from "../redux/actions/ActionCreators";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";
import Login from "./Login";
import Home from "./Home";
import ValidateUser from "../components/ValidateUser";
import "../../public/scss/style.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container-fluid">
                <Route exact path="/" component={ValidateUser} />
                <Route exact path="/login" component={Login} />
                <div>
                    <Route
                        path="/admin"
                        component={() => <Navbar role={"ADMIN"} />}
                    />
                    <Route path="/admin" component={Sidebar} />

                    <Route exact path="/admin/home" component={Home} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        welcome: state.welcome,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getWelcomeData,
            loginAction
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
