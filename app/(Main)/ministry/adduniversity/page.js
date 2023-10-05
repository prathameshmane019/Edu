import React from "react";

const AddUniversity = () => {
  return (
<div>
<a href="#my_modal_8" className="btn">open modal</a>
{/* Put this part before </body> tag */}
<div className="modal" id="my_modal_8">
  <div className="modal-box">
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
    <div className="modal-action">
     <a href="#" className="btn">Yay!</a>
    </div>
  </div>
</div>
   
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>

</div>
   
  );
};

export default AddUniversity;
