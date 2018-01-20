import React, { Component } from "react";
import SidebarItem from "./SidebarItem";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [
                {
                    name: "System Activity Data",
                    icon: "",
                    action: "/admin/home"
                },
                { name: "Process Insights", icon: "", action: "" },
                { name: "Process Insights", icon: "", action: "" }
            ]
        };
    }

    render() {
        const menu = this.state.menu.map((item, idx) => (
            <SidebarItem
                key={idx}
                item={item}
                active={this.props.location.pathname}
            />
        ));

        return (
            <div className="sidebar">
                <ul>{menu}</ul>
            </div>
        );
    }
}
