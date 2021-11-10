import styles from "./ProductThumbnail.module.css";

import { Link } from "react-router-dom";

export const ProductThumbnail = ({ name, price, rating, thumbnailImg, path }) => {
    return (
        <div className={styles.thumbnail}>
            <Link to={path}>
                <img src={thumbnailImg} alt={name} className={styles.picture} />
            </Link>

            <div className={styles.info}>
                <h1 className={styles.title}>{name}</h1>
                <h2 className={styles.price}>${price}</h2>
                <div className={styles.rating}>
                    <i className={`${rating > 0 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 1 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 2 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 3 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${rating > 4 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                </div>
            </div>
        </div>
    );
};
