import React from 'react'
import classes from './hero.module.css'
import Image from 'next/image'

function hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.heroImage}>
            <Image src="/images/site/hero.jpg" alt="" width={200} height={200} />
        </div>
        <h1>Hi, I&apos;m Shivam</h1>
        <p>I blog about the web development - Especially Frontend Framework like Angular and React.</p>
    </section>
  )
}

export default hero