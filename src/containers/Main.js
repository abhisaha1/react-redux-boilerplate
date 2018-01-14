import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getWelcomeData, loginAction } from "../redux/actions/ActionCreators";
import Login, { LoginHeader } from "../components/Login";

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.getWelcomeData();
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.welcome.data}
                <br />
                {this.props.user.name}
                <LoginHeader />
                <Login {...this.props} />
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
