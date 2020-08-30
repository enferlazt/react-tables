import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './Auth.module.scss'
import { Input } from '../../components/form/Input/Input'
import { Submit } from '../../components/form/Submit/Submit'
import { validInput } from '../../additional/validInput'
import { auth } from '../../redux/actions/authActions'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'

const Auth = ({authFetch, error}) => {
    const [signIn, setSignIn] = useState([
        {
            value: '',
            type: 'text',
            label: 'Email',
            id: 'sign-in-email',
            validation: {
                regEx: /^[a-z0-9_-]+(\.[a-z0-9_-]+)*@([a-z0-9]+(-[a-z0-9]+)?\.)+[a-z0-9]+(-[a-z0-9]+)?$/i
            },
            errMessage: 'Invalid Email',
            valid: true
        },
        {
            value: '',
            type: 'password',
            label: 'Password',
            id: 'sign-in-password',
            validation: {
                minLength: 6
            },
            errMessage: 'Password must contain 6 or more characters',
            valid: true
        }
    ])

    const [signUp, setSignUp] = useState([
       {
            value: '',
            type: 'text',
            label: 'Email',
            id: 'sign-up-email',
            validation: {
                regEx: /^[a-z0-9_-]+(\.[a-z0-9_-]+)*@([a-z0-9]+(-[a-z0-9]+)?\.)+[a-z0-9]+(-[a-z0-9]+)?$/i
            },
            errMessage: 'Invalid Email',
            valid: true
        },
        {
            value: '',
            type: 'password',
            label: 'Password',
            id: 'sign-up-password',
            validation: {
                minLength: 6
            },
            errMessage: 'Password must contain 6 or more characters',
            valid: true
        },
        {
            value: '',
            type: 'password',
            label: 'Repeat Password',
            id: 'sign-up-repeat-password',
            validation: {
                matchesWith: 1
            },
            errMessage: 'Password mismatch',
            valid: true
        }
    ])

    const changeHandlerSignIn = (e, item) => {
        const value = e.target.value
        setSignIn(prev => prev.map((elem, index) => {
            if(index === item){
                elem.value = value
                elem.valid = validInput(elem.value, elem.validation)
            }
            return elem
        }))
    }

    const changeHandlerSignUp = (e, item) => {
        const value = e.target.value
        setSignUp(prev => prev.map((elem, index) => {
            if(index === item){
                elem.value = value
                elem.valid = validInput(elem.value, elem.validation, prev)
            }
            return elem
        }))
    }

    const clickHandlerSignIn = () => {
        let validForm = true
        signIn.forEach((elem, index) => {
            if(!validInput(elem.value, elem.validation)){
                setSignIn(prev => prev.filter((itemPrev, indexPrev) => {
                    if(indexPrev === index){
                        itemPrev.valid = false
                    }
                    return itemPrev
                }))
                validForm = false
            }
        })
        if(validForm) {
            authFetch(signIn[0].value, signIn[1].value, 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDm4jrDK7CvVKDXFBCRUeg-wFT2K4FddaM')
        }
    }

    const clickHandlerSignUp = () => {
        let validForm = true
        signUp.forEach((elem, index) => {
            if(!validInput(elem.value, elem.validation, signUp)){
                setSignUp(prev => prev.filter((itemPrev, indexPrev) => {
                    if(indexPrev === index){
                        itemPrev.valid = false
                    }
                    return itemPrev
                }))
                validForm = false
            }
        })
        if(validForm) {
            authFetch(signUp[0].value, signUp[1].value, 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDm4jrDK7CvVKDXFBCRUeg-wFT2K4FddaM')
        }
    }

    return (
        <div className={classes.Auth}>
            <div className={classes.Auth__block}>
                <form onSubmit={e => e.preventDefault()}>
                    {signIn.map((item, index) => (
                        <Input
                            key={index}
                            item={index}

                            type={item.type}
                            id={item.id}
                            label={item.label}
                            value={item.value}
                            valid={item.valid}
                            errMessage={item.errMessage}

                            changeHandler={changeHandlerSignIn}
                        />
                    ))}
                    <Submit value="Sign In" clickHandler={clickHandlerSignIn} />
                </form>
            </div>
            <div className={classes.Auth__delimiter}>
                or
            </div>
            <div className={classes.Auth__block}>
                <form onSubmit={e => e.preventDefault()}>
                    {signUp.map((item, index) => (
                        <Input
                            key={index}
                            item={index}

                            type={item.type}
                            id={item.id}
                            label={item.label}
                            value={item.value}
                            valid={item.valid}
                            errMessage={item.errMessage}

                            changeHandler={changeHandlerSignUp}
                        />
                    ))}
                    <Submit value="Sign Up" clickHandler={clickHandlerSignUp} />
                </form>
            </div>
            {error && <ErrorMessage error={error} />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authFetch: (email, password, url) => dispatch(auth(email, password, url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)