import styles from './GifsContainer.module.scss';
import Gif from "../Gif/Gif";
import { IGifs } from '../../store/useGifsTrending';

interface IGifsContainerProps {
    gifs: IGifs[]
}

export default function GifsContainer({ gifs }: IGifsContainerProps) {

    return (
        <>
            {gifs.length > 0 ?
                <section className={styles['gifs-container']}>
                    {gifs.map(gif => <Gif key={gif.id} urlGif={gif.url} />)}
                </section>
                : ""
            }
        </>
    )
}
