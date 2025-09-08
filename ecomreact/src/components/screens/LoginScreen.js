
import React, { useEffect, useState } from "react"
import { Container, Row, Card, Col, Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader';
import Message from '../Message';
import { InputGroup } from "react-bootstrap";
import { validPassword } from "./Regex";

function LoginScreen() {
  const navigate = useNavigate()
    const [fname, setFname] = useState('')
    
    const [password1, setPassword1] = useState('')
    
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show,changeShow] = useState('fa fa-eye-slash')

    const SubmitHandler=(e)=>{
        e.preventDefault()
        if(!password1){
          setError('Password do not match')
          navigate('/register')
        }else if(!validPassword.test(password1)){
          setError('Password not strong')
        }else{
          setError('')
          setSuccess('Register Successfully')
        }
      }
    
    const showPassword=()=>{
    
    let x = document.getElementById('password1')
    
    if (x.type === 'password'){
      x.type = 'text'
      
      changeShow('fa fa-eye')
    }else{
      x.type = 'password'
      
      changeShow('fa fa-eye-slash')
    }
  }
  return (
    <>
      <Container className='mt-3'>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as='h1' className="text-center bg-black text-light">
                Login
              </Card.Header>
              <Card.Body>
                {error && <Message variant='warning'>{error}</Message>}
                {success && <Message variant='success'>{success}</Message>}
                <Form onSubmit={SubmitHandler}>
                  <Form.Group className="mb-3" >
                    <Form.Label> <span><i className='fa fa-user'></i></span> First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your First Name" value={fname} onChange={(e)=>setFname(e.target.value)} required />
                  </Form.Group>
                  
                  
                  <Form.Group className="mb-3"  >
                    <Form.Label> <span><i className={show}></i></span>Password </Form.Label>
                    <InputGroup className="mb-3">
                          <InputGroup.Checkbox onClick={showPassword}/>
                          {" "}
                          <Form.Control 
                            placeholder="Enter Password"
                            required
                            type="password"
                            id="password1"
                            value={password1}
                            onChange={(e)=>setPassword1(e.target.value)}
                          />
                    </InputGroup>
                    </Form.Group>
                    
                  {/* <Form.Group className="mb-3" >
                    <Form.Label> <span><i className={show}></i></span>Confirm Password </Form.Label>
                    <InputGroup className="mb-3">
                          <InputGroup.Checkbox onClick={showPassword}/>
                          {" "}
                          <Form.Control 
                            placeholder="Confirm Password"
                            required
                            type="password"
                            id="password2"
                            value={password2}
                            onChange={(e)=>setPassword2(e.target.value)}
                          />
                    </InputGroup>
                    </Form.Group> */}
                    <br></br>
                   <div className="d-grid gap-2">
                    <button className="btn btn-success" type="submit">Login</button>
                   </div>
                </Form>
                <Row className="py-3">
                    <Col>
                    Not Registered?
                    <Link to={'/register'}>Register</Link>
                    </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginScreen
