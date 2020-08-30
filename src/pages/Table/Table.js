import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './Table.module.scss'
import { Submit } from '../../components/form/Submit/Submit'
import { tableItemSave, tableItemRemove } from '../../redux/actions/tablesActions'

const Table = ({tableItem, tableId, saveTable, dropTable}) => {
    const [fields, setFields] = useState([])
    const btnError = `${classes.Table__btn_err} alert`
    const btnSuccess = `${classes.Table__btn_suc} success`

    const tableName = tableItem.tableName
    const tableParams = tableItem.tableHeaders

    if(fields.length === 0) {
        if(tableItem.tableFields) {
            setFields(tableItem.tableFields)
        }else{
            const row = tableParams.map(tableParam => ({
                value: '',
                type: tableParam.selector
            }))
            setFields([row])
        }
    }

    const changeInputHandler = (e, indexRow, indexField) => {
        const value = e.target.value
        setFields(prev => prev.map((row, i) => {
            if(i === indexRow){
                row.map((field, j) => {
                    if(j === indexField){
                        field.value = value
                    }
                    return field
                })
            }
            return row
        }))
    }

    const changeCheckboxHandler = (indexRow, indexField) => {
        setFields(prev => prev.map((row, i) => {
            if(i === indexRow){
                row.map((field, j) => {
                    if(j === indexField){
                        field.value = !field.value
                    }
                    return field
                })
            }
            return row
        }))
    }

    const addRowHandler = () => {
        const row = tableParams.map(tableParam => ({
            value: '',
            type: tableParam.selector
        }))
        setFields(prev => [...prev, row])
    }

    const removeRowHandler = (id) => {
        setFields(prev => prev.filter((item, index) => id !== index ? item : null))
    }

    return (
        <div className={classes.Table}>
            <h3>{tableName}</h3>
            <div className="table-scroll" style={{marginBottom: '1rem'}}>
                <table className={classes.Table__content}>
                    <thead>
                        <tr>
                            {tableParams.map((tableParam, index) => (
                                <th key={index}>{tableParam.value}</th>
                            ))}
                            <th width="59"/>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((row, i) => (
                            <tr key={i}>
                                {row.map((field, j) => (
                                    <td key={j}>
                                        {field.type === 'checkbox' ?
                                            <input checked={!!field.value} type="checkbox" onChange={() => changeCheckboxHandler(i, j)} />
                                            : <input value={field.value} type={field.type} onChange={(e) => changeInputHandler(e, i, j)} />
                                        }
                                    </td>
                                ))}
                                <td><Submit value="✘" disabled={fields.length === 1} className={btnError} clickHandler={() => removeRowHandler(i)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                <Submit value="✚" className={btnSuccess} clickHandler={addRowHandler}/>
                <div className="grid-x grid-padding-x">
                    <div className="cell small-12 medium-6 large-6" style={{marginTop: '1rem'}}>
                        <Submit value="Save" className="success" clickHandler={() => saveTable({
                            tableName,
                            tableHeaders: tableParams,
                            tableFields: fields
                        }, tableId)} />
                    </div>
                    <div className="cell small-12 medium-6 large-6" style={{marginTop: '1rem'}}>
                        <Submit value="Drop Table" className="alert" clickHandler={() => dropTable(tableId)} />
                    </div>
                </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tableItem: state.tables.tableItem,
        tableId: state.tables.tableItemId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveTable: (data, id) => dispatch(tableItemSave(data, id)),
        dropTable: (id) => dispatch(tableItemRemove(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)