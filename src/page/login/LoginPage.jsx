import React from 'react'
import Login from '../../assets/login_image.svg'
import LoginForm from './LoginForm'

const LoginPage = () => {
  return (
    <div className='flex bg-primary700 min-h-screen gap-14'>
      <img className='w-6/12 object-contain' src={Login} alt="" />

      <div className='w-6/12 pr-40 flex flex-col justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage