import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import {Row,Col,Image,ListGroup,Button,Card,Container, ListGroupItem} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from '../Rating'


function ProductScreen() {
    const [product,setProduct] = useState([])
    const {id} = useParams()
  useEffect(()=>{
    async function fetchproduct(){
      const {data} = await axios.get(`/api/product/${id}`)
      setProduct(data)
    }
    fetchproduct()
  },[])
  return (
    <Container>
    <div>
      <Link to='/' className='btn btn-dark my-3'>
      Back
      </Link>

      <Row>
        <Col md={6}>
        
            <Image style={{width:'500px', height:'500px'}} src={product.image} alt={product.name} fluid />
            </Col>
          <Col md={6}>
          <Card>
            <ListGroup variant='flush'>
                <ListGroupItem>
                    <h3>{product.product_name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating
                        value={product.rating}
                        text={` from ${product.numReviews} reviews`}
                        color={"#f8e825"}
                    />
                </ListGroupItem>
                <ListGroupItem>
                    <h3>{product.price}₹</h3>
                </ListGroupItem>
                <ListGroupItem>
                  <label>Status:</label>
                    <h3>{product.in_stock > 0 ? 'In Stock':'Out of Stock'}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <p>{product.product_info}</p>
                </ListGroupItem>
                <ListGroupItem>
                    <button className='btn-block btn-success' disabled={product.in_stock==0} type='button' >Add To Cart</button>
                </ListGroupItem>
            </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
    </Container>
  )
}

export default ProductScreen
