// src/components/NewsCard.jsx
import { useEffect, useState } from 'react';
import { delNews, fetchNews } from '../services/api';

export default function NewsCard() {
  const [newsList, setNewsList] = useState([]);

  const deleteNews = (id) =>{
    console.log(id)
    delNews(id).then("Successfully deleted")
    window.location.reload()

  }

  useEffect(() => {
    fetchNews()
      .then(setNewsList)
      .catch((err) => console.error("Failed to load news:", err));
  }, []);

  return (
    <div className="bg-gray-100 py-8 px-4" id="latest">
      <h1 className="text-3xl font-bold mb-6 text-center"> News</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.length === 0 ? (
          <p className="text-center col-span-full text-gray-600">No news found.</p>
        ) : (
          newsList.map((news, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full"
            >
                <button onClick={() => deleteNews(news._id)}>X</button>
              <div className="h-48 w-full bg-gray-200 overflow-hidden">
                <img
                  src={news.urlToImage || "https://via.placeholder.com/400x200?text=No+Image"}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
                  {news.title}
                </h2>

                {news.description && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {news.description}
                  </p>
                )}

                <div className="text-xs text-gray-500 mt-auto">
                  <span>{news.source?.name || 'Unknown Source'}</span>
                  {news.author && <> · <span>{news.author}</span></>}
                  {news.publishedAt && (
                    <> · <span>{new Date(news.publishedAt).toLocaleDateString()}</span></>
                  )}
                </div>

                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-blue-600 font-medium hover:underline"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
