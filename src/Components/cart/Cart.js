import React, { useState } from 'react'
import { useDispatch, useSelector } from  'react-redux'
import { removeFromCart } from '../../redux/Product-actions/ProductActions';

function Cart() {
          const dispatch = useDispatch();

    // we have a hook to access the redux store state
    
    // we need to show the products if available else show the text
    // total price of all the products in the cart  

    const cart_data = useSelector((state) => state.productsData.cartData);
    console.log(cart_data)
    // map,filter,reduce
    // foreach and map
   const totalPrice = cart_data.reduce((prevsValue,currentValue)=>{
      return prevsValue + currentValue.price;
    },0)
    
  return (
    <div>
      {
        cart_data && cart_data.length && (
          <div className='products_total'>
        <p>Total Price : {totalPrice}</p>
      </div> 
        )
      }
       
      <div className='container mt-4 border border-dark'>
        {
          cart_data && cart_data.length>0 ?
          (
            cart_data.map((product)=>(
              <div key={product.id} className='row mt-3'> 
                  <div className='col-md-4'>
                      <img src={product.image} alt={product.title}  height="200px" className="img-fluid" />
                  </div>
                  <div className='col-md-6'>
                    <div className='mt-2 p-1'>
                      <div>
                        <h2>Title:{product.title}</h2>
                      </div>
                      <div>
                        <span className='mt-2'>{product.category}</span>
                      </div>
                      <div>
                        <span className='mt-2'>{product.description}</span>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='mt-2'>
                    <div className='pt-2'>price:{product.price}</div>
                    </div>
                    <div>
                      <button className='btn btn-danger mt-2 px-3'
                      onClick={()=>{
                        dispatch(removeFromCart(product.id))
                      }}
                      >Remove</button>
                    </div>
                  </div>
              </div>
            )
            )):<p>add some items</p>
        }
      </div>
    </div>
  )
}

export default Cart