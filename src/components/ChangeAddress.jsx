import React, { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModal,isModal}) => {
 const[newAddress,setNewAddress] = useState('')
 console.log(newAddress)
  return (
    <div className='flex flex-col space-x-3'>
        <h1 className='font-bold '>Change Shipping Address</h1>
      <input type="text" name="" id=""placeholder='Enter new address' onChange={(e)=>setNewAddress(e.target.value)} />
      <div className='space-x-4 space-y-4'>
        <button onClick={()=>setIsModal(false)} className='bg-gray-500 text-white rounded-md p-1 w-20 hover:bg-gray-700'>cancel</button>
        <button onClick={()=>{setAddress(newAddress)
            setIsModal(false)
        }} className='bg-blue-500 text-white rounded-md p-1 w-20 hover:bg-blue-700' >Submit</button>
      </div>
    </div>
  )
}

export default ChangeAddress
