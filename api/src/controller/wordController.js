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

  export const getWordsSaved = async (words) => {
    try {
      const wordsSaved = await Word.find({date: {$all: words}})
      return wordsSaved
    } catch (error) {
      return error
    }
  }