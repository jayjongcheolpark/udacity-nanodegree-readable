import { GET_ALL_COMMENTS_BY_POST_ID_SUCCESS } from '../constants';

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_COMMENTS_BY_POST_ID_SUCCESS: {
      const { comments } = action;

      return [...comments];
    }
    default:
      return state;
  }
};

export default commentsReducer;
