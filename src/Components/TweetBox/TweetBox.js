import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";

import db from "../Config/Firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Horlamide",
      username: "jhorlamide",
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1206671022524645381/v9yd8z4T_x96.jpg",
    });
  };

  return (
    <div className="tweetBox">
      <form onSubmit={sendTweet}>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1206671022524645381/v9yd8z4T_x96.jpg" />
          <input
            placeholder="what's happening?"
            type="text"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>

        <input
          placeholder="Enter image url"
          type="text"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />

        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onSubmit={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;

// https://pbs.twimg.com/profile_images/1206671022524645381/v9yd8z4T_x96.jpg
