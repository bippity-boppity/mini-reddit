import React from "react";
import './Home.css';
import Post from "../Post/Post";

const Home = () => {
  return (
    <>
      <div className="container">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  )
};

export default Home;