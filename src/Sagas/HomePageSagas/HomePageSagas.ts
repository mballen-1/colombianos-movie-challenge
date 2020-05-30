import { call, put, takeLatest } from 'redux-saga/effects'
// import { PROXY_URL, TMDB_API } from '../../constants';

function* fetchDefaultMovies(action : any) {
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
      console.log('fetching movies')
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* homePageSaga() {
  yield takeLatest('DEFAULT_MOVIES_REQUESTED', fetchDefaultMovies);
}

export default homePageSaga;