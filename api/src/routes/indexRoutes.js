import express from 'express';
import wordRouter from './wordRouter.js';
import userRouter from './userRouter.js';

const router = express.Router();

router.use('/word', wordRouter); // Mount the word router to the '/word' route
router.use('/user', userRouter); // Mount the user router to the '/user' route

export default router;
