import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed,
           TwitterShareButton,
           TwitterTweetEmbed, } from
         'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
       <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon"/>
          <input placeholder="Search twitter" type="text"/>
       </div>
       <div className="widgets__container">
         <h2>What's Happening?</h2>
         <TwitterTweetEmbed tweetId={"1417377419565015040"}/>
         <TwitterTimelineEmbed
          sourceType="profile"
          screenName="phoenix_ykp"
          options={{ height: 400 }}
        />

         <TwitterShareButton
          url={"https://www.linkedin.com/in/yashaswi-patil-66a4b3154/"}
          options={{ text: "#reactjs is awesome", via: "phoenix_ykp" }}
        />
       </div>
    </div>
  )
}

export default Widgets;