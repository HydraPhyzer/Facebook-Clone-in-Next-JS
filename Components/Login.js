import React from 'react'
import Image from 'next/image'
import {signIn} from "next-auth/react"
import Head from 'next/head'

const Login = () => {
  return (
    <>
      <Head>
        <title>Login With Facebook</title>
      </Head>
      <div className='space-y-[100px] bg-black w-full h-[100vh] flex justify-center items-center flex-col'>
          <Image
          src="/Facebook.webp" 
          height={200}
          width={200}
          objectFit="contain"
          className='bg-black'
          />
          <button onClick={signIn} className='text-black bg-white px-10 rounded-lg py-3'>Login</button>
      </div>
    </>
  )
}

export default Login