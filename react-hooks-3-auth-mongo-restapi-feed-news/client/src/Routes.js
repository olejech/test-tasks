import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PostsPage } from './pages/post/PostsPage'
import { ProfilePage } from './pages/ProfilePage'
import { AuthPage } from './pages/AuthPage'
import { AuthContext } from './context/auth/AuthContext'
import { Loader } from './components/Loader'
import { NotFound } from './pages/NotFound'
import { CreatePostPage } from './pages/post/CreatePostPage'
import { PostPage } from './pages/post/PostPage'
import { PostsByUserId } from './pages/post/PostsByUserIdPage'

export const Routes = () => {
  const { auth, ready } = useContext(AuthContext)

  if (!ready) {
    return <Loader />
  }

  if (auth.token) {
    return (
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/profile/posts" component={PostsByUserId} />
        <Route path="/profile/:id" component={ProfilePage} />

        <Route path="/posts" component={PostsPage} />
        <Route path="/post/create" component={CreatePostPage} />
        <Route path="/post/:id" component={PostPage} />
        <Route path="" component={NotFound} />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/auth" component={AuthPage} />
      <Route path="/posts" component={PostsPage} />
      <Route path="/post/create" component={NotFound} />
      <Route path="/post/:id" component={PostPage} />
      <Route path="" component={NotFound} />
    </Switch>
  )
}
