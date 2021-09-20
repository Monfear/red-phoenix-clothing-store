import styles from "./Register.module.css";

import React, { useRef, useState } from "react";

export const Register = () => {
    const [emailMessage, setEmailMessage] = useState({ text: "", isSuccess: null });
    const [passwordMessage, setPasswordMessage] = useState({ text: "password message", isSuccess: true });

    const isFormValid = emailMessage.isSuccess === true && passwordMessage.isSuccess === true;

    const refInputEmail = useRef();
    const refInputPassword = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        checkEmail();
    };

    const checkEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (re.test(refInputEmail.current.value)) {
            setEmailMessage({
                text: "Email is valid",
                isSuccess: true,
            });
        } else {
            setEmailMessage({
                text: "Email is not valid",
                isSuccess: false,
            });
        }
    };

    return (
        <section className={styles.register}>
            <form className={styles.form} onSubmit={submitHandler}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" placeholder="Enter your email" ref={refInputEmail} onBlur={checkEmail} />
                <small className={emailMessage.isSuccess ? styles.success : styles.error}>{emailMessage.text}</small>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" ref={refInputPassword} />
                <small>{passwordMessage.text}</small>

                <button className={styles.btn}>Register</button>

                {isFormValid && <small className={styles.success}>Account has been created! You can login now.</small>}
            </form>
        </section>
    );
};
