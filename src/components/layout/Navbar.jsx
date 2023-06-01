import React from 'react'
import Icon from '../../assets/icon.svg'
import { NavButton } from '../button/Buttons'
import { Link, useLocation } from 'react-router-dom'
import { removeToken } from '../../api/Api'

const Navbar = () => {

  let loc= useLocation()

  return (
    <div className='bg-primary700 flex items-center justify-between h-fit py-8 px-12'>
      <Link to='/' className='flex gap-4 items-center'>
        <img src={Icon} alt="" />
        <p className='font-bold text-[27px] text-white'>SortWare</p>
      </Link>

      <div className='flex gap-8 h6 items-center'>
        <Link to='/' className='font-[500] hover:font-bold text-white duration-300'>Beranda</Link>
        <Link to='/barang' className='font-[500] hover:font-bold text-white duration-300'>Barang</Link>
        <NavButton onClick={() => {removeToken()}}>
          Log Out
        </NavButton>
      </div>
    </div>
  )
}

export default Navbar 