import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './Auth.module.scss'
import { Input } from '../../components/form/Input/Input'
import { Submit } from '../../components/form/Submit/Submit'
import { validInput } from '../../additional/validInput'

const Auth = () => {
    const [signIn, setSignIn] = useState([
        {
            value: '',
            type: 'text',
            label: 'Email',
            id: 'sign-in-email',
            validation: {
                minLength: 1
            },
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
                minLength: 1
            },
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
            }
        })
        if(validForm) {

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
            }
        })
        if(validForm) {
            
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
        </div>
    )
}


export default connect(null)(Auth)