import { GET_POST_BY_POST_ID_SUCCESS } from '../constants';

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_BY_POST_ID_SUCCESS: {
      return { ...action.post };
    }
    default:
      return state;
  }
};

export default postReducer;
