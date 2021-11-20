import styles from "./ProductDetails.module.css";

import { productsData } from "./../../../data/products";

import { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "../../../Redux/actions/cart-actions";

export const ProductDetails = () => {
    const [activeImg, setActiveImage] = useState(null);
    const [sliderPosition, setSliderPosition] = useState(0);

    const dispatchCart = useDispatch();

    const thumbnailsEl = useRef();

    const params = useParams();
    const location = useLocation();

    const pathSplitted = location.pathname.split("/");

    const id = parseInt(params.id);
    const gender = pathSplitted[1];
    const category = pathSplitted[2];

    const productsList = productsData[`${gender}`][`${category}`];
    const product = productsList.find((product) => product.id === id);

    useEffect(() => {
        setActiveImage(product.thumbnailImg);
    }, [product.thumbnailImg]);

    useEffect(() => {
        if (sliderPosition <= 0) {
            setSliderPosition(0);
        }

        if (sliderPosition > thumbnailsEl.current.scrollWidth - thumbnailsEl.current.clientWidth) {
            setSliderPosition(thumbnailsEl.current.scrollWidth - thumbnailsEl.current.clientWidth);
        }

        thumbnailsEl.current.scrollLeft = sliderPosition;
    }, [sliderPosition]);

    const changeActiveImage = (e) => {
        const parent = e.target.parentElement;

        [...parent.children].forEach((child) => {
            child.classList.remove(styles.active);
        });

        e.target.classList.add(styles.active);
        setActiveImage(e.target.src);
    };

    const moveSliderRight = () => {
        setSliderPosition((prev) => prev + 50);
    };

    const moveSliderLeft = () => {
        setSliderPosition((prev) => prev - 50);
    };

    const addItemToCart = () => {
        dispatchCart({
            type: ADD_ITEM,
            payload: {
                item: product,
            },
        });
    };

    return (
        <div className={styles.detailsContainer}>
            <section className={styles.detailsPhotos}>
                <img src={activeImg} alt="product" className={styles.bigPhoto} />

                <div className={styles.slider}>
                    <i className={`${"fas fa-chevron-circle-left"} ${styles.arrow}`} onClick={moveSliderLeft}></i>

                    <div className={styles.smallImages} data-slider ref={thumbnailsEl}>
                        <img src={product.thumbnailImg} alt="product" className={`${styles.smallPhoto} ${styles.active}`} onClick={changeActiveImage} />
                        <img src={product.picture1} alt="product" className={styles.smallPhoto} onClick={changeActiveImage} />
                        <img src={product.picture2} alt="product" className={styles.smallPhoto} onClick={changeActiveImage} />
                    </div>

                    <i className={`${"fas fa-chevron-circle-right"} ${styles.arrow}`} onClick={moveSliderRight}></i>
                </div>
            </section>

            <section className={styles.detailsInfo}>
                <h1 className={styles.productName}>{product.name}</h1>
                <h2 className={styles.productPrice}>${product.price}</h2>
                <p className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae magni esse nesciunt reprehenderit magnam facilis accusantium architecto, quas laborum quidem expedita facere ipsam corporis reiciendis. Exercitationem aut voluptatibus doloremque. Hic.</p>

                <div className={styles.productRating}>
                    <i className={`${product.rating > 0 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${product.rating > 1 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${product.rating > 2 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${product.rating > 3 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                    <i className={`${product.rating > 4 ? "fas fa-star" : "far fa-star"} ${styles.star}`}></i>
                </div>

                <button className={styles.addToCartBtn} onClick={addItemToCart}>
                    add to cart
                </button>
            </section>
        </div>
    );
};
