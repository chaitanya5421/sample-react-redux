import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
import { addToCart } from '../../redux/Product-actions/ProductActions';
import { useDispatch } from 'react-redux';


function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState({});
    const [isproductAdded,setIsProductAdded] = useState(false);
    const dispatch = useDispatch();

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
                            <div>
                            <h2 className='pt-4'>{product.title}</h2>
                            </div>
                        <div className='product_price mt-3'>
                            <span className='bg-info text-light p-2'>price:{product.price}</span>
                        </div>
                        <div className='product_category mt-4'>
                            <span className='bg-secondary text-white p-2'>category:{product.category}</span>
                        </div>
                        <div className='product_desc mt-4'>
                            <span className=' p-2'><strong>description:</strong>{product.description}</span>
                        </div>

                        <div className='product_add_to_card mt-3'>
                            <button className='btn btn-info px-3 py-2'
                            onClick={()=>{
                                dispatch(addToCart(product))
                                setIsProductAdded(true)
                            }
                            }
                            >{isproductAdded ? "added" : "Add to Cart"}</button>
                        </div>

                        </div>

                    </div>
                </div>
            ) : <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhKvKgUIIyFSgyDA5fCDpRhCRMBKS__3Qo6wmIQR_&s" alt="loader-gif" />
            </div>
        }
    </div>
  )
}

export default Product