import React from 'react'
import { Container, Form, Col, Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form'

export default function SignUp(props) {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) =>{
        props.onRegistration(data);
    }

    return (
        <Container style={{width:'30%', paddingTop:'5em'}} className="form-label">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formLogin">
                    <Form.Label>Логін</Form.Label>
                    <Form.Control ref={register} name='Login' placeholder="Введіть логін" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control ref={register} name="Password" type='Password' placeholder="Введіть пароль" />
                </Form.Group>

                <Form.Row >
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control ref={register} name="Firstname" type="text" placeholder="Ваше ім'я" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formSurname">
                        <Form.Label>Прізвище</Form.Label>
                        <Form.Control ref={register} name="Surname" type="text" placeholder="Ваше прізвище" />
                    </Form.Group>
                </Form.Row>
                <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Номер телефону</Form.Label>
                    <Form.Control ref={register} name="Phone" placeholder="Ваший номер мобільного телефону" />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                    Зареєструватися
                </Button>
            </Form>
        </Container>
    );
}