import styles from "./Stars.module.css";

export const Stars = ({ rating }) => {
    return (
        <div className={styles.stars}>
            <i className={`${rating > 0 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
            <i className={`${rating > 1 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
            <i className={`${rating > 2 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
            <i className={`${rating > 3 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
            <i className={`${rating > 4 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
        </div>
    );
};
