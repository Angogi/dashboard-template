import React from 'react';
import "./ShareOption.css"

function ShareOption({text, Icon}) {
    return (
        <div className="shareOption">
            <Icon />
            <h2>{text}</h2>
        </div>
)
    
}

export default ShareOption
