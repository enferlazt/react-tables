import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { addTableReducer } from "./reducers/addTableReducer";
import { tablesReducer } from "./reducers/tablesReducer";
import { connectRouter } from 'connected-react-router'

export const rootReducer = (history) => combineReducers({
    auth: authReducer,
    loader: loaderReducer,
    addTable: addTableReducer,
    tables: tablesReducer,
    router: connectRouter(history)
})