import { put, call } from "redux-saga/effects";
import { loaderShow, loaderHide } from "../../actions/loaderActions";
import Axios from "axios";
import { tableListSuccess, tablesRequestError, tableItemSuccess, tableItemSaveSuccess, tableItemRemoveSuccess } from "../../actions/tablesActions";
import { push } from "connected-react-router"

export function* tableListWorker () {
    yield put(loaderShow())
    try {
        const uid = localStorage.getItem('userId')
        const response = yield call(() => Axios.get(`https://react-tables.firebaseio.com/tables/${uid}.json`))
        yield put(loaderHide())
        yield put(tableListSuccess(response.data))
    } catch (error) {
        yield put(loaderHide())
        yield put(tablesRequestError(error))
    }
}

export function* tableWorker (action) {
    yield put(loaderShow())
    try {
        const uid = localStorage.getItem('userId')
        const response = yield call(() => Axios.get(`https://react-tables.firebaseio.com/tables/${uid}/${action.id}.json`))
        yield put(loaderHide())
        yield put(tableItemSuccess(response.data, action.id))
        yield put(push(`/table/${action.id}`))
    } catch (error) {
        yield put(loaderHide())
        yield put(tablesRequestError(error))
    }
}

export function* tableSaveWorker (action) {
    yield put(loaderShow())
    try {
        const uid = localStorage.getItem('userId')
        yield call(() => Axios.put(`https://react-tables.firebaseio.com/tables/${uid}/${action.id}.json`, action.data))
        yield put(loaderHide())
        yield put(push('/'))
        yield put(tableItemSaveSuccess())
    } catch (error) {
        yield put(loaderHide())
        yield put(tablesRequestError(error))
    }
}

export function* tableRemoveWorker (action) {
    yield put(loaderShow())
    try {
        const uid = localStorage.getItem('userId')
        yield call(() => Axios.delete(`https://react-tables.firebaseio.com/tables/${uid}/${action.id}.json`))
        yield put(loaderHide())
        yield put(push('/'))
        yield put(tableItemRemoveSuccess())
    } catch (error) {
        yield put(loaderHide())
        yield put(tablesRequestError(error))
    }
}