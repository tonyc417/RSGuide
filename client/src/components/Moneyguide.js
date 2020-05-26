import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import Demongorilla from '../images/DemonicGorilla.png';
import Vorkath from '../images/Vorkath.png';

const Money = () => {
    return (
        <div>
            <h1 className="newsHeading">High Level Money Making Guides</h1>
            <Row>
            <Card className="customCard ml-5">
                <CardImg className="mobImg" width="20%" height="30%" src={Demongorilla} alt="Demonic gorilla icon" />
                <CardBody>
                    <CardTitle className="h4">Demonic Gorillas</CardTitle>
                    <Button>Go</Button>
                </CardBody>
            </Card>
            <Card className="customCard ml-5">
                <CardImg className="mobImg" width="30%" height="20%" src={Vorkath} alt="Vorkath icon" />
                <CardBody>
                    <CardTitle className="h4">Vorkath</CardTitle>
                    <Button>Go</Button>
                </CardBody>
            </Card>
            </Row>
        </div>

    )
};

export default Money;