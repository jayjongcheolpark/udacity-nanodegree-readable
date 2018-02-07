import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_POSTS_BY_CATEGORY, GET_POSTS_BY_CATEGORY_SUCCESS } from '../constants/posts';
import { getPostsByCategory } from '../../utils/api';

function* getPostsByCategorySaga(action) {
  const { category } = action;
  const posts = yield call(getPostsByCategory, category);

  yield put({
    type: GET_POSTS_BY_CATEGORY_SUCCESS,
    category,
    posts,
  });
}

const postsSaga = [takeEvery(GET_POSTS_BY_CATEGORY, getPostsByCategorySaga)];

export default postsSaga;
