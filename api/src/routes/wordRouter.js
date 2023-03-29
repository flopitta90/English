import express from 'express';
import { Word } from '../model/words.js';
import { createNewWord } from '../controller/wordController.js';
import { reqOpenAi } from '../index.js';

const wordRouter = express.Router();

wordRouter.get('/', async(req, res) => {
  try {
    const date = new Date().toDateString()
    const result = await Word.find({date})
    if(!result.length){
      const text =await reqOpenAi()
      const result = await createNewWord(text,date)
      return res.status(200).send(result)
    }
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
});

export default wordRouter;
