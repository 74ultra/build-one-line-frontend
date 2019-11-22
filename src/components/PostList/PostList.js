import React, { useContext, useEffect } from 'react';
import { Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './PostList.css';

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
        return <Header>Loading your lines....</Header>
    }

    return (
        <section>
            <Link to='/new-entry'><Button id='new-line-btn' color='green'>Create a new line</Button></Link>
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