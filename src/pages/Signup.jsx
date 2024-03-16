import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const initialData = {
        name: '',
        age: '',
        email: '',
        password: '',
        role: '',
        country: '',
        state: '',
        bio: '',
        contact: '',
    };

    const [data, setData] = useState(initialData);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uri = "http://localhost:8181/api/signup"


        const response = await fetch(uri, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        if (!response.ok) {
            setError(() => json);
            return;
        };
        localStorage.setItem("auth-id", json.id);
        window.location.href = "/dashboard"



    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg">
                <div className='flex gap-7'>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-white block mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="text-white block mb-1">Age</label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            value={data.age}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="flex gap-7">

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
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="text-white block mb-1">Role</label>
                    <select
                        type="text"
                        id="role"
                        name="role"
                        value={data.role}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    >
                        <option value="Select Role">Select Role</option>
                        <option value="ENT">I Want To Start Up</option>
                        <option value="INV">I Want To Invest</option>
                    </select>
                </div>
                <div className="flex gap-7">

                    <div className="mb-4">
                        <label htmlFor="country" className="text-white block mb-1">Country</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={data.country}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="state" className="text-white block mb-1">State</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={data.state}
                            onChange={handleChange}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="contact" className="text-white block mb-1">Contact</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={data.contact}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Sign Up
                </button>
            </form>
            <Link to="/login" className="text-gray-400 underline my-3">Have an account? Login</Link>
            {error && <span>{error}</span>}
        </div>
    );
};

export default Signup;
