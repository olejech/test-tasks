import React, { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { Loader } from '../components/Loader'

export const NewsPage = () => {
  const [news, setNews] = useState([])

  const { request, loading } = useHttp()

  const fetch = useCallback(async () => {
    const response = await request(
      'https://mysterious-reef-29460.herokuapp.com/api/v1/news'
    )
    setNews(response.data)
  }, [request])

  useEffect(() => {
    fetch()
  }, [fetch])

  return (
    <>
      <h1>Новости</h1>
      {loading ? (
        <Loader />
      ) : news.length ? (
        news.map(item => (
          <div className="news" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))
      ) : (
        'Нет данных'
      )}
    </>
  )
}
