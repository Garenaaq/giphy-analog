import GifsContainer from "../../components/GifsContainer/GifsContainer"
import { useEffect } from "react"
import useGifsTrending from "../../store/useGifsTrending";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";

export default function TrendGifs() {
    const { trendingGifs, gifs, loadMoreGifs, loading } = useGifsTrending(state => state);

    useEffect(() => {
        trendingGifs();
    }, []);

    const handleClickLoadMore = () => {
        loadMoreGifs();
    }

    return (
        <>
            <GifsContainer gifs={gifs} />
            {loading ? <Loader /> : ""}
            {gifs.length > 0 ? <Button onClick={handleClickLoadMore} style={"button-type-show-more"} /> : <></>}
        </>
    )
}
