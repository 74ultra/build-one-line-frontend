import React from 'react'

export default function DeleteBtn({ delPost, id }) {
    return (
        <div onClick={() => delPost(id)}>
            delete
        </div>
    )
}
