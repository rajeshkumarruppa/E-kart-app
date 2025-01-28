import React from 'react'

const Login = ({openSignUp}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form action="">
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="email">Email</label>
            <input placeholder='Enter Email' type="email" name="email" id="email" className='w-full px-3 py-2 border' />

        </div>
        <div className='mb-4'>
            <label className='block text-gray-700' htmlFor="password">Password</label>
            <input placeholder='Enter Password' className='w-full px-3 py-2 border' type="password" name="password" id="password" />
        </div>
        <div className='mb-4 flex items-center justify-between'>
            <label htmlFor="remember" className='inline-flex items-center'>           
                 <input type="checkbox" name="remember" id="remember" />
                 <span className='ml-2 text-gray-700'>Remember Me</span>
                 <a className="text-red-800" href="">Forgot Password</a>
            </label>
        </div>
        <div className='mb-4 '>
            <button className='w-full px-3 py-2 bg-red-600 text-white' type="submit">Login</button>

        </div>
      </form>
      <div>
        <span>Don't have an account?</span>
        <button className='text-red-800 'onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login

