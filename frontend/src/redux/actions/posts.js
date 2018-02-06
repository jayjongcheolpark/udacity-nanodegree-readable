import { GET_POSTS_BY_CATEGORY } from "../constants/posts";

export const getPostsByCategory = (category) => ({
  type: GET_POSTS_BY_CATEGORY,
  category
})