import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Product from '../products/Product'
import Products from '../products/Products'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
    </div>
  )
}

export default Routing