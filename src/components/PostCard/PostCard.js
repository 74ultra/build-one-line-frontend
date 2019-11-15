import React from 'react';

// components
import DeleteBtn from '../Buttons/DeleteBtn';
import EditBtn from '../Buttons/EditBtn';

const PostCard = props => {
    const { id, date, body } = props.post
    
    return (
     <section>
        <div> { date } </div>
        <div> { body } </div>
        <DeleteBtn id={ id } delPost={ props.delPost } />
     </section>
    )
}

export default PostCard;