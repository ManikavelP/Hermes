import React from 'react'

export const ButtonComp = ({label,extrastyle}) => {
  return (
    <div className={` items-center gap-6 cursor-pointer ${extrastyle} `}>
         <a href="index.html" className="border-[2px] px-3 py-2 mt-4 rounded-lg border-white hover:bg-blue-500 hover:text-white bg-yellow-200 transition-colors ease-linear text-blue-400
          ">{label}</a>
          
          
    </div>
        
  );
};
        