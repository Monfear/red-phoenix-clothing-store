import styles from "./Shoes.module.css";

import { productsData } from "./../../../../../data/products";
import { ProductThumbnail } from "./../../../../Content/ProductThumbnail/ProductThumbnail";

export const Shoes = () => {
    return (
        <div className={styles.shoes}>
            <h1 className={styles.heading}>Shoes</h1>

            <div className={styles.products}>
                {productsData.men.shoes.map((product) => {
                    const { id, name, price, rating, thumbnailImg } = product;

                    return <ProductThumbnail key={id} name={name} price={price} rating={rating} thumbnailImg={thumbnailImg} path={`/men/shoes/${id}`}></ProductThumbnail>;
                })}
            </div>
        </div>
    );
};
