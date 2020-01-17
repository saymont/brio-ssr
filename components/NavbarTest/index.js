import React, { Component } from 'react';
import Link from "next/link";

import {
    Navbar,
    Container,
    Button,
} from "reactstrap";

import Headroom from "headroom.js";


class NavbarT extends Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }

    render() {
        return (
            <div>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <Button
                                className="btn-icon mb-3 mb-sm-0"
                                color="info"
                                href="/"
                            >
                                <span className="btn-inner--icon mr-1">
                                    <i className="fa fa-code" />
                                </span>
                                <span className="btn-inner--text">Components</span>
                            </Button>
                            <Link href="/">
                                <a title="API">Home</a>
                            </Link>
                            <Link href="/about">
                                <a title="About">About this Project</a>
                            </Link>
                        </Container>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default NavbarT;