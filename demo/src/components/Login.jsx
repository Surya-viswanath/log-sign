import React, { useContext, useState } from 'react'
import axios, {} from 'axios'
import { Button, Card, Form } from 'react-bootstrap'
import { userData } from '../App';


function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
const{user,setUser} = useContext(userData);

  const handleemail =(event)=>{
    setEmail(event.target.value);
  };
  const handlepassword=(event)=>{
    setPassword(event.target.value);
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const display=await axios.post('http://localhost:4008/login',{Email,Password})
    console.log(display.data);
    if (display.data.user){
      setUser(display.data.user);
    } 
    const click =()=>{
      alert(` ${Email} account created..!!!`)
  }
  }
  return (
    <div className="justify-content-md-center">
  
       <Card style={{ width: '18rem' }}>
       <h1>Login</h1>
  <Form>
    
    <Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Email</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your email"
      value={Email}
      onChange={handleemail}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Password</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter password"
      value={Password}
      onChange={handlepassword}
      required
      
      />
    </Form.Group>

    <Button 
    type="submit"
    onClick={handleSubmit}

    >
    Login
    </Button>
  </Form>
     
    </Card>
    </div>
  )
}

export default Login
