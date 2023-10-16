import React, { useEffect, useState } from "react";
import './Home.css'
import axios from "axios"
import NewsArticle from "../../componets/NewsArticle/NewsArticle";

function Home() {
    const [news, setNews] = useState([])
    const [searchQury, setSearchQury] = useState("pune")

    const loadNews = async () => {
        try {


            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQury}&from=2023-10-15&to=2023-10-15&sortBy=popularity&apiKey=2477dff7c9a54a599439423d03af1ba2`)

            setNews(response.data.articles)
        }
        catch(error){
            console.log(error)
        }
        }
    useEffect(() => {
            loadNews()
        }, [])
        useEffect(() => {
            loadNews()
        }, [searchQury])
        return (
            <>
                <h1 className="heading">News App</h1>
                <input type="text" value={searchQury} onChange={(e) => setSearchQury(e.target.value)}
               className="searchbar"></input>
                <div className="news-container">
                    {
                        news.map((newsArticle, index) => {
                            const { author, title, description, url, urlToImage, publishedAt } = newsArticle
                            return (

                                <NewsArticle author={author} title={title} description=
                                    {description} url={url} urlToImage=
                                    {urlToImage} publishedAt={publishedAt} key={index} />


                            )
                        })
                    }
                </div>
            </>
        )

    }
    export default Home