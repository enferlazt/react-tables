import React from 'react'
import classes from './ErrorMessage.module.scss'

export const ErrorMessage = ({error}) => (
    <div className={classes.ErrorMessage}>
        <div className={classes.ErrorMessage__content}>
            <h5>{error.replaceAll('_', ' ')}</h5>
        </div>
    </div>
)
