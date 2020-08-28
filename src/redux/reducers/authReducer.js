import { AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT } from "../actions/actionTypes"

const initialState = {
    username: null,
    error: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                username: action.payload
            }

        case AUTH_FAILED:
            return {
                ...state,
                error: action.payload
            }

        case AUTH_LOGOUT:
            return {
                ...state,
                username: null
            }
    
        default: return state
    }
}