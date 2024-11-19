import Gif from "../../components/Gif/Gif";
import useGifRandom from "../../store/useGifRandom";
import { useEffect } from "react";
import styles from './RandomGif.module.scss';
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";

export default function RandomGif() {
    const { gif, getRandomGif, loading } = useGifRandom(state => state);

    useEffect(() => {
        getRandomGif();
    }, []);

    const handleClickBtnNext = () => {
        getRandomGif();
    }

    return (
        <section className={styles['random-gif']}>
            {loading ? <Loader /> :
                <>
                    <Gif urlGif={gif?.url} style={"gifs-container__gif_random"} originalUrl={gif?.originalUrl} />
                    <Button onClick={handleClickBtnNext} style={"button-type-next-gif"} />
                </>
            }
        </section>
    );
}
