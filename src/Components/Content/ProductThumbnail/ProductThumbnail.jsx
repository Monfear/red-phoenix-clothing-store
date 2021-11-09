import styles from "./ProductThumbnail.module.css";

import shoes1 from "./../../../img/clothes/items/Nike air max 90/01.jpg";

export const ProductThumbnail = (props) => {
    return (
        <div className={styles.thumbnail}>
            <img src={shoes1} alt="nike air max 90" className={styles.picture} />

            <div className={styles.info}>
                <h1 className={styles.title}>Nike air max 90</h1>
                <h2 className={styles.price}>$150.00</h2>
                <div className={styles.rating}>
                    <i className={`${"fas fa-star"} ${styles.star}`}></i>
                    <i className={`${"far fa-star"} ${styles.star}`}></i>
                    <i className={`${"far fa-star"} ${styles.star}`}></i>
                    <i className={`${"far fa-star"} ${styles.star}`}></i>
                    <i className={`${"far fa-star"} ${styles.star}`}></i>
                </div>
            </div>
        </div>
    );
};

// export const ProductThumbnail = () => {
//     return (
//         <div className={styles.thumbnail}>
//             <img src={shoes1} alt="nike air max 90" className={styles.picture} />
//             <h1 className={styles.title}>Nike air max 90</h1>
//             <h2 className={styles.price}>$150.00</h2>
//             <div className={styles.rating}>
//                 <i className={`${"fas fa-star"} ${styles.star}`}></i>
//                 <i className={`${"far fa-star"} ${styles.star}`}></i>
//                 <i className={`${"far fa-star"} ${styles.star}`}></i>
//                 <i className={`${"far fa-star"} ${styles.star}`}></i>
//                 <i className={`${"far fa-star"} ${styles.star}`}></i>
//             </div>
//         </div>
//     );
// };
