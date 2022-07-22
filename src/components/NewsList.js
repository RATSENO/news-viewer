import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const { default: styled } = require("styled-components");

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=724f88c9764345ab83fcca9f31b1e4b7`);
                setArticles(response.data.articles);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]);

    if(loading){
        return <NewsListBlock>대기중</NewsListBlock>;
    }

    if(!articles){
        return null;
    }

    return (
        <NewsListBlock>
            {
                articles.map(article=>(<NewsItem key={article.url} article={article}></NewsItem>))
            }
        </NewsListBlock>
    )
};

export default NewsList;