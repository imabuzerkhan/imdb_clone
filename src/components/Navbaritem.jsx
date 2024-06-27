import React from 'react'
import Link from 'next/link'
const Navbaritem = ({title , param }) => {
  return (
    <>
    <Link href={`/?genre=${param}`}  >
    {title}
    </Link>
    </>
  )
}

export default Navbaritem
