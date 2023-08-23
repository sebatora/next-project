import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/store">Store</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar