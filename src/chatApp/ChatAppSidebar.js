import React, {useState, useEffect} from 'react';
import './ChatAppSidebar.css';
import SidebarChats from './SidebarChats';
// import {Avatar, IconButton} from '@material-ui/core';
// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
// import ChatIcon from '@material-ui/icons/Chat';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';

// import ChatOption from './ChatOption';
// import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import {BrowserRouter as Router,  Switch,  Route, Link} from "react-router-dom";



import db from '../firebase';

function ChatAppSidebar() {
    const [rooms , setRooms] = useState([]);

     useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    data: doc.data(),  
                }))
            )
       ) ;
       
       return ()=>{
        unsubscribe();
       }
    }, [])

    return (
       <Router>
        <div className="chatAppSidebar">
            <div className="chatAppSidebar__search" >
                <div className="chatAppSidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Buscar o iniciar un nuevo chat" type="text" />     
                </div>
            </div>
            <div className="chatAppSidebar__chats">
                <SidebarChats addNewChat/>
                
                {rooms.map(room =>(
                    <SidebarChats key={room.id} id={room.id} name={room.data.name} />
                ))}
                
            </div>

        </div>
        </Router>
   
    )
}

export default ChatAppSidebar
