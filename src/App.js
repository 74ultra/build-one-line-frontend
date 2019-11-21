import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home/Home.js';
import Login from './components/Login/Login.js';
import PostList from './components/PostList/PostList.js';
import NewPost from './components/PostForm/NewPost.js';
import UpdateForm from './components/UpdateForm/UpdateForm.js';
import NavBar from './components/Navbar/NavBar.js';
import NewAccount from './components/Login/NewAccount.js';

// Helper functions
import { PrivateRoute } from './utils/PrivateRoute.js';
import { apiAuth } from './utils/api.js';

// Contexts
import PostContext from './contexts/PostContext.js';


function App() {
  
  const [posts, setPosts] = useState()

  const getPosts = () => {
    let userId = localStorage.getItem('user_id')
    apiAuth()
        .get(`https://build-oneline.herokuapp.com/api/messages/${userId}`)
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => console.log('Get error', err))
  }

  const addPost = newPost => {
    apiAuth()
      .post(`https://build-oneline.herokuapp.com/api/messages`, newPost)
      .then(res => console.log('Post success', res))
      .catch(err => console.log('Post error', err))
  }

  const deletePost = id => {
    apiAuth()
      .delete(`https://build-oneline.herokuapp.com/api/messages/delete/${id}`)
      .then(res => {
        let newUserMessages = getPosts();
        setPosts(newUserMessages);
      })
      .catch(err => console.log('Delete Error', err))
  }
  
  return (
    <PostContext.Provider value={{ getPosts, posts, setPosts, deletePost, addPost }}>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/log-in' component={Login} />
        <Route exact path='/new-account' component={NewAccount} />
        <PrivateRoute exact path='/my-account' component={PostList} />
        <PrivateRoute exact path='/new-entry' component={NewPost} />
        <PrivateRoute exact path='/update-entry/:id' component={UpdateForm} /> 
      </div>
    </PostContext.Provider>
    
  );
}

export default App;
