import styles from "./Women.module.css";

import { Link } from "react-router-dom";

import shoes from "./../../../img/clothes/categories/shoes-women.jpg";
import jackets from "./../../../img/clothes/categories/jackets-women.jpg";
import caps from "./../../../img/clothes/categories/caps-women.jpg";
import sweatshirts from "./../../../img/clothes/categories/sweatshirts-women.jpg";
import trousers from "./../../../img/clothes/categories/trousers-women.jpeg";
import tshirts from "./../../../img/clothes/categories/tshirts-women.jpg";

export const Women = () => {
    return (
        <>
            <section className={styles.women}>
                <div className={styles.categories}>
                    <Link to="/women/shoes" className={styles.category}>
                        <h2 className={styles.name}>Shoes</h2>
                        <img src={shoes} alt="shoes" className={styles.picture} />
                    </Link>
                    <div className={styles.category}>
                        <h2 className={styles.name}>Jackets</h2>
                        <img src={jackets} alt="jackets" className={styles.picture} />
                    </div>
                    <div className={styles.category}>
                        <h2 className={styles.name}>Caps</h2>
                        <img src={caps} alt="caps" className={styles.picture} />
                    </div>
                    <div className={styles.category}>
                        <h2 className={styles.name}>Sweatshirts</h2>
                        <img src={sweatshirts} alt="sweatshirts" className={styles.picture} />
                    </div>
                    <div className={styles.category}>
                        <h2 className={styles.name}>Trousers</h2>
                        <img src={trousers} alt="trousers" className={styles.picture} />
                    </div>
                    <div className={styles.category}>
                        <h2 className={styles.name}>T-shirts</h2>
                        <img src={tshirts} alt="tshirts" className={styles.picture} />
                    </div>
                </div>
            </section>
        </>
    );
};
