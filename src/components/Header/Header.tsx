import Logo from '../Logo/Logo'
import styles from './Header.module.scss'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <header className={styles['header']}>
            <Logo />
            <Navbar />
        </header>
    )
}
