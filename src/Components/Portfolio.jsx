import React from 'react'
import { motion } from "framer-motion"

import BackIMG from '../Assets/Portfolio/portfolioBck2.png'
import Bdate from '../Assets/Portfolio/birthdayIMG.jpg'
import Events from '../Assets/Portfolio/eventIMG.jpeg'
import LoveStory from '../Assets/Portfolio/lovestoryIMG.jpg'
import Wedding from '../Assets/Portfolio/weddingIMG.jpg'

const Portfolio = () => {

  const handleClick = () => {
    alert('Contact form will be displayed');
  };

  return (
<div class="flex min-h-auto items-center bg-cover justify-center bg-neutral-800" style={{backgroundImage: `url(${BackIMG})`}}>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4 p-20">

    <motion.div
          whileInView={{opacity: 1, y:0}}
          initial={{ opacity: 0, y: -100}}
          transition={{duration:0.5}}     
    class="group relative cursor-pointer  rounded-[20px] items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-[500px] w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Wedding} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold mb-3  text-white hover:text-[#f7bb7e]">WEDDING</h1>
        <p class="mb-3 text-lg italic font-sevillana text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button onClick={handleClick} className="  hover:text-[#f7bb7e] hover:border-[#f7bb7e] rounded-[20px] border-[#65401d] border-2 p-20 px-6 py-2 mt-4 font-bold text-white uppercase bg-black ">
            See More
        </button>
      </div>
    </motion.div>

    <motion.div
          whileInView={{opacity: 1, y:0}}
          initial={{ opacity: 0, y: 100}}
          transition={{duration:0.5}}   
           class="group relative cursor-pointer items-center justify-center rounded-[20px] overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div class="h-[500px] w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={LoveStory} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold mb-3 text-white hover:text-[#f7bb7e]">LOVE STORY</h1>
        <p class="mb-3 text-lg italic text-white font-sevillana opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button onClick={handleClick} className="  hover:text-[#f7bb7e] hover:border-[#f7bb7e] rounded-[20px] border-[#65401d] border-2 p-20 px-6 py-2 mt-4 font-bold text-white uppercase bg-black ">
        See More
        </button>
      </div>
    </motion.div>

    <motion.div
          whileInView={{opacity: 1, y:0}}
          initial={{ opacity: 0, y: -100}}
          transition={{duration:0.5}} 
           class="group relative cursor-pointer items-center justify-center rounded-[20px] overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div class="h-[500px] w-72">
        <img class="h-full w-full object-cover transition-transform  duration-500 group-hover:rotate-3 group-hover:scale-125" src={Bdate} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl mb-3 font-bold text-white hover:text-[#f7bb7e]">BIRTHDAY</h1>
        <p class="mb-3 text-lg italic font-sevillana text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button onClick={handleClick} className="  hover:text-[#f7bb7e] hover:border-[#f7bb7e] rounded-[20px] border-[#65401d] border-2 p-20 px-6 py-2 mt-4 font-bold text-white uppercase bg-black ">
        See More
        </button>
      </div>
    </motion.div>

    <motion.div
          whileInView={{opacity: 1, y:0}}
          initial={{ opacity: 0, y: 100}}
          transition={{duration:0.5}} 
          
          class="group relative cursor-pointer items-center justify-center rounded-[20px] overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
    <div class="h-[500px] w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Events} alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl mb-3 font-bold text-white hover:text-[#f7bb7e]">EVENTS</h1>
        <p class="mb-3 text-lg italic font-sevillana text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button onClick={handleClick} className="  hover:text-[#f7bb7e] hover:border-[#f7bb7e] rounded-[20px] border-[#65401d] border-2 p-20 px-6 py-2 mt-4 font-bold text-white uppercase bg-black ">
        See More
        </button>
      </div>
    </motion.div>
  </div>
  
</div>

    


  )
}

export default Portfolio
