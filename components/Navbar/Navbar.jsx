"use client"

import React from 'react'
import { getSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

  const session = getSession();

  return (
    <div className='flex justify-between items-center p-5'>
      <div className='flex gap-10 items-center text-white'>
        <Image src="/logo.svg" alt='logo' width={90} height={90} />
        <Link href="/explore">Explore</Link>
        <Link href="/funds">Funds</Link>
        <Link href="/budget">Budget</Link>
      </div>
      <input type="search" placeholder="🔎  Search..." className='p-2 bg-gray-700 text-white placeholder:text-slate-100 focus:outline-none rounded-xl px-2'/>
      <div className='flex gap-5 text-white'>
        {session ? <button onClick={() => signIn()}>Login</button> :
        <button onClick={() => signOut()}>Logout</button>}
        <Image src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt='profile' height={50} width={50} className='rounded-full'/>
      </div>
    </div>
  )
}
