import React from 'react'
import './header.css'

const Header = ({name}) => {
    
  return (
    <div className='header'>

        <img className='imgHeader' src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png" height={'20%'}  alt="" />
        <h1>Hi, I'm {name}, a Frontend developer</h1>
    </div>
  )
}

export default Header