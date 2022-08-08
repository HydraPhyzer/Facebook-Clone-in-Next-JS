import Header from "../Components/Header";
import { getSession } from "next-auth/react";
import Login from "../Components/Login";
import Head from "next/head";
import Sidebar from "../Components/Sidebar";
import RightSidebar from "../Components/RightSidebar";
import Fed from "../Components/Fed";
import { orderBy } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export default function Home({ session, Posts }) {
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
          <Fed Data={Posts}/>
        </div>
        <div className="col-span-2 md:col-span-3 lg:col-span-2">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export let getServerSideProps = async (context) => {
  const { res } = context;
  res.setHeader('Cache-Control', `s-maxage=10, stale-while-revalidate`) 

  const session = await getSession(context);

  let Arr = await getDocs(collection(db, "Posts"));
  let Posts=Arr.docs.map((Post)=>
  ({
    Data:Post._document.data.value.mapValue.fields
  }))

  return {
    props: {
      session,
      Posts
    },
  };
};
