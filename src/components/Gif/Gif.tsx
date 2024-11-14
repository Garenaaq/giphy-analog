import styles from './Gif.module.scss';

interface IGifProps {
    urlGif?: string
}

export default function Gif({ urlGif }: IGifProps) {
    return (
        <img src={urlGif} alt="gif" className={styles['gifs-container__gif']} loading="lazy" />
    )
}
