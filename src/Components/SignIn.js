import React from 'react'
import {useForm} from 'react-hook-form'
import {Form, Button, Container} from 'react-bootstrap'


function SignIn(props) {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        props.signIn(data);
        console.log(33);
    }


    return (
        <Container style={{width:'30%', paddingTop:'10em'}}>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{fontSize:"24px", color:'white'}}>Login</Form.Label>
                <Form.Control ref={register} name="Login" type="login" placeholder="Enter login" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label style={{fontSize:"24px", color:'white'}}>Password</Form.Label>
                <Form.Control ref={register} name="Password" type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Увійти
  </Button>
        </Form>
        </Container>
    );
}

export default SignIn;