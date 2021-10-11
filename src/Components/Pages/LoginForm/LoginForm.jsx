import styles from "./LoginForm.module.css";

import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END_LOAD, START_LOAD } from "../../../Redux/actions/ui-actions";

export const LoginForm = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const refInputEmail = useRef();
    const refInputPassword = useRef();

    const uiSelector = useSelector((store) => store.ui);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        setIsFormSubmitted(true);

        // setEmail(refInputEmail.current.value);
        // setPassword(refInputPassword.current.value);

        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

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
                    return response.json();
                } else {
                    response.json().then((data) => {
                        setErrorMessage(data.error.message);
                    });
                }
            })
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <section className={styles.container}>
            <form className={styles.form} onSubmit={submitHandler}>
                <label className={styles.label} htmlFor="email">
                    Email
                </label>
                <input className={styles.input} type="text" id="email" placeholder="Enter your email" ref={refInputEmail} />

                <label className={styles.label} htmlFor="password">
                    Password
                </label>
                <input className={styles.input} type="password" id="password" placeholder="Enter your password" ref={refInputPassword} />

                <button className={styles.btnRegister}>Log in</button>

                {!isFormValid && isFormSubmitted && <small className={`${styles.message} ${styles.error}`}>{errorMessage}</small>}
            </form>
        </section>
    );
};
