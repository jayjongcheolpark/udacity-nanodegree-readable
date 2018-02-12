import { GET_POST_BY_POST_ID_SUCCESS, GET_POST_BY_POST_ID_FAIL } from '../constants';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_BY_POST_ID_SUCCESS:
    case GET_POST_BY_POST_ID_FAIL: {
      return { ...action.post };
    }
    default:
      return state;
  }
};

export default postReducer;
