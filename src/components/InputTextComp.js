import React from 'react'


export const InputTextComp = ({
  image, placeholder, label, extrastyle,type,max,min
}) => {
  return (
    <div className={`flex border border-gray-400 px-3 py-3 ${extrastyle}`}>
      <div className='border-r-gray-300 border-r-[0.5px] pr-4 rounded-sm '>
      {image}
      </div>
      <input type={type} min={min} max={max} className='ml-3 outline-none border-none text-sm w-full'  placeholder={placeholder}/>
      <p className='text-sm text-gray-300 text-center'>{label}</p>
    </div>
  );
}
