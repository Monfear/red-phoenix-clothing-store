import styles from "./Header.module.css";

import React from "react";
import { Link } from "react-router-dom";

import girl from "./../../../img/girl.png";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={girl} alt="model girl" className={styles.photoGirl} />

            <h1 className={styles.heading}>Welcome to Red phoenix clothing shop online </h1>
            <p className={styles.caption}>You can find here the best sort of clothes from the word’s primary companies</p>

            <Link to="/register">
                <button className={styles.btnCreate}>Create account</button>
            </Link>
        </header>
    );
};
