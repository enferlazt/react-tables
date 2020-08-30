import { AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT, AUTH_START } from "../actions/actionTypes"

const initialState = {
    username: null,
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START: 
            return {
                ...state,
                error: null
            }
            
        case AUTH_SUCCESS:
            return {
                ...state,
                username: action.payload,
                error: null
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