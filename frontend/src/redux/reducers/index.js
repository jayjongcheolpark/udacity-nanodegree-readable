import { combineReducers } from 'redux';
import categoryReducer from './category';
import postsReducer from './posts';
import commentsReducer from './comments';

export default combineReducers({
  categories: categoryReducer,
  posts: postsReducer,
  comments: commentsReducer,
});
