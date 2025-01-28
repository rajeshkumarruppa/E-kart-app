import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
      <div>
      <h2 className='text-2xl font-bold mb-4'>SignUp</h2>
      <form action="">
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="email">Name</label>
            <input type="text" name="name" id="name" placeholder='Enter Name' className='w-full px-3 py-2 border' />

        </div>
        <div className='mb-4'>
        <label className='block text-gray-700' htmlFor="email">Email</label>
            <input placeholder='Enter Email' type="email" name="email" id="email" className='w-full px-3 py-2 border' />

        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="password">Password</label>
            <input placeholder='Enter Password' className='w-full px-3 py-2 border' type="password" name="password" id="password" />
        </div>
        
        <div className='mb-4 '>
        <span className='ml-2 text-gray-700'>Already have an account?</span>

            <button className='w-full px-3 py-2 bg-red-600 text-white' type="submit" onClick={openLogin}>Login</button>

        </div>
      </form>
      <div>
        <span>Don't have an account?</span>
        <button className='text-red-800  pl-1 '>Login</button>
      </div>
    </div>
    </div>
  )
}

export default Register
