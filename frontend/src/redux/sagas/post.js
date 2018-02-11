import { call, put, takeLatest } from 'redux-saga/effects';
import { getPostByPostId } from '../../utils/api';
import { GET_POST_BY_POST_ID, GET_POST_BY_POST_ID_SUCCESS } from '../constants';

function* getPostByPostIdSaga({ id }) {
  const post = yield call(getPostByPostId, id);
  yield put({
    type: GET_POST_BY_POST_ID_SUCCESS,
    post,
  });
}

const postSaga = [takeLatest(GET_POST_BY_POST_ID, getPostByPostIdSaga)];

export default postSaga;
