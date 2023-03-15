import { useEffect, useState } from 'react';
import logo from '../src/images/logowordup.png'
import logoGif from '../src/images/logoturning.gif'
import {FacebookShareButton,LinkedinShareButton,TwitterShareButton,WhatsappShareButton,TwitterIcon, LinkedinIcon, FacebookIcon, WhatsappIcon} from 'react-share'
import { WordCard } from './components/WordCard';

function App() {
 
  return (
    <div className='bg-gradient-to-l from-cyan-400 to-indigo-600 min-h-screen p-5 flex flex-col items-center justify-center md:flex-row '>
     <div>
        <img className='h-72 w-72'src={logo}></img>
      </div>
     <WordCard/>
    </div>
  );
}

export default App;
