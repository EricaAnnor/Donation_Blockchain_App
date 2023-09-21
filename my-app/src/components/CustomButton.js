import React from 'react'

const CustomButton = ({styles, handleClick, btnType,title}) => {
  return (
    <div>
        <button 
        type={btnType}
        className={` font-epilogue font-semibold text-[14px] width-[50px] text-white rounded-[10px] leading-[26px] min-h-[52px] ${styles} px-4`}
        onClick={handleClick}
        >{title}</button>

    </div>
  )
}

export default CustomButton