import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Nav