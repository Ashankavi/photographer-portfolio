import React from 'react'

import MenImg from '../Assets/Men.png'

const Home = () => {
  return (
  <div className=''>
      <div className="w-full h-full bg-black " >
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>     
        <div className='flex flex-col justify-center ml-10 tracking-wide font-londrina'>
            <div className="lg:w-1/2 pt-20">
        <h1 className="text-6xl font-bold lg:text-8xl text-[#89592a] hover:text-[#f7bb7e]">THOMAS EVANS</h1>
        <p className="mt-4 text-xl text-gray-400 lg:text-2xl font-sevillana hover:text-[#89592a]">Bygone Era Studio</p>
       </div>
        </div>
        <img className=' w-[1500px] mx-auto bg-cover' src={MenImg} /> 
        </div>

      </div>
    </div>


  //   <div className="flex flex-col items-center min-h-screen bg-black">
  //   {/* <header className="flex items-center justify-between w-full px-6 py-4 ">
  //   </header> */}
  //   <div className="flex flex-col items-center justify-center flex-grow px-4 text-center lg:flex-row lg:text-left">
  //     <div className="lg:w-1/2">
  //       <h1 className="text-6xl font-bold lg:text-8xl text-[#89592a] hover:text-[#f7bb7e]">THOMAS EVANS</h1>
  //       <p className="mt-4 text-xl text-gray-400 lg:text-2xl font-sevillana hover:text-[#89592a]">Bygone Era Studio</p>
  //     </div>
  //     <div className="lg:w-1/2 lg:flex  ">
  //       <img src={MenImg} alt="Thomas Evans" className="w-full h-full lg:max-w-sm"/>
        
  //     </div>
  //   </div>
  // </div>
);
}

export default Home


