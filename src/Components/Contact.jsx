import React from 'react'


import ContactBack from '../Assets/Contact/ContactBach.jpg'


import Email from '../Assets/Contact/email_icon.png'
import FB from '../Assets/Contact/fb_icon.png'
import Insta from '../Assets/Contact/insta_icon.png'
import LinkD from '../Assets/Contact/linkdn_icon.png'
import Location from '../Assets/Contact/location_icon.png'
import Mobile from '../Assets/Contact/tele icon.png'

const Contact = () => {

    const handleClick = () => {
        alert('Contact form will be displayed');
      };

  return (
    <div>
      <div className="w-full bg-center bg-cover border-black border-y-4 " style={{backgroundImage: `url(${ContactBack})`}}>
    
      <h2 className="pt-20 pl-20 text-3xl font-bold text-white uppercase font-sevillana  hover:text-[#f7bb7e]">Contact</h2>
    <div className='flex flex-row flex-wrap'>
    <div className='flex flex-col grow h-[100vh] w-[500px] items-center justify-center '>

      <div>

      <p className="text-[30px] text-white  tracking-wider hover:text-[#89592a] font-sevillana">Just Say Hello</p>
      </div>

    <div className="w-full max-w-md p-6 bg-[#e093ff00] rounded-lg  max-auto font-sevillana tracking-wider">
        <form action="">
            <div className="mb-[25px] ">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor=""></label>
            <input placeholder="Your Name" className="w-full text-white px-3 py-[10px] bg-black rounded-xl border-[3px] border-[#89592a] focus:outline-none  focus:border-[#f7bb7e]" required type="text"/>
            </div>

            <div className="mb-[25px]">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor=""></label>
            <input placeholder="Your Email" className="text-white w-full px-3 py-[10px] bg-black rounded-xl border-[3px] border-[#89592a] focus:outline-none focus:border-[#f7bb7e]" required type="email"/>
            </div>

            <div className="mb-[25px]">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor=""></label>
            <input placeholder="Your Subject" className=" text-white w-full px-3 py-[10px] bg-black rounded-xl border-[3px] border-[#89592a] focus:outline-none  focus:border-[#f7bb7e]" required type="text"/>
            </div>

            <div className="mb-[25px]">
            <label className="block mb-2 text-sm font-semibold text-black" htmlFor=""></label>
            <textarea rows='4' placeholder="Your Message" className=" text-white w-full px-3 py-[10px] bg-black rounded-xl border-[3px] border-[#89592a] focus:outline-none focus:border-[#f7bb7e]" required type="text"/>
            </div>

            <button onClick={handleClick} className="  hover:text-[#f7bb7e] hover:border-[#f7bb7e] border-[#65401d] border-2 p-20 px-6 py-2 mt-4 font-bold text-white uppercase bg-black ">
            submit
            </button>
        </form>
        </div>

      </div>

      <div className='flex flex-col grow h-[100vh] w-[500px] items-center justify-center font-sevillana tracking-wider'>


      <p className=" text-[30px] -ml-[200px] font-semibold text-white hover:text-[#89592a]">Contact info</p>
        <p className=" text-[20px] mt-[10px] ml-[120px] text-[#ffffff] px-20 "> ipsum dolor sit amet, consectetur adipiscing elit. ligula nulla  tincidunt id faucibus sed suscipit feugiat.</p>

        <div className="w-full max-w-md p-6 bg-[#e093ff00] rounded-lg  max-auto ">
        <img className=" w-[90px] my-[20px] " src={Email}/>       
        <img className=" w-[90px] " src={Mobile}/>
        <img className=" w-[90px] my-[20px]" src={Location}/>
        </div>
        
        <div className="w-full max-w-md ml-[250px] -mt-[350px] p-6 bg-[#e093ff00] rounded-lg ">
        <p className=" text-[25px] font-semibold text-[#ffffff] hover:text-[#89592a]">Email</p>
        <p className=" text-[#ffffff] leading-relaxed mb-8" >uhashankavi@gmail.com</p>

        <p className="text-[25px] font-semibold text-[#ffffff] hover:text-[#89592a]">Phone</p>
        <p className=" text-[#ffffff] leading-relaxed mb-8" >+ 94 77 565 5031 <br /> +94 70 181 1431</p>

        <p className="text-[25px] font-semibold text-[#ffffff] hover:text-[#89592a]">Address</p>
        <p className=" text-[#ffffff] leading-relaxed" >No 300, Citrus Junction <br />Narawala, Poddala</p>
        </div>

        <div className="">
        <p className="text-[20px] font-semibold text-[#ffffff] mb-[15px]">Visit my social profile and get connected</p>
        <img className="hover:shadow-xl w-[70px] float-left mx-2" src={LinkD}/>     
        <img className="hover:shadow-xl w-[70px] float-left mx-2" src={FB}/> 
        <img className="hover:shadow-xl w-[70px] float-left" src={Insta}/> 
       </div>
      </div>
      
      </div>
    </div>
      

    </div>
  )
}

export default Contact
