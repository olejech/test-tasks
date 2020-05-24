import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { Post } from '../../components/Post'

export const PostPage = ({ match }) => {
  const { id } = match.params
  const [post, setPost] = useState([])

  const { request, loading } = useHttp()

  const fetch = useCallback(async () => {
    const response = await request(`/api/post/fetchByPostId/${id}`)
    setPost(response)
  }, [id, request])

  useEffect(() => {
    fetch()
  }, [fetch])

  return <Post loading={loading} post={post} />
}
