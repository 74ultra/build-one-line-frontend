import React, { useState } from 'react';
import { postsEx } from '../../data.js';

// Components
import PostCard from '../PostCard/PostCard.js';

const PostList = props => {

    const [ posts, setPosts ] = useState(postsEx)
    console.log(postsEx)
    
    const delPost = (id) => {
        setPosts([...posts.filter((item) => (
            item.id !== id
        ))])}

    return (
        <div>
            { posts.map( item => (
                <PostCard key={ item.id } 
                          post={ item } 
                          setPost={ setPosts }
                          delPost={ delPost } />
            ))}
        </div>
    )
}

export default PostList;