import React from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
    children: React.ReactNode
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, onClick }: IButtonProps) {
    return (
        <button className={styles['form__button']} onClick={onClick}>{children}</button>
    )
}
