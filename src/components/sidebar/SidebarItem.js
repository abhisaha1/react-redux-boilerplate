import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SidebarItem extends Component {
    render() {
        console.log(this.props);
        const activeClass =
            this.props.active === this.props.item.action ? "active" : "";

        return (
            <Link to={this.props.item.action} className={activeClass}>
                <li onClick={this.handleClick}>{this.props.item.name}</li>
            </Link>
        );
    }
}
