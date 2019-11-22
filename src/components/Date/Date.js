import React from 'react';
import { Header } from 'semantic-ui-react';
import moment from 'moment';
import './Date.css';

const Date = props => {
    
    
    
    return (
    
            <div className='date-wrapper'>
                <Header className='head' size='large'>Today: {moment().format('MMMM Do YYYY')}</Header>
            </div>
            
        
    )
}

export default Date;