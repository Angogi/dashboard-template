import React, {useEffect, useState} from 'react';
import {Avatar} from '@material-ui/core';
import './SidebarChats.css';

import db from '../firebase';
import { Link } from 'react-router-dom';


function SidebarChats({id, name,  addNewChat}) {

    const [seed, setSeed] = useState("");
    

    useEffect(() => {
        
      setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () =>{
        const roomName = prompt("Por favor ingrese el nombre para el chat");

        if(roomName){
           db.collection("rooms").add({
               name: roomName,
           })
        }
    };

    return !addNewChat ? (
        <Link to={`/chat-app-inside/${id}`}>
            <div className="sidebarChats">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChats__info">
                    <h2>{name}</h2>
                    <p>last message...</p>
                </div>
            </div>
        </Link>
       
    ): (
        <div 
            onClick={createChat}
            className="sidebarChats"
        >
            <h2>Agregar un nuevo chat</h2>
        </div>
    )
}

export default SidebarChats
