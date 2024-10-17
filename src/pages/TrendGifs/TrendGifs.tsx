import GifsContainer from "../../components/GifsContainer/GifsContainer"
import { useEffect } from "react"
import useGifsTrending from "../../store/useGifsTrending";

export default function TrendGifs() {
    const { trendingGifs, gifs } = useGifsTrending(state => state);

    useEffect(() => {
        trendingGifs();
    }, []);

    return (
        <>
            <GifsContainer gifs={gifs} />
        </>
    )
}
