import React from 'react'
import styles from './Input.module.scss'

interface IInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export default function Input({ onChange, value }: IInputProps) {
    return (
        <input type="text" onChange={onChange} placeholder='Поиск...' value={value} className={styles['form__input']} />
    )
}
