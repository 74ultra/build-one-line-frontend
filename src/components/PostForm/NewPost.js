import React, { useState, useContext, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import moment from 'moment';

// Contexts
import PostContext from '../../contexts/PostContext.js';

const NewPost = props => {

    const { addPost } = useContext(PostContext);


    console.log(moment().format('YYYY-MM-DD'))
    
    const [newEntry, setNewEntry] = useState({
        date: moment().format('YYYY-MM-DD'),
        message: '',
        user_id: parseInt(localStorage.getItem('user_id'))
    })


    const handleChange = event => {
        setNewEntry({ ...newEntry, [event.target.name]: event.target.value})
        console.log(newEntry.message)
    }

    const handleSubmit = event => {
        event.preventDefault();
        addPost(newEntry)
        props.history.push('/my-account')
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Input    type= 'text'
                               label='New Entry' 
                               placeholder='Enter text'
                               name='message'
                               value={newEntry.message}
                               onChange={handleChange}
                />
            </Form>
        </div>
    )
}

export default NewPost;