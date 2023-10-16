import MinistrySideBar from "./sidebar/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "./loading";
export default async function MinistryLayout({ children }) {
  const session = await getServerSession(authOptions);

  const role = session?.user?.role
  if (!(role==="ministry")) {
    console.log("unauthorised")
    redirect("/login");
   }
  return (
    
    <div className="flex   ">
      <ToastContainer/>
    <MinistrySideBar  />
    <Suspense fallback ={<Loading/>}>
    <div className=" content w-[85vw] ml-[18vw] mr-8">{children}</div>
    </Suspense>

    </div>
  );
}
