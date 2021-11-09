import styles from "./Men.module.css";

import { Link } from "react-router-dom";

import shoes from "./../../../img/clothes/categories/shoes-men.jpg";
import jackets from "./../../../img/clothes/categories/jackets-men.jpg";
import caps from "./../../../img/clothes/categories/caps-men.jpg";
import sweatshirts from "./../../../img/clothes/categories/sweatshirts-men.jpeg";
import trousers from "./../../../img/clothes/categories/trousers-men.jpg";
import tshirts from "./../../../img/clothes/categories/tshirts-men.jpg";

export const Men = () => {
    return (
        <>
            <section className={styles.men}>
                <div className={styles.categories}>
                    <Link to="/men/shoes" className={styles.category}>
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
