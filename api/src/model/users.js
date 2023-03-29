import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique:true
  },
  words:{
    type: Array,
    deafult:[]
  }
})

export const User = mongoose.model('User', userSchema)