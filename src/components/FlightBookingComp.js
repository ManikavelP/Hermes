import React from 'react'
import { InputTextComp } from './InputTextComp';
import {BiSolidPlaneAlt,BiCurrentLocation,} from "react-icons/bi";
import { ButtonComp } from './ButtonComp';
import {BsFillCalendarCheckFill,BsFillTelephoneFill,BsPeopleFill} from "react-icons/bs";

import {AiTwotoneMail} from "react-icons/ai";

export const FlightBookingComp = () => {
  return (  <div className='bg-white w-[27%] h-[80%] ml-[5%] shadow shadow-gray-500 absolute bottom-6 cursor-pointer rounded-3xl '>
    <div className='p-4'>
    <p className='font-semibold'>
      Book Cheap <span className='text-yellow-400'>Flights</span>
    </p>
    </div>
    <div className='bg-black flex text-white justify-center py-3'>
      <div className='flex ml-3'>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <p className='text-md ml-2'>One Way</p>
      </div>
      <div className='flex ml-3'>
      <input type="radio" id="html" name="fav_language" value="HTML"/>
      <p className='text-md ml-2'>Round Trip</p>
      </div>
    </div>
    <div className='p-3'>
      <InputTextComp
      image={<BiSolidPlaneAlt/> }
      placeholder={"Enter City"}
      label="Departure"
       />
        <InputTextComp
      image={<BiCurrentLocation/> }
      placeholder={"Enter City/Airport"}
      label="Arrivals"
      extrastyle={'mt-2'}
       />
       
    <InputTextComp
    image={<BsFillCalendarCheckFill/>}
    placeholder={"dd-mm-yyyy"}
    label={"Calender"}
    extrastyle={'mt-2'}
    type={"date"}/>
        
        <InputTextComp
      type={"number"}
      min={"1"}
      max={"10"}
      image={<BsPeopleFill/> }
      placeholder={"Adult 1"}
      label="Pasengers"
      extrastyle={'mt-2'}
       />
       <InputTextComp
       type={"number"}
       max={"10"}
       min={"10"}
       image={<BsFillTelephoneFill/>}
       label={"Phone"}
       placeholder={"+91 **********"}
       extrastyle={'mt-2'}/>
       
    
    <InputTextComp
    type={"email"}
    image={<AiTwotoneMail/>}
    label={"Email"}
    placeholder={"www.xyz.com"}
    extrastyle={'mt-2'}/>
    
    
        
        


    </div>

    <div className=' flex px-3 py-3 hover:text-white items-center justify-center '>
    <ButtonComp label={"FIND FLIGHTS"} extrastyle={"text-center "}/>
    </div>







  </div>
  
  
  
  
  );
  
}
