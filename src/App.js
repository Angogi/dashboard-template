import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import ChatApp from "./chatApp/ChatApp";
import IndividuoSection from "./individuo/IndividuoSection"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SidebarOption from './SidebarOption';
// import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import HouseIcon from '@material-ui/icons/House';
import GroupIcon from '@material-ui/icons/Group';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import ChatIcon from '@material-ui/icons/Chat';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';







function App() {
  return (
    <Router>

    <div className="app">
      
    

    
          
          <div className="sideBar__menu">       
           
            <Link className="sideBar__menuOption" to="/"><Sidebar /> </Link>
            <Link className="sideBar__menuOption" to="individuo"><SidebarOption Icon={PermIdentityIcon} text="Individuo" /></Link>
            <Link className="sideBar__menuOption"><SidebarOption Icon={HouseIcon} text="Vivienda" /></Link>
            <Link className="sideBar__menuOption"><SidebarOption Icon={GroupIcon} text="Familia-Hogar" /></Link>
            <Link className="sideBar__menuOption"><SidebarOption Icon={EmojiTransportationIcon} text="Comunidad" /></Link>
            <Link className="sideBar__menuOption" to="chat"><SidebarOption Icon={ChatIcon} text="Chat" /></Link>
            <Link className="sideBar__menuOption"><SidebarOption Icon={MoreHorizIcon} text="Más" /> </Link>
            <Link className="sideBar__menuOption"><SidebarOption id Icon={MenuOpenIcon} text="" /></Link>
            <div className="sideBar__rowMenu"> <ChevronRightIcon /> </div>
         
          </div>
         
          

            <Switch>

              <Route exact path="/">
                  <Feed />
              </Route>
              <Route path="/chat" exact>
                  <ChatApp />
              </Route>
              <Route path="/individuo">
                  <IndividuoSection />
              </Route>

            </Switch> 
            
            <Widgets />  




        
      

    </div>

    </Router>  


    
  );
}

export default App;
