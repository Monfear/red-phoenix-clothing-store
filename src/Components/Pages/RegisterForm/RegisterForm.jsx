import styles from "./RegisterForm.module.css";

import React, { useRef, useState } from "react";

export const RegisterForm = () => {
    const [emailInfo, setEmailInfo] = useState({ value: "", message: "", isSuccess: false, isTouched: false });
    const [passwordInfo, setPasswordInfo] = useState({ value: "", message: "", isSuccess: false, isTouched: false });
    const [isFormConfirmed, setIsFormConfirmed] = useState(false);

    const isFormValid = emailInfo.isSuccess === true && passwordInfo.isSuccess === true;

    const refInputEmail = useRef();
    const refInputPassword = useRef();

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
                value: refInputEmail.current.value,
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

                <button className={styles.btnRegister}>Register</button>

                {isFormValid && isFormConfirmed && <small className={`${styles.message} ${styles.success}`}>Account has been created! You can login now.</small>}

                {!isFormValid && isFormConfirmed && <small className={`${styles.message} ${styles.error}`}>Please enter correct email adress and password.</small>}
            </form>
        </section>
    );
};
