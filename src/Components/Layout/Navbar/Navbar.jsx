import styles from "./Navbar.module.css";

import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "./../../../img/logo-full.png";

import { Button } from "./../../Interface/Button/Button";

export const Navbar = () => {
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

            <Button classList={styles.btnCart}>
                <span>Your cart</span>
                <i className={`${"fas fa-shopping-cart"} ${styles.cartIcon}`}></i>
                <span className={styles.cartQuantity}>5</span>
            </Button>

            <Link to="/account" className={styles.accountContainer}>
                <i className={`${"fas fa-user-circle"} ${styles.accountIcon}`}></i>
                <span className={styles.accountText}>Account</span>
            </Link>

            <Button classList={styles.btnLog}>Log in</Button>
        </div>
    );
};
