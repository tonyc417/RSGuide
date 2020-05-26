import React from 'react';
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import CombatIcon from '../images/Attack_icon.png';
import Prayer from '../images/Prayer.png';
import Ranged from '../images/Ranged.png';
import Magic from '../images/Magic.png';
import Woodcutting from '../images/Woodcutting.png';


const Guide = () => {
    return (
        <Container>
        <Row>
            <Col>
            <Card className="customCard">
                <CardImg width="4%" src={CombatIcon} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Combat</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="customCard">
                <CardImg  width="4%" src={Ranged} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Ranged</CardTitle>
                    <Button>Go</Button>
                </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="customCard">
                <CardImg  width="4%" src={Prayer} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Prayer</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="customCard">
                <CardImg  width="4%" src={Magic} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Magic</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="customCard">
                <CardImg  width="4%" src={Woodcutting} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Woodcutting</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            </Row>
        </Container>
    )
}

export default Guide;