import { GET_POSTS_BY_CATEGORY, DELETE_POST } from '../constants';

export const getPostsByCategory = category => ({
  type: GET_POSTS_BY_CATEGORY,
  category,
});

export const deletePost = id => ({
  type: DELETE_POST,
  id,
});
