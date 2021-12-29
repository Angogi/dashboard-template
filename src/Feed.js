import React, { useState, useEffect } from 'react';
import "./Feed.css";
import PostsBox from "./PostsBox";
import FeedHeader from "./FeedHeader";
import Post from "./Post";
import db from "./firebase";
import FlipMove from "react-flip-move"; 




function Feed() {  

    const [posts, setPosts] = useState([]);

    useEffect( ()=>{
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [] );

    


    return (
         
        <div className="feed">

            
            <FeedHeader />
            <PostsBox/>
            <FlipMove>
                {posts.map(post =>(
                    <Post 
                    key={post.id}
                    displayName= {post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text= {post.text}
                    avatar={post.avatar}
                    image={post.image }
                    />
                ))}        
            </FlipMove>



            
           
            
        </div>
       
    )
}

export default Feed
