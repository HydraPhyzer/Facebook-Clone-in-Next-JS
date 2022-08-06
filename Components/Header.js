import React from 'react'
import Image from 'next/image'
import {SearchIcon, HomeIcon,FlagIcon,PlayIcon,ShoppingCartIcon,UserGroupIcon} from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon'
import { useSession,signOut } from 'next-auth/react'

const Header = () => {
  let {data}=useSession();
  
  return (
    <>
      <div className="Header flex justify-between items-center p-2 bg-white shadow-lg">
          <div className="Left flex items-center space-x-1 bg-white">
            <Image
              src="/Facebook.webp"
              height={25}
              width={25}
              objectFit="cover"
              className='bg-white'
            />

            <div className="Search flex items-center bg-white border-[1px] p-1 rounded-full">
              <SearchIcon className='h-4 text-gray-500 bg-white'/>
              <input className='bg-white hidden border-none sm:inline-flex px-3 w-auto outline-none focus:outline-none' type="text" placeholder='Search the Facebook'/>
            </div>
          </div>

          <div className="Center flex justify-center space-x-2 text-gray-500 sm:space-x-4 bg-white">
              <HeaderIcon active Icon={HomeIcon}/>
              <HeaderIcon Icon={FlagIcon}/>
              <HeaderIcon Icon={PlayIcon}/>
              <HeaderIcon Icon={ShoppingCartIcon}/>
              <HeaderIcon Icon={UserGroupIcon}/>
          </div>

          <div onClick={()=>{signOut()}} className="Right flex items-center space-x-2 bg-white cursor-pointer">
          <Image
              src={`${data?.user.image}`}
              height={25}
              width={25}
              objectFit="cover"
              className='rounded-full '
            />
            <p className='font-bold text-gray-500 bg-white text-xs'>{data?.user.name}</p>
          </div>
      </div>
    </>
  )
}

export default Header