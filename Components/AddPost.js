import React, { useState } from 'react'
import { useSession,signOut } from 'next-auth/react'


const AddPost = () => {
    let {data}=useSession();
    let [Type,setType]=useState("")
    let Typing=(E)=>
    {
        setType(E.target.value)
    }
  return (
    <div className='flex flex-col bg-white p-2 rounded-xl space-y-3'>
        <div className="Top text-xs flex items-center bg-white space-x-2">
        <img
            src={`${data?.user?.image}`}
            className=" rounded-full flex sm:h-[40px] sm:w-[40px] h-[20px] w-[20px] object-cover"
          />
        <input onChange={(E)=>{Typing(E)}} value={Type} className='w-[100%] bg-gray-200 outline-none focus:outline-none p-[2px] sm:p-3 rounded-full' type="text" placeholder='Whats in Your Mind ,Zubair ?'/>
        </div>

        {Type?<button className='p-[2px] sm:p-3 bg-[#3B82F6] text-white rounded-full sm:text-sm text-[10px]'>Add Post</button>:""}

        <hr className='h-[3px] bg-gray-300 border-none rounded-full'/>

        <div className="Bottom flex justify-between p-1 sm:text-sm text-[10px] text-gray-500">
            <div className="A flex items-center">
                <img className='hover:animate-pulse sm:h-[30px] h-[15px]' src="/Emoji/Facebook.png" alt="" />
                <p className="p-1">Live Camera</p>
            </div>
            <div className="B flex items-center ">
                <img className='hover:animate-spin sm:h-[30px] h-[15px]' src="/Emoji/Photos.png" alt="" />
                <p className="p-1">Photos</p>
            </div>
            <div className="C flex items-center">
                <img className='hover:animate-bounce sm:h-[30px] h-[15px]'  src="/Emoji/Smile.png" alt="" />
                <p className="p-1">Activity</p>
            </div>
        </div>
    </div>
  )
}

export default AddPost