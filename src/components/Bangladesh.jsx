import React, { useState } from 'react'
import BdData from '../utils/BangladeshDB'

const Bangladesh = () => {
    const [bdtech, setBdtech] = useState(BdData)
    return (
        <div>
            <h1 className='text-5xl font-bold text-green-400 underline'>Bangladesh <span className='text-white'>{bdtech.length}</span></h1><br />
            <div className='grid grid-cols-3 md:grid-cols-6 gap-4 mb-20'>
                {
                    bdtech.map((tech) => (
                        <a key={tech.id} className='bg-white bg-opacity-0 border rounded focus:bg-blue-400 hover:scale-105 duration-500' target='_blank' href={tech.url}>
                            <div className='flex justify-center items-center'>
                                <img src={tech.img} alt="logo" className='w-60 h-20 p-2' />
                            </div>
                        </a>
                    ))
                }
            </div >
        </div >
    )
}

export default Bangladesh