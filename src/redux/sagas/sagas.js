import { takeEvery } from "redux-saga/effects";
import { AUTH_START, AUTH_LOGOUT, AUTH_AUTOLOGIN, ADDTABLE_START, TABLELIST_START, TABLE_START, TABLE_SAVE_START, TABLE_REMOVE_START } from "../actions/actionTypes";
import { signInWorker, logoutWorker, autologinWorker } from "./workers/authWorkers";
import { addTableWorker } from "./workers/addTableWorkers";
import { tableListWorker, tableWorker, tableSaveWorker, tableRemoveWorker } from "./workers/tablesWorkers";

export function* sagas () {
    yield takeEvery(AUTH_START, signInWorker)
    yield takeEvery(AUTH_LOGOUT, logoutWorker)
    yield takeEvery(AUTH_AUTOLOGIN, autologinWorker)

    yield takeEvery(ADDTABLE_START, addTableWorker)

    yield takeEvery(TABLELIST_START, tableListWorker)
    yield takeEvery(TABLE_START, tableWorker)
    yield takeEvery(TABLE_SAVE_START, tableSaveWorker)
    yield takeEvery(TABLE_REMOVE_START, tableRemoveWorker)
}