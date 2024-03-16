import React from 'react'
import FormWrapper from './FormWrapper'

const LinksForm = ({
    business_plan,
    pitch_deck,
    updateFields
}) => {
    return (
        <FormWrapper title={"Show Your Investors"} subtitle={"Asd documents and presentations here"}>
            <div className=''>
                <div className='mb-4'>
                    <label className='text-white block mb-1' htmlFor="name">Link To Your Business Plan</label>
                    <input className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500' type="text" value={business_plan} onChange={(e) => updateFields({ business_plan: e.target.value })} />
                </div>
                <div className='mb-4'>
                    <label className='text-white block mb-1' htmlFor="desc">Link To Your Pitch Deck</label>
                    <input type="text" value={pitch_deck} onChange={(e) => updateFields({ pitch_deck: e.target.value })} className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500' />
                </div>
            </div>
        </FormWrapper>
    )
}

export default LinksForm
