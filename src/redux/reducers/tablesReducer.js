import { TABLELIST_START, TABLELIST_SUCCESS, TABLES_FAILED_REQUEST, TABLE_START, TABLE_SUCCESS, TABLE_SAVE_START, TABLE_SAVE_SUCCESS, TABLE_REMOVE_START, TABLE_REMOVE_SUCCESS } from "../actions/actionTypes";

const initialState = {
    error: null,
    listOfTables: {},
    tableItem: {},
    tableItemId: null
}

export function tablesReducer (state = initialState, action) {
    switch (action.type) {
        case TABLELIST_START:
            return {
                ...state,
                error: null,
                listOfTables: {}
            }

        case TABLELIST_SUCCESS:
            return {
                ...state,
                error: null,
                listOfTables: action.payload
            }
            
        case TABLES_FAILED_REQUEST:
            return {
                ...state,
                error: action.payload,
            }
            
        case TABLE_START:
            return {
                ...state,
                error: null,
                tableItem: {},
                tableItemId: null
            }
            
        case TABLE_SUCCESS:
            return {
                ...state,
                error: null,
                tableItem: action.payload,
                tableItemId: action.id
            }
            
        case TABLE_SAVE_START:
            return {
                ...state,
                error: null,
            }
            
        case TABLE_SAVE_SUCCESS:
            return {
                ...state,
                error: null,
                tableItem: {},
                tableItemId: null
            }
            
        case TABLE_REMOVE_START:
            return {
                ...state,
                error: null,
            }
    
            
        case TABLE_REMOVE_SUCCESS:
            return {
                ...state,
                error: null,
                tableItem: {},
                tableItemId: null
            }
                
        default:
            return state
    }
}