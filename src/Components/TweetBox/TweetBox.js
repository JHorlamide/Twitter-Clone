import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1206671022524645381/v9yd8z4T_x96.jpg" />
          <input placeholder="what's happening?" type="text" />
        </div>

        <input
          placeholder="Enter image url"
          type="text"
          className="tweetBox__imageInput"
        />

        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;

// https://pbs.twimg.com/profile_images/1206671022524645381/v9yd8z4T_x96.jpg
