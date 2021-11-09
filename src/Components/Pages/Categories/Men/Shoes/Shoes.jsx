import styles from "./Shoes.module.css";

import { products } from "./../../../../../data/products";

import { ProductThumbnail } from "./../../../../Content/ProductThumbnail/ProductThumbnail";

export const Shoes = () => {
    return (
        <div className={styles.shoes}>
            <h1 className={styles.heading}>Shoes</h1>

            <div className={styles.products}>
                {products.men.shoes.map((product) => (
                    <ProductThumbnail></ProductThumbnail>
                ))}
            </div>
        </div>
    );
};
