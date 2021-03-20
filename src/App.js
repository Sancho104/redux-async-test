import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Post from './pages/PostDetails/post';
import PostList from './pages/PostList/PostList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <PostList />
        </Route>
        <Route path='/post/:id'>
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
