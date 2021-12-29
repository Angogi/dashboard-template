import React from 'react';
import "./ChatOption.css";

function ChatOption({Icon, text}) {
    return (
        <div className="chatOption">
            <Icon />
            <h7>{text}</h7>
        </div>
    )
}

export default ChatOption
