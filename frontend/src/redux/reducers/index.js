import { combineReducers } from 'redux';
import categoryReducer from './category';
import postsReducer from './posts';
import commentsReducer from './comments';
import sortByReducer from './sort';
import postReducer from './post';

export default combineReducers({
  categories: categoryReducer,
  posts: postsReducer,
  comments: commentsReducer,
  sortBy: sortByReducer,
  post: postReducer,
});
