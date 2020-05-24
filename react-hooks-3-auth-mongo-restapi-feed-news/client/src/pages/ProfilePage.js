import React, { useEffect, useCallback, useState, useContext } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'
import { AuthContext } from '../context/auth/AuthContext'
import { Link } from 'react-router-dom'

export const ProfilePage = props => {
  const { auth } = useContext(AuthContext)
  const { request, loading } = useHttp()

  const [profileData, setProfileData] = useState({
    posts: []
  })

  const fetch = useCallback(async () => {
    try {
      const response = await request('/api/profile/', 'GET', null, {
        Authorization: `Bearer ${auth.token}`
      })
      setProfileData(response)
    } catch (error) {}
  }, [auth, request])

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : profileData ? (
        <div className="profile">
          <h1>Ваш профиль {profileData.id}</h1>
          <p>Почта: {profileData.email}</p>
          <ol>
            {profileData.posts.length
              ? profileData.posts.map(post => (
                  <Link to={`/post/${post._id}`} key={post._id}>
                    <li>{post.title}</li>
                  </Link>
                ))
              : 'Постов нет'}
          </ol>

          <p>
            <button onClick={() => props.history.push('/post/create')}>
              Создать пост
            </button>
            <button onClick={() => props.history.push('/profile/posts')}>
              Мои посты
            </button>
          </p>
        </div>
      ) : (
        'Нет данных'
      )}
    </>
  )
}
