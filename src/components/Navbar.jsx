import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import Shop from '../pages/Shop'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../redux/productSlice'
import Modal from './Modal'
import Login from './Login'
import Register from './Register'
import logo_img from '../assets/Images/ekart_logo.png'

const Navbar = () => {
    const cartData=useSelector((state)=>state.cart.cartItems)
    const [search,setSearch]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const[isModal,setIsModal]=useState(false)
    const [isLogin,setIsLogin]  =useState(true)
    const openSignUp=() => {
        setIsLogin(false)
        setIsModal(true)

    }
    const openLogin=() => {
        setIsLogin(true)
        setIsModal(true)
    }

  const handleSearch=(e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
        }
  return (
    <nav className='bg-white shadow-md   '>
        <div className='md:px-16 lg:px-24 py-4 flex justify-between first-letter:container mx-auto px-4 '>
            <div className='font-bold text-xl'>
            <Link to='/'>
            <h1 className=' text-center text-3xl'>E-kart</h1>
            </Link> 
            </div>
            <div className='relative flex-1 mx-4 '>
                <form onSubmit={handleSearch} >
                    <input className=' w-full border py-2 px-4 ' type="text" placeholder="Search Product" onChange={(e)=>setSearch(e.target.value)}/>
                    <FaSearch className='absolute top-3 right-3 text-red-500 '></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to='/cart' className='relative'>
                <FaShoppingCart/><span className='bg-red-600 text-white absolute top-0 text-xs w-3 left-3 rounded-full'>{cartData.length}</span>
                </Link>
                <button className=' hidden md:block' onClick={()=>setIsModal(true)}>Login | Register</button>
                <button className=' md:hidden'>
                    <FaUser/>
                </button>
            </div>
            
        </div>
        <div className='flex justify-center space-x-10 items-center py-4 text-md '>
                <Link className='hover:underline font-bold' to='./'>Home</Link>
                <Link className='hover:underline font-bold' to="./shop">Shop</Link>
                <Link className='hover:underline font-bold'to="./contacts">Contact</Link>
                <Link className='hover:underline font-bold' to='./about'>About</Link>
            </div>
            <Modal isModal={isModal} setIsModal={setIsModal}> 

                {isLogin?<Login openSignUp={openSignUp}/>:<Register openLogin={openLogin} />}
            </Modal>
    </nav>
  )
}

export default Navbar
