import React, { Fragment } from 'react'
import Hero from '../components/Home-page/hero'
import FeaturedPosts from '../components/Home-page/featured-posts'

const DUMMY_POSTS = [
  {
    slug: 'javascript-padhoge-tabhi-badhoge', 
    title: 'Javascript Padhoge tabhi Badhoge', 
    image: 'jss.png', 
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
    image: 'jss.png', 
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

function Homepage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts post={DUMMY_POSTS}/>
    </Fragment>
  )
}

export default Homepage