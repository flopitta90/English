const { Router } = require('express');
const { createNewUser } = require('../controller/userController');

const router = Router()

router.get('/', async (req,res)=> {
  try {
    const newUser = createNewUser(req.email)
    res.status(200).send(newUser)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router