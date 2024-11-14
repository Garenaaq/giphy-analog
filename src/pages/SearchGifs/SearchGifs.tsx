import Form from '../../components/Form/Form'
import GifsContainer from '../../components/GifsContainer/GifsContainer';
import useGifsSearch from '../../store/useGifsSearch';
import Button from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader';

export default function SearchGifs() {

    const { gifs, loadMoreGifs, loading } = useGifsSearch(state => state);

    const handleClickLoadMore = () => {
        loadMoreGifs();
    }

    return (
        <>
            <Form />
            <GifsContainer gifs={gifs} />
            {loading ? <Loader /> : ""}
            {gifs.length > 0 ? <Button onClick={handleClickLoadMore} style={"button-type-show-more"} /> : <></>}
        </>
    )
}
