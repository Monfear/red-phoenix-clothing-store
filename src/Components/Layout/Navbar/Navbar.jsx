import styles from "./Navbar.module.css";

import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import logo from "./../../../img/logo-full.png";
import { LOGOUT } from "../../../Redux/actions/auth-actions";

export const Navbar = () => {
    const dispatch = useDispatch();
    const authSelector = useSelector((store) => store.auth);

    const logoutHandler = () => {
        dispatch({ type: LOGOUT });
    };

    return (
        <div className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>

            <nav className={styles.nav}>
                <NavLink to="/men" className={styles.navLink} activeClassName={styles.activeNavLink}>
                    Men
                </NavLink>
                <NavLink to="/women" className={styles.navLink} activeClassName={styles.activeNavLink}>
                    Women
                </NavLink>
            </nav>

            <button className={styles.btnCart}>
                <span>Your cart</span>
                <i className={`${"fas fa-shopping-cart"} ${styles.cartIcon}`}></i>
                <span className={styles.cartQuantity}>5</span>
            </button>

            <Link to="/account" className={styles.accountContainer}>
                <i className={`${"fas fa-user-circle"} ${styles.accountIcon}`}></i>
                <span className={styles.accountText}>Account</span>
            </Link>

            {!authSelector.isLoggedIn ? (
                <Link to="/login">
                    <button className={styles.btnLog}>Log in</button>
                </Link>
            ) : (
                <Link to="/">
                    <button className={styles.btnLog} onClick={logoutHandler}>
                        Log out
                    </button>
                </Link>
            )}

            {/* <Link to="/login">
                <button className={styles.btnLog}>{authSelector.isLoggedIn ? "Log out" : "Log in"}</button>
            </Link> */}
        </div>
    );
};
