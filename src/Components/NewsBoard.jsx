import { useEffect, useState } from "react";
import React from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category, country, source }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY; 
        const pageSize = 50;
        let url = source 
          ? `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
          : `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
          console.log("Total articles fetched: ", data.articles.length);
          console.log("Articles data: ", data.articles);
        }

        const filteredArticles = data.articles.filter(article => 
          article.title && 
          !article.title.toLowerCase().includes("removed")
        );

        console.log("Filtered articles: ", filteredArticles);
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, [category, country, source]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <NewsItem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No articles available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
