import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import HeroImg from'../assets/hero-page.png'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import { useDispatch, useSelector } from 'react-redux'
import { mockData } from '../assets/mockData'
import { setProducts } from '../redux/productSlice'
import ProductCard from '../components/ProductCard'
import Shop from './Shop'

const categories=[
    "Electronics",
    'Fashion',
    'Beauty',
    'Sports',
    'Automotive',
]
const Home = () => {
    const dispatch=useDispatch()
    const productsList=useSelector((state) =>state.product.products)
    useEffect(()=>{
    dispatch(setProducts(mockData))
    },[])
  return (
    <>
    <div className='bg-white mt-2 px-4 md:px:16 lg:px:24'>
        <div className='container space-x-0.5 md:space-x-4 mx-auto py-4 flex-col flex md:flex-row  '>
            <div className=' w-full md:w-3/12   '>
                <div className='bg-red-600 w-full font-bold px-2 py-2.5 text-white'>
                    SHOP BY CATEGORIES
                </div>
            
                 <ul className='space-y-4 bg-gray-100 p-3 border'>
                 {categories.map((item,i)=>
                    <li key={i} className='flex items-center text-sm font-medium'>
                        <div className='w-2 h-2 border border-red-500 rounded-full mr-2 '></div>
                        {item}
                    </li>
                )}
                 </ul>
            </div>
        
        <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img src={HeroImg} alt="hero" className="w-full h-full "/>
            <div className='absolute top-16 left-8'>
                <p className='shadow-sm text-red-600 mb-4 font-extrabold text-4xl'>Code With Rajesh</p>
                <h2 className='text-3xl font-bold text-gray-800'>Welcome to E-shop</h2>
                <p className='text-xl mt-2.5 font-bold text-gray-800'>Millions+ Products</p>
                <button className='bg-red-600 px-8 py-1.5 text-white hover:scale-105 mt-4 hover:bg-red-700 transform translate-transform duration-300'>SHOP NOW</button>
            </div>
            </div>
        </div>
        <InfoSection/>
        <CategorySection/>
        <div className='container mx-auto py-12'>
            <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
                {productsList.slice(0,5).map((product) =><ProductCard product={product}/>)}
            </div>
        </div>
        
    </div>
    <Shop/>
    </>
  )
}

export default Home
