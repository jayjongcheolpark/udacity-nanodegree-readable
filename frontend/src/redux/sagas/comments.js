import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getAllCommentsByPostId,
  addComment,
  deleteComment,
  editComment,
  upVoteToComment,
  downVoteToComment,
} from '../../utils/api';
import {
  GET_ALL_COMMENTS_BY_POST_ID,
  GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
  GET_ALL_COMMENTS_BY_POST_ID_RESET,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS,
  UPVOTE_TO_COMMENT,
  UPVOTE_TO_COMMENT_SUCCESS,
  DOWNVOTE_TO_COMMENT,
  DOWNVOTE_TO_COMMENT_SUCCESS,
} from '../constants/comments';
import { GET_POST_BY_POST_ID } from '../constants';

function* getAllCommentsByPostIdSaga({ id }) {
  const comments = yield call(getAllCommentsByPostId, id);
  yield put({
    type: GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
    comments,
  });
}

function* addCommentSaga(action) {
  const comment = yield call(addComment, action.comment);
  const comments = yield call(getAllCommentsByPostId, comment.parentId);
  if (comments.length > 0) {
    yield put({
      type: GET_POST_BY_POST_ID,
      id: comment.parentId,
    });
    yield put({
      type: GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
      comments,
    });
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_POST_ID_RESET,
    });
  }
}

function* deleteCommentSaga(action) {
  const comment = yield call(deleteComment, action.id);
  const comments = yield call(getAllCommentsByPostId, comment.parentId);
  yield put({
    type: GET_POST_BY_POST_ID,
    id: comment.parentId,
  });
  if (comments.length > 0) {
    yield put({
      type: GET_ALL_COMMENTS_BY_POST_ID_SUCCESS,
      comments,
    });
  } else {
    yield put({
      type: GET_ALL_COMMENTS_BY_POST_ID_RESET,
    });
  }
}

function* editCommentSaga(action) {
  const comment = yield call(editComment, action.comment);
  yield put({
    type: EDIT_COMMENT_SUCCESS,
    comment,
  });
}

function* upVoteToCommentSaga(action) {
  const comment = yield call(upVoteToComment, action.id);
  yield put({
    type: UPVOTE_TO_COMMENT_SUCCESS,
    comment,
  });
}

function* downVoteToCommentSaga(action) {
  const comment = yield call(downVoteToComment, action.id);
  yield put({
    type: DOWNVOTE_TO_COMMENT_SUCCESS,
    comment,
  });
}

const commentsSaga = [
  takeEvery(GET_ALL_COMMENTS_BY_POST_ID, getAllCommentsByPostIdSaga),
  takeLatest(ADD_COMMENT, addCommentSaga),
  takeEvery(DELETE_COMMENT, deleteCommentSaga),
  takeEvery(EDIT_COMMENT, editCommentSaga),
  takeEvery(UPVOTE_TO_COMMENT, upVoteToCommentSaga),
  takeEvery(DOWNVOTE_TO_COMMENT, downVoteToCommentSaga),
];

export default commentsSaga;
