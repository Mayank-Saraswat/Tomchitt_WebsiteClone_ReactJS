import React from 'react'
import AddToBagIcon from '../../public/Images/AddToBagIcon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-wrap items-center justify-center bg-slate-200 p-2'>
      <Link to="/"><div className='text-indigo-700 text-2xl mr-56 font-semibold'>
        TC
      </div></Link>
      <div className='flex flex-wrap items-center space-x-10 justify-center font-semibold'>
        <div>
          SERVICES
        </div>
        <div>
          <input placeholder='Search...' className='border border-indigo-700 w-80 p-1 font-normal' />
        </div>
        <Link to={"/signup"}><div className='hover:text-indigo-600'>
          SIGN IN
        </div></Link>
        <Link to={"/help"}><div className='hover:text-indigo-600'>
          HELP
        </div></Link>
        <div>
          <img src={AddToBagIcon} alt='Add to bag' className='h-auto w-6' />
        </div>
      </div>
      {/* <div className='md:hidden'>
        <a className='text-4xl' href='#'>&#8801;</a>
      </div> */}
    </nav>
  )
}

export default Navbar