import React from 'react'
import Menu from './Menu'

const BlogPost = ({ match }) => {
  const title = match.params.title
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
  return (
    <>
      <h1>{title}</h1>
      <Menu />
    </>
  )
}

export default BlogPost
