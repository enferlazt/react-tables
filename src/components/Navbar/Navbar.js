import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import classes from './Navbar.module.scss'

export default ({username}) => {
    const loc = useLocation()
    return (
        <nav className={classes.Navbar}>
            <ul>
                <li>
                    <Link to="/">{username}</Link>
                    <NavLink to="/logout">
                        <div className={classes.Navbar__dropdown}>
                            Logout
                        </div>
                    </NavLink>
                </li>
                <li>
                {loc.pathname === '/' ?
                    <Link to="/add-table">Add Table</Link> :
                    <Link to="/">Back</Link>
                }
                </li>
            </ul>
        </nav>
    )
}