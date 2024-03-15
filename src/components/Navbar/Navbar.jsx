import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('auth-id');
        if (id) setIsAuth(() => true);
    }, [])

    return (
        <div className='flex justify-between items-center p-5 center'>
            <div className='flex gap-10 items-center text-white'>
                <div className='flex gap-3 items-center'>
                    <img src="/logo.svg" alt='logo' width={90} height={90} />
                    <Link to={"/"} className='text-3xl font-bold text-violet-200'>Isomer</Link>
                </div>
                <div className='flex gap-5'>
                    <Link to="/explore">Explore</Link>
                    <Link to="/funds">Funds</Link>
                    <Link to="/budget">Budget</Link>
                </div>
            </div>
            <input type="search" placeholder="🔎  Search..." className='p-2 bg-gray-700 text-white placeholder:text-slate-100 focus:outline-none rounded-xl px-2' />
            <div className='flex gap-5 text-white items-center'>
                {!isAuth &&
                    <>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                    </>
                }
                {isAuth && <button onClick={() => {
                    localStorage.removeItem("auth-id");
                    window.location.reload();
                }}>Logout</button>}
                <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt='profile' height={50} width={50} className='rounded-full' />
            </div>
        </div >
    )
}
