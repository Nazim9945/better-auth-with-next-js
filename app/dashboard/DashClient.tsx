"use client"

import { useRouter } from "next/navigation"
import { signOut } from "../action/user"



const DashClient = () => {
    const router=useRouter()
    const handler=async()=>{
            await signOut()
            router.push('/')
    }
  return (
    <div className="">
        <div className="text-3xl ">DashBoard</div>
        <button onClick={handler}>SignOut</button>
    </div>
  )
}

export default DashClient


