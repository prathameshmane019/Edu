
import React from "react";

const getUniversity = async ()=>{
  try{
    const res = await fetch("http://localhost:3000/api/ministry/addUniversity",{
catch:"no-store"
    });
    if(!res.ok){
      throw new Error("Failed to fetch University")
    }
    return res.json();
  }catch(error){
    console.log("error loading university",error);
  }
}
export default async function AddUniversity (){
  const   {university} = await getUniversity();
  console.log(university);
  return (
<div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {university.map((u) => (
                <tr key={u.id}>
                  <th>1</th>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}