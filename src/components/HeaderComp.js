import React from 'react'
import FlyinnImg from "../assets/flyinnImage.jpeg";
import HeaderNavCom from './HeaderNavCom';
import { FlightBookingComp } from './FlightBookingComp';
import { ButtonComp } from './ButtonComp';





export const HeaderComp = () => {
  return (
    <div className='w-full h-[90%]  bg-cover bg-no-repeat' style={{
      backgroundImage:`url("${FlyinnImg}")`
    }}
    > <HeaderNavCom/>
    
    <div className='grid grid-cols-2 h-[80%] mt-[3%]'>
      <div className='flex p-5 item-center'>
        <div>
          <p className='text-white text-xl'>HERMES</p>
          <p className='text-white text-5xl mt-3'>We Are Very Reliable</p>
          <p className='text-yellow-400 text-5xl'>Professional, Experienced</p>
          <p className='text-white text-sm mt-3'>
            <span className='text-yellow-400'>Hermes</span> is the versatile website empowering you
          </p>
          <p className='text-white text-sm '>
            full services airline offering <span className='text-yellow-400'>reduce fairs</span>
          </p>
           <ButtonComp label={"FIND FLIGHTS"} extrastyle={" flex mt-3 text-sm"}/>
        </div>
      </div>
      <div className='flex '>
        <FlightBookingComp/>
      </div>

      


    </div>
    </div>
  )
}
