import React from 'react'
import classes from './Submit.module.scss'

export const Submit = props => {
    const cls = [classes.Submit, 'button']
    if(props.className) cls.push(props.className)

    return (
        <input type="submit" className={cls.join(' ')} disabled={props.disabled} value={props.value} onClick={props.clickHandler}></input>
    )
}