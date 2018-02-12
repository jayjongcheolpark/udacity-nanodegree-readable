import {
  GET_ALL_COMMENTS_BY_POST_ID,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  UPVOTE_TO_COMMENT,
  DOWNVOTE_TO_COMMENT,
} from '../constants/comments';

export const getAllCommentsByPostId = id => ({
  type: GET_ALL_COMMENTS_BY_POST_ID,
  id,
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment,
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id,
});

export const editComment = comment => ({
  type: EDIT_COMMENT,
  comment,
});

export const upVoteToComment = id => ({
  type: UPVOTE_TO_COMMENT,
  id,
});

export const downVoteToComment = id => ({
  type: DOWNVOTE_TO_COMMENT,
  id,
});
