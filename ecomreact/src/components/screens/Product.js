import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../Rating'
function Product({ product }) {
    return (
        <div>
            <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${product.id}`}>
                    <Card.Img style={{width:'150px', height:'150px'}} src={product.image}></Card.Img>
                </Link>
                <Card.Body>
                    
                        <Card.Title as='div'>
                           <strong style={{fontSize:'25px'}}>
                            {product.product_name} </strong>

                        </Card.Title>
                    
                    <Card.Text as="div">
                        <div className="my-3">
                            {product.rating} ratings
                        </div>
                    </Card.Text>
                    <Card.Text as="div">
                        {product.price}₹
                    </Card.Text>
                    <Rating
                        value={product.rating}
                        text={` from ${product.numReviews} reviews`}
                        color={"#f8e825"}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
