import React from 'react'
import PostsGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'

function featuredPosts(props) {
  return (
    <section className={classes.featureSection}>
      <h2>Featured Posts</h2>
       <PostsGrid posts={props.post}/>
    </section>
  )
}

export default featuredPosts