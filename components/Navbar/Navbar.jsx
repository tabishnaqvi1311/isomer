import React from 'react'
import styles from '@/styles/Navbar.css';

const Navbar = () => {

  return (
    <div className='nav'>
      <div className='logo'>
        <img src="/logo.svg" alt='logo'/>
      </div>
        <a href="">Explore</a>
        <a href="">Funds</a>
        <a href="">Budget</a>
        <input type="text" placeholder="Search for funds" />
      <div className='profile'>
        <a href="">Profile</a>
        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt='profile'/>
      </div>
    </div>
  )
}

export default Navbar
