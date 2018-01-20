import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.props.history.push("/admin/home");
    }

    render() {
        return (
            <div className="Login">
                <button onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}
