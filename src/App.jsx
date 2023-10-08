import React from 'react'
import Hero from './components/Hero'
import Bangladesh from './components/Bangladesh'
import India from './components/India'
import Foreign from './components/Foreign'
import Jobportal from './components/Jobportal'

const App = () => {
  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800 pb-20">
      <main className='w-4/5 mx-auto'>
        <Hero />
        <Bangladesh />
        <India />
        <Foreign />
        <Jobportal />
      </main>
    </div>
  )
}

export default App