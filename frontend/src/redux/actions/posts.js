import { GET_POSTS_BY_CATEGORY } from '../constants';

export const getPostsByCategory = category => ({
  type: GET_POSTS_BY_CATEGORY,
  category,
});
