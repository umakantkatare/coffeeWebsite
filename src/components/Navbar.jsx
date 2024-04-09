import React from 'react'

function Navbar() {
  return (
    <>
     <div >
      <nav className=' flex justify-around items-center w-full h-16 text-white bg-orange-500'>
        <div>
          CafePulse
        </div>
        <ul className='flex gap-10 cursor-pointer'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Menu</li>
          <li>Products</li>
        </ul>
        <div>
          <button className=' rounded-lg  border-white border-2 px-3 '>Login</button>
        </div>
      </nav>
     </div>
    </>
  )
}

export default Navbar