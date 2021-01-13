import React from 'react'
import { Nav, Col, Tab, Row } from 'react-bootstrap'
import UserData from './UserData'
import UserReserv from './UserReserv'

export default function User(props) {
  return (
    <>
      <h1 className='title-cabinet'>Особистий кабіннет</h1>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={{ paddingTop: '5em', marginLeft: '3em' }}>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="data">Зміна даних</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reservation" onClick={() => props.getReserv()}>Активні бронювання</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} >
            <Tab.Content style={{ paddingLeft: '5em' }}>
              <Tab.Pane eventKey="data">
                <UserData clientInfo={props.clientInfo} userInfo={props.userInfo} onUpdate={props.onUpdate} />
              </Tab.Pane>
              <Tab.Pane eventKey="reservation">
                <UserReserv reserv={props.reserv} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}