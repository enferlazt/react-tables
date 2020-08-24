import React from 'react'
import classes from './Submit.module.scss'

export const Submit = props => {
    const cls = [classes.Submit]

    return (
        <div className={cls.join(' ')}>
            <input type="submit" className="button" value={props.value} onClick={props.clickHandler}></input>
            {!props.formValid && <span style={{marginTop: '1rem'}} className="form-error is-visible">The form has incorrect values in the fields</span>}
        </div>
    )
}