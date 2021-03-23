import React from 'react'
import './App.css';
import AxiosRequire from './Components/axiosRequire/axiosRequire';
import { createActionPosts, getState } from './store/store';
// import axios from 'axios';

function App() {
  return (
    <div className="App">
      <AxiosRequire
        getState={getState}
        createActionPosts={createActionPosts}
      />
    </div>
  );
}

export default App;
