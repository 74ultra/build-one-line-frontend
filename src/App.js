import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home/Home.js';
import PostList from './components/PostList/PostList.js';

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Route exact path='/' component={Home} />
      <Route exact path='/my-account' component={PostList} />
    </div>
  );
}

export default App;
