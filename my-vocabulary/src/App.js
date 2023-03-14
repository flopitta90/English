import { useEffect, useState } from 'react';
import logo from '../src/images/logowordup.png'
import logoGif from '../src/images/logoturning.gif'
import {FacebookShareButton,LinkedinShareButton,TwitterShareButton,WhatsappShareButton} from 'react-share'

function App() {
 
  const [text, setText] = useState({})

useEffect(()=>{
  fetch('https://english-joaz.onrender.com')
  .then((response)=>response.json())
  .then((data)=> setText(data[0]))
  .catch((err)=> console.log(err))
},[])

while(!text.text){
  return (
    <img src={logoGif}/>
  )
}
const indexWord = text?.text?.indexOf('Meaning')
const indexMeaning = text?.text?.indexOf('1')
const indexSentence1 = text?.text?.indexOf('2')
const indexSentence2 = text?.text?.indexOf('3')

const word = text?.text?.slice(7,indexWord)
const meaning = text?.text?.slice(indexWord,indexMeaning)
const sentence1 = text?.text?.slice(indexMeaning,indexSentence1)
const sentence2 = text?.text?.slice(indexSentence1,indexSentence2)
const sentence3 = text?.text?.slice(indexSentence2)
  return (
    <div className='bg-gradient-to-l from-cyan-400 to-indigo-600 min-h-screen p-5 flex flex-col items-center justify-center md:flex-row '>
     <div>
        <img className='h-72 w-72'src={logo}></img>
      </div>
      <div className='bg-[#f1f1f1] rounded-xl p-10 drop-shadow-xl w-[95%] md:w-[50%]'>
        <h4 className='text-2xl font-bold flex align-center justify-center align-center'>{word}</h4>
        <h4 className='text-2xl font-light flex align-center justify-center'>{meaning}</h4>
        <h4 className='text-xl font-light'>{sentence1}</h4>
        <h4 className='text-xl font-light'>{sentence2}</h4>
        <h4 className='text-xl font-light'>{sentence3}</h4>
     </div>
    </div>
  );
}

export default App;
