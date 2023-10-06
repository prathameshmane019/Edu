"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
export default function MinistrySideBar() {
  const router = useRouter();
const { data: session } = useSession();
  const navigate = (name) => {
    router.push("/ministry/" + name);
  };
  return (
    <div className=" bg-transparent fixed left-2 shadow-lg shadow-indigo-500/40  w-[15vw] mt-[2vh] h-[80vh] flex flex-col gap-2 p-2 border rounded-xl">
      <div className="ml-6 ">
      <p className="text-lg  text-blue-500 font-large ">{session?.user?.name}</p>
        <p className="text-xs font-medium text-gray-400">{session?.user?.email}</p>
        
      <div
        className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-black-500 group cursor-pointer flex items-center"
        onClick={() => navigate("/dashboard")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 stroke-slate-400 mr-4 group-hover:stroke-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Dashboard
      </div>

      <div
        className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"
        onClick={() => navigate("/projects")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        Projects Gallery
      </div>
   
        
      <div
        className="mt-4 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 stroke-slate-400 mr-4 group-hover:stroke-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        Manage University
    
      </div>
      <div className="pl-6 py-1.5 text-sm font-medium text-slate-500  flex items-center" >
      <ul>
        <li onClick={() => navigate("/manageU/viewU")} className="hover:text-blue-500 group cursor-pointer  pl-6">View Universities</li>
        <li onClick={() => navigate("/manageU/adduniversity")} className="hover:text-blue-500 group cursor-pointer pl-6 mt-3">Add Universities</li>
      </ul>
      </div>
      <div
          className="mb-2 py-1.5 text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer flex items-center"
          onClick={() => {signOut()
            router.replace("/")}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          Logout
        </div>
    </div>
    </div>
  );
}
