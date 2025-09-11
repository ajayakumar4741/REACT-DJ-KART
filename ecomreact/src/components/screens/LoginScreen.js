
import React, { useEffect, useState } from "react"
import { Container, Row, Card, Col, Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader';
import Message from '../Message';
import { InputGroup } from "react-bootstrap";
import { validPassword } from "./Regex";
import { login } from "../../actions/userActions";


function LoginScreen() {
  const navigate = useNavigate()
    const [fname, setFname] = useState('')
    const [password1, setPassword1] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState('')
    const dispatch = useDispatch()
    const userLogin = useSelector(state=>state.userLogin)
    const location = useLocation()
    const {error,loading,userInfo} = userLogin
    const redirect = location.search?location.search.split('=')[1] : '/'

    useEffect(()=>{
      if(userInfo){
        navigate('/')
      }
    },[userInfo,redirect])

    const SubmitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(fname,password1))
      }
    
    const showPassword=()=>{
    
    let x = document.getElementById('password1')
    
    if (x.type === 'password'){
      x.type = 'text'
      
      
    }else{
      x.type = 'password'
      
      
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
                {message && <Message variant='warning'>{message}</Message>}
                {success && <Message variant='success'>{success}</Message>}
                <Form onSubmit={SubmitHandler}>
                  <Form.Group className="mb-3" >
                    <Form.Label> <span><i className='fa fa-user'></i></span> First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your First Name" value={fname} onChange={(e)=>setFname(e.target.value)} required />
                  </Form.Group>
                  
                  
                  <Form.Group className="mb-3"  >
                    <Form.Label> <span><i ></i></span>Password </Form.Label>
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
