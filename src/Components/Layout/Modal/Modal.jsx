import styles from "./Modal.module.css";

import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { CLEAR_CART } from "../../../Redux/actions/cart-actions";

const portal = document.getElementById("overlays");
portal.style.height = 0;

const Backdrop = () => {
    return (
        <>
            <div className={styles.backdrop}></div>
        </>
    );
};

const Content = () => {
    const dispatchCart = useDispatch();
    const history = useHistory();

    const uniqid = require("uniqid");

    const createID = () => {
        const id = uniqid() + new Date().toISOString().slice(-4);
        return id;
    };

    const confirmOrder = () => {
        dispatchCart({ type: CLEAR_CART });
        history.replace("/");
    };

    return (
        <section className={styles.content}>
            <h1 className={styles.heading}>Your order has been submitted.</h1>
            <p className={styles.caption}>Order ID: {createID()}</p>
            <button className={styles.modalBtn} onClick={confirmOrder}>
                confirm
            </button>
        </section>
    );
};

export const Modal = () => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop></Backdrop>, portal)}
            {ReactDOM.createPortal(<Content></Content>, portal)}
        </>
    );
};
