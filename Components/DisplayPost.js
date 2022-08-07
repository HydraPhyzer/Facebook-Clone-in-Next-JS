import React from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase';


const DisplayPost = () => {


    let As;

    let Ola=async()=>
    {
        let A=await getDocs(collection(db, "Posts"))
        return A
    }
    let AA=Ola();

    return (
        <div>
            DisplayPost
        </div>

  )
}
export default DisplayPost