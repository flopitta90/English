const { Router } = require('express');
const authRouter = require('./authRouter')
const wordRouter = require('./wordRouter')

const router = Router();

router.use('/word', wordRouter)
router.use('/user', authRouter)

module.exports = router;