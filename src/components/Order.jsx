import React from 'react'

const Order = ({order}) => {
  return (
    <div className='p-5'>
      <h1 className='font-bold'>Thank you for your order</h1>
      <p>Your order has been placed successfully, You will receive an email conformation shortly</p>
      <div className='bg-gray-100 p-4'>

        <h3 className='font-bold' >
          Order Summary
        </h3>
        <p>OrderNumber:{order.orderNumber}</p>
        <h3 className='font-bold'>Shipping Information</h3>
        <p>info</p>
        <h3 className='font-bold'>Items Ordered</h3>
        <p>prodcut 5  x 2 </p>
        <h3 className='font-bold'>Total Price</h3>
        <p className='flex justify-between'>totalPrice: <span>${order.totalPrice}</span></p>
        
      </div>
      <div className='space-x-2 mt-4'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded'>Continue Shopping</button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-0.5 px-2 rounded'>Track Order</button>
      </div>
    </div>
  )
}

export default Order
