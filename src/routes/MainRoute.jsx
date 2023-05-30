import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../page/login/LoginPage'

const MainRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default MainRoute