import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const initialData = {
        email: '',
        password: '',
    };

    const [data, setData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uri = "http://localhost:8181/api/login"

        try {
            const response = await fetch(uri, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) return;
            const json = await response.json();
            localStorage.setItem("auth-id", json.id);
            window.location.href = "/dashboard"

        } catch (e) {
            console.log(e);
        }

    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg">


                <div className="mb-4">
                    <label htmlFor="email" className="text-white block mb-1">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="text-white block mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Login
                </button>
            </form>
            <Link to="/signup" className="text-gray-400 underline my-3">New Here? Signup</Link>
        </div>
    );
};

export default Login;
