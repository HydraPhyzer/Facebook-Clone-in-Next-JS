import Header from '../Components/Header'
import { useSession, signOut,getSession } from "next-auth/react"
import Login from '../Components/Login'
import Head from 'next/head'
import Sidebar from '../Components/Sidebar'

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

      <div className="Body">
        <Sidebar/>
      </div>
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
