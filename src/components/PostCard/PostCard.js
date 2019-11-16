import React from 'react';

// components
import DeleteBtn from '../Buttons/DeleteBtn';
import EditBtn from '../Buttons/EditBtn';
import Moment from 'react-moment';

const PostCard = props => {
    const { id, date, body } = props.post
    
    return (
        <div class="ui segment" >
            <h2 class="ui right floated header">
                <Moment format='DD MMMM'>{ date }</Moment> 
            </h2>
            <div class="ui clearing divider"></div>
            <p> { body } </p>
            <DeleteBtn id={ id } delPost={ props.delPost } />
            <EditBtn />
        </div>
    )
}

export default PostCard;