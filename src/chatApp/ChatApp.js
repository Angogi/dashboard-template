import React from 'react'
import './ChatApp.css';
import Chat from './Chat';
import ChatAppSidebar from './ChatAppSidebar';

import {Avatar, IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import ChatOption from './ChatOption';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';



import {BrowserRouter as Router,  Switch,  Route, Link} from "react-router-dom";








function ChatApp() {
    return (

    <Router>   

        <div className="chatApp">

            <div className="chatAppSidebar__header">
                <Avatar />
                <div className="chatAppSidebar__headerRight">

                    <IconButton>     
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>
                        <Link  to="/chat-app-inside">
                            <ChatIcon />
                        </Link>
                    </IconButton>
          
                    <IconButton>
                        <Link to="/chat">
                            <ChatOption Icon={PermContactCalendarOutlinedIcon}  /> 
                        </Link>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                
                </div>
            </div>

            <Route path="/chat" exact>
                    <ChatAppSidebar />
            </Route>

            <Switch>
               
                    
                
                <Route path="/chat-app-inside/:roomId"  >  
                    <Chat />                 
                </Route>
               
                <Route  path="/chat-app-inside" exact>  
                    <Chat />                 
                </Route>

            </Switch>
        

               

               

           
            
            

        </div>
    </Router>          

    )
}

export default ChatApp
