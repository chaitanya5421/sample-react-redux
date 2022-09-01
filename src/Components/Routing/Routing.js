import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../cart/Cart'
import Product from '../products/Product'
import Products from '../products/Products'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}

export default Routing