import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Product from './Product';
import { listProducts } from '../../actions/productsActions';
import { useDispatch,useSelector } from 'react-redux';

function HomeScreen() {
  const dispatch = useDispatch()
  const productsList = useSelector((state)=>state.productsList)
  const {error,loading,products} = productsList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  return (
    <Container>
      <br></br>
      <h1>Products</h1>
      {
        loading?(
          <h2>Loading...</h2>
        ):error?(
          <h3>{error}</h3>
        ):(
          <Row>
        {products.map((product)=>(
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
            <Product product={product}/>
          </Col>
        ))}
      </Row>
        )
      }
    </Container>
  )
}

export default HomeScreen
