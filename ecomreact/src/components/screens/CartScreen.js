import React,{useEffect, useState} from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Container, Form, Button } from 'react-bootstrap'
import Loader from '../Loader';
import Message from '../Message';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';

function CartScreen({params}) {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const productId = id
  const dispatch = useDispatch()
  const qty = navigate.search ? Number(location.search.split('=')[1]) : 1
  console.log(productId,qty)
  const cart = useSelector(state=>state.cart)
  const {cartItems} = cart
 

  
  useEffect(()=>{
    if (productId){
      dispatch(addToCart(productId,qty))
    }
  },[dispatch,productId,qty])

  const removeFromCartHandler=(id)=>{
    dispatch(removeFromCart(id))
  }
  const checkoutHandler=()=>{
    navigate('/login?redirect=shipping')
  }
  return (
    <>
    <Row>
      
      <Col md={8}>
      <Container>
      <h1>Cart Items</h1>
      {cartItems.length === 0 ? (
        <Message variant={'info'}>Your Cart is empty <Link to={'/'}>Go Back</Link></Message>
      ):(
        
        <ListGroup variant='flush'>
          {cartItems.map(item=>(
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                <Image src={item.image} alt={item.product_name} fluid rounded/>
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.product}`}></Link>{item.product_name}
                </Col>
                <Col md={2}>{item.price}</Col>
                <Col md={3}>
                  <Form.Control as="select" value={item.qty} onChange={(e)=>dispatch(addToCart(item.product, Number(e.target.value)))}>
                    {[...Array(item.in_stock).keys()].map((x)=>(
                          <option key={x+1} value={x+1}>{x+1}</option>
                        ))}
                  </Form.Control>
                </Col>
                <Col md={1}>
                    <Button type='button' variant='light' onClick={()=>removeFromCartHandler(item.product)}>
                        <i className='fas fa-trash'></i>
                    </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
        
      )}
      </Container>
      </Col>
     
    </Row>
    </>
  )
}

export default CartScreen
