import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const NavBar = props => {

    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
    }
    
    if(!localStorage.getItem('token')){
        return (
            <div>
                <Menu>
                <Link to='/'>
                    <Menu.Item header>
                    <Icon color='teal' name='write' />
                    One Line a Day
                </Menu.Item>
                </Link>
                
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
    
    
    return (
        <div>
            <Menu>
                <Link to='/'>
                    <Menu.Item header>
                    <Icon color='teal' name='write' />
                    One Line a Day
                </Menu.Item>
                </Link>
                
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
                            My Lines
                       </Menu.Item>
                    </Link>
                    <Link to='/new-entry'>
                       <Menu.Item>
                            New Line
                       </Menu.Item>
                    </Link>
                    <Link to='/log-in' onClick={logout} >
                        <Menu.Item>
                            Log Out
                        </Menu.Item>
                    </Link>
                        
                    
                    
                </Menu.Menu>
                
            </Menu>
        </div>
    )
}

export default NavBar;