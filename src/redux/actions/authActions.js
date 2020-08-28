import { AUTH_START, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT, AUTH_AUTOLOGIN } from "./actionTypes";

export function auth(email, password, url) {
    return {
        type: AUTH_START,
        email,
        password,
        url
    }
}

export function authSuccess(payload) {
    return {
        type: AUTH_SUCCESS,
        payload
    }
}

export function authFailed(payload) {
    return {
        type: AUTH_FAILED,
        payload
    }
}

export function authLogout () {
    return {
        type: AUTH_LOGOUT
    }
}

export function autoLogin () {
    return {
        type: AUTH_AUTOLOGIN
    }
}