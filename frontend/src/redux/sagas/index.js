import { all } from 'redux-saga/effects';
import categorySaga from './category';
import postsSaga from './posts';
import commentsSaga from './comments';
import postSaga from './post';

export default function* rootSaga() {
  yield all([...categorySaga, ...postsSaga, ...commentsSaga, ...postSaga]);
}
