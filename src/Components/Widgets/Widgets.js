import React, {forwardRef} from "react";
import "./Widgets.css";

/* Material UI Icons */
import SearchIcon from "@material-ui/icons/Search";

/* From React Twitter Embed */
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

// <TwitterTweetEmbed tweetId={"858551177860055040"} />;

const Widgets = forwardRef(({props}, ref) => {
  return (
    <div className="widgets" ref={ref}>
      {/* Input Widgest */}
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      {/* Widgets Container */}
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        {/* Am facing errors with this line of code. Please help */}
        <TwitterTweetEmbed tweetId={"858551177860055040"} />

        {/* Am facing errors with this line of code. Please help */}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="J_Horlamide"
          options={{ height: 400 }}
        />

        {/* Am facing errors with this line of code. Please help */}
        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "J_Horlamide" }}
        />
      </div>
    </div>
  );
});

export default Widgets;
