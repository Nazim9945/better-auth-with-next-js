"use client";

import { FormEvent, useState } from "react";
import { signUp, signUpGoogle } from "@/app/action/user";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";


export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerGoogle=async()=>{
    const result=await signUpGoogle()
    toast("Logged In!", {
         icon: "👏",
       });
    console.log(result)
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log({ name, email, password });
    await signUp(email,password,name) 
    setName("")
    setEmail("")
    setPassword("")
    toast("Successfully sign up!", {
         icon: "👏",
       });
    redirect('/dashboard')
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            Create an account
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-white">Sign up</h1>
          <p className="mt-2 text-slate-400">
            Simple registration with name, email, and password.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-300">
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              placeholder="Your full name"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              placeholder="you@example.com"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
              placeholder="Choose a strong password"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
          >
            Sign up
          </button>
        </form>
        <button onClick={handlerGoogle} className="w-full mt-4 bg-gray-700 rounded-2xl px-4 py-3 text-base font-semibold text-white transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 flex gap-2 items-center justify-center">
        <FaGoogle/>
        <span>Google</span>
        </button>
      </section>
    </main>
  );
}
