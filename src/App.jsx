import React, { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from './components/Contact'
import About from './components/About'
import Cart from './pages/Cart'
import CheckOut from './components/CheckOut'
import Order from './components/Order'
import FilteredData from './components/FilteredData'
import ProductDetail from './pages/ProductDetail'
import Login from './components/Login'

function App() {
const [order,setOrder]=useState(null)


  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contacts' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<CheckOut setOrder={setOrder}/>}></Route>
        <Route path='/order-conformation' element={<Order order={order}/>}></Route>
        <Route path='/filter-data'element={<FilteredData/>}></Route>
        <Route path='/product/:id' element={<ProductDetail/>}></Route>  
        <Route path='/login' element={<Login/>}></Route>  

      </Routes>
      <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
