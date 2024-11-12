import Gif from "../../components/Gif/Gif";
import useGifRandom from "../../store/useGifRandom";
import { useEffect } from "react";
import styles from './RandomGif.module.scss';
import Button from "../../components/Button/Button";

export default function RandomGif() {
    const { gif, getRandomGif } = useGifRandom(state => state);

    useEffect(() => {
        getRandomGif();
    }, []);

    const handleClickBtnNext = () => {
        getRandomGif();
    }

    return (
        <section className={styles['random-gif']}>
            <Gif urlGif={gif?.url} />
            <Button onClick={handleClickBtnNext} style={"button-type-next-gif"} />
        </section>
    );
}
