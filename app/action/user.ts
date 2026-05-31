"use server";
import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";

const signUp = async (email: string, password: string,name:string) => {
  const result=await auth.api.signUpEmail({
    body: {
      email,
      password,
      name,
      callbackURL:'/dashboard'
    },
  });
return result
};
const signIn = async (email:string,password:string) => {
  const result= await auth.api.signInEmail({
    body: {
      email,
      password,
      callbackURL:'/dashboard'
    },
  });
  return result
  
};

const signOut=async ()=>{
    await auth.api.signOut({
        headers:await headers()
    })
    
}

export {signIn,signOut,signUp}
