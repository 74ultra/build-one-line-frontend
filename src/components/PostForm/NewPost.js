import React, { useState, useContext } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import './PostForm.css';

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
        <div className='form-wrapper'>
            
            <Form onSubmit={handleSubmit} className='form-body'>
                <Header id='form-header' size='medium'>Create a New Line</Header>
                <Form.Field>
                    <input type='text' 
                           name='message' 
                           placeholder='Enter your line for the day' 
                           value={newEntry.message}
                           onChange={handleChange}
                    />
                </Form.Field>
                <div id='form-btn-wrapper'>
                    <Button color='green' type='submit'>Submit</Button>
                    <Link to='/my-account'><Button color='violet'>Cancel</Button></Link>
                </div>
                
            </Form>
        </div>
    )
}

export default NewPost;

/*

<Form onSubmit={handleSubmit}>
                <Form.Input    type= 'text'
                               label='New Line' 
                               placeholder='Enter your line for the day'
                               name='message'
                               value={newEntry.message}
                               onChange={handleChange}
                />
            </Form>
*/