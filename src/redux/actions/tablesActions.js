import { TABLELIST_START, TABLELIST_SUCCESS, TABLES_FAILED_REQUEST, TABLE_START, TABLE_SUCCESS, TABLE_SAVE_START, TABLE_SAVE_SUCCESS, TABLE_REMOVE_START, TABLE_REMOVE_SUCCESS } from "./actionTypes";

export function tableList () {
    return {
        type: TABLELIST_START
    }
}

export function tableListSuccess (payload) {
    return {
        type: TABLELIST_SUCCESS,
        payload
    }
}

export function tablesRequestError (payload) {
    return {
        type: TABLES_FAILED_REQUEST,
        payload
    }
}

export function tableItem (id) {
    return {
        type: TABLE_START,
        id
    }
}

export function tableItemSuccess (payload, id) {
    return {
        type: TABLE_SUCCESS,
        payload,
        id
    }
}

export function tableItemSave (data, id) {
    return {
        type: TABLE_SAVE_START,
        data,
        id
    }
}

export function tableItemSaveSuccess () {
    return {
        type: TABLE_SAVE_SUCCESS
    }
}

export function tableItemRemove (id) {
    return {
        type: TABLE_REMOVE_START,
        id
    }
}

export function tableItemRemoveSuccess () {
    return {
        type: TABLE_REMOVE_SUCCESS
    }
}