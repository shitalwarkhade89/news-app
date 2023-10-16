import React, { useEffect, useState } from "react";
import './Home.css'
import  axios from "axios"

function Home() {
    const [news, setNews] = useState([])

    const loadNews = async () => {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=apple&from=2023-10-15&to=2023-10-15&sortBy=popularity&apiKey=2477dff7c9a54a599439423d03af1ba2`)

            setNews(response.data.articles)
    }
    useEffect(() => {
        loadNews()
    }, [])
    return (
        <>
            <h1>News App</h1>
            {
                news.map((newsArticle,index) => {
                    const {author,title,description,url,urlToImage,publishedAt,content} =newsArticle
                   return(
                        <>
                        <div className="news-article-card">
                            <img src={urlToImage} alt="" className="news-article-img"/>
                            <h1>{title}</h1>


                        </div>
                        
                        </>
                   ) 
                })
            }

        </>
    )

}
export default Home