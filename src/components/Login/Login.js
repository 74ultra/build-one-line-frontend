import React, { useState } from 'react';
import { Form, Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

const Login = props => {

    const blankState = { username: '', password: ''}
    
    const [userCreds, setUserCreds] = useState(blankState)
    const [validCreds, setValidCreds] = useState(true);
    
    const handleChange = event => {
        setUserCreds({...userCreds, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        setUserCreds(blankState)
        axios.post(`https://build-oneline.herokuapp.com/api/auth/login`, userCreds)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user_id', res.data.user_id)
                setValidCreds(true)
                props.history.push('/my-account')
            })
            .catch(err => {
                console.log(err)
                setValidCreds(false)
            })
    }
    
    return (
        <div className='form-wrapper'>
            <Header className='warning'>
                {(validCreds === false ? <h2>Invalid Credentials</h2> : null)}
            </Header>
            <Form onSubmit={handleSubmit} className='form-body'>
                <Header id='form-header' size='medium'>Sign in to your account</Header>
                <Form.Field>
                    <label position='left'>Username</label>
                    <input type='text' name='username' value={userCreds.username} placeholder='Enter username' onChange={handleChange} />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' name='password' value={userCreds.password} placeholder='Enter password' onChange={handleChange} />
                </Form.Field>
                <div id='form-btn-wrapper'>
                    <Button type='submit' color='green'>Sign In</Button>
                </div>
                
            </Form>
            <div className='new-user-wrapper'>
                <Header size='small'>New user?</Header>
                <Link to='/new-account'><Button color='blue'>Create an account</Button></Link>
            </div>
            
            
        </div>
    )
}

export default Login;