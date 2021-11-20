import styles from "./Error.module.css";

import { Link } from "react-router-dom";

export const Error = () => {
    return (
        <section className={styles.error}>
            <Link to={"/"}>
                <button className={styles.backBtn}>back to home</button>
            </Link>
        </section>
    );
};
