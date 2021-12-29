import React, {useState} from 'react';
import "./PostsBox.css";
import { Avatar, Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import PermCameraMicIcon from '@material-ui/icons/PermCameraMic';
import PostAddIcon from '@material-ui/icons/PostAdd';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import db from "./firebase";
import firebase from "firebase";
import ShareOption from "./ShareOption";


function PostsBox() {
    const [postMessage, setPostMessage] = useState ("");
    const [postImage, setPostImage] = useState ("");

    const sendPost = e =>{
        e.preventDefault();

        

        db.collection('posts').add({
            displayName: 'Gomez Carlos',
            userName: "gigoanca",
            verified:true, 
            text: postMessage,
            image: postImage,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            avatar:"https://img2.freepng.es/20180419/tsq/kisspng-smiley-emoticon-emoji-computer-icons-bearded-vector-5ad8bcd9956ef2.9054381915241535616121.jpg "
        });

        setPostMessage("");
        setPostImage("");

    } 

    return (
        <div className="postsBox">

            <form>
                <div className="postsBox__inputContainert">
                    <div className="postsBox__input">
                        <Avatar src="https://img2.freepng.es/20180419/tsq/kisspng-smiley-emoticon-emoji-computer-icons-bearded-vector-5ad8bcd9956ef2.9054381915241535616121.jpg "/>
                        <input 
                            onChange = {(e) => setPostMessage(e.target.value)}
                            value={postMessage} 
                            placeholder="Whats going onn .. !!" 
                            type="text" 
                        />
                    </div>
                    <div className="postsBox__buttonsContainer">
                        <ShareOption Icon={AddPhotoAlternateIcon} text="Imagen" /> 
                        <ShareOption Icon={PermCameraMicIcon} text="PodCast" /> 
                        <ShareOption Icon={OndemandVideoIcon} text="Video" /> 
                        <ShareOption Icon={PostAddIcon} text="Documento" /> 
                       
                               
                        
                    </div>
                </div>
                
                <input 
                    className="postsBox__imageInput"
                    onChange = {(e) => setPostImage(e.target.value)}
                    value = {postImage}
                    placeholder="Enter your image link...https://jjkashdfsjjakdgjaghahajh.hello" 
                    type="text"
                />

            

                <Button onClick= {sendPost} type="submit" className="postsBox__button">Publicar</Button>
            </form>
            
        </div>
    )
}

export default PostsBox
