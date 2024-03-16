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
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            </div>
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
                {isAuth && <Link to={"/profile"}><img src="https://img.freepik.com/premium-vector/woman-violet-hoodie-grey-circle-with-bright-orange-hairs-cute-girl-avatar-circle_630301-56.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707696000&semt=ais" alt='profile' height={50} width={50} className='rounded-full' /></Link>}
            </div>
        </div >
    )
}
