import styles from './Navbar.module.scss'
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles['navbar']}>
            <ul className={styles['navbar__list']}>
                <li><NavLink to='/' className={styles['navbar__item']}>Поиск</NavLink></li>
                <li><NavLink to='/trending' className={styles['navbar__item']}>Тренды</NavLink></li>
                <li><NavLink to='/random' className={styles['navbar__item']}>Рандом</NavLink></li>
            </ul>
        </nav>
    )
}
