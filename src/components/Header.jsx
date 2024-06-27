

import React from 'react'
import Menuitem from './Menuitem'

const Header = () => {
  return (
    <div className="header  flex item-center justify-between max-w-6xl mx-auto py-3   ">
      <div className="left flex gap-4 ">
<Menuitem title="Home" address="/" ></Menuitem>
<Menuitem title="About" address="/" />
      </div>
      <div className="right">
<span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg  ' >IMDB</span>
      </div>
    </div>
  )
}

export default Header
