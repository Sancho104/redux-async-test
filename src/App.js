import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PostList from './pages/PostList/PostList';

function App() {
  return (
    <Router>
      <PostList />
    </Router>
  );
}

export default App;
