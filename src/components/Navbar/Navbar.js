import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.scss'

export default () => (
    <nav className={classes.Navbar}>
        <ul>
            <li>
                <Link to="/">List of Tables</Link>
            </li>
            <li>
                <Link to="/table">Table</Link>
            </li>
            <li>
                <Link to="/auth">Auth</Link>
            </li>
            <li>
                <Link to="/logout">Logout</Link>
            </li>
            <li>
                <Link to="/add-table">Add Table</Link>
            </li>
        </ul>
    </nav>
)