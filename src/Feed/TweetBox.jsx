import React , {useState} from 'react';
import "./TweetBox.css";
import db from '../firebase';

//*MUI
import {Avatar , Button } from "@mui/material";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e =>{
    e.preventDefault();

    db.collection('posts').add({
      DisplayName:"Yashaswi patil",
      UserName: "phoenix_ykp",
      verified : true,
      text: tweetMessage,
      image : tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",

    });
    setTweetMessage("");
    setTweetImage("");

  }
  return (
    <div className="tweetBox">
        <form>
           <div className="tweetBox__input">
            <Avatar 
            src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
            <input 
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="What's happening?" 
            type="text"
            />
             </div>
            <input 
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageinput"
            placeholder="Optional Enter the Image URL" 
            type="text"
            type="text"/>
       
        <Button onClick={sendTweet} type="submit"  className="tweetbox__tweetButton">Tweet</Button>
        </form>
        
    </div>
  );
}

export default TweetBox;