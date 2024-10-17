import styles from './Logo.module.scss'

export default function Logo() {
    return (
        <img className={styles['logo']} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Giphy-logo.svg/800px-Giphy-logo.svg.png" alt="Логотип" />
    )
}
