import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classes from './post-item.module.css';

function PostItem(props) {
    // console.log(props);
    const { title, image, excerpt, date, slug} = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagepath = `/images/posts/${image}`;
    const linkpath = `/posts/${slug}`;
  return (
    <li className={classes.listItem}>
        <Link href={linkpath}>
            <a>
                <div>
                    <Image src={imagepath} alt="{title}" width={300} height={200}/>
                </div>
                <div>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
  )
}

export default PostItem