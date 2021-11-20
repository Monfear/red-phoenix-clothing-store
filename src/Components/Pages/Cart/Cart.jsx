import styles from "./Cart.module.css";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CART } from "../../../Redux/actions/cart-actions";

import { CartItem } from "../../Content/CartItem/CartItem";
import { Modal } from "../../Layout/Modal/Modal";

export const Cart = () => {
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const dispatchCart = useDispatch();
    const cartSelector = useSelector((store) => store.cart);
    const authSelector = useSelector((store) => store.auth);

    const { items, totalAmount } = cartSelector;
    const { email } = authSelector;

    const uniqid = require("uniqid");

    const clearCart = () => {
        dispatchCart({ type: CLEAR_CART });
    };

    const sendOrder = () => {
        setIsOrderConfirmed(true);

        if (items.length) {
            setIsCartEmpty(false);

            const url = "https://red-phoenix-66bc1-default-rtdb.firebaseio.com/orders.json";

            fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    user: email || "unregistered",
                    items,
                    totalAmount,
                }),
            });
        }
    };

    return (
        <>
            {isOrderConfirmed && !isCartEmpty && <Modal></Modal>}

            <section className={styles.cart}>
                <h1 className={styles.title}>Your cart</h1>

                <div className={styles.products}>
                    {items.map((item) => {
                        return <CartItem key={uniqid()} {...item}></CartItem>;
                    })}
                </div>

                <div className={styles.orderContainer}>
                    <button className={styles.clearBtn} onClick={clearCart}>
                        Clear cart
                    </button>
                    <span className={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</span>
                    <button className={styles.orderBtn} onClick={sendOrder}>
                        Order
                    </button>
                </div>

                {isOrderConfirmed && isCartEmpty && <p className={styles.warning}>Your cart is empty.</p>}
            </section>
        </>
    );
};
