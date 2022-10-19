export const API_ROOT = 'https://www.reddit.com';

export const getPosts = async (subreddit) => {
  const rsp = await fetch(`${API_ROOT}/${subreddit}.json`);
  const json = await rsp.json();
  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const rsp = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await rsp.json();
  return json.data.children.map((subreddit) => subreddit.data);
}