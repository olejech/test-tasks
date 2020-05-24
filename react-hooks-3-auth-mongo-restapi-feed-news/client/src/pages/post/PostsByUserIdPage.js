import React, { useCallback, useEffect, useState, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/auth/AuthContext'
import { PostList } from '../../components/PostList'

export const PostsByUserId = () => {
  const [posts, setPosts] = useState([])
  const { request, loading } = useHttp()
  const { auth } = useContext(AuthContext)

  const fetch = useCallback(async () => {
    const response = await request('/api/post/fetchByUserId', 'GET', null, {
      Authorization: `Bearer ${auth.token}`
    })
    setPosts(response)
  }, [auth.token, request])

  useEffect(() => {
    fetch()
  }, [fetch])

  return <PostList loading={loading} posts={posts} />
}
