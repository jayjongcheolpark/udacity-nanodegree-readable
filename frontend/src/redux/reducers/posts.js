import {
  GET_POSTS_BY_CATEGORY_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_TO_POST_SUCCESS,
  DOWNVOTE_TO_POST_SUCCESS,
  ADD_POST_SUCCESS,
} from '../constants';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY_SUCCESS: {
      const { category, posts } = action;
      return { ...state, [category]: posts };
    }
    case DELETE_POST_SUCCESS: {
      const { id, category } = action.post;
      const rest = state[category].filter(post => post.id !== id);

      return { ...state, [category]: rest };
    }
    case UPVOTE_TO_POST_SUCCESS:
    case DOWNVOTE_TO_POST_SUCCESS: {
      const { id, category } = action.post;
      if (state[category] && state[category].length > 0) {
        const newPosts = state[category].map(post => (post.id === id ? action.post : post));
        return { ...state, [category]: newPosts };
      }
      return state;
    }
    case ADD_POST_SUCCESS: {
      const { post } = action;
      const newPosts = state[post.category].push(post);
      return { ...state, [post.category]: newPosts };
    }
    default:
      return state;
  }
};

export default postsReducer;
