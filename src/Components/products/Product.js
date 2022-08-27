import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';

function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState({})

    const getProductData = async ()=>{
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(data);
        setProduct(data);
    }

    useEffect(()=>{
        getProductData();
    },[])

  return (
    <div className='container'>
        {
            Object.keys(product).length ? (
                <div>
                    <div className='row border border-primary mt-2'>
                        <div className='col-lg-6 p-5 mt-2'>
                            <img src={product.image} alt={product.title} className="img-fluid" />
                        </div>
                        <div className='col-lg-6'>
                            <h2 className='pt-4'>{product.title}</h2>
                        </div>
                    </div>
                </div>
            ) : <p>Loading...</p>
        }
    </div>
  )
}

export default Product