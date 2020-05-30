import { call, put, takeLatest } from 'redux-saga/effects'
import { PROXY_URL, TMDB_API } from '../../constants';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action : any) {
   try {
      // const user = yield call(Api.fetchUser, action.payload.userId);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* homePageSaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default homePageSaga;