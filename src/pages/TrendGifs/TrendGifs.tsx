import GifsContainer from "../../components/GifsContainer/GifsContainer"
import { useEffect } from "react"
import useGifsTrending from "../../store/useGifsTrending";
import Button from "../../components/Button/Button";

export default function TrendGifs() {
    const { trendingGifs, gifs, loadMoreGifs } = useGifsTrending(state => state);

    useEffect(() => {
        trendingGifs();
    }, []);

    const handleClickLoadMore = () => {
        loadMoreGifs();
    }

    return (
        <>
            <GifsContainer gifs={gifs} />
            {gifs.length > 0 ? <Button onClick={handleClickLoadMore} style={"button-type-show-more"} /> : <></>}
        </>
    )
}
