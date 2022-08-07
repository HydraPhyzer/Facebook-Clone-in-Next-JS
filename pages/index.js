import Header from "../Components/Header";
import { getSession } from "next-auth/react";
import Login from "../Components/Login";
import Head from "next/head";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";
import Fed from "../Components/Fed";

import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase';

export default function Home({ session,Name,Arr }) {
  // console.log(Name)
  
  if (!session) {
    return <Login />;
  }
  return (
    <div className="Index">
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />

      <div className="Body grid grid-cols-12">
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <Sidebar />
        </div>
        <div className="Feed col-span-8 md:col-span-6 lg:col-span-8 overflow-scroll h-[90vh]">
          <Fed />
        </div>
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export let getServerSideProps = async (context) => {
  const session = await getSession(context);

  let Arr=[]
    getDocs(collection(db, "Posts"))
    .then((As)=>
    {
      let {docs}=As;
      Arr=[...docs]
    })
    
    return {
    props: {
      session,
      Arr,
    },
  };
};
