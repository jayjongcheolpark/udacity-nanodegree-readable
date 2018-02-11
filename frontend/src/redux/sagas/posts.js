import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_SUCCESS,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  UPVOTE_TO_POST,
  UPVOTE_TO_POST_SUCCESS,
  DOWNVOTE_TO_POST,
  DOWNVOTE_TO_POST_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS,
  EDIT_POST_BY_POST_ID,
} from '../constants/posts';
import {
  getPostsByCategory,
  deletePost,
  upVoteToPost,
  downVoteToPost,
  addPost,
  editPostByPostId,
} from '../../utils/api';

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

function* upVoteToPostSaga({ id }) {
  const post = yield call(upVoteToPost, id);

  yield put({
    type: UPVOTE_TO_POST_SUCCESS,
    post,
  });
}

function* downVoteToPostSaga({ id }) {
  const post = yield call(downVoteToPost, id);

  yield put({
    type: DOWNVOTE_TO_POST_SUCCESS,
    post,
  });
}

function* addPostSaga(action) {
  const post = yield call(addPost, action.post);

  yield put({
    type: ADD_POST_SUCCESS,
    post,
  });
}

function* editPostByPostIdSaga(action) {
  const post = yield call(editPostByPostId, action.post);
  const posts = yield call(getPostsByCategory, post.category);

  yield put({
    type: GET_POSTS_BY_CATEGORY_SUCCESS,
    category: post.category,
    posts,
  });
}

const postsSaga = [
  takeEvery(GET_POSTS_BY_CATEGORY, getPostsByCategorySaga),
  takeEvery(DELETE_POST, deletePostSaga),
  takeEvery(UPVOTE_TO_POST, upVoteToPostSaga),
  takeEvery(DOWNVOTE_TO_POST, downVoteToPostSaga),
  takeLatest(ADD_POST, addPostSaga),
  takeLatest(EDIT_POST_BY_POST_ID, editPostByPostIdSaga),
];

export default postsSaga;
