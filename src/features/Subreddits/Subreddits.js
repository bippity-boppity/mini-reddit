import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubreddits, selectSubreddits } from '../../store/subredditSlice';
import { setSelectedSubreddit } from '../../store/redditSlice';
import "./Subreddits.css";

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (
    <>
      <div className="subreddits_container">
        <h2><strong>Popular Subreddits</strong></h2>

        {subreddits.map((subreddit) => (
          <button type="button" onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>{subreddit.display_name}</button>
        ))}
      </div>
    </>
  )
};

export default Subreddits;