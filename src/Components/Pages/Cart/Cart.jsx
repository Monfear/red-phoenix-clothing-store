import styles from "./Cart.module.css";

import { useSelector, useDispatch } from "react-redux";

import { CartItem } from "../../Content/CartItem/CartItem";
import { CLEAR_CART } from "../../../Redux/actions/cart-actions";

export const Cart = () => {
    const dispatchCart = useDispatch();
    const cartSelector = useSelector((store) => store.cart);

    const { items, totalAmount } = cartSelector;

    const clearCart = () => {
        dispatchCart({ type: CLEAR_CART });
    };

    return (
        <section className={styles.cart}>
            <h1 className={styles.title}>Your cart</h1>

            <div className={styles.products}>
                {items.map((item) => {
                    const { id } = item;

                    return <CartItem id={id} {...item}></CartItem>;
                })}
            </div>

            <div className={styles.orderContainer}>
                <button className={styles.cartBtn} onClick={clearCart}>
                    Clear cart
                </button>
                <span className={styles.totalAmount}>Total: ${totalAmount.toFixed(2)}</span>
                <button className={styles.orderBtn}>Order</button>
            </div>
        </section>
    );
};
