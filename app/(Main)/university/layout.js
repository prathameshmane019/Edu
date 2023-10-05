import UniversitySideBar from "./sidebar/page";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export default async function UniversityLayout({ children }) {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role
  if (!(role==="university")) {
    console.log("unauthorised")
    redirect("/login");
   }
  return (
    <div className="flex flex-row">
      <ToastContainer/>
      <UniversitySideBar />
      <div className="w-[85vw] ml-[18vw] mr-8  content">{children}</div>
    </div>
  );
}
