import { User } from "../model/users.js";

export const createNewUser = async (email) => {
  try {
    const userData ={
      email
    }
    const newUser = await User.create(userData, function(err,User){
      if(err){throw new Error(err.message)}
      else return newUser
    })
  } catch (error) {
    return error
  }
  }