import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';


class Front extends Component {
    render() {
        return(
            <section className='hero-image'>
                <div>
                {/* <Navbar dark expand='sm'>
                    <NavbarBrand>RuneGuide</NavbarBrand>
                </Navbar> */}
                <ul className='nav-links'>
                    <li>News</li>
                    <li>Grand Exchange</li>
                    <li>Guides</li>
                </ul>
                </div>
            </section>
        )

    }
};


export default Front;