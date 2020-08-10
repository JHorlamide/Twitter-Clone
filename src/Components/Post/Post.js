import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/profile_images/806970003941527552/sF8UtACd_400x400.jp" />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Hi Qazi{" "}
              <span>
                <verifiedUserIcon className="post_bedge" />
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
