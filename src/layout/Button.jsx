import React from 'react'

function Button(children) {
  return (
    <div>
        <button className='px-6 py-1 border-white bg-[#FFDCAB] hover:text-[AB6B2E] transition-all rounded-lg  '> {children.title}</button>
    </div>
  )
}

export default Button