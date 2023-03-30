import express from 'express';
import { createNewUser, updateUser } from '../controller/userController.js';
import { User } from '../model/users.js';

const userRouter = express.Router();

userRouter.get('/', async(req, res) => {
  try {
    const users = await User.find()
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send(error.message)
  }
});

userRouter.post('/', async(req, res)=>{
  try {
    const email = req.body.email
    const user = await User.find({email})
    if(!user){
      const newUser = await createNewUser(email)
      return res.status(200).send(newUser)
    }
    res.status(200).send(user)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

userRouter.put('/', async(req,res)=>{
  try {
    const word = new Date().toDateString()
    const{email} = req.body
    const addedWord = await updateUser(email, word)
    res.status(200).send(addedWord)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

export default userRouter;
