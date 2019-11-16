import React, { useState } from 'react';
import { postsEx } from '../../data.js';
import Moment from 'react-moment';

// Components
import PostCard from '../PostCard/PostCard.js';

const PostList = props => {

    const [ posts, setPosts ] = useState(postsEx)
    console.log(postsEx)
    
    // deleting posts feature
    const delPost = (id) => {
        setPosts([...posts.filter((item) => (
            item.id !== id
        ))])}

    return (
        <section>
            <h1>
                <Moment format='DD MMMM'>{ Date.now() }</Moment>
            </h1>
            <h3>
                <Moment format='YYYY'>{ Date.now() }</Moment>
            </h3>
            <div style={{width: '65%', margin: ' 0 auto'}}>
                { posts.map( item => (
                    <PostCard key={ item.id } 
                            post={ item } 
                            setPost={ setPosts }
                            delPost={ delPost } />
                ))}
            </div> 
        </section>
    )
}

export default PostList;