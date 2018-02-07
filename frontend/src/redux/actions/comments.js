import { GET_ALL_COMMENTS_BY_POST_ID } from '../constants/comments';

export const getAllCommentsByPostId = id => ({
  type: GET_ALL_COMMENTS_BY_POST_ID,
  id,
});
