import React, { useState } from 'react'
import JobPortal from '../utils/JobPortalDB'

const Jobportal = () => {
    const [jobportal, setJobportal] = useState(JobPortal);

    return (
        <div>
            <h1 className='text-teal-500 text-5xl font-bold underline'>Jobportal <span className='text-white'>{jobportal.length}</span> </h1><br />
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 mb-20'>
                {
                    jobportal.map((tech) => (
                        <a key={tech.id} className='bg-white bg-opacity-0 border rounded focus:bg-blue-400 hover:scale-105 duration-500' target='_blank' href={tech.url}>
                            <div className='flex justify-center items-center'>
                                <img src={tech.img} alt="logo" className='w-60 h-20 p-2' />
                            </div>
                        </a>
                    ))
                }
            </div >
        </div>
    )
}

export default Jobportal