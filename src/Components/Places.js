import React from 'react'
import { Container, Accordion, Card, ListGroup, Button } from 'react-bootstrap';
import DatePicker from './DatePicker'


export default function Places(props) {

    const park = props.park;
    let reserv = {};
    const getDate = (date) =>{
        reserv = {
            endPeriod: date,
        }
    }
    const createReserv = (p) =>{
        reserv = {
            ...reserv, 
            placeId: p.placeId,
            startPeriod: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
        }
        props.sendReserv(reserv);
    }

    const content = (typeCar, typePlace) =>{
        //console.log(props.places.filter(p => p.typeId === typePlace && p.typeCarId === typeCar));
        return (
            props.places.filter(p => p.typeId === typePlace && p.typeCarId === typeCar)
        .map(p => 
        <ListGroup.Item 
        key={p.placeId} style={{display:'flex'}}>Місце-{p.placeId} Ціна-{p.price} 
        <DatePicker getDate={getDate}/>
        <Button variant="primary" onClick={() => createReserv(p)}> Забронювати</Button>
        </ListGroup.Item>)
        );
    }

    return (
        <>
            <Card key={park.parkingId} bg="primary" text="white" style={{ width: '80%', marginTop: '50px', marginLeft: '175px' }}>
                                    <Card.Header style={{ fontSize: '36px' }} >{park.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Img variant="top" src={park.urlImg} style={{ width: '400px', float: 'left', marginRight: "2em" }} />
                                        <Card.Title style={{ fontSize: '28px' }}>{park.name}</Card.Title>
                                        <Card.Text style={{ fontSize: '22px' }}>
                                        {park.description}
                                        </Card.Text>
                                    </Card.Body>
            </Card>
            <Container style={{ width: '80%', marginTop: '50px', marginLeft: '175px' }}>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Без накриття
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        <Accordion >
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Стандартна машина
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ListGroup>
                                {content(1,1)}
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Грузова машина
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {content(1,2)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        З накриттям
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <Accordion >
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Стандартна машина
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {content(2,1)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Грузова машина
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            {content(2,2)}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </Container>
            </>
    );
}