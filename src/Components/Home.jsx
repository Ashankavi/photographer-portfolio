import React from 'react'

import MenImg from '../Assets/Men.png'

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-white bg-black">
    <header className="flex items-center justify-between w-full px-6 py-4 lg:px-20">
      {/* <div className="text-lg font-bold lg:text-2xl text-[#89592a]">Bygone Era</div>
      <nav className="space-x-6 lg:space-x-10">
        <a href="#about" className="hover:text-[#89592a]">About</a>
        <a href="#portfolio" className="hover:text-[#89592a]">Portfolio</a>
        <a href="#studio" className="hover:text-[#89592a]">Studio</a>
        <a href="#contact" className="hover:text-[#89592a]">Contact</a>
      </nav> */}
    </header>
    <main className="flex flex-col items-center justify-center flex-grow px-4 text-center lg:flex-row lg:text-left">
      <div className="lg:w-1/2">
        <h1 className="text-6xl font-bold lg:text-8xl text-[#89592a] hover:text-[#f7bb7e]">THOMAS EVANS</h1>
        <p className="mt-4 text-xl text-gray-400 lg:text-2xl font-sevillana hover:text-[#89592a]">Bygone Era Studio</p>
      </div>
      <div className="lg:w-1/2 lg:flex ">
        <img src={MenImg} alt="Thomas Evans" className="w-full h-full lg:max-w-sm"/>
      </div>
    </main>
  </div>
);
}

export default Home


