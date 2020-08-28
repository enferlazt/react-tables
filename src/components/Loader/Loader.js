import React from 'react'
import classes from './Loader.module.scss'

export const Loader = () => (
    <div className={classes.Loader}>
        <div className={classes.Loader__spinner}>
            <div className={classes.Loader__spinner_lds_default}><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/><div/></div>
            <h3>Loading</h3>
        </div>
    </div>
)