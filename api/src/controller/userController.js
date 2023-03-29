import { User } from "../model/users.js";

export const createNewUser = async (email) => {
  try {
    const user = {
      email
    }
    const newUser = await User.create(user, function(err,User){
      if(err){throw new Error(err.message)}
      else return newUser
    })
  } catch (error) {
    return error
  }
  }

  export const updateUser = async(email, word) => {
    const queryConditions = { email };
    const wordsUpdated = {$addToSet: {words : [word]}}
    const updatedUser = await UserModel.updateOne(queryConditions, wordsUpdated, {
      upsert: true,
    });
    return updatedUser;
  }