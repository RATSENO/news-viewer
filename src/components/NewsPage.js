
import {useParams} from 'react-router-dom'
import Categories from './Categories';
import NewsList from './NewsList';
const NewsPage = () =>{
    const params = useParams();

    const category = params.category || 'all';

    return (
        <>
            <Categories></Categories>
            <NewsList category={category}></NewsList>
        </>
    )
};

export default NewsPage;