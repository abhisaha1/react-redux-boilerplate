import React, { Component } from "react";

export default class ValidateUser extends Component {
    componentWillMount() {
        if (localStorage.loggedIn) {
            this.props.history.push("/admin/home");
        } else {
            this.props.history.push("/login");
        }
    }

    render() {
        return null;
    }
}
