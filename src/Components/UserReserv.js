import React from 'react'
import { Table } from 'react-bootstrap'


export default function UserReserv(props) {

    const content = props.reserv.map(reserv =>
        <tr key={reserv.reservId}>
            <td>
                {reserv.reservId}
            </td>
            <td>
                Місце-{reserv.placeId}
            </td>
            <td >{reserv.startPeriod.toString().split("T")[0]}</td>
            <td >{reserv.endPeriod.toString().split("T")[0]}</td>
        </tr>)


    return (
        <Table responsive>
            <thead>
                <tr style={{ color: "white", fontSize: "18px" }}>
                    <th>#</th>
                    <th>Місце</th>
                    <th>Дата бронювання</th>
                    <th>Кінцева дата</th>
                </tr>
            </thead>
            <tbody style={{color:'white'}}>
                {content}
            </tbody>
        </Table>
    );
}