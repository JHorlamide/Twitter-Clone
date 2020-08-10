import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg" />
          <input placeholder="what's happening?" type="text" />
        </div>
        <input
          placeholder="Enter image URL"
          type="text"
          className="tweetBox_imageInput"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
