import { useState, useCallback, useEffect } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)

      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, { method, body, headers })

        const data = await response.json()
        if (data.status !== 'ok') throw new Error(data.message)

        setLoading(false)
        return data
      } catch (error) {
        setLoading(false)
        setError(error.message)
        throw error
      }
    },
    []
  )

  const clearError = () => setError(null)

  useEffect(() => {
    switch (error) {
      case 'wrong_email_or_password':
        alert('_Имя пользователя или пароль введены не верно_')
        break
      case 'user_not_found':
        alert('_Пользователь не найден_')
        break

      default:
        break
    }
    clearError()
  }, [error])

  return { loading, request }
}
