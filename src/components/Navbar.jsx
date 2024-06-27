import React from 'react'
import Navbaritem from './Navbaritem'

const Navbar = () => {
  return (
    <div className=' my-8 dark:bg-gray-500 xl:text-xl bg-amber-100 flex items-center justify-center gap-4 py-2 ' >
    <Navbaritem title="Trending" param="FetchTrending" />
    <Navbaritem title="Top Rated" param="FetchTopRated" />
    </div>
  )
}

export default Navbar
