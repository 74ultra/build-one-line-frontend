import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Moment from 'react-moment';
import './PostCard.css';

const PostCard = props => {


    console.log(props)
    
    return (
        <div className='post-wrapper'>
            <div className="ui segment" id='card-wrapper'>
                <h2>
                    <Moment format='DD MMMM YYYY'>{props.post.date}</Moment> 
                </h2>
                <div className="ui clearing divider"></div>
                <h3 className='message-body'>{props.post.message}</h3>
                <Button size='tiny' color='violet' onClick={() => props.deletePost(props.post.message_id)}>Delete</Button>
                <Link to={`/update-entry/${props.post.message_id}`}><Button size='tiny' color='teal'>Edit</Button></Link>
            </div>



        </div>
        
    )
}

export default PostCard;