import React, {useEffect, useState} from 'react'
import {useUserAuth} from '../context/authUserContext.js';
import { WordContainer } from './WordContainer.jsx';
import { useNavigate } from 'react-router-dom'
import logoGif from '../images/logoturning.gif'
import { parseGPT } from '../functions/parseGPT.js';

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

  while(!words.length){
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
          const {word,meaning,sentence1,sentence2,sentence3} = parseGPT(text)
          return <WordContainer key={word} word={word} meaning={meaning} sentence1={sentence1} sentence2={sentence2} sentence3={sentence3}></WordContainer>
        }) : null}
    </div>
    
  )
}
