import { ADDTABLE_START, ADDTABLE_SUCCESS, ADDTABLE_FAILED } from "../actions/actionTypes"

const initialState = {
    error: null,
}

export function addTableReducer(state = initialState, action) {
    switch (action.type) {
        case ADDTABLE_START:
            return {
                ...state,
                error: null,
            }

        case ADDTABLE_SUCCESS:
            return {
                ...state,
                error: null,
            }

        case ADDTABLE_FAILED:
            return {
                ...state,
                error: action.payload,
            }
    
        default:
            return state
    }
}