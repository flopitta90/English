import React, {useEffect, useState} from 'react'
import {useUserAuth} from '../context/authUserContext.js';
import { WordContainer } from './WordContainer.jsx';
import { useNavigate } from 'react-router-dom'
import logoGif from '../images/logoturning.gif'

export const MyWords = () => {
  const navigate = useNavigate()
  const {words} = useUserAuth()
  const [wordsSaved , setWordsSaved ] = useState([])

  const stringQuery = words.map(word =>`words=${word}`).join('&')
  const query = '?'+ stringQuery

  useEffect(() => {
    fetch('https://english-joaz.onrender.com/word'+ query)
    .then(response => response.json())
    .then(data => setWordsSaved(data))
    .catch(error => console.error(error))
  }, [words, query])
  
  const handleBack = ()=>{
    navigate('/')
  }

  while(!words){
    return (
      <div className='bg-black w-1/2 min-h-56'>
        <img src={logoGif}/>
      </div>
    )
  }
  
  return (
    <div>
       <button onClick={handleBack} className='bg-[#fff] p-3 rounded-md m-3'>Go back</button>
      {wordsSaved.length?
        wordsSaved.map(text => {
          const indexWord = text?.text?.indexOf('Meaning')
          const indexMeaning = text?.text?.indexOf('Sentences:')
          const indexSentences = text?.text?.indexOf('1')
          const indexSentence1 = text?.text?.indexOf('2')
          const indexSentence2 = text?.text?.indexOf('3')
        
          const word = text?.text?.slice(7,indexWord)
          const meaning = text?.text?.slice(indexWord,indexMeaning)
          const sentence1 = text?.text?.slice(indexSentences,indexSentence1)
          const sentence2 = text?.text?.slice(indexSentence1,indexSentence2)
          const sentence3 = text?.text?.slice(indexSentence2)
          return <WordContainer key={word} word={word} meaning={meaning} sentence1={sentence1} sentence2={sentence2} sentence3={sentence3}></WordContainer>
        }) : null}
    </div>
    
  )
}
