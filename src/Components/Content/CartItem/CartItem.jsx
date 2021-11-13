import styles from "./CartItem.module.css";

export const CartItem = ({ id, name, price, rating, thumbnailImg }) => {
    return (
        <section className={styles.cartItem}>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
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

            <button className={styles.cartBtn}>Remove</button>
        </section>
    );
};
