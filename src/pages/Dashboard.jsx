import React from 'react'
import Line from '../components/Line/Line'
import Chord from '../components/Chord/Chord'
import Funnel from '../components/Funnel/Funnel'

const Dashboard = () => {
  return (
    <div className='p-10'>
      <h1 className='text-4xl text-slate-300 font-bold pb-10'>
        Dashboard
      </h1>
      <div className='flex gap-10'>
        <Chord/>
        <Funnel/>
      </div>
      <div className='py-7'>
        <Line />
      </div>
    </div>
  )
}

export default Dashboard