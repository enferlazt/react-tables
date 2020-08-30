import { ADDTABLE_START, ADDTABLE_SUCCESS, ADDTABLE_FAILED } from "./actionTypes";

export function addTable(tableName, tableHeaders) {
    return {
        type: ADDTABLE_START,
        tableName,
        tableHeaders
    }
}

export function addTableSuccess() {
    return {
        type: ADDTABLE_SUCCESS
    }
}

export function addTableFailed(payload) {
    return {
        type: ADDTABLE_FAILED,
        payload
    }
}