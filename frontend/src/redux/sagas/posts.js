import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
} from '../constants/posts';
import { getPostsByCategory, deletePost } from '../../utils/api';

function* getPostsByCategorySaga({ category }) {
  const posts = yield call(getPostsByCategory, category);

  yield put({
    type: GET_POSTS_BY_CATEGORY_SUCCESS,
    category,
    posts,
  });
}

function* deletePostSaga({ id }) {
  const post = yield call(deletePost, id);

  yield put({
    type: DELETE_POST_SUCCESS,
    post,
  });
}

const postsSaga = [takeEvery(GET_POSTS_BY_CATEGORY, getPostsByCategorySaga), takeEvery(DELETE_POST, deletePostSaga)];

export default postsSaga;
