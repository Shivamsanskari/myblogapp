import React from 'react'
import MainNavigation from './main-nav'
function layout(props) {
  return (
    <>
    <MainNavigation />
    <main>{props.children}</main>
    </>
  )
}

export default layout