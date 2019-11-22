import React, { useState, useContext } from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
import moment from 'moment';
import { Link } from 'react-router-dom';

// Contexts
import PostContext from '../../contexts/PostContext.js';
import { apiAuth } from '../../utils/api.js';


const UpdateForm = props => {

    console.log(props)
    
    const { posts, setPosts } = useContext(PostContext);

    const [messageToUpdate, setMessageToUpdate] = useState({
        date: moment().format('YYYY-MM-DD'),
        message: '',
        user_id: parseInt(localStorage.getItem('user_id'))
    })
    
    const handleChange = event => {
        setMessageToUpdate({ ...messageToUpdate, [event.target.name]: event.target.value})
        console.log(messageToUpdate.message)
    }

    const handleSubmit = event => {
        event.preventDefault();
        apiAuth()
            .put(`https://build-oneline.herokuapp.com/api/messages/${props.match.params.id}`, messageToUpdate)
            .then(res => {
                console.log(res.data)
                props.history.push('/my-account')
            })
    }
    

    return (
        <div className='form-wrapper'>
            
            <Form onSubmit={handleSubmit} className='form-body'>
                <Header id='form-header' size='medium'>Update Your Line</Header>
                <Form.Field>
                    <input type='text' 
                           name='message' 
                           placeholder='Edit your line' 
                           value={messageToUpdate.message}
                           onChange={handleChange}
                    />
                </Form.Field>
                <div id='form-btn-wrapper'>
                    <Button color='green' type='submit'>Submit</Button>
                    <Link to='/my-account'><Button>Cancel</Button></Link>
                </div>
                
            </Form>
        </div>
    )
}

export default UpdateForm;

/*

<div>
            <Form onSubmit={handleSubmit}>
                <Form.Input    type= 'text'
                               label='Edit post' 
                               placeholder='Edit your post'
                               name='message'
                               value={messageToUpdate.message}
                               onChange={handleChange}
                />
            </Form>
        </div>


*/