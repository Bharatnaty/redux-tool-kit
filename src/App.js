import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostList from './features/post/postList'
import AddPostForm from './features/post/AddPostForm'
import SinglePostPage from './features/post/SinglePostPage'
import EditPostForm from './features/post/EditPostForm'
function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostList />
              </React.Fragment>
            )}
          />
          <Route
            path="/post/:postId"
            render={({ match }) => <SinglePostPage match={match} />}
          />
          <Route
            path="/editpost/:postId"
            render={({ match }) => <EditPostForm match={match} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
