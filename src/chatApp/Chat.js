import React, {useState, useEffect} from 'react';
import db from '../firebase';
import {Avatar, IconButton} from '@material-ui/core'
import './Chat.css'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';


import ChatOption from './ChatOption';
import {BrowserRouter as Router,  Link} from "react-router-dom";
import {useParams} from 'react-router-dom';


function Chat() {
    
    const [input , setInput] = useState("");
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName , setRoomName] = useState();

    useEffect(() => {
       if(roomId){
           db.collection('rooms').doc(roomId)
           .onSnapshot(snapshot =>(
               setRoomName(snapshot.data().name)
           ))
       }
    }, [roomId])

    useEffect(() => {
        
      setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log("este es tu mensaje:",  input);

        setInput("");
    };

    

    return (
        <Router>
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen at....</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>     
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                   
                </div>
            </div>
            <div className="chat__body">
                <p className= {`chat__message ${true && " chat__reciever" }`}>
                    
                    <span className="chat__name">Andres Gomez </span>
                   
                    hola care bola .. ! 

                    <span className="chat__timestamp"> 3:15pm</span>
                    
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribir mensaje..." type="text"/>
                    <button onClick={sendMessage} type="submit">Enviar mensaje</button>
                </form>
                <Mic />
            </div>
            
        </div>
        </Router>
    )
}

export default Chat
