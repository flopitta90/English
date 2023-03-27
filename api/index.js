import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Word } from './src/model/words.js';
import { createNewWord } from './src/controller/wordController.js';
import { reqOpenAi } from './src/index.js';
dotenv.config();
const port = process.env.PORT
const app = express()
mongoose.set('strictQuery', false)
mongoose.connect(
  process.env.DB_MONGO
);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', async(req,res)=> {
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
})

app.listen(port, ()=>{
 console.log(`listening on port: ${port}`)
})