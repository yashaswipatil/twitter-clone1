import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption.jsx";

//*MUI
import {Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArticleIcon from '@mui/icons-material/Article';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingIcon from '@mui/icons-material/Pending';

function Sidebar() {
  return (
    <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon"/>
    
     <SidebarOption
       text="Home"
       Icon={<HomeIcon/>}
     />
     <SidebarOption
       text="Explore"
       Icon={<TagIcon/>}
     />
     <SidebarOption
       text="Notifications"
       Icon={<NotificationsNoneIcon/>}
     />
     <SidebarOption
       text="Messages"
       Icon={<MailOutlineIcon/>}
     />
      <SidebarOption
       text="Bookmarks"
       Icon={<BookmarkBorderIcon/>}
     />
     <SidebarOption
       text="Lists"
       Icon={<ArticleIcon/>}
     /> 
     <SidebarOption
       text="Profile"
       Icon={<PermIdentityIcon/>}
     />
     <SidebarOption
       text="More"
       Icon={<PendingIcon/>}
     />

        {/* button --> tweet */}
        <Button variant="outlined"  className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
  );
}

export default Sidebar;