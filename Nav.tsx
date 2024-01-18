import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className=' text-5xl bg-yellow-200 text-red-900'>
      <Link href=''> home</Link>
      <Link href='name'> name</Link>
      <Link href='name/address/'> address</Link>
      <Link href='name/address/about'> about</Link>
    </div>
  )
}

export default Nav
