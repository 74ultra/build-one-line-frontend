import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = props => {

    return (
        <div className='home-wrapper'>
            <div className='header-wrapper'>
                <Header as='h1' icon>
                  <Icon color='teal' name='write' />
                  One Line a Day
                  <Header.Subheader className='sub-head'>
                    One Line a Day provides a minimalist, easy to use journal to jot down your thoughts, record milestones, and celebrate accomplishments. Tell your story your way.
                  </Header.Subheader>
                </Header>
                <Header as='h2'>
                    Everyday is a day to remember!
                </Header>
            </div>
            <div className='btn-wrapper'>
                <Header as='h3'>Sign in or create a new account</Header>
                <Link to='/log-in'><Button color='green'>Sign In</Button></Link>
                <Link to='/new-account'><Button color='blue'>New Account</Button></Link>
            </div>
            <div className='alert'>{(localStorage.getItem('token') ? <h2>You are currently logged in</h2> : null)}</div>
        </div>
    )
}

export default Home;