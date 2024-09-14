import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='max-w-screen-lg mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-500'>
       <div className='nleft flex items-center'>
       <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="links flex gap-10 ml-20">
            {["Home", "Work", "Culture", "", "News"].map((elem,index)=>elem.length === 0 ? <span key={index} className='w-[1.5px] h-5 inline-block bg-zinc-300'></span> : (<a key={index} className='text-sm flex items-center gap-1' href='#'>{index === 1 && <span style={{boxShadow:"0 0 0.25em #00ff19"}} className='w-[.4vw] h-[.5vw] mt-[2px] bg-green-600 inline-block rounded-full'></span>}{elem}</a>))}
        </div>
       </div>
       <Button />
    </div>
  )
}

export default Navbar