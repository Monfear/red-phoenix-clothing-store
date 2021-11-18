import styles from "./Categories.module.css";

import { Link } from "react-router-dom";

import shoesM from "./../../../img/clothes/categories/shoes-men.jpg";
import jacketsM from "./../../../img/clothes/categories/jackets-men.jpg";
import capsM from "./../../../img/clothes/categories/caps-men.jpg";
import sweatshirtsM from "./../../../img/clothes/categories/sweatshirts-men.jpeg";
import trousersM from "./../../../img/clothes/categories/trousers-men.jpg";
import tshirtsM from "./../../../img/clothes/categories/tshirts-men.jpg";

import shoesW from "./../../../img/clothes/categories/shoes-women.jpg";
import jacketsW from "./../../../img/clothes/categories/jackets-women.jpg";
import capsW from "./../../../img/clothes/categories/caps-women.jpg";
import sweatshirtsW from "./../../../img/clothes/categories/sweatshirts-women.jpg";
import trousersW from "./../../../img/clothes/categories/trousers-women.jpeg";
import tshirtsW from "./../../../img/clothes/categories/tshirts-women.jpg";

export const Categories = ({ gender }) => {
    const men = "men";

    return (
        <>
            <div className={styles.container}>
                <section className={styles.categories}>
                    <Link to={`/${gender}/shoes`} className={styles.category}>
                        <h2 className={styles.name}>Shoes</h2>
                        <img src={gender === men ? shoesM : shoesW} alt="shoes" className={styles.picture} />
                    </Link>
                    <Link to={`/${gender}/jackets`} className={styles.category}>
                        <h2 className={styles.name}>Jackets</h2>
                        <img src={gender === men ? jacketsM : jacketsW} alt="jackets" className={styles.picture} />
                    </Link>
                    <Link to={`/${gender}/caps`} className={styles.category}>
                        <h2 className={styles.name}>Caps</h2>
                        <img src={gender === men ? capsM : capsW} alt="caps" className={styles.picture} />
                    </Link>
                    <Link to={`/${gender}/sweatshirts`} className={styles.category}>
                        <h2 className={styles.name}>Sweatshirts</h2>
                        <img src={gender === men ? sweatshirtsM : sweatshirtsW} alt="sweatshirts" className={styles.picture} />
                    </Link>
                    <Link to={`/${gender}/trousers`} className={styles.category}>
                        <h2 className={styles.name}>Trousers</h2>
                        <img src={gender === men ? trousersM : trousersW} alt="trousers" className={styles.picture} />
                    </Link>
                    <Link to={`/${gender}/tshirts`} className={styles.category}>
                        <h2 className={styles.name}>T-shirts</h2>
                        <img src={gender === men ? tshirtsM : tshirtsW} alt="tshirts" className={styles.picture} />
                    </Link>
                </section>
            </div>
        </>
    );
};
