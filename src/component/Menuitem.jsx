import Link from 'next/link'
import React from 'react'

const Menuitem = ({tittle , address , Icon}) => {
  return (
    <>
    <Link href={address} >
    <Icon/>
    <p>{tittle}</p>
    </Link>
    </>
  )
}

export default Menuitem
