import styles from "./Account.module.css";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END_LOAD, START_LOAD } from "../../../Redux/actions/ui-actions";

import { Loader } from "./../../Interface/Loader/Loader";

export const Account = () => {
    const authSelector = useSelector((store) => store.auth);
    const uiSelector = useSelector((store) => store.ui);

    const dispatch = useDispatch();

    const [message, setMessage] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const refPassword = useRef();
    const refConfirmedPassword = useRef();

    const changePasswordHandler = (e) => {
        e.preventDefault();

        setIsFormSubmitted(true);
        setIsFormValid(false);

        let password = refPassword.current.value;
        let confirmedPassword = refConfirmedPassword.current.value;

        const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

        if (password.trim().length >= 6 && password.match(/[0-9]/g) !== null && password.match(/[0-9]/g).length >= 2) {
            if (password === confirmedPassword) {
                setIsFormValid(true);

                dispatch({ type: START_LOAD });

                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        idToken: authSelector.token,
                        password: password,
                        returnSecureToken: false,
                    }),
                })
                    .then((response) => {
                        dispatch({ type: END_LOAD });

                        if (response.ok) {
                            response.json().then((data) => setMessage("Password has been changed"));

                            refPassword.current.value = "";
                            refConfirmedPassword.current.value = "";

                            setIsFormValid(true);
                        } else {
                            response.json().then((data) => {
                                setIsFormValid(false);
                                setMessage(data.error.message);

                                if (data.error.message === "TOKEN_EXPIRED") {
                                    setMessage(data.error.message + " " + "(You need to log in again)");
                                }
                            });
                        }
                    })
                    .catch((error) => {
                        setIsFormValid(false);
                        setMessage("Something went wrong");
                    });
            } else {
                setMessage("Passwords do not match");
            }
        } else {
            setMessage("Password is too weak");
        }
    };

    return (
        <section className={styles.account}>
            <h1 className={styles.heading}>Your account</h1>

            <h2 className={styles.emailInfo}>Your email adress: {authSelector.email}</h2>

            <form className={styles.form}>
                <h2 className={styles.changePasswordInfo}>You can change your password here</h2>

                <label htmlFor="password" className={styles.label}>
                    Enter new password:
                </label>
                <input type="password" placeholder="New password..." id="password" ref={refPassword} className={styles.input} />

                <label htmlFor="password-new" className={styles.label}>
                    Confirm new password:
                </label>
                <input type="password" placeholder="New password..." id="password-new" ref={refConfirmedPassword} className={styles.input} />

                {uiSelector.isLoading ? (
                    <Loader></Loader>
                ) : (
                    <button className={styles.btn} onClick={changePasswordHandler}>
                        Change password
                    </button>
                )}

                {!uiSelector.isLoading && isFormValid && isFormSubmitted && <small className={`${styles.message} ${styles.success}`}>{message}</small>}

                {!uiSelector.isLoading && !isFormValid && isFormSubmitted && <small className={`${styles.message} ${styles.error}`}>{message}</small>}
            </form>
        </section>
    );
};
