import styles from "./CartItem.module.css";

import { useDispatch } from "react-redux";

import { REMOVE_ITEM } from "../../../Redux/actions/cart-actions";

export const CartItem = ({ id, name, price, rating, thumbnailImg, amount }) => {
    const dispatchCart = useDispatch();

    const removeItemFromCart = () => {
        dispatchCart({
            type: REMOVE_ITEM,
            payload: {
                id: id,
            },
        });
    };

    return (
        <section className={styles.cartItem}>
            <div className={styles.info}>
                <h1 className={styles.name}>
                    {name} {amount > 1 && `(${amount})`}
                </h1>
                <h2 className={styles.price}>${price}</h2>
                <div className={styles.productRating}>
                    <i className={`${rating > 0 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 1 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 2 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 3 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 4 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                </div>
            </div>

            <img src={thumbnailImg} alt="thumbnail" className={styles.thumbnail} />

            <button className={styles.cartBtn} onClick={removeItemFromCart}>
                Remove
            </button>
        </section>
    );
};
