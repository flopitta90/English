import { useEffect, useState } from 'react';
import logoGif from '../images/logoturning.gif'
export const WordCard = () => {
  const [text, setText] = useState({})

  useEffect(()=>{
    fetch('https://english-joaz.onrender.com')
    .then((response)=>response.json())
    .then((data)=> setText(data[0]))
    .catch((err)=> console.log(err))
  },[])
  
  while(!text.text){
    return (
      <div className='bg-black min-h-screen'>
        <img src={logoGif}/>
      </div>
    )
  }
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
  return (
    <div className='bg-[#f1f1f1] rounded-xl p-10 drop-shadow-xl w-[95%] md:w-[50%]'>
    <h4 className='text-2xl font-bold flex align-center justify-center align-center'>{word}</h4>
    <h4 className='text-2xl font-light flex align-center justify-center'>{meaning}</h4>
    <h4 className='text-2xl font-light flex align-center justify-center'>Examples</h4>
    <h4 className='text-xl font-light'>{sentence1}</h4>
    <h4 className='text-xl font-light'>{sentence2}</h4>
    <h4 className='text-xl font-light'>{sentence3}</h4>
 </div>
  )
}