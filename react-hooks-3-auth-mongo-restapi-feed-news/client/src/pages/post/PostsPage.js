import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { PostList } from '../../components/PostList'

export const PostsPage = () => {
  const [posts, setPosts] = useState([])

  const { request, loading } = useHttp()

  const fetch = useCallback(async () => {
    const response = await request('/api/post/fetchAll')
    setPosts(response)
  }, [request])

  useEffect(() => {
    fetch()
  }, [fetch])

  return <PostList loading={loading} posts={posts} />
}
