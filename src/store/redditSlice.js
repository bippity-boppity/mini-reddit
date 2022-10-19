import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getPosts } from '../api/reddit';

const initialState = {
  posts: [],
  isLoading: false,
  selectedSubreddit: '/r/popular',
  searchTerm: ''
};

const redditSlice = createSlice({
  name: 'redditPosts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    startGetPosts: (state) => {
      state.isLoading = true;

    },
    getPostsSuccess: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    setSelectedSubreddit: (state, action) => {
      state.isLoading = true;
      state.selectedSubreddit = action.payload;
    }
  }
});

export const {
  setPosts,
  startGetPosts,
  getPostsSuccess,
  setSelectedSubreddit
} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getPosts(subreddit);
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    console.log('error from reddit:', error);
  }
};

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== '') {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts;
  }
);