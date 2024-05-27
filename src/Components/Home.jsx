import React from 'react'
import { motion } from "framer-motion"

import MenImg from '../Assets/Men.png'

const Home = () => {
  return (
  <div className=''>
      <div className="w-full h-full bg-black " >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>     
        <div className='flex flex-col justify-center ml-10 tracking-wide font-londrina'>
            <motion.div 
          whileInView={{opacity: 1, x:0}}
          initial={{ opacity: 0, x: -100}}
          transition={{duration:0.5}}              
            className="lg:w-1/2 pt-20">
        <h1 className="text-6xl font-bold lg:text-8xl text-[#89592a] hover:text-[#f7bb7e]">THOMAS EVANS</h1>
        <p className="mt-4 text-xl text-gray-400 lg:text-2xl font-sevillana hover:text-[#89592a]">Bygone Era Studio</p>
       </motion.div>
        </div>
        <motion.img 
          whileInView={{opacity: 1, x:0}}
          initial={{ opacity: 0, x: 100}}
          transition={{duration:0.5}}        
        className=' w-[1500px] mx-auto bg-cover' src={MenImg} /> 
        </div>

      </div>
    </div>

);
}

export default Home


