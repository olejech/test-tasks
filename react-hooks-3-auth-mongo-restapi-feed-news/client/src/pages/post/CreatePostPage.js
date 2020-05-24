import React, { useState, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/auth/AuthContext'

export const CreatePostPage = () => {
  const [form, setForm] = useState({
    title: '',
    text: ''
  })

  const { request, loading } = useHttp()
  const { auth } = useContext(AuthContext)

  const changeHandler = e => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const submitHandler = async e => {
    e.preventDefault()
    if (!form.title || !form.text) return alert('Не все поля заполнены')
    const { message } = await request('/api/post/create', 'POST', form, {
      Authorization: `Bearer ${auth.token}`
    })
    alert(message)
  }

  return (
    <>
      <h1>Создать новость</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-create">
          <input
            type="text"
            placeholder="Название новости"
            name="title"
            onChange={changeHandler}
          />

          <textarea
            rows="5"
            placeholder="Описание"
            name="text"
            onChange={changeHandler}
          />
        </div>
        <button disabled={loading}>Создать</button>
      </form>
    </>
  )
}
