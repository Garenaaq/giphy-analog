import React from 'react'
import styles from './Form.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import useGifsSearch from '../../store/useGifsSearch';

export default function Form() {
    const [inputValue, setInputValue] = useState<string>("");

    // Store
    const { searchGifs, clearListGifs } = useGifsSearch((state) => state);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(event.target.value);
    }

    const handleClickBtnSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        searchGifs(inputValue);
    }

    const handleClickClearInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        setInputValue("");
        clearListGifs();
    }

    return (
        <form className={styles['form']}>
            <Input onChange={handleChangeInput} value={inputValue} />
            <Button onClick={handleClickBtnSearch}><SearchIcon /></Button>
            <Button onClick={handleClickClearInput}><CloseIcon /></Button>
        </form>
    )
}
