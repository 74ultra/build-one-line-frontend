import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Header } from 'semantic-ui-react';
import axios from 'axios';

import './Login.css';

const NewAccount = props => {

    const blankState = { username: '', password: ''}
    
    const [userCreds, setUserCreds] = useState(blankState)
    
    const handleChange = event => {
        setUserCreds({...userCreds, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(`Username: ${userCreds.username}, Password: ${userCreds.password}`)
        setUserCreds(blankState)
        axios.post(`https://build-oneline.herokuapp.com/api/auth/register`, userCreds)
            .then(res => {
                console.log(res)
                props.history.push('./log-in')
            })
            .catch(err => console.log(err))

    }
    
    return (
        <div className='form-wrapper'>
            
            <Form onSubmit={handleSubmit} className='form-body'>
                <Header id='form-header' size='medium'>Create a new account</Header>
                <Form.Field>
                    <label position='left'>New username</label>
                    <input type='text' name='username' value={userCreds.username} placeholder='Enter username' onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>New password</label>
                    <input type='password' name='password' value={userCreds.password} placeholder='Enter password' onChange={handleChange} />
                </Form.Field>
                <div id='form-btn-wrapper'>
                    <Button type='submit'>Create Account</Button>
                </div>
                
            </Form>
            <div className='new-user-wrapper'>
                <Header size='small'>Already have an account?</Header>
                <Link to='/log-in'><Button>Sign in to your account</Button></Link>
            </div>
            
        </div>
    )
}

export default NewAccount;