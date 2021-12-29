import React from 'react';
import "./Widgets.css";
// import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';
import ForumIcon from '@material-ui/icons/Forum';
import RoomIcon from '@material-ui/icons/Room';
import TodayIcon from '@material-ui/icons/Today';
import ListAltIcon from '@material-ui/icons/ListAlt';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import SettingsIcon from '@material-ui/icons/Settings';

import { Avatar } from '@material-ui/core';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Messages from "./Messages";
import Map from "./Map";
import Calendar from "./Calendar";
import Tasks from "./Tasks";


function Widgets() { 
    return (
        <Router >
            <div className="widgets">
            
                <div className="widgets__controlIconos_general">

                    <ul className="widgets__controlIconos">
                        <li className="widgets__controlIcons__icon"><Link to="messages"><ForumIcon /></Link></li>
                        <li className="widgets__controlIcons__icon"><Link to="map"><RoomIcon /></Link></li>
                        <li className="widgets__controlIcons__icon"><Link to="calendar"><TodayIcon /></Link></li>
                        <li className="widgets__controlIcons__icon"><Link to="tasks"><ListAltIcon /></Link></li>
                    </ul>

                    <div className="avatar__content">
                        <Avatar />
                        
                        <div class="avatarSettings-content">
                            <div className="avatarSettings__option"><AccountBoxIcon/> <p>Perfil</p></div>
                            <div className="avatarSettings__option"><FolderSpecialIcon /><p>Documentos</p></div>
                            <div className="avatarSettings__option"><AccountBalanceWalletIcon/> <p>Wallet</p></div>
                            <div className="avatarSettings__option"><SettingsIcon /><p>Configuración</p></div>
                        </div>

                    </div>


                </div>

                <div className="widgets__input">
                    <SearchIcon  className="widgets__searchIcon"/>
                    <input placeholder="Search Post" type="text"/>
                </div>

                <div className="widgets__widgetContainer"> 
                <Switch>
                    <Route exact path="/messages">
                        <Messages />
                    </Route>
                    <Route path="/map">
                        <Map />
                    </Route>
                    <Route path="/calendar">
                        <Calendar />
                    </Route>
                    <Route path="/tasks">
                        <Tasks />
                    </Route>
                </Switch>
                </div>
            
            </div>
        </Router>
        
       
    );
}

export default Widgets;
