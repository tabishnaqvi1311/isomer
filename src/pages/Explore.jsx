import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Explore = () => {

  const [startups, setStartups] = useState([]);

  const getStartups = async () => {
    const response = await fetch(`http://localhost:8181/api/startup/getStartups`, {
      method: "GET",
    });
    const json = await response.json();
    console.log(json)
    setStartups(() => json.startups);
  }

  useEffect(() => {
    getStartups();
  }, [])


  return (
    <div className='p-10 flex flex-col'>
      <h1 className='text-slate-200 text-5xl font-bold'>Explore</h1>
      <div className='flex flex-col'>
        {startups.map((s) => (
          <Link to={`/startup/${s._id}`} className='w-full glass card'>
            <h1>{s.name}</h1>
            <span className='p-1.5 bg-violet-400 rounded-xl opacity-80'>{s.industry_sector}</span>
            <div className='flex justify-between w-full'>
              {/* <span className='font-bold'>{s.user && s.user.name}</span> */}
              <span className="text-gray-400">{moment(s.createdAt).fromNow()}</span>
              <button className='bg-slate-100 text-gray-800 p-2 rounded-xl hover:bg-slate-300' onClick={() => {
                e.preventDefault();
                e.stopPropagation();
              }}>Invest</button>
            </div>
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default Explore