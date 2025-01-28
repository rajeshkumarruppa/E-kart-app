import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    console.log(product)
    const dispatch=useDispatch()
    const handleAddToCart =(e,product)=>{
      e.preventDefault()
      e.stopPropagation()
      dispatch(addToCart(product))
      alert("product added successfully")
    }
    const cartdata=useSelector((state)=>state.cart.cartItems)
    console.log(cartdata);

  return (
    <Link to={`/product/${product.id}`} className='group'>
    <div className='bg-white p-4 shadow rounded relative border transform transaction-transform duration-300 hover:sacle-105'>
      <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>${product.price}</p>
      
      <div className='flex items-center mt-2'>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'>className='text-yellow-500'</FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      <FaStar className='text-yellow-500'></FaStar>
      </div>
      <div  onClick={(e)=>handleAddToCart(e,product)}class='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600
      group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all '>
        <span class='group-hover:hidden'>+</span>
        <span class='hidden group-hover:block'>Add to Cart</span>
        <span class='group-hover:hidden'>-</span>
      </div>

   
    </div>
    </Link>
    
  )
}

export default ProductCard
