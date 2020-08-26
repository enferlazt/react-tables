import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './AddTable.module.scss'
import { Submit } from '../../components/form/Submit/Submit'
import { Input } from '../../components/form/Input/Input'
import { validInput } from '../../additional/validInput'

const AddTable = () => {
    const [tableName, setTableName] = useState({
        value: '',
        valid: true
    })
    const [headers, setHeaders] = useState([])
    const types = ['text', 'number', 'checkbox', 'time', 'date']
    const btnError = `${classes.AddTable__btn_err} alert`
    const btnSuccess = `${classes.AddTable__btn_suc} success`

    if(headers.length === 0) {
        setHeaders([{
            value: '',
            type: 'text',
            label: 'Column Title',
            id: 'column-title-0',
            validation: {
                minLength: 1
            },
            valid: true,
            selector: 'text',
        }])
    }

    const changeInputHandler = (e, item) => {
        const value = e.target.value
        setHeaders(prev => prev.map((header, index) => {
            if(index === item){
                header.value = value
                header.valid = validInput(header.value, header.validation)
            }
            return header
        }))
    }

    const changeSelectHandler = (e, item) => {
        const value = e.target.value
        setHeaders(prev => prev.map((header, index) => {
            if(index === item){
                header.selector = value
            }
            console.log(header)
            return header
        }))
    }

    const addHandler = () => {
        setHeaders(prev => ([
            ...prev,
            {
                ...prev[0],
                value: '',
                valid: true,
                id: `column-title-${headers.length}`,
                selector: 'text'
            }
        ]))
    }

    const removeHandler = (id) => {
        setHeaders(prev => prev.filter((header, index) => index !== id ? header : null))
    }

    const submitFormHandler = () => {
        let validForm = true
        if(!validInput(tableName.value, {minLength: 1})){
            setTableName({
                value: tableName.value,
                valid: false
            })
        }
        headers.forEach((header, index) => {
            if(!validInput(header.value, header.validation)){
                setHeaders(prev => prev.filter((itemPrev, indexPrev) => {
                    if(indexPrev === index){
                        itemPrev.valid = false
                    }
                    return itemPrev
                }))
            }
        })
        if(validForm){

        }
    }

    return (
        <div className={classes.AddTable}>
            <form onSubmit={(e) => e.preventDefault()} >
                <Input
                    value={tableName.value}
                    label="Table Name"
                    type="text"
                    id="table_name"
                    valid={tableName.valid}

                    changeHandler={(e) => {
                        setTableName({
                            value: e.target.value,
                            valid: validInput(e.target.value, {minLength: 1})
                        })
                    }}
                />
                {headers.map((header, index) => (
                    <div className="grid-x grid-padding-x" key={index}>
                        <div className="cell small-12 medium-8 large-8">
                            <Input 
                                item={index}

                                value={header.value}
                                id={header.id}
                                type={header.type}
                                label={`${header.label} ${index + 1}`}
                                valid={header.valid}

                                changeHandler={changeInputHandler}
                            />
                        </div>
                        <div style={{position: "relative"}} className="cell small-12 medium-4 large-4">
                            <label>Column Type {index + 1}</label>
                            <select className={classes.AddTable__select} value={header.selector} onChange={(e) => changeSelectHandler(e, index)}>
                            {types.map((type, i) => {
                                const title = type[0].toUpperCase() + type.slice(1)
                                return (
                                    <option key={i} value={type}>{title}</option>
                                )}
                            )}
                            </select>
                            <Submit value="✘" disabled={headers.length === 1} className={btnError} clickHandler={() => removeHandler(index)}></Submit>
                        </div>
                    </div>
                ))}
                <Submit value="✚" className={btnSuccess} clickHandler={addHandler}></Submit>
                <Submit value="Add Table" className="success" clickHandler={submitFormHandler}></Submit>
            </form>
        </div>
    )
}

export default connect(null)(AddTable)