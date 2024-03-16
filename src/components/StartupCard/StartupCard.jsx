import React, { useEffect, useState } from 'react'

const StartupCard = ({ id }) => {

    const [startup, setStartup] = useState([]);

    const getStartup = async () => {
        const url = `http://localhost:8181/api/startup/getStartup/${id}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            return;
        }
        const json = await response.json();
        setStartup(() => json.startup);

    }

    useEffect(() => {
        getStartup();
    }, [])

    return (
        <div className='glass card'>
            <h1>{startup && startup.name}</h1>
            <span className='p-1.5 bg-violet-400 rounded-xl opacity-80'>{startup && startup.industry_sector}</span>
            <p>{startup && startup.description}</p>
        </div>
    )
}

export default StartupCard
