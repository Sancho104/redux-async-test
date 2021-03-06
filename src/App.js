import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ContainerComments from './pages/PostDetails/ContainerComments';
import PostList from './pages/PostList/PostList';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <PostList />
          </Route>
          <Route path='/post/:id'>
            <ContainerComments />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
