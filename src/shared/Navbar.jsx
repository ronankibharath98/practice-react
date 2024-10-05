import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className='bg-slate-600 space-x-3 outline-4'>
        <button className='mt-5 ml-5 mb-5 p-3 bg-black text-white' onClick={()=> navigate('/dashboard')}>
            Dashboard
        </button>
        <button className='p-3 bg-black text-white' onClick={() => navigate('/')}>
            Landing Page
        </button>
    </div>
  )
}

export default Navbar