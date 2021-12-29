import React from 'react'
import { Avatar } from '@material-ui/core';
import "./FeedHeader.css";


function FeedHeader() {
    return (
        <div className="feedHeader">
                <h2>Familia López Marquina</h2>
                <div className="feedHeader__familyMembers">
                    <Avatar className="avatar"/>
                    <Avatar className="avatar"/>
                    <Avatar className="avatar"/>
                    <Avatar className="avatar"/>
                    <Avatar className="avatar"/>
                   
                </div>  
                
            </div>
    )
}

export default FeedHeader
