import React, { useState, useEffect } from "react";
import "./Feed.css";

/* Custom Component */
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../Config/Firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home </h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <Post
        displayName="Olamide"
        text="I challeng you to build a twitter clone with React"
        username="J_Horlamide"
        image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        avatar="https://pbs.twimg.com/profile_images/1206671022524645381/v9yd8z4T_x96.jpg"
        verified={true}
      />
    </div>
  );
};

export default Feed;
