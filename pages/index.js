import Header from '../Components/Header'
import { useSession, signOut,getSession } from "next-auth/react"
import Login from '../Components/Login'
import Head from 'next/head'

export default function Home({session}) {
  if(!session)
  {
    return <Login/>
  }
  return (
    <>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />
    </>
  )
}

export let getServerSideProps=async (context)=>
{
  const session=await getSession(context);

  return{
    props:{
      session,
    }
  }
}
