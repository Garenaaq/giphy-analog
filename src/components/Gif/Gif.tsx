import styles from './Gif.module.scss';

interface IGifProps {
    urlGif?: string;
    style?: string;
    originalUrl?: string;
}

export default function Gif({ urlGif, style, originalUrl }: IGifProps) {
    return (
        <a href={originalUrl} target='_blank' className={styles['gifs-container__gif-link']}>
            <img src={urlGif} alt="gif" className={`${styles['gifs-container__gif']} ${style ? styles[style] : ""}`} loading="lazy" />
        </a>
    )
}
