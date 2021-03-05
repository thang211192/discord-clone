import React from 'react'
import './Slidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function Slidebar() {
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <h3>Van thang</h3>
                <ExpandMoreIcon/>
            </div>
            <div className='sidebar__channels'>
                <div className='sidebar__channelsHeader'>
                    <div className='sidebar__header'>
                        <ExpandMoreIcon/>
                        <h4> channel</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"/>
                </div>
                <div className='sidebar__channelsList'>
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className='sidebar__voice'>
                <SignalCellularAltIcon
                className="sidebar__voiceIcon"
                fontSize ="large"
                />
                <div className='sidebar__voiceInfo'>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className='sidebar__voiceIcons'>
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className='sidebar__profile'>
                <Avatar src="https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/116712349_1136919406692362_6264826831671252910_o.jpg?_nc_cat=100&ccb=3&_nc_sid=dbb9e7&_nc_ohc=NoB-DmVy21oAX9Z1zQD&_nc_ht=scontent.fhan2-6.fna&tp=27&oh=89de25350d6dae28353b9f61d2b55f4c&oe=6064D423"/>
                <div className='sidebar__profileInfo'>
                    <h3>@vanthang</h3>
                    <p>#id</p>
                </div>
                <div className='sidebar_profileIcons'>
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slidebar
