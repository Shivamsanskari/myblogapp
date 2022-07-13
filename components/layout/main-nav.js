import Link from 'next/link'
import React from 'react'
import classes from './main-nav.module.css'

function mainNav() {
  return (
    <nav className={classes.navbar}>
        <div className={classes.logo}><Link href='/'>ShivamSanskari</Link></div>
        <ul className={classes.navlinks}>
            <li><Link href='/posts'>Posts</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default mainNav