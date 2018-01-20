import React, { Component } from "react";

export default class SidebarItem extends Component {
    render() {
        console.log(this.props);
        const activeClass =
            this.props.active === this.props.item.action ? "active" : "";

        return <li className={activeClass}>{this.props.item.name}</li>;
    }
}
