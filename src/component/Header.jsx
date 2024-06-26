import React from 'react'
import Menuitem from './Menuitem'
import { IoHomeSharp } from "react-icons/io5";


const Header = () => {
  return (
   <>
   <div className="header">
    <div className="right">
<Menuitem tittle="Home" address="/" Icon={<IoHomeSharp />} />
<Menuitem tittle="Home" address="/" Icon={<IoHomeSharp />} />
<Menuitem tittle="Home" address="/" Icon={<IoHomeSharp />} />

    </div>

    <div className="left">

    </div>
   </div>
   
   </>
  )
}

export default Header
