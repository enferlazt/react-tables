import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './Auth.module.scss'
import { Input } from '../../components/form/Input/Input'
import { Submit } from '../../components/form/Submit/Submit'
import { validInput } from '../../additional/validInput'

const Auth = () => {
    const [signIn, setSignIn] = useState({
        inputs: {
            email: {
                value: '',
                type: 'text',
                label: 'Email',
                id: 'sign-in-email',
                validation: {
                    minLength: 1
                },
                valid: true
            },
            password: {
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
        }
    })

    const [signUp, setSignUp] = useState({
        formValid: true,
        inputs: {
            email: {
                value: '',
                type: 'text',
                label: 'Email',
                id: 'sign-up-email',
                validation: {
                    minLength: 1
                },
                valid: true
            },
            password: {
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
            repeat_password: {
                value: '',
                type: 'password',
                label: 'Repeat Password',
                id: 'sign-up-repeat-password',
                validation: {
                    matchesWith: 'password'
                },
                errMessage: 'Password mismatch',
                valid: true
            }
        }
    })

    const changeHandlerSignIn = (e, item) => {
        const value = e.target.value
        setSignIn(prev => ({
            ...prev,
            inputs: {
                ...prev.inputs,
                [item]: {
                    ...prev.inputs[item],
                    value: value,
                    valid: validInput(value, prev.inputs[item].validation)
                }
            }
        }))
    }

    const changeHandlerSignUp = (e, item) => {
        const value = e.target.value
        setSignUp(prev => ({
            ...prev,
            inputs: {
                ...prev.inputs,
                [item]: {
                    ...prev.inputs[item],
                    value: value,
                    valid: validInput(value, prev.inputs[item].validation, prev.inputs)
                }
            }
        }))
    }

    const clickHandlerSignIn = () => {
        let validForm = true
        Object.keys(signIn.inputs).forEach(item => {
            const inputParams = signIn.inputs[item]
            if(!validInput(inputParams.value, inputParams.validation)){
                validForm = false
                setSignIn(prev => ({
                    ...prev,
                    inputs: {
                        ...prev.inputs,
                        [item]: {
                            ...prev.inputs[item],
                            valid: false
                        }
                    }
                }))
            }
        })
        if(validForm) {

        }
    }

    const clickHandlerSignUp = () => {
        let validForm = true
        Object.keys(signUp.inputs).forEach(item => {
            const inputParams = signUp.inputs[item]
            if(!validInput(inputParams.value, inputParams.validation, signUp.inputs)){
                validForm = false
                setSignUp(prev => ({
                    ...prev,
                    inputs: {
                        ...prev.inputs,
                        [item]: {
                            ...prev.inputs[item],
                            valid: false
                        }
                    }
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
                    {Object.keys(signIn.inputs).map((item, index) => {
                        const inputParams = signIn.inputs[item];
                        return (
                            <Input
                                key={index}
                                item={item}

                                type={inputParams.type}
                                id={inputParams.id}
                                label={inputParams.label}
                                value={inputParams.value}
                                valid={inputParams.valid}
                                errMessage={inputParams.errMessage}

                                changeHandler={changeHandlerSignIn}
                            />
                    )})}
                    <Submit value="Sign In" clickHandler={clickHandlerSignIn} />
                </form>
            </div>
            <div className={classes.Auth__delimiter}>
                or
            </div>
            <div className={classes.Auth__block}>
                <form onSubmit={e => e.preventDefault()}>
                    {Object.keys(signUp.inputs).map((item, index) => {
                        const inputParams = signUp.inputs[item];
                        return (
                            <Input
                                key={index}
                                item={item}

                                type={inputParams.type}
                                id={inputParams.id}
                                label={inputParams.label}
                                value={inputParams.value}
                                valid={inputParams.valid}
                                errMessage={inputParams.errMessage}

                                changeHandler={changeHandlerSignUp}
                            />
                    )})}
                    <Submit value="Sign Up" clickHandler={clickHandlerSignUp} />
                </form>
            </div>
        </div>
    )
}


export default connect(null)(Auth)