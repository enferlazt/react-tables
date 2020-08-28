import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { authLogout } from '../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'

const Logout = ({logout}) => {
    useEffect(() => {
        logout()
    })

    return (
        <Redirect to="/auth" />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)