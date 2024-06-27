
import Link from 'next/link'
const Menuitem = ({title , address  }) => {
  return (
   <>
   <Link href={address} className='hover:text-amber-500' >
  
   <p className='uppercase text-sm sm:inline hidden   ' >{title}</p>
   </Link>
   </>
  )
}

export default Menuitem
