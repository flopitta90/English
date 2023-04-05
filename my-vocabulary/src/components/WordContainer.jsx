import React from 'react'

export const WordContainer = ({word,meaning,sentence1,sentence2,sentence3}) => {
  
  
    return (
      <div className='flex justify-center my-2'> 
        <div className='bg-[#f1f1f1] rounded-xl p-10 drop-shadow-xl flex flex-col  w-[95%] md:w-[50%]'>
          <h4 className='text-2xl font-bold flex align-center justify-center align-center'>{word}</h4>
          <h4 className='text-2xl font-light flex align-center justify-center'>{meaning}</h4>
          <h4 className='text-2xl font-light flex align-center justify-center'>Examples</h4>
          <h4 className='text-xl font-light'>{sentence1}</h4>
          <h4 className='text-xl font-light'>{sentence2}</h4>
          <h4 className='text-xl font-light'>{sentence3}</h4>
          {/* <button className='bg-[#e4286da0] color-white rounded-md p-3 self-center mt-3'>delete word</button> */}
        </div>
      </div>
    )
  
}
