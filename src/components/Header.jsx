import React from 'react'

export default function Header() {
  return (
    <header className='p-4 flex items-center justify-between gap-4'>
        <a href="/"><h1 className='font-medium'>Free<span className='text-blue-400'>Scribe</span></h1></a>
        <a href="/"><button className='specialBtn px-3 text-sm py-2 rounded-lg text-blue-400 cursor-pointer flex items-center gap-2'><p>New</p><i className="fa-solid fa-plus"></i></button></a>
    </header>
  )
}
 