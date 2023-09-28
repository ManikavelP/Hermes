 import React from 'react';
 import service_des2 from "../assets/service_design.png";
 import {FaAngleDoubleDown} from "react-icons/fa"


 export const ServiceComp = () => {
   return (
     <div className=' h-[90%]  mt-[3%] '>
      <p className='font-bold text-center items-center pt-5 tracking-wider [word-spacing:-30]'>WHY YOU SHOULD USE OUR WEBSITE</p>
      <div className= 'flex justify-center p-[1%] '>
        <FaAngleDoubleDown/>
        </div>
      <div className='grid grid-cols-2 gap-2 h-[100%] px-5 py-5 '>
        <div className='bg-red-500'></div>
       <div className='bg-cover bg-no-repeat bg-center  ' style={{
        backgroundImage:`url("${service_des2}") `
        }}>
        </div>

        </div>

      </div>
      
      
)
}

