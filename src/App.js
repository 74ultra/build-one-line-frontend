import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { postsEx } from './data';

// Components
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import PostList from './components/PostList/PostList.js';
import PostForm from './components/PostForm/PostForm.js';
import UpdateForm from './components/UpdateForm/UpdateForm.js';
import NavBar from './components/Navbar/NavBar.js';


function App() {
  
  const [posts, setPosts] = useState(postsEx)
  
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/log-in' component={Login} />
      <Route exact path='/my-account' component={PostList} />
      <Route exact path='/new-entry' component={PostForm} />
      <Route exact path='/update-entry' component={UpdateForm} /> 
    </div>
  );
}

export default App;
