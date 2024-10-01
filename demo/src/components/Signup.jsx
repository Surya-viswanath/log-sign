import React, { useContext, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'

import { userData } from '../App';
import { Link } from 'react-router-dom';
function Signup() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const{user,setUser} = useContext(userData);
  const handleName =(event)=>{
    setName(event.target.value);
  };
  const handlePhone =(event)=>{
    setPhone(event.target.value);
  };
  const handleemail =(event)=>{
    setEmail(event.target.value);
  };
  const handlepassword=(event)=>{
    setPassword(event.target.value);
  };
  const isPasswordValid = (event)=>{
    return Password.length >=6;
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    const display=await axios.post('http://localhost:4008/signup',{Name,Email,Password,Phone})
    console.log(display.data);
    if (display.data.user){
        setUser(display.data.user);
      } 
  }
  return (
    <div>
      <div className="justify-content-center" style={{marginLeft:'5%'}}>
        <Card style={{width:'18rem'}}>
      <h1>Sign Up</h1>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Name</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your name"
      value={Name}
      onChange={handleName}
      required
      
      />
    </Form.Group>

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
      <Form.Label>Phone</Form.Label>
      <Form.Control
      type="text"
      placeholder="Enter your number"
      value={Phone}
      onChange={handlePhone}
      required
      
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Password</Form.Label>
      <Form.Control
      type="password"
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
    Signup
    </Button>
    Already have an account?<Link to='/log'>Signin</Link> 
  </Form>
     
  </Card>
    </div>
    </div>
  )
}

export default Signup

