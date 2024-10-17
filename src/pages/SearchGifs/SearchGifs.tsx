import Form from '../../components/Form/Form'
import GifsContainer from '../../components/GifsContainer/GifsContainer';
import useGifsSearch from '../../store/useGifsSearch';

export default function SearchGifs() {

    const { gifs } = useGifsSearch(state => state);

    return (
        <>
            <Form />
            <GifsContainer gifs={gifs} />
        </>
    )
}
