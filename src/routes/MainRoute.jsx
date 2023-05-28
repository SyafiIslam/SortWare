import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../page/login/LoginPage'
import RegisterPage from '../page/register/RegisterPage'

const MainRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default MainRoute