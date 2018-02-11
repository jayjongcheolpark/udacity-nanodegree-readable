import {
  GET_POSTS_BY_CATEGORY,
  DELETE_POST,
  UPVOTE_TO_POST,
  DOWNVOTE_TO_POST,
  ADD_POST,
  EDIT_POST_BY_POST_ID,
} from '../constants';

export const getPostsByCategory = category => ({
  type: GET_POSTS_BY_CATEGORY,
  category,
});

export const deletePost = id => ({
  type: DELETE_POST,
  id,
});

export const upVoteToPost = id => ({
  type: UPVOTE_TO_POST,
  id,
});

export const downVoteToPost = id => ({
  type: DOWNVOTE_TO_POST,
  id,
});

export const addPost = post => ({
  type: ADD_POST,
  post,
});

export const editPostByPostId = post => ({
  type: EDIT_POST_BY_POST_ID,
  post,
});
