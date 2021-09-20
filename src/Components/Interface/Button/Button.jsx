import styles from "./Button.module.css";

export const Button = ({ children, classList }) => {
    return (
        <>
            <button className={`${classList ? styles.button + " " + classList : styles.button}`}>{children}</button>
        </>
    );
};
