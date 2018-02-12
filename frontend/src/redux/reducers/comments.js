import {
  GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_POST_ID_RESET,
  EDIT_COMMENT_SUCCESS,
  UPVOTE_TO_COMMENT_SUCCESS,
  DOWNVOTE_TO_COMMENT_SUCCESS,
} from '../constants';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS_BY_POST_ID_SUCCESS: {
      const { comments } = action;

      return [...comments];
    }
    case GET_ALL_COMMENTS_BY_POST_ID_RESET:
      return [];
    case UPVOTE_TO_COMMENT_SUCCESS:
    case DOWNVOTE_TO_COMMENT_SUCCESS:
    case EDIT_COMMENT_SUCCESS: {
      const newState = state.map(comment => {
        if (comment.id === action.comment.id) {
          return action.comment;
        }
        return comment;
      });
      return [...newState];
    }
    default:
      return state;
  }
};

export default commentsReducer;
