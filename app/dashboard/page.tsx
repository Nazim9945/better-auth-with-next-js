import React from 'react'
import DashClient from './DashClient'
import { auth } from '../lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const page = async() => {
    const session=await auth.api.getSession({
        headers:await headers()
    })
    console.log(session)
    if(!session){
        redirect('/')
    }
  return (
    <div>
        <DashClient/>
    </div>
  )
}

export default page