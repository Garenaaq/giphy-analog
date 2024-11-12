import React from 'react'
import styles from './Button.module.scss'

interface IButtonProps {
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    style?: string;
}

export default function Button({ children, onClick, style }: IButtonProps) {
    return (
        <button className={`${styles['form__button']} ${style ? styles[style] : ""}`} onClick={onClick}>{children}</button>
    )
}
