import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS } from '../constants/category';
import { getAllCategories } from '../../utils/api';

function* getAllCategoriesSaga() {
  const categories = yield call(getAllCategories);
  yield put({
    type: GET_ALL_CATEGORIES_SUCCESS,
    categories,
  });
}

const categorySaga = [takeLatest(GET_ALL_CATEGORIES, getAllCategoriesSaga)];

export default categorySaga;
