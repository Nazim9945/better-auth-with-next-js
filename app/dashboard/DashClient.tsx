"use client"

import { useRouter } from "next/navigation"
import { signOut } from "../action/user"
import toast from "react-hot-toast"



const DashClient = () => {
    const router=useRouter()
    const handler=async()=>{
            await signOut()
            toast("Logged Out", {
              icon: "👏",
            });
            router.push('/')
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-100  flex items-center justify-center flex-col">
        <div className="text-3xl ">DashBoard</div>
        <button className=" cursor-pointer w-full py-2 px-4 bg-gray-500 hover:bg-blue-300 text-white mt-4 rounded-md" onClick={handler}>SignOut</button>
      </div>
    </div>
  );
}

export default DashClient


