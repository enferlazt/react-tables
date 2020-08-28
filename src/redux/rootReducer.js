import { combineReducers } from "redux";
import { AuthReducer } from "./reducers/authReducer";
import { loaderReducer } from "./reducers/loaderReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    loader: loaderReducer
})