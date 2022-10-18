import React, { useEffect } from "react";
import './Home.css';
import Post from "../Post/Post";
import { fetchPosts, selectFilteredPosts } from "../../store/redditSlice";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const reddit = useSelector((state) => state.reddit);
  const { isLoading, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  if (isLoading) {
    return (
      <div className="home_loader">
        <i className="fa-solid fa-spinner fa-spin fa-2xl"></i>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        {posts.map((post, index) => (
          <Post
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </>
  )
};

export default Home;