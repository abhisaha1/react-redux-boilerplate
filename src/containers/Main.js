import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getWelcomeData } from "../redux/actions/ActionCreators";

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.getWelcomeData();
    }

    render() {
        return <div onClick={this.handleClick}>{this.props.welcome.data}</div>;
    }
}

const mapStateToProps = state => {
    return {
        welcome: state.welcome
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getWelcomeData
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
