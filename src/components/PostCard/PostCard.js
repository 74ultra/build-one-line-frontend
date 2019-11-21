import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Moment from 'react-moment';

const PostCard = props => {


    console.log(props)
    
    return (
        <div className="ui segment" >
            <h2 className="ui right floated header">
                <Moment format='DD MMMM'>{props.post.date}</Moment> 
            </h2>
            <div className="ui clearing divider"></div>
            <p>{props.post.message}</p>
            <Button color='red' onClick={() => props.deletePost(props.post.message_id)}>Delete</Button>
            <Link to={`/update-entry/${props.post.message_id}`}><Button color='blue'>Edit</Button></Link>
        </div>
    )
}

export default PostCard;