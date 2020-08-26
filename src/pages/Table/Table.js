import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './Table.module.scss'
import { Submit } from '../../components/form/Submit/Submit'

const Table = () => {
    const [fields, setFields] = useState([])
    const btnError = `${classes.Table__btn_err} alert`
    const btnSuccess = `${classes.Table__btn_suc} success`

    const tableParams = [
        {
            title: 'Name',
            type: 'text'
        },
        {
            title: 'Age',
            type: 'number'
        },
        {
            title: 'Married',
            type: 'checkbox'
        },
        {
            title: 'Time visit',
            type: 'time'
        },
        {
            title: 'Date visit',
            type: 'date'
        },
    ]

    if(fields.length === 0) {
        const row = tableParams.map(tableParam => ({
            value: '',
            type: tableParam.type
        }))
        setFields([row])
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
            type: tableParam.type
        }))
        setFields(prev => [...prev, row])
    }

    const removeRowHandler = (id) => {
        setFields(prev => prev.filter((item, index) => id !== index ? item : null))
    }

    return (
        <div className={classes.Table}>
            <div className="table-scroll" style={{marginBottom: '1rem'}}>
                <table className={classes.Table__content}>
                    <thead>
                        <tr>
                            {tableParams.map((tableParam, index) => (
                                <th key={index}>{tableParam.title}</th>
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
                    <div className="cell small-12 medium-6 large-6">
                        <Submit value="Save" className="success" />
                    </div>
                    <div className="cell small-12 medium-6 large-6">
                        <Submit value="Drop Table" className="alert" />
                    </div>
                </div>
        </div>
    )
}

export default connect(null)(Table)