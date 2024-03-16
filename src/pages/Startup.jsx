import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Startup = () => {

    const [startup, setStartup] = useState(null);

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
        if (!response.ok) {
            return;
        }
        const json = await response.json();
        console.log(json);
        setStartup(() => json.startup);
    }

    useEffect(() => {
        getStartup();
    }, [])

    return (
        <div className=' text-center flex flex-col items-center gap-10'>
            <div className='w-1/2 flex flex-col gap-5 items-center'>
                <h1 className='text-slate-200 text-4xl  font-bold'>{startup && startup.name}</h1>
                <span className='text-violet-400'>{moment(startup && startup.createdAt).fromNow()} | {startup && startup.country_based}</span>
                <span className='w-1/2 p-1.5 bg-violet-400 rounded-xl opacity-80'>{startup && startup.industry_sector}</span>
                <span className='text-slate-300 text-lg'>{startup && startup.description}</span>
            </div>
            <div className='flex gap-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold text-slate-200'>Business Plan</h1>
                    <span className='text-slate-400'>{startup && startup.business_plan.length === 0 ? "Not Uploaded Yet" : startup && startup.business_plan}</span>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold text-slate-200'>Pitch Deck</h1>
                    <span className='text-slate-400'>{startup && startup.pitch_deck.length === 0 ? "Not Uploaded Yet" : startup && startup.pitch_deck}</span>
                </div>
            </div>
        </div>
    )
}

export default Startup
