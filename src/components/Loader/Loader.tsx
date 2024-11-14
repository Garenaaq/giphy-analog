import styles from './Loader.module.scss';

export default function Loader() {
    return (
        <section className={styles['loading']}>
            <div className={styles["loading__container"]}>
                <div className={styles["loading__panda"]}>
                    <div className={styles["loading__panda-contain"]}>
                        <div className={styles["loading__panda-ears"]}></div>
                        <div className={styles["loading__panda-head"]}>
                            <div className={styles["loading__panda-eyes"]}></div>
                            <div className={styles["loading__panda-nose"]}></div>
                        </div>
                    </div>
                    <div className={styles["loading__panda-arms"]}></div>
                    <div className={styles["loading__panda-body"]}></div>
                    <div className={styles["loading__panda-legs"]}></div>
                </div>
            </div>
            <div className={styles["loading__panda-shadow"]}></div>
        </section >
    );
}
