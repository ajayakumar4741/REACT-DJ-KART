import * as cartConstants from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id,qty) => async(dispatch,getState) => {
    const {data} = await axios.get(`/api/product/${id}`)

    dispatch({
        type: cartConstants.CART_ADD_ITEM,
        payload: {
            product: data.id,
            product_name: data.product_name,
            image: data.image,
            price: data.price,
            in_stock: data.in_stock,
            
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type: cartConstants.CART_REMOVE_ITEM,
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}