import React, {forwardRef} from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({
    displayName, 
    userName, 
    verified, 
    timestap, 
    text,
    image,
    avatar,
}, ref) => {
    
    return (
        <div className="post" ref={ref} >
            {/* <div className="post__avatar">
                <Avatar src={avatar}></Avatar>
            </div> */}
            <div className="post__body">
                <div className="post__header">
                    
                    <div className="post__headerText">
                        <div className="post__avatar">
                            <Avatar src={avatar}></Avatar>
                        </div>
                        <h3>
                            {displayName}{""}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge"/>} 
                                @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutline className="postFooter__icons" id="comments"/>
                    <RepeatIcon className="postFooter__icons" id="repeatIcon"/>
                    <FavoriteBorderIcon className="postFooter__icons" id="likes"/>
                    <PublishIcon className="postFooter__icons" id="share"/>
                </div>
            </div>
        </div>
    );
});

export default Post
