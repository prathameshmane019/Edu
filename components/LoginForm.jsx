"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { data: session} = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      
    
      if (res.error) {
        toast.error('Login Failed', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        setError("Invalid Credentials");
        return;
      }
      if(res.ok){
        switch (session?.user?.role) {
            case 'student':
              router.push("/student/dashboard")
              break;
            case 'college':
              router.push("/college/dashboard")
              break;
            case 'university':
              router.push("/university/dashboard")
              break;
            case 'ministry':
              router.push("/ministry/dashboard")
              break;
            default:
              break;
          }
          toast.success('Login Succesfull', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
              }
      
    } catch (error) {
      toast.error('Login Failed', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(error);
    }
  };

  
  
 
  return (
    <>
    <ToastContainer />
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password" />
            <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2" >
              Login
            </button>
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}

            <Link className="text-sm mt-3 text-right" href={"/register"}>
              Don't have an account? <span className="underline">Register</span>
            </Link>
          </form>
        </div>
      </div></>
  );
}
