import React from 'react'

function Message({message,username}) {
    const isUser=username===message.username;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <div>
                <h3>{message.username || 'unknown User'}: {message.message}</h3>
            </div>            
        </div>
    )
}

export default Message
