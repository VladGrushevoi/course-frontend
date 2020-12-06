import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Button, Nav, Navbar,Form} from 'react-bootstrap'

function Header(props) {

  const history = useHistory();

  const onExit = () =>{
    props.onExit();
    history.push("/");
  }

  const selectHeader = () =>{
    if(props.auth){
      // history.push("/");
      return (
      <Form inline>
        <Link to="/user-info" style={{fontSize:'28px', marginRight: '1em'}}>{props.client.firstName+" "+props.client.lastName}</Link>
     <Button  variant="outline-info" onClick={() => onExit()} style={{fontSize:'28px', marginRight: '1em'}}>
       Вихід
     </Button>
     </Form>
     );
    }else{
      return (
      <Form inline>
     <Button  variant="outline-info" onClick={() => history.push("/sign-up")} style={{fontSize:'28px', marginRight: '1em'}}>
       Зареєструватися
     </Button>
     <Button  variant="outline-info" onClick={() => history.push('/sign-in')} style={{fontSize:'28px', marginRight: '1em'}}>
       Вхід
     </Button>
     </Form>
      );
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand to="/" style={{fontSize:'36px'}}>Автопарковки Черкаси</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/" style={{fontSize:'28px', marginLeft:'1em'}}>Головна</Link>
    </Nav>
     {selectHeader()}
   </Navbar> 
    </>
  );
}

export default Header;