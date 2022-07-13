import React from 'react'
import PostsGrid from './posts-grid'

function AllPosts(props) {
  return (
    <section className='section'>
        <h2>All Posts</h2>
        <PostsGrid posts={props.posts}/>
    </section>
  )
}

export default AllPosts