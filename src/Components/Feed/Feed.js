import React, { useState, useEffect } from "react";
import "./Feed.css";
import FlipMove from "react-flip-move";

/* Custom Component */
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../Config/Firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      return setPosts(
        snapshot.docs.map((doc) => doc.data())
      );
    });
    console.log(posts);
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
      <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              displayName={post.displayName}
              text={post.text}
              username={post.username}
              image={post.image}
              avatar={post.avatar}
              verified={true}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
