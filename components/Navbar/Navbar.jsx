"use client"

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {

  const { data: session } = useSession();


  return (
    <div className='flex justify-between items-center p-5'>
      <div className='flex gap-10 items-center text-white'>
        <div className='flex gap-3 items-center'>
          <Image src="/logo.svg" alt='logo' width={90} height={90} />
          <h1 className='text-3xl font-bold text-violet-200'>FinFlow</h1>
        </div>
        <div className='flex gap-5'>
          <Link href="/explore">Explore</Link>
          <Link href="/funds">Funds</Link>
          <Link href="/budget">Budget</Link>
        </div>
      </div>
      <input type="search" placeholder="🔎  Search..." className='p-2 bg-gray-700 text-white placeholder:text-slate-100 focus:outline-none rounded-xl px-2' />
      <div className='flex gap-5 text-white items-center'>
        {!session ? <button onClick={() => signIn()}>Login</button> :
          <>
            {/* <span className='text-gray-300'>{session?.user?.email.split("@")[0]}</span> */}
            <button onClick={() => signOut()}>Logout</button>{console.log(session)}
          </>
        }
        <Image src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt='profile' height={50} width={50} className='rounded-full' />
      </div>
    </div>
  )
}
