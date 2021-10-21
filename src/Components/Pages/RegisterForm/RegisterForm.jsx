import styles from "./RegisterForm.module.css";

import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END_LOAD, START_LOAD } from "../../../Redux/actions/ui-actions";

import { Loader } from "./../../Interface/Loader/Loader";

export const RegisterForm = () => {
    const [emailInfo, setEmailInfo] = useState({ value: "", message: "", isSuccess: false, isTouched: false });
    const [passwordInfo, setPasswordInfo] = useState({ value: "", message: "", isSuccess: false, isTouched: false });
    const [isFormConfirmed, setIsFormConfirmed] = useState(false);
    const [isAuthValid, setIsAuthValid] = useState(false);

    const isFormValid = emailInfo.isSuccess === true && passwordInfo.isSuccess === true;

    const refInputEmail = useRef();
    const refInputPassword = useRef();

    const dispatch = useDispatch();
    const uiSelector = useSelector((store) => store.ui);

    const checkEmail = () => {
        setIsFormConfirmed(false);

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(refInputEmail.current.value)) {
            setEmailInfo({
                value: refInputEmail.current.value,
                message: "Email is valid",
                isTouched: true,
                isSuccess: true,
            });
        } else {
            setEmailInfo({
                value: refInputEmail.current.value,
                message: "Email is not valid",
                isTouched: true,
                isSuccess: false,
            });
        }
    };

    const checkPassword = () => {
        setIsFormConfirmed(false);

        const password = refInputPassword.current.value;

        if (password.trim().length >= 6 && password.match(/[0-9]/g) !== null && password.match(/[0-9]/g).length >= 2) {
            setPasswordInfo({
                value: refInputPassword.current.value,
                message: "Password is valid",
                isTouched: true,
                isSuccess: true,
            });
        } else {
            setPasswordInfo({
                value: refInputPassword.current.value,
                message: "Password is not valid (min 6 characters with at least 2 numbers)",
                isTouched: true,
                isSuccess: false,
            });
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        checkEmail();
        checkPassword();

        setIsFormConfirmed(true);

        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

        if (isFormValid) {
            dispatch({ type: START_LOAD });

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailInfo.value,
                    password: passwordInfo.value,
                    returnSecureToken: true,
                }),
            })
                .then((response) => {
                    dispatch({ type: END_LOAD });
                    console.log(response);

                    if (response.ok) {
                        setIsAuthValid(true);
                        return response.json();
                    } else {
                        setIsAuthValid(false);
                        throw new Error("Something went wrong");
                    }
                })
                .then((data) => {
                    if (data) {
                        console.log(data.idToken);
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }

        console.log(emailInfo.value, passwordInfo.value);
    };

    const blurHandlerEmail = () => {
        checkEmail();
    };

    const changeHandlerEmail = () => {
        if (emailInfo.isTouched) {
            checkEmail();
        }
    };

    const blurHandlerPassword = () => {
        checkPassword();
    };

    const changeHandlerPassword = () => {
        if (passwordInfo.isTouched) {
            checkPassword();
        }
    };

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={submitHandler}>
                <label className={styles.label} htmlFor="email">
                    Email
                </label>
                <input className={styles.input} type="text" id="email" placeholder="Enter your email" ref={refInputEmail} onBlur={blurHandlerEmail} onChange={changeHandlerEmail} />
                <small className={`${styles.message} ${emailInfo.isSuccess ? styles.success : styles.error}`}>{emailInfo.message}</small>

                <label className={styles.label} htmlFor="password">
                    Password
                </label>
                <input className={styles.input} type="password" id="password" placeholder="Enter your password" ref={refInputPassword} onBlur={blurHandlerPassword} onChange={changeHandlerPassword} />
                <small className={`${styles.message} ${passwordInfo.isSuccess ? styles.success : styles.error}`}>{passwordInfo.message}</small>

                {uiSelector.isLoading ? <Loader></Loader> : <button className={styles.btnRegister}>Register</button>}

                {isFormValid && isFormConfirmed && isAuthValid && <small className={`${styles.message} ${styles.success}`}>Account has been created! You can login now.</small>}

                {(!isFormValid && isFormConfirmed && !uiSelector.isLoading) || (!isAuthValid && isFormConfirmed && !uiSelector.isLoading && <small className={`${styles.message} ${styles.error}`}>Please enter correct and no existing email adress and password.</small>)}
            </form>
        </section>
    );
};
