import React, { useState, useContext, useEffect } from 'react';
import { postsEx } from '../../data.js';
import Moment from 'react-moment';

// Components
import PostCard from '../PostCard/PostCard.js';

// Contexts
import PostContext from '../../contexts/PostContext.js';

const PostList = props => {

    const { getPosts, posts, setPosts, deletePost } = useContext(PostContext);
    
    useEffect(() => {
        let userMessages = getPosts();
        setPosts(userMessages);
    }, [])


    if(!posts) {
        return <h2>Loading posts....</h2>
    }

    return (
        <section>
            <h1>
                <Moment format='DD MMMM YYYY'>{ Date.now() }</Moment>
            </h1>
            
            <div style={{width: '65%', margin: ' 0 auto'}}>
                { posts.map( item => (
                    <PostCard key={ item.message_id } 
                              post={ item } 
                              setPost={ setPosts }
                              deletePost={deletePost} />
                ))}
            </div> 
        </section>
    )
}

export default PostList;