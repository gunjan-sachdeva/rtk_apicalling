import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { fetchDataSuccess, fetchDataFailure, fetchData } from './dataSlice'; // Make sure fetchData is imported

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure());
  }
}

function* rootSaga() {
  yield takeLatest(fetchData.type, fetchDataSaga); // Use fetchData.type instead of fetchData
}

export default rootSaga;
