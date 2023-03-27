import logo from '../images/logowordup.png'
import { WordCard } from './WordCard'
import { ShareButtons } from './ShareButtons'

export const Home = () => {
  return (
    <div className='min-h-screen p-5 flex flex-col items-center justify-center md:flex-row '>
    <div>
       <img className='h-72 w-72'src={logo}></img>
     </div>
    <WordCard/>
    <ShareButtons/>
   </div>
  )
}