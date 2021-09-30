import styles from "./LoginForm.module.css";

import React, { useState, useRef } from "react";

export const LoginForm = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const refInputEmail = useRef();
    const refInputPassword = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        setEmail(refInputEmail.current.value);
        setPassword(refInputPassword.current.value);
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

                <button className={styles.btnRegister} onClick={test}>
                    Log in
                </button>

                {!isFormValid && isFormSubmitted && <small className={`${styles.message} ${styles.error}`}>Wrong email adress or/and password.</small>}
            </form>
        </section>
    );
};
