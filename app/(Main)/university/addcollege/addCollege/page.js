import React from "react";
const getCollege = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/university/addcollege", {
      catch: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch University")
    }
    return res.json();
  } catch (error) {
    console.log("error loading university", error);
  }
}
export default async function AddUniversity() {
  const { college } = await getCollege();
  console.log(college);
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
          {college.map((c) => (
            <tr key={c.id}>
              <th>1</th>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}