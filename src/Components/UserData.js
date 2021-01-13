import React from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'

export default function UserData(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        props.onUpdate(data);
        //console.log(props.clientInfo)
    }


    return (

        <Form onSubmit={handleSubmit(onSubmit)} ref={React.createRef()}>
            <Form.Group controlId="formLogin">
                <Form.Label>Логін</Form.Label>
                <Form.Control ref={register} name='Login' placeholder="Введіть логін" defaultValue={props.userInfo.login} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control ref={register} name="Password" placeholder="Введіть пароль" defaultValue={props.userInfo.password} />
            </Form.Group>

            <Form.Row >
                <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label>Ім'я</Form.Label>
                    <Form.Control ref={register} name="Firstname" type="text" defaultValue={props.clientInfo.firstName} placeholder="Ваше ім'я" />
                </Form.Group>

                <Form.Group as={Col} controlId="formSurname">
                    <Form.Label>Прізвище</Form.Label>
                    <Form.Control ref={register} name="Surname" defaultValue={props.clientInfo.lastName} type="text" placeholder="Ваше прізвище" />
                </Form.Group>
            </Form.Row>
            <Form.Group controlId="formPhoneNumber">
                <Form.Label>Номер телефону</Form.Label>
                <Form.Control ref={register} name="Phone" defaultValue={props.clientInfo.phone} placeholder="Ваший номер мобільного телефону" />
            </Form.Group>

            <Button variant="primary" type="submit" block>
                Сохранить
                </Button>
        </Form>
    );
}