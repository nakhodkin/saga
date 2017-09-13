import { call, put, takeEvery } from 'redux-saga/effects';

function* getPlanet({ planetId }) {
  try {
    const response = yield call(fetch, `http://swapi.codd/api/planets/${planetId}/`);
    const planet = yield response.json();
    yield put({ type: 'GET_PLANET_SUCCEEDED', planet });
  } catch (e) {
    console.log(e);
    yield put({ type: 'GET_PLANET_FAILED', e });
  }
}

function* watchGetPlanet() {
  yield takeEvery('GET_PLANET_REQUESTED', getPlanet);
}

function* rootSaga() {
  yield [
      watchGetPlanet(),
    ];
}

export default rootSaga;
