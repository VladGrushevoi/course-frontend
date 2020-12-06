import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Parking from './Components/Parking'
import axios from 'axios'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import User from './Components/User'
import Places from './Components/Places';

function App() {
  const [auth, setAuth] = useState(false)
  const baseUrl = "http://localhost:5000/";
  const [parkings, setParkings] = useState([]);
  const [places, setPlaces] = useState([]);
  const [user, setUser] = useState([]);
  const [client, setClient] = useState([]);
  const [currPark, setCurrPark] = useState(0);
  const [reserv, setReserv] = useState([]);

  const signIn = (logPass) =>{
    axios.post(baseUrl+`api/auth`,logPass)
    .then(res => {
      if(res.status === 200){
        setUser(res.data);
        setAuth(true);
        getClientInfo(res.data.clientId);
      }else{
        setAuth(false);
      }
    });
    console.log(2)
  }

  const getClientInfo = (idClient) =>{
    axios.get(baseUrl+`api/client/${idClient}`)
    .then(res => {
      setClient(res.data);
    });
  }

  const exitUser = () =>{
    setAuth(false);
    setClient([]);
    setUser([]);
  }

  const registrationUser= (data)=>{
    axios.post(baseUrl+"api/registration", data)
    .then(res => {
      if(res.status === 201)
      {
        setUser(res.data);
        setAuth(true);
        getClientInfo(res.data.clientId);
      }
    });
  }

  const updateData = (data) => {
    console.log(client.id);
    updateUser(data)
    updateClient(client.id, data);
  }

  const updateUser = (data) =>{
      axios.patch(baseUrl+`api/update-user/${user.userId}`, data)
      .then(res => {
        setUser(res.data)
      });
  }

  const updateClient = (id, data) => {
    const client = {
      firstName: data.Firstname,
      lastName: data.Surname,
      phone: data.Phone
    }
    console.log(client);
    axios.patch(baseUrl+`api/client/${id}`,client)
    .then(res => {
      setClient(res.data);
      console.log(res.data);
    });
  }

  const setPark = (id) =>{
    setCurrPark(id);
    axios.get(baseUrl+`api/place/free/parking/${id}`)
    .then(res =>{
      setPlaces(res.data);
    })
  }
  const sendReserv = (reserv)=>{
    if(client.length === 0 || client.length < 0)
    {
      alert("Ввійдіть в аккуант");
    }else if(!('endPeriod'in reserv)){
      alert('end data indefined')
    }else{
      reserv = {
        ...reserv,
        clientId: client.id,
      }
      axios.post(baseUrl+"api/reserv", reserv)
      .then(res => {
        setPark(currPark);
      });

    }
  }

  const getReservByClient = () =>{
    axios.get(baseUrl+`api/get-reserv/client/${client.id}`)
    .then(res => {
      setReserv(res.data);
    });
  }
  
  useEffect(() =>{
    axios.get(baseUrl + "api/parking")
      .then(res => setParkings(res.data));
  }, []);


  return (
    <>
    <Router>
    <Header auth={auth} client={client} onExit = {exitUser}/>
      <Switch>
        <Route exact path="/">
          <Parking parkings={parkings} setPark={setPark}/>
        </Route>
        <Route exact path="/sign-up">
          <SignUp onRegistration = {registrationUser}/>
        </Route>
        <Route exact path="/sign-in">
          <SignIn signIn = {signIn}/>
        </Route>
        <Route exact path="/user-info">
          <User clientInfo={client} userInfo={user} onUpdate={updateData} getReserv={getReservByClient} reserv={reserv}/>
        </Route>
        <Route exact path="/reservation">
          <Places park={parkings.find(p => p.parkingId === currPark)} places={places} sendReserv={sendReserv}/>
        </Route>
      </Switch>
    </Router>
    </>

  );
}

export default App;
