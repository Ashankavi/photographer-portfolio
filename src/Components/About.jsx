import React from 'react'
import { motion } from "framer-motion"

import BackIMG from '../Assets/About/3.jpg'
import BackIMG1 from '../Assets//About/IMGs Slide.png'
import IMG1 from '../Assets/About/image1.png'
import IMG2 from '../Assets/About/image2.png'
import IMG3 from '../Assets/About/image3.png'
import IMG4 from '../Assets/About/image4.png'
import IMG5 from '../Assets/About/image5.png'


const About = () => {

  const handleClick = () => {
    alert('Contact form will be displayed');
  };

  return (
    <div className="grid w-full h-full bg-cover md:grid-cols-2 bg-fixed" style={{backgroundImage: `url(${BackIMG})`}}>
     
      <div className='flex flex-col grow'>
      <div className="">
          <img src={BackIMG1} alt="Image 1 " className="w-full bg-cover " />
      </div>
  
        </div>
        
        
        <div className="text-white ">
          <div className="p-20" >
            <motion.div className=''
          whileInView={{opacity: 1, x:0}}
          initial={{ opacity: 0, x: 100}}
          transition={{duration:0.5}}             
            >

          <h2
         
          className="mb-4 text-3xl font-bold uppercase font-sevillana hover:text-[#89592a]">About</h2>

          <div           
          className='text-xl text-justify font-sevillana'>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut brlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className='mb-4'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          
          </motion.div>
                  
          <motion.button
          whileInView={{opacity: 1, x:0}}
          initial={{ opacity: 0, x: 100}}
          transition={{duration:0.5}}          
          onClick={handleClick} className=" hover:text-[#f7bb7e] border-[#65401d]  hover:border-[#f7bb7e] border-2 p-20 px-6 py-2 mt-4 font-bold text-white uppercase bg-black ">
            Contact
          </motion.button>
          </div>


        </div>
    </div>

  )
}

export default About
