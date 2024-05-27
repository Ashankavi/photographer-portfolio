import React from 'react'

import BackIMG from '../Assets/Portfolio/portfolioBck2.png'
import Bdate from '../Assets/Portfolio/birthdayIMG.jpg'
import Events from '../Assets/Portfolio/eventIMG.jpeg'
import LoveStory from '../Assets/Portfolio/lovestoryIMG.jpg'
import Wedding from '../Assets/Portfolio/weddingIMG.jpg'

const Portfolio = () => {
  return (
<div className="w-full h-full bg-black bg-cover " style={{backgroundImage: `url(${BackIMG})`}}>

        <h2 className="p-8 text-3xl font-bold text-white uppercase font-sevillana hover:text-[#89592a] ">Portfolio</h2>

        <div className="flex flex-row flex-wrap items-center justify-center gap-8 pb-20 drop-shadow-2xl"> 
        <img src={Wedding} alt="Image 1 " className="bg-cover w-[300px] h-[500px] rounded-[30px]"/>
        <img src={LoveStory} alt="Image 1 " className="bg-cover w-[300px] h-[500px] rounded-[30px]" />
        <img src={Bdate} alt="Image 1 " className="bg-cover w-[300px] h-[500px] rounded-[30px]" />
        <img src={Events} alt="Image 1 " className="bg-cover w-[300px] h-[500px] rounded-[30px]" />
      
    </div>
    </div>
  )
}

export default Portfolio
