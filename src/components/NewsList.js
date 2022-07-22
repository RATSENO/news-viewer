import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";

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
    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=724f88c9764345ab83fcca9f31b1e4b7`);
    },[category]);

    if(loading){
        return <NewsListBlock>대기중</NewsListBlock>;
    }

    if(!response){
        return null;
    }

    if(error){
        return <NewsListBlock>에러</NewsListBlock>;
    }

    const {articles} = response.data;
    return (
        <NewsListBlock>
            {
                articles.map(article=>(<NewsItem key={article.url} article={article}></NewsItem>))
            }
        </NewsListBlock>
    )
};

export default NewsList;