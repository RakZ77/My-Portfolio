import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react'

function DetailButton() {
  return (
    <div>
      <button className='cursor-pointer flex items-center gap-2 bg-blue-200 hover:bg-blue-300 text-md font-inter font-semibold px-3 py-2.5 rounded-lg transition-colors dark:bg-sky-600 dark:hover:bg-sky-500 dark:text-slate-900'>
        <SquareArrowOutUpRight size={18}/>
        View Detail</button>
    </div>
  )
}

export default DetailButton
