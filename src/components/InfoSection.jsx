import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
    const infoItems=[
        {
            icon:<FaShippingFast className='text-3xl text-red-600'/>,
            title:'Free Shipping',
            description:'Get you orders delivered with no extra cost',


        },
        {
            icon:<FaHeadset className='text-3xl text-red-600'/>,
            title:'Support 24/7',
            description:'We are here to assist you anytime',
            

        }
        ,
        {
            icon:<FaMoneyBillWave className='text-3xl text-red-600'/>,
            title:'100% Money Back',
            description:'Full Refund if you are not satisfied',
            

        },
        {
            icon:<FaLock className='text-3xl text-red-600'/>,
            title:'Payment Secure',
            description:'Your payment information safe with us',
            

        },
        {
            icon:<FaTag className='text-3xl text-red-600'/>,
            title:'Discount',
            description:'Enjoy the best prices on our products',
            

        },
       
    ]
  return (
    <div className='bg-white pb-8 pt-12'>
      <div className="container mx-auto   grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4  ">
            {infoItems.map((item,index)=>{
                return(
                    <div key={index} className='flex flex-col justify-center items-center shadow-lg space-x-4 p-4 border rounded-lg transform transition-transform duration-300 hover:scale-105' >
                        {item.icon}
                        <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                        <p className='mt-2 text-gray-600'>{item.description}</p>
                    </div>
                )
            })}
      </div>
    </div>
  )
}

export default InfoSection
