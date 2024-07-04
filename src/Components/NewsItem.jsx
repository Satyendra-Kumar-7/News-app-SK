import React from "react";
import image from '../assets/News.jpg'; 

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light h-100">
      <img 
        src={src || image} 
        style={{ height: "200px", width: "100%", objectFit: "cover" }} 
        className="card-img-top" 
        alt="news" 
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "Breaking News: Major earthquake shakes the Pacific region, causing widespread damage and triggering tsunami warnings. Stay tuned for updates on this developing story and follow safety instructions from local officials."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
