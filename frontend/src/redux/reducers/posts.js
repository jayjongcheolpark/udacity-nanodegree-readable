import {
  GET_POSTS_BY_CATEGORY_SUCCESS,
  DELETE_POST_SUCCESS,
  UPVOTE_TO_POST_SUCCESS,
  DOWNVOTE_TO_POST_SUCCESS,
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
      const newPosts = state[category].map(post => (post.id === id ? action.post : post));
      return { ...state, [category]: newPosts };
    }
    default:
      return state;
  }
};

export default postsReducer;
