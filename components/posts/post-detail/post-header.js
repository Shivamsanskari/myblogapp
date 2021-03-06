import Image from 'next/image';
import React from 'react'
import classes from './post-header.module.css'

function PostHeader(props) {
    const {title, image} = props;
    console.log(image);
  return (
    <header className={classes.postHeader}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={120} />
    </header>
  )
}

export default PostHeader