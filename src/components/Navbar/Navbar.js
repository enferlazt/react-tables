import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.scss'

export default ({username}) => (
    <nav className={classes.Navbar}>
        <ul>
            <li>
                <Link to="/">{username}</Link>
                <div className={classes.Navbar__dropdown}>
                    <Link to="/logout">Logout</Link>
                </div>
            </li>
            <li>
                <Link to="/add-table">Add Table</Link>
            </li>
        </ul>
    </nav>
)