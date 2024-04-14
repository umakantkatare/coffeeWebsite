import React from 'react'

import menu1 from '../assets/menu1.jpg'
import menu2 from '../assets/menu2.jpg'
import menu3 from '../assets/menu3.jpg'
import menu4 from '../assets/menu4.jpg'
import menu5 from '../assets/menu5.jpg'
import menu6 from '../assets/menu6.jpg'
import MenuCard from '../layout/MenuCard'

function Menu() {
  return (
 
      <div className=' min-h-screen flex flex-wrap justify-center  lg:px-32 px-5 bg-backgroundColor'>
        <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">Our Menu</h1>
        <div className='flex flex-wrap pb-8 gap-8 justify-center'>
          <MenuCard img={menu1} title="Espresso" />
          <MenuCard img={menu2} title="Cappuccino" />
        <MenuCard img={menu3} title="Latte" />
        <MenuCard img={menu4} title="Americano" />
        <MenuCard img={menu5} title="Macchiato" />
        <MenuCard img={menu6} title="Doppio" />
        </div>
      </div>
   
  )
}

export default Menu