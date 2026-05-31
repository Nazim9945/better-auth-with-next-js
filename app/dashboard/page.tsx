import { headers } from "next/headers"
import { auth } from "../lib/auth"
import Dashclient from "./dash-client"
import { redirect } from "next/navigation";



export  async function Dashboard(){
         const session = await auth.api.getSession({
           headers: await headers(),
         });
         if (!session) {
            redirect('/')
         }
        return <Dashclient/>


}