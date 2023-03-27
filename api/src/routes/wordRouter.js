import { Router } from 'express';
import { reqOpenAi } from '../index';
import { Word } from '../model/words';
import { createNewWord } from '../controller/wordController'



export const router = Router()

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

