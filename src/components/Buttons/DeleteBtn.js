import React from 'react'

export default function DeleteBtn({ delPost, id }) {
    return (
        
        <div className="ui animated fade button negative" tabIndex="0">
            <div className="visible content">Delete</div>
            <div className="hidden content">
            X
            </div>
         </div>
    )
}
