import mongoose, { Schema, models } from "mongoose";
const universitySchema = new Schema(
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
  college:{
    type:Array
  },
  role: {
    type: String,
    default: 'student',
  }},

  { timestamps: true }
);

const University = models.University || mongoose.model("University", universitySchema);
export default University;
