import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllCommentsById } from '../../utils/api';
import {
  GET_ALL_COMMENTS_BY_POST_ID,
  GET_ALL_COMMENTS_BY_POST_ID_SUCCESS
} from '../constants/comments'

function* getAllCommentsByPostIdSaga({ id }) {
  const comments = yield call(getAllCommentsById, id)
  console.error(id, comments)
  yield put({
    type: GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
    comments
  })
}

const commentsSaga = [
  takeEvery(GET_ALL_COMMENTS_BY_POST_ID, getAllCommentsByPostIdSaga)
]

export default commentsSaga