import React, {useState} from  'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex px-4 font-bold bg-black max-w-auto'>

        <h1 className='w-full font-cursive text-3xl text-[#89592a] m-4 hover:text-[#f7bb7e]'> Bygine Era</h1>
        <ul className='hidden tracking-wide text-white md:flex font-sevillana '>
            <li className='p-4 hover:text-[#89592a]'>ABOUT</li>
            <li className='p-4 hover:text-[#89592a]'>PORTFOLIO</li>
            <li className='p-4 hover:text-[#89592a]'>STUDIO</li>
            <li className='p-4 hover:text-[#89592a]'>CONTACT</li>
        </ul>
        <div onClick={handleNav} className='block mt-4 text-[#89592a] md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full font-cursive text-3xl text-[#89592a] m-4 hover:text-[#f7bb7e]'> Bygine Era</h1>

            <ul className='p-4 tracking-wide text-white uppercase font-sevillana'>
            <li className='p-4 border-b border-black hover:text-[#89592a]'>ABOUT </li>
            <li className='p-4 border-b border-black hover:text-[#89592a]'>PORTFOLIO</li>
            <li className='p-4 border-b border-black hover:text-[#89592a]'>EDUCATION</li>
            <li className='p-4 border-b border-black hover:text-[#89592a]'>STUDIO</li>
            <li className='p-4 border-b border-black hover:text-[#89592a]'>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar