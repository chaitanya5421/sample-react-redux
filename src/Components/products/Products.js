import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Products() {
    const [products,setProducts] = useState([]);

   const getProducts = async() =>{
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    setProducts(data);
    console.log(data);
    }

    useEffect(()=>{
        getProducts();
    },[])

  return (
    <div>
        <h2>Products</h2>
        <div className='container py-5'>
            <div class="row">
                {
                    products.length>0 ? (
                    products.map((product)=>(
                        <div key={product.id} className='col-md-3'>
                            <Link to={`/product/${product.id}`}>
                            <div  className='card my-2'>
                                <img className='card-img-top img-fluid p-2'
                                 src={product.image} 
                                 alt={product.title} /> 
                            <div className='card-body'>
                                <h4 className='card-title'>{product.category}</h4>
                            </div>
                            </div>
                            </Link>
                        </div>
                    ))
                    ):<p>Loading....</p>
                }
            </div>
        </div>
    </div>
  )
}

export default Products