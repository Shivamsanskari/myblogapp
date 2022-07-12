import React from 'react'
import PostItem from './post-item';
import classes from './post-grid.module.css';

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classes.gridList}>
        {posts.map((post) => {
            return <PostItem key={post.slug} post={post}/>
        })}
    </ul>
  )
}

export default PostsGrid