import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({loginUser, dto}) => {
    console.log("ChatMEssage(loginUser='" + loginUser + "', dto=" + JSON.stringify(dto));
    const isCurrentUser = loginUser === dto.sender;

    return (
        <div className={`chat-message ${isCurrentUser ? 'right' : 'left'}`}>
            <div className="message-details">
                <span className="message-sender">{dto.sender}</span>
                <span className="message-time">{dto.time}</span>
            </div>
            <div className="message-body">{dto.message}</div>
        </div>
    );
};

export default ChatMessage;
