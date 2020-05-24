import React, { useEffect, useCallback, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'

export const ProfilePage = props => {
  const { id } = props.match.params

  const { request, loading } = useHttp()

  const [profileData, setProfileData] = useState({
    languages: [],
    social: []
  })

  const fetch = useCallback(async () => {
    try {
      const response = await request(
        `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`
      )

      setProfileData(response.data)
    } catch (error) {}
  }, [id, request])

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <>
      {loading ? (
        <Loader />
      ) : profileData.userId ? (
        <div className="profile">
          <h1>Ваш профиль ID {profileData.userId}</h1>
          <p>Город: {profileData.city}</p>
          <ul>Список языков:</ul>
          {profileData.languages.map(language => (
            <li key={language}>{language}</li>
          ))}
          <ul>Социальные сети:</ul>
          {profileData.social.map(item => {
            return (
              <li key={item.label}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            )
          })}
        </div>
      ) : (
        'Нет данных'
      )}
    </>
  )
}
