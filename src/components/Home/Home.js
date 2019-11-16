import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = props => {

    return (
        <div className='home-wrapper'>
            <div className='header-wrapper'>
                <Header as='h1' icon>
                  <Icon name='write' />
                  One Line a Day
                  <Header.Subheader className='sub-head'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </Header.Subheader>
                </Header>
            </div>
            <div className='btn-wrapper'>
                <Header as='h3'>Sign in or create a new account!</Header>
                <Link to='/log-in'><Button>Sign In</Button></Link>
                <Link to='/log-in'><Button>New Account</Button></Link>
            </div>
            
        </div>
    )
}

export default Home;