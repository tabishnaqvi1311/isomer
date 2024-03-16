import React from 'react'
import FormWrapper from './FormWrapper'

const BasicDetailsForm = ({
    name,
    description,
    industry_sector,
    funding_required,
    country_based,
    updateFields
}) => {
    return (
        <FormWrapper title={"Tell Us About Your Venture"} subtitle={"We're going to need some details"}>
            <div className=''>
                <div className='mb-4'>
                    <label className='text-white block mb-1' htmlFor="name">Name</label>
                    <input className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500' type="text" value={name} onChange={(e) => updateFields({ name: e.target.value })} />
                </div>
                <div className='mb-4'>
                    <label className='text-white block mb-1' htmlFor="desc">Description</label>
                    <textarea type="text" rows={5} value={description} onChange={(e) => updateFields({ description: e.target.value })} className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500'/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="sector" className='text-white mb-1'>Sector</label>
                    <select value={industry_sector} onChange={(e) => updateFields({industry_sector: e.target.value})} className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500'>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="ecommerce">E-commerce</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="education">Education</option>
                        <option value="logistics">Logistics</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="retail">Retail</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='text-white block mb-1' htmlFor="fundsReq">Funds Reqeuired</label>
                    <input className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500' type="text" value={funding_required} onChange={(e) => updateFields({funding_required: e.target.value})}/>
                </div>
                <div className='mb-4'>
                    <label className='text-white block mb-1' htmlFor="country">Country Based</label>
                    <input className='w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500' type="text" value={country_based} onChange={(e) => updateFields({country_based: e.target.value})}/>
                </div>
            </div>
        </FormWrapper>
    )
}

export default BasicDetailsForm
