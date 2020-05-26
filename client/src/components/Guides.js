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
        <div className="row">
            <div className="column">
            <Card className="customCard">
                <CardImg className="mobImg" width="20%" src={CombatIcon} alt="Combat Icon" />
                <CardBody>
                    <CardTitle>Combat</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </div>
            <div className="column">
            <Card className="customCard">
                <CardImg  className="mobImg" width="20%" src={Ranged} alt="Ranged Icon" />
                <CardBody>
                    <CardTitle>Ranged</CardTitle>
                    <Button>Go</Button>
                </CardBody>
            </Card>
            </div>
            <div className="column">
            <Card className="customCard">
                <CardImg className="mobImg" width="20%" height="30%" src={Prayer} alt="Prayer Icon" />
                <CardBody>
                    <CardTitle>Prayer</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </div>
            <div className="column">
            <Card className="customCard">
                <CardImg className="mobImg" width="20%" src={Magic} alt="Magic Icon" />
                <CardBody>
                    <CardTitle>Magic</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </div>
            <div className="column">
            <Card className="customCard">
                <CardImg  className="mobImg" width="20%" src={Woodcutting} alt="Woodcutting Icon" />
                <CardBody>
                    <CardTitle>Woodcutting</CardTitle>
                    <Button>Button</Button>
                </CardBody>
            </Card>
            </div>
        </div>
    )
}

export default Guide;