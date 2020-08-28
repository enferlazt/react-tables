import { put, call, takeEvery, delay } from 'redux-saga/effects'
import { AUTH_START, AUTH_LOGOUT, AUTH_AUTOLOGIN } from '../actions/actionTypes'
import { loaderShow, loaderHide } from '../actions/loaderActions'
import { authFailed, authSuccess, authLogout } from '../actions/authActions'
import Axios from 'axios'

export function* authSaga () {
    yield takeEvery(AUTH_START, signInWorker)
    yield takeEvery(AUTH_LOGOUT, logoutWorker)
    yield takeEvery(AUTH_AUTOLOGIN, autologinWorker)
}

function* signInWorker (action) {
    yield put(loaderShow())
    try {
        const response = yield call(() => Axios.post(action.url, {email: action.email, password: action.password, returnSecureToken: true}))
        yield localStorage.setItem('token', response.data.idToken)
        yield localStorage.setItem('userId', response.data.localId)
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
        yield localStorage.setItem('expirationDate', expirationDate)
        yield localStorage.setItem('email', response.data.email)
        yield put(authSuccess(response.data.email))
        yield put(loaderHide())
        yield delay(response.data.expiresIn * 1000)
        yield put(authLogout())
    } catch(error) {
        yield put(authFailed(error))
    }
}

function* logoutWorker () {
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('userId')
    yield localStorage.removeItem('expirationDate')
    yield localStorage.removeItem('email')
}

function* autologinWorker () {
    const token = localStorage.getItem('token')
    if(!token) {
        yield put(authLogout())
    } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'))
        if(expirationDate <= new Date()) {
            yield put(authLogout())
        } else {
            const email = localStorage.getItem('email')
            yield put(authSuccess(email))
            yield delay(expirationDate.getTime() - new Date().getTime())
            yield put(authLogout())
        }
    }
}