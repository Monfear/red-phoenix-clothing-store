import styles from "./LoginForm.module.css";

import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { END_LOAD, START_LOAD } from "../../../Redux/actions/ui-actions";
import { LOGIN } from "../../../Redux/actions/auth-actions";

import { Loader } from "../../Interface/Loader/Loader";
import { useHistory } from "react-router-dom";

export const LoginForm = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const refInputEmail = useRef();
    const refInputPassword = useRef();

    const dispatch = useDispatch();
    const uiSelector = useSelector((store) => store.ui);

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();

        setIsFormSubmitted(true);

        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;
        console.log(process.env.REACT_APP_FIREBASE_API_KEY);

        const email = refInputEmail.current.value;
        const password = refInputPassword.current.value;

        console.log(email, password);

        dispatch({ type: START_LOAD });

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            }),
        })
            .then((response) => {
                dispatch({ type: END_LOAD });

                if (response.ok) {
                    setErrorMessage("");
                    setIsFormValid(true);

                    history.replace("/account");

                    response.json().then((data) => {
                        dispatch({
                            type: LOGIN,
                            payload: {
                                email: data.email,
                                token: data.idToken,
                            },
                        });

                        console.log(data);
                    });
                } else {
                    response.json().then((data) => {
                        setErrorMessage(data.error.message);
                        setIsFormValid(false);
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={submitHandler}>
                <label className={styles.label} htmlFor="email">
                    Email
                </label>
                <input className={styles.input} type="email" id="email" placeholder="Enter your email" ref={refInputEmail} />

                <label className={styles.label} htmlFor="password">
                    Password
                </label>
                <input className={styles.input} type="password" id="password" placeholder="Enter your password" ref={refInputPassword} />

                {uiSelector.isLoading ? <Loader></Loader> : <button className={styles.btnRegister}>Log in</button>}

                {!isFormValid && isFormSubmitted && <small className={`${styles.message} ${styles.error}`}>{errorMessage}</small>}
            </form>
        </section>
    );
};
