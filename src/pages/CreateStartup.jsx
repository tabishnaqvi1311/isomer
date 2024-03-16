import React, { useState } from 'react'
import { useMultiForm } from '../hooks/useMultiForm'
import BasicDetailsForm from '../components/CreateStartupForms/BasicDetailsForm';
import LinksForm from '../components/CreateStartupForms/LinksForm';
import { useNavigate } from 'react-router-dom';

const CreateStartup = () => {

    const initialData = {
        name: "",
        description: "",
        industry_sector: "",
        funding_required: "",
        business_plan: "",
        pitch_deck: "",
        country_based: ""
    }

    const [data, setData] = useState(initialData);


    const navigate = useNavigate();


    const updateFields = (fields) => {
        setData((prev) => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, FirstStep, back, next, LastStep } = useMultiForm([
        <BasicDetailsForm {...data} updateFields={updateFields} />,
        <LinksForm {...data} updateFields={updateFields} />
    ])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!LastStep) return next();

        const response = await fetch(`http://localhost:8181/api/startup/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            setData(() => initialData);
            return;
        }
        const json = await response.json();
        navigate(`/startup/${json.id}`)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-gray-900 p-8 rounded-lg shadow-lg '>
                {step}
                <div className='flex gap-7'>
                    {!FirstStep && <button type="button" className="p-2 border bg-slate-100 rounded-xl hover:bg-slate-300 transition-all duration-200" onClick={back}>Back</button>}
                    <button type="button" className="p-2 border bg-slate-100 rounded-xl hover:bg-slate-300 transition-all duration-200" onClick={handleSubmit}>
                        {LastStep ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateStartup
