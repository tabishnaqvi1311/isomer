import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Startup = () => {

    const [startup, setStartup] = useState([]);

    const params = useParams();
    const id = params.id;

    const getStartup = async () => {
        const url = `http://localhost:8181/api/startup/getStartup/${id}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if(!response.ok){
            return;
        }
        const json = await response.json();
        setStartup(() => json.startup);

    }

    useEffect(() => {
        getStartup();
    }, [])

    return (
        <div>

        </div>
    )
}

export default Startup
