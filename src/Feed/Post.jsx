import React  , {forwardRef} from 'react';
import './Post.css';
//*MUI
import {Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

const Post = forwardRef ( ({
     DisplayName , 
     UserName , 
     verified , 
     text , 
     image , 
     avatar} , ref) => {
  return (
    <div className="post" ref={ref}>
        <div className="post__avatar">
            <Avatar  src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div classNamee="post__headertext">
                    <h3>
                    {DisplayName}
                    <span className="post___headerSpecial">
                        
                      {verified &&  <VerifiedIcon className="post__badge"/>} @{UserName}
                        </span>
                     </h3>
                </div>
                <div claassName="post__description">
                    <p>{text}</p>
                </div>
            </div>
            <img  src={image}  alt=""/>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small"/>
                <RepeatIcon fontSize="small"/>
                <FavoriteBorderIcon fontSize="small"/>
                <IosShareIcon fontSize="small"/>
            </div>
        </div>
    </div>
  )
}
);

export default Post;