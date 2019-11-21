import React from 'react'

export default function EditBtn() {
    return (
        <div className="ui animated fade button" tabIndex="0">
            <div className="visible content">Edit</div>
            <div className="hidden content">
                <i className="edit outline icon"></i>
            </div>
         </div>
    )
}
