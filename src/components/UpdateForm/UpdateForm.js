import React, { useState, useEffect, useContext } from 'react';
import { Form } from 'semantic-ui-react';
import moment from 'moment';

// Contexts
import PostContext from '../../contexts/PostContext.js';


const UpdateForm = props => {

    console.log(props)
    
    const { posts, setPosts } = useContext(PostContext);

    const [messageToUpdate, setMessageToUpdate] = useState({
        date: moment().format('YYYY-MM-DD'),
        message: 'Here is the message',
        user_id: parseInt(localStorage.getItem('user_id'))
    })
    
    const handleChange = event => {
        setMessageToUpdate({ ...messageToUpdate, [event.target.name]: event.target.value})
        console.log(messageToUpdate.message)
    }
    

    return (
        <div>
            <Form >
                <Form.Input    type= 'text'
                               label='Edit post' 
                               placeholder='updateMessage.message'
                               name='message'
                               value={messageToUpdate.message}
                               onChange={handleChange}
                />
            </Form>
        </div>
    )
}

export default UpdateForm;