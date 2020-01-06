import React, { Component } from 'react';
import Link from "next/link";

import {
    Navbar,
    Container,
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