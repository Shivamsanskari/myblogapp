import React from 'react'
import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
  {
    slug: 'javascript-padhoge-tabhi-badhoge', 
    title: 'Javascript Padhoge tabhi Badhoge', 
    image: 'gswnjs.png', 
    excerpt: 'Javascript is Awesome yaar.', 
    date: '2022-02-10'
   },

  {
   slug: 'javascript-padhoge-tabhi-badhoge1', 
   title: 'Javascript Padhoge tabhi Badhoge', 
   image: 'jss.png', 
   excerpt: 'Javascript is Awesome yaar.', 
   date: '2022-02-10'
  },

  {
    slug: 'javascript-padhoge-tabhi-badhoge2', 
    title: 'Javascript Padhoge tabhi Badhoge', 
    image: 'gswnjs.png', 
    excerpt: 'Javascript is Awesome yaar.', 
    date: '2022-02-10'
   },

  {
    slug: 'javascript-padhoge-tabhi-badhoge3', 
    title: 'Javascript Padhoge tabhi Badhoge', 
    image: 'jss.png', 
    excerpt: 'Javascript is Awesome yaar.', 
    date: '2022-02-10'
   },
]


function AllPostsPage() {
  return (
    <AllPosts posts={DUMMY_POSTS}/>
  )
}

export default AllPostsPage