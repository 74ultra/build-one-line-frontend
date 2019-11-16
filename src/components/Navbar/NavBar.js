import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const NavBar = props => {

    return (
        <div>
            <Menu>
                <Menu.Item header>
                    <Icon name='write' />
                    One Line a Day
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Link to='/'>
                        <Menu.Item>
                            Home
                        </Menu.Item>
                    </Link>
                    <Link to='/'>
                        <Menu.Item>
                            About
                        </Menu.Item>
                    </Link>
                    <Link to='/my-account'>
                       <Menu.Item>
                            My Account
                       </Menu.Item>
                    </Link>
                    <Link to='/new-entry'>
                       <Menu.Item>
                            New Entry
                       </Menu.Item>
                    </Link>
                    <Link to='/log-in'>
                        <Menu.Item>
                            Log In
                        </Menu.Item>
                    </Link>
                    
                </Menu.Menu>
                
            </Menu>
        </div>
    )
}

export default NavBar;