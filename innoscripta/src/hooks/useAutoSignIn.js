import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SIGN_IN } from 'store/types'

export const useAutoSignIn = () => {
  const [ready, setReady] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('authData'))
      if (data && data.token && data.username) {
        dispatch({ type: SIGN_IN, data })
      }
    } catch (e) {} finally {
      setReady(true)
    }
  }, [dispatch])

  return ready
}
