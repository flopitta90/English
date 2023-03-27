import { Router } from 'express';
// import * as authRouter from '../routes/authRouter'
import * as wordRouter from '../routes/wordRouter'

export const router = Router();

router.use('/word', wordRouter)
// router.use('/user', authRouter)

