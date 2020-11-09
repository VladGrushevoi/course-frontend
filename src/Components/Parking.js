import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

function Parking(props) {

    const history = useHistory();
    const setPark = (park) =>{
        history.push("/reservation")
        props.setPark(park.parkingId);
        console.log(props.parkings.find(p => p.parkingId === park.parkingId));
    }

    const content = props.parkings.map((park) =>
                                <Card key={park.parkingId} bg="primary" text="white" style={{ width: '80%', marginTop: '50px', marginLeft: '175px' }}>
                                    <Card.Header style={{ fontSize: '36px' }} onClick={() => setPark(park)}>{park.name}</Card.Header>
                                    <Card.Body>
                                        <Card.Img variant="top" src={park.urlImg} style={{ width: '400px', float: 'left', marginRight: "2em" }} />
                                        <Card.Title style={{ fontSize: '28px' }}>{park.name}</Card.Title>
                                        <Card.Text style={{ fontSize: '22px' }}>
                                        {park.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
    );
    return (
        <>
            {content}
        </>
    );
}

export default Parking;