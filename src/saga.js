import { call, put, takeEvery } from 'redux-saga/effects'
import client from './client'
import {
    FETCH_PROJECTS,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAIL
} from './actions'

function fetchProjectApi(lang) {
    return  client.fetchProject(lang)
}

function* fetchProject(action, state) {
    try {
        const data = yield call(fetchProjectApi, action.lang)
        yield put({
            type: FETCH_PROJECTS_SUCCESS,
            status: 'request_success',
            payload: data.items
        })
    } catch(error) {
        yield put({
            type: FETCH_PROJECTS_FAIL,
            status: 'request_fail',
        })
    }
}

export default function* rootSaga() {
    yield takeEvery(FETCH_PROJECTS, fetchProject)
}