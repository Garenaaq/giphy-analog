import Form from '../../components/Form/Form'
import GifsContainer from '../../components/GifsContainer/GifsContainer';
import useGifsSearch from '../../store/useGifsSearch';
import Button from '../../components/Button/Button';

export default function SearchGifs() {

    const { gifs, loadMoreGifs } = useGifsSearch(state => state);

    const handleClickLoadMore = () => {
        loadMoreGifs();
    }

    return (
        <>
            <Form />
            <GifsContainer gifs={gifs} />
            {gifs.length > 0 ? <Button onClick={handleClickLoadMore} style={"button-type-show-more"} /> : <></>}
        </>
    )
}
