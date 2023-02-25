import { useEffect, useState } from 'react';
import {Routes, Route, useLocation} from 'react-router-dom'
function App() {
 
  const [text, setText] = useState({})

useEffect(()=>{
  fetch('http://localhost:3001')
  .then((response)=>response.json())
  .then((data)=> setText(data[0]))
  .catch((err)=> console.log(err))
},[])

const indexWord = text?.text?.indexOf('Meaning')
const indexMeaning = text?.text?.indexOf('1')
const indexSentence1 = text?.text?.indexOf('2')
const indexSentence2 = text?.text?.indexOf('3')

const word = text?.text?.slice(0,indexWord)
const meaning = text?.text?.slice(indexWord,indexMeaning)
const sentence1 = text?.text?.slice(indexMeaning,indexSentence1)
const sentence2 = text?.text?.slice(indexSentence1,indexSentence2)
const sentence3 = text?.text?.slice(indexSentence2)
  return (
    <div className='bg-gradient-to-l from-cyan-400 to-indigo-600 h-screen'>
      <div className='pt-24'>
        <h1 className='text-5xl font-bold flex align-center justify-center text-grey'>WordUp</h1>
      </div>
      <div>
        <h4 className='text-2xl font-light flex align-center justify-center'>{word}</h4>
      </div>
      <div>
        <h4 className='text-2xl font-light flex align-center justify-center'>{meaning}</h4>
      </div>
     <div className='flex flex-col mx-[20%]'>
      <h4 className='text-xl font-light'>{sentence1}</h4>
      <h4 className='text-xl font-light'>{sentence2}</h4>
      <h4 className='text-xl font-light'>{sentence3}</h4>
     </div>
    </div>
  );
}

export default App;
