import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <ul className="flex justify-center mt-5 font-bold">
            <li><Link href='/'><li className="ml-5 mr-5">Home</li></Link></li>
            <li><Link href='/about'><li className="ml-5 mr-5">About</li></Link></li>
            <li><Link href='/blog'><li className="ml-5 mr-5">Blog</li></Link></li>
            <li><Link href='/contact'><li className="ml-5 mr-5">Contact</li></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar