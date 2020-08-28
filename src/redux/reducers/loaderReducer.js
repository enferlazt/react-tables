import { LOADER_SHOW, LOADER_HIDE } from "../actions/actionTypes"

const initialState = {
    loader: false
}

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_SHOW:
            return ({...state, loader: true})

        case LOADER_HIDE:
            return ({...state, loader: false})

        default:
            return state
    }
}