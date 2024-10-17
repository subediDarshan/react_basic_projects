import React from 'react'
import ThemeBtn from './ThemeBtn'

function Card() {
  return (
    <>
        <div 
        className='relative flex flex-col md:flex-row w-1/2 bg-white text-black dark:bg-slate-900 dark:text-white rounded-xl p-5 pt-11  justify-between items-center gap-5 '>

          <ThemeBtn />
  
          <img src="https://i0.wp.com/sportytell.com/wp-content/uploads/2018/11/Cristiano-Ronaldo-celebrates-with-2016-Euros-trophy-.jpg?zoom=1.25&resize=680%2C849&ssl=1" alt="ronaldo" className='rounded-xl h-48' />
            
          <div className='flex flex-col justify-between gap-2'>
              <div className='text-2xl'>Cristiano Ronaldo</div>
              <div className=''>
            Cristiano Ronaldo dos Santos Aveiro GOIH Co(born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards.
              </div>
          </div>
        </div>
    
    </>
  )
}

export default Card