const { Router } = require('express');
const { reqOpenAi } = require('../index');
const {createNewWord} = require('../controller/wordController');
const { Word } = require('../model/words');


const router = Router()

router.get('/', async(req,res)=> {
  try {
    const date = new Date().toDateString()
    const result = await Word.find({date})
    if(!result.length){
      const text = await reqOpenAi()
      const result = await createNewWord(text,date)
      return res.status(200).send(result)
    }
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

module.exports = router