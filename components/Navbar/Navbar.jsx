"use client"

import React from 'react'
import styles from '@/styles/Navbar.css';
import { getSession, signIn, signOut } from 'next-auth/react';

const Navbar = async () => {

  const session = getSession(); 

  return (
    <div className='nav'>
      <div className='logo'>
        <img src="/logo.svg" alt='logo' />
      </div>
      <a href="">Explore</a>
      <a href="">Funds</a>
      <a href="">Budget</a>
      <input type="text" placeholder="Search for funds" />
      <div className='profile'>
        <button onClick={() => signIn()}>Login</button>
        <button onClick={() => signOut()}>Logout</button>
        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt='profile' />
      </div>
    </div>
  )
}

export default Navbar
