import mongoose, { Schema, models } from "mongoose";
const collegeSchema = new Schema(
  {
    name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  address:{
    type:String
  },
  phone:{
    type:Number
  },
  university:{
    type:Schema.Types.ObjectId,
    ref:''
  },
  role: {
    type: String,
    default: 'college',
  }},

  { timestamps: true }
);

const College = models.College || mongoose.model("College", collegeSchema);
export default College;
