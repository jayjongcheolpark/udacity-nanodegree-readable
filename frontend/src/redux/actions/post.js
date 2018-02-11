import { GET_POST_BY_POST_ID } from '../constants';

export const getPostByPostId = id => ({
  type: GET_POST_BY_POST_ID,
  id,
});
