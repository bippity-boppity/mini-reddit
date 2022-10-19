import React from "react";
import "./Post.css";
import formatNumber from "../../utils/formatNumber";

const Post = (props) => {
  const { post } = props;
  
  return (
    <>
      <div className="post">
        <div className="post_voteBar">
          <button type="button">
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <p>{formatNumber(post.score, 1)}</p>
          <button type="button">
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        <div className="post_content">
          <p className="post_details"><strong>{post.subreddit_name_prefixed}</strong> posted by {post.author}</p>
          <p className="post_title">{post.title}</p>

          {post.post_hint == 'image' &&
            <div className="post_innerContent">
              <img src={post.url} className="post_img" />
            </div>
          }

          {post.post_hint == 'link' && 
            <div className="post_innerContent">
              <a href={post.url} target="_blank">
                  {post.url.substring(0, 30)}
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
          }

          {post.post_hint == 'hosted:video' && 
            <div className="post_innerContent">
              <video src={post.media.reddit_video.fallback_url} preload="none" controls width="100%"></video>
            </div>
          }

          <p><i className="fa-solid fa-comment"></i> {formatNumber(post.num_comments, 1)} comments</p>
        </div>
      </div>
    </>
  )
};

export default Post;