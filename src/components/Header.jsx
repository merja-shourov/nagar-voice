import React from 'react'
import CategoryMenu from './CategoryMenu'
import logo from '../assets/images/nagar-voice-logo.png';
const Header = () => {
  return (
    <div id='header' className='shadow-sm'>
      <div className="bg-[#fff] border-b-1 border-gray-400">
        <div className="container py-2">
          <div className="logo">
            <img style={{ width: "350px" }} src={logo} alt="nagar-voice" />
          </div>
          <div className="sidebar">

          </div>
        </div>
      </div>
      < CategoryMenu />
    </div>
  )
}

export default Header