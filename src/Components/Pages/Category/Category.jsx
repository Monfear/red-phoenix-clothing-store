import styles from "./Category.module.css";

import { productsData } from "../../../data/products";
import { ProductThumbnail } from "./../../Content/ProductThumbnail/ProductThumbnail";

export const Category = ({ gender, category }) => {
    const makeTitleCase = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div className={styles.category}>
            <h1 className={styles.heading}>{makeTitleCase(category)}</h1>

            <div className={styles.products}>
                {productsData[gender][category].map((product) => {
                    const { id, name, price, rating, thumbnailImg } = product;

                    return <ProductThumbnail key={id} name={name} price={price} rating={rating} thumbnailImg={thumbnailImg} path={`/${gender}/${category}/${id}`}></ProductThumbnail>;
                })}
            </div>
        </div>
    );
};
