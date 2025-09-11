import React, { useEffect, useState } from "react"
import { Container, Row, Card, Col, Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader';
import Message from '../Message';
import { InputGroup } from "react-bootstrap";
import { validPassword } from "./Regex";
import { register } from "../../actions/userActions";


function RegisterScreen() {
  const navigate = useNavigate()
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()
  const redirect = location.search?location.search.split('=')[1] : '/'
  const userRegister = useSelector((state)=>state.userRegister)
  const {error,loading,userInfo} = userRegister

  useEffect(()=>{
    if(userInfo){
      navigate('/')
    }
  },[userInfo,redirect])

  const SubmitHandler=(e)=>{
    e.preventDefault()
    if(password1 !== password2){
      setMessage('Password do not match')
      return
    }else if(!validPassword.test(password1)){
      setMessage('Password not strong')
    }else{
      dispatch(register(fname,lname,email,password1))
      
      navigate('/login')
    }
  }

  const showPassword=()=>{
    
    let x = document.getElementById('password1')
    let z = document.getElementById('password2')
    if (x.type === 'password' && z.type === 'password'){
      x.type = 'text'
      z.type = 'text'
      
    }else{
      x.type = 'password'
      z.type = 'password'
      
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
                Register
              </Card.Header>
              <Card.Body>
                {message && <Message variant='warning'>{message}</Message>}
                {success && <Message variant='success'>{success}</Message>}
                <Form onSubmit={SubmitHandler}>
                  <Form.Group className="mb-3" >
                    <Form.Label> <span><i className='fa fa-user'></i></span> First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your First Name" value={fname} onChange={(e)=>setFname(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="mb-3" >
                    <Form.Label> <span><i className='fa fa-user'></i></span> Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Lirst Name" value={lname} onChange={(e)=>setLname(e.target.value)} required />
                  </Form.Group>
                  <Form.Group className="mb-3" >
                    <Form.Label> <span><i className='fa-solid fa-envelope'></i></span>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
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
                    <small>Password must include atleast [1-9][a-z][A-Z][_!@#$]</small>
                  <Form.Group className="mb-3" >
                    <Form.Label> <span><i ></i></span>Confirm Password </Form.Label>
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
                    </Form.Group>
                    <br></br>
                   <div className="d-grid gap-2">
                    <button className="btn btn-success" type="submit">Register</button>
                   </div>
                </Form>
                <Row className="py-3">
                    <Col>
                    Already User?
                    <Link to={'/login'}>login</Link>
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

export default RegisterScreen
