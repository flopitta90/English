import {Router} from 'express'
import {createNewUser} from '../controller/userController'

export const router = Router()

router.get('/', async (req,res)=> {
  try {
    const newUser = createNewUser(req.email)
    res.status(200).send(newUser)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

