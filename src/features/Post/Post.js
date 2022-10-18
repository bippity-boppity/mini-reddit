import React from "react";
import "./Post.css";

const Post = (props) => {
  const { post } = props;
  
  return (
    <>
      <div className="post">
        <div className="post_voteBar">
          <button type="button">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <p>56</p>
          <button type="button">
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        <div className="post_content">
          <p className="post_title">{post.title}</p>
        </div>
      </div>
    </>
  )
};

export default Post;