import mongoose from "mongoose";

const wordSchema = mongoose.Schema({
  date:{
    type: String,
    required: true,
    unique:true
  },
  text:{
    type: String,
    required: true
  }
})

export const Word = mongoose.model('Word', wordSchema)