import { useSession } from 'next-auth/react'
import React from 'react'
import EachPost from './EachPost'


const DisplayPost = ({Data}) => {
    return (
        <div>
            {
                Data.map((Elem,ind)=>
                {
                    return(
                        <EachPost Info={Elem.Data} key={ind}/>
                    )
                })
            }
        </div>

  )
}
export default DisplayPost