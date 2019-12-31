import React, { Component } from 'react';
import Link from "next/link";

//import "../../scss/style.scss";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div>
                    <Link href="/">
                        <a title="API">Home</a>
                    </Link>
                    <Link href="/about">
                        <a title="About">About this Project</a>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;