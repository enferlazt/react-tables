import { call, put } from "redux-saga/effects";
import Axios from "axios";
import { addTableSuccess, addTableFailed } from "../../actions/addTableActions";
import { loaderShow, loaderHide } from "../../actions/loaderActions";
import { push } from 'connected-react-router'

export function* addTableWorker({tableName, tableHeaders}) {
    yield put(loaderShow())
    try {
        const uid = localStorage.getItem('userId')
        yield call(() => Axios.post(`https://react-tables.firebaseio.com/tables/${uid}.json`, {tableName, tableHeaders}))
        yield put(addTableSuccess())
        yield put(loaderHide())
        yield put(push('/'))
    } catch (error) {
        yield put(loaderHide())
        yield put(addTableFailed(error.response?.data.error.message || 'Connection Error'))
    }
}