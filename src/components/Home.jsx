import React from 'react'

import home from '../assets/home.png'
import Button from '../layout/Button'

function Home() {
  return (
    <>
      <div className=' w-full min-h-screen items-center flex justify-evenly bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]  '>
        <section className=' w-1/2'>
          <div className=' w-1/2 my-5'>
          <p className='font-bold text-5xl leading-snug my-5'>
            start your day with a streaming cup of coffee</p>
          <p className=' font-semibold text-lg leading-snug'>Boost your productivity and built your mood with a glass of coffee in the morning</p>
          </div>
          <div className=' flex gap-5'>
            <Button title="Add to Cart"/>
            <Button title="More Menu"/>
          </div>
        </section>
        <section>
          <div className=' w-1/2'>
            <img src={home} className=' ' alt="" />
          </div>
        </section>
       
      </div>
    </>
  )

//   return(
//     <>
//     <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <img src={home} className="max-w-sm rounded-lg shadow-2xl" />
//     <div className=''>
//       <h1 className="text-5xl font-bold">start your day with a streaming cup of coffee</h1>
//       <p className="py-6">Boost your productivity and built your mood with a glass of coffee in the morning.</p>
//       <Button title="more menu"/>
//     </div>
//   </div>
// </div>
//     </>
//   )
}

export default Home