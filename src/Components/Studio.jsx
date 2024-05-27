import React from 'react'
import { motion } from "framer-motion"

import Logo from '../Assets/Studio/Logo.png'
import BackIMG from '../Assets/Studio/studioback.jpg'

const Studio = () => {
  return (     
        <div> 
            
        <div className="grid bg-cover md:grid-cols-2 bg-fixed" style={{backgroundImage: `url(${BackIMG})`}}>  

        <motion.div 
          whileInView={{opacity: 1, x:0}}
          initial={{ opacity: 0, x: -100}}
          transition={{duration:0.5}} 
           className='p-20 text-white'>
        <h2 className="mb-4 text-3xl font-bold uppercase font-sevillana hover:text-[#89592a]">studio</h2>
        <h1 className='mb-4 text-3xl font-bold uppercase font-sevillana'>about my studio</h1>
        <div className='text-xl text-justify font-sevillana'>
            <p className='mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, enim delectus nobis ad, eligendi dignissimos,
                quo voluptatum eius velit alias nostrum fuga. Animi inventore excepturi, saepe quas natus iure voluptatem.</p>
            <p> orem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, enim delectus nobis ad, eligendi dignissimos,
                quo voluptatum eius velit alias nostrum fuga. Animi inventore excepturi, saepe quas natus iure voluptatem.</p>
         </div>
        </motion.div>
        
        <div className='flex flex-col flex-wrap items-center justify-center p-20 grow'>
      <div className="">
      <motion.img 
          whileInView={{opacity: 1, x:0}}
          initial={{ opacity: 0, x: 100}}
          transition={{duration:0.5}} 
           src={Logo} alt="Image 1 " className="bg-cover " />
      </div>
      </div> 
   </div>
   </div>
  )
}

export default Studio
