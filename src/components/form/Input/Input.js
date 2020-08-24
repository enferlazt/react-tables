import React from 'react'
import classes from './Input.module.scss'

export const Input = (props) => {
    const labelClassName = []
    const inputClassName = []

    if(!props.valid){
        labelClassName.push('is-invalid-label')
        inputClassName.push('is-invalid-input')
    }

    return (
        <div className={classes.Input}>
            <label className={labelClassName.join(' ')} htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                autoComplete="off"
                value={props.value}
                className={inputClassName.join(' ')}

                onChange={(e) => props.changeHandler(e, props.item)}
            />
            {!props.valid && <span className="form-error is-visible">{
                props.errMessage ? props.errMessage : 'This field is required'
            }</span>}
        </div>
    )
}