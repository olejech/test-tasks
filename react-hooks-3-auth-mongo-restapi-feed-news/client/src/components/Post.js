import React from 'react'
import { Loader } from './Loader'

export const Post = ({ loading, post }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
          <p>{new Date(post.date).toLocaleString()}</p>
        </div>
      )}
    </>
  )
}
