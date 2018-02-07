import _ from 'lodash';
import { GET_POSTS_BY_CATEGORY_SUCCESS, GET_ALL_COMMENTS_BY_POST_ID_SUCCESS } from '../constants';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY_SUCCESS: {
      const { category, posts } = action;
      return { ...state, [category]: posts };
    }
    case GET_ALL_COMMENTS_BY_POST_ID_SUCCESS: {
      const { comments } = action;
      const len = comments.length;
      if (len === 0) {
        return state;
      }
      const id = comments[0].parentId;
      _.forEach(state, (value, key) => {
        if (value > 0) {
          const index = _.findIndex(value, { id });
          if (index !== -1) {
            state[key].splice(index, 1, { ...state[key][index], commentsNum: len });
          }
        }
      });
      return { ...state };
    }
    default:
      return state;
  }
};

export default postsReducer;
