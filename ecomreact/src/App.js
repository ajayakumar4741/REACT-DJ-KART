import React from 'react'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './components/screens/HomeScreen'
import RegisterScreen from './components/screens/RegisterScreen'
import LoginScreen from './components/screens/LoginScreen'
import CartScreen from './components/screens/CartScreen'
import Product from './components/screens/Product'
import ProductScreen from './components/screens/ProductScreen'

function App() {
  return (
    <>
    <div>
      <Router>
        <Header />
        <Routes>
          <Route  path="/" element={<HomeScreen/>}></Route>
          <Route  path="/register" element={<RegisterScreen/>}></Route>
          <Route  path="/login" element={<LoginScreen/>}></Route>
          <Route  path="/cart/:id?" element={<CartScreen/>}></Route>
          <Route  path="/product/:id" element={<ProductScreen/>}></Route>
        </Routes>
        
      </Router>
    </div>
    </>

  )
}

export default App
