import { Word } from "../model/words.js";

export const createNewWord = async (text, date) => {
  try {
    const wordData ={
      date, text
    }
    const newWord = await Word.create(wordData, function(err,Word){
      if(err){throw new Error(err.message)}
      else return newWord
    })
  } catch (error) {
    return error
  }
  }