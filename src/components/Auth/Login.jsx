import React, { useState } from 'react'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const submitHandler = (e) =>{
  e.preventDefault()
  console.log("The data received is,",email,"&",password)
  setEmail('')
  setPassword('')
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-indigo-600 p-20 rounded-3xl'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} 
        className='flex flex-col items-center justify-center'>
          <input value={email} 
          onChange={(e)=>{
            setEmail(e.target.value)}
          } required className='border-2 border-white rounded-xl py-3 px-5 text-xl outline-none focus:border-indigo-600' type="email" placeholder='Email' />
          
          <input value={password}
          onChange={(e)=>{
            setPassword(e.target.value)}
          } required className='border-2 border-white mt-3 rounded-xl py-3 px-5 text-xl outline-none focus:border-indigo-600' type="password" placeholder='Password' />
          <button className='w-full text-white mt-5 bg-indigo-600 hover:bg-indigo-500 rounded-xl py-2 px-8 text-xl border-none' >Login</button>
        </form>

      </div>
    </div>
  )
}

export default Login