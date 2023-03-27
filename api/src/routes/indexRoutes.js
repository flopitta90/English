import { Router } from 'express';
import * as authRouter from './authRouter'
import * as wordRouter from './wordRouter'

export const router = Router();

router.use('/word', wordRouter)
router.use('/user', authRouter)

