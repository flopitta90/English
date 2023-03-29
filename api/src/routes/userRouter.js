import express from 'express';
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

export default userRouter;
