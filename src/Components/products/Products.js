import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchproducts } from '../../redux/Product-actions/ProductActions';


function Products() {
    const products = useSelector((state)=>state.productsData.products);
    // console.log(products);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchproducts());
    },[])

  return (
    <div>
        <h2>Products</h2>
        <div className='container py-5'>
            <div class="row">
                {
                   products && products.length>0 ? (
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
                    ):<div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhKvKgUIIyFSgyDA5fCDpRhCRMBKS__3Qo6wmIQR_&s" alt="loader-gif" />
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Products