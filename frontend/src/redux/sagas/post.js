import { call, put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import { getPostByPostId } from '../../utils/api';
import { GET_POST_BY_POST_ID, GET_POST_BY_POST_ID_SUCCESS, GET_POST_BY_POST_ID_FAIL } from '../constants';

function* getPostByPostIdSaga({ id }) {
  try {
    const post = yield call(getPostByPostId, id);
    if (_.isEmpty(post)) {
      post.err = 'Post was deleted';
      yield put({
        type: GET_POST_BY_POST_ID_FAIL,
        post,
      });
    }
    if (post)
      yield put({
        type: GET_POST_BY_POST_ID_SUCCESS,
        post,
      });
  } catch (e) {
    const post = {};
    post.err = e;
    yield put({
      type: GET_POST_BY_POST_ID_FAIL,
      post,
    });
  }
}

const postSaga = [takeLatest(GET_POST_BY_POST_ID, getPostByPostIdSaga)];

export default postSaga;
