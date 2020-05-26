import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



class Front extends Component {
    render() {
        return (
            <div>
                <section class="hero-image">
                    <div className="hero-text">
                        <h1>Your One Stop for anything About Old School Runescape</h1>
                        <Row>
                            <Col>
                                <Link to="/guides">
                                    <Button>Guides</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/money" >
                                <Button>Money Making</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link to="/news" >
                                <Button>News</Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </section>
            </div>
        )

    }
};


export default Front;