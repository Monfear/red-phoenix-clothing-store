import styles from "./Navbar.module.css";

import React from "react";
import { Link, NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../../Redux/actions/auth-actions";

import logoBig from "./../../../img/logo-full.png";
import logoSmall from "./../../../img/logo.png";

export const Navbar = () => {
    const dispatch = useDispatch();
    const authSelector = useSelector((store) => store.auth);
    const cartSelector = useSelector((store) => store.cart);

    const logoutHandler = () => {
        dispatch({ type: LOGOUT });
    };

    return (
        <div className={styles.navbar}>
            <Link to="/">
                <img src={logoBig} alt="logo" className={styles.logoBig} />
                <img src={logoSmall} alt="logo" className={styles.logoSmall} />
            </Link>

            <nav className={styles.nav}>
                <NavLink to="/men" className={styles.navLink} activeClassName={styles.activeNavLink}>
                    Men
                </NavLink>
                <NavLink to="/women" className={styles.navLink} activeClassName={styles.activeNavLink}>
                    Women
                </NavLink>
            </nav>

            <Link to="/cart" className={styles.btnCart}>
                <span className={styles.btnCartText}>Your cart</span>
                <i className={`${"fas fa-shopping-cart"} ${styles.cartIcon}`}></i>
                <span className={styles.cartQuantity}>{cartSelector.totalQuantity}</span>
            </Link>

            {authSelector.isLoggedIn && (
                <Link to="/account" className={styles.accountContainer}>
                    <i className={`${"fas fa-user-circle"} ${styles.accountIcon}`}></i>
                    <span className={styles.accountText}>Account</span>
                </Link>
            )}

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
        </div>
    );
};
