import React from 'react'

export default function DeleteBtn({ delPost, id }) {
    return (
        
        <div class="ui animated fade button negative" tabindex="0" onClick={() => delPost(id)}>
            <div class="visible content">Delete</div>
            <div class="hidden content">
            X
            </div>
         </div>
    )
}
