import React from 'react'

const HeaderIcon = ({Icon,active}) => {
  return (
    <>
        <Icon className={` bg-white sm:h-7 sm:p-1 sm:hover:bg-gray-200 sm:px-6 rounded-sm h-[20px] ${active && `text-blue-500 border-b-2 border-b-blue-500`}`}/>
    </>
  )
}

export default HeaderIcon