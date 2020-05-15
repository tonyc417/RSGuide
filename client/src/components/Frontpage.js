import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';


class Front extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="logo">
                        RuneGuide
                </h1>
                    <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/guides">About</a></li>
                            <li><a href="/news">Blog</a></li>
                            <li><a href="/ge">Contact</a></li>
                        </ul>
                    </nav>
                    <label for="nav-toggle" class="nav-toggle-label">
                        <span></span>
                    </label>
                </header>
                <section class="hero-image">
                </section>
            </div>
        )

    }
};


export default Front;