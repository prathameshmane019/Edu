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
   
<div>
 


  <div className="mx-16 flex flex-row gap-20 my-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"><b>University Name</b></span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"><b>Email ID</b></span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="mx-16 flex flex-row gap-20 mb-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"><b>Enter Password</b></span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"><b>Re-enter Password</b></span>
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="mx-16 flex flex-row gap-1 my-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"><b>State</b></span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text"><b>City</b></span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="mx-16 flex flex-row gap-20 mb-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text"><b>Address</b></span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text"><b>Pincode</b></span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
      <div className="mx-16 mb-10 flex justify-center">
        <button className="btn btn-wide btn-active btn-primary">
          Add University
        </button>
      </div>

  </div>

);}