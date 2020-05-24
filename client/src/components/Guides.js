import React from 'react';
import {
    Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import CombatIcon from '../images/Attack_icon.png'


const Guide = () => {
    return (
        <Container>
        <Row xs="2" sm="2">
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
                <CardImg  width="4%" src={CombatIcon} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Ranged</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="customCard">
                <CardImg  width="4%" src={CombatIcon} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Prayer</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="customCard">
                <CardImg  width="4%" src={CombatIcon} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Magic</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </Col>
            <Col>
            <Card className="customCard">
                <CardImg  width="4%" src={CombatIcon} alt="Card image cap" />
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