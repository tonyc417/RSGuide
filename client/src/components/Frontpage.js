import React from 'react';
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
import oldSchool from '../images/oldSchool.png';

const displayFront = () => {
    return(
        <section className="hero-image">
            <div>
                <Navbar dark expand='sm'>
                    <NavbarBrand>RuneGuide</NavbarBrand>
                </Navbar>
            </div>
        </section>
    )
}

export default displayFront;