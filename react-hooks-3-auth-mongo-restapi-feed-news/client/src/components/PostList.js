import React from 'react'
import { Loader } from './Loader'
import { Link } from 'react-router-dom'

export const PostList = ({ loading, posts }) => {
  return (
    <>
      <h1>Новости</h1>
      {loading ? (
        <Loader />
      ) : posts.length ? (
        posts.map(item => (
          <div className="posts" key={item._id}>
            <h2>
              <Link to={`/post/${item._id}`}>{item.title}</Link>
            </h2>
            <p>{item.text}</p>
            <p>{new Date(item.date).toLocaleString()}</p>
          </div>
        ))
      ) : (
        'Нет данных'
      )}
    </>
  )
}
