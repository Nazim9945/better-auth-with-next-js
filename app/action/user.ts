"use server";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const signUp = async (email: string, password: string,name:string) => {
  const result=await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL:'/kurama'
    },
  });
return result
};
const signIn = async (email:string,password:string) => {
  const result = await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL: "/kurama",
    },
  });
  return result
  
};
const signUpGoogle=async()=>{
  const {url}=await auth.api.signInSocial({
      body:{
        provider:"google",
        callbackURL:"/dashboard"
      }
  })
  if(url){
    redirect(url)
  }
}
const signOut=async ()=>{
    await auth.api.signOut({
        headers:await headers()
    })
    
}

export {signIn,signOut,signUp,signUpGoogle}
