import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique:true
  },
  likes:{
    type: Array
  }
})

export const User = mongoose.model('User', userSchema)