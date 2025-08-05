
import { useEffect, useState } from 'react';
import { fetchNews } from './services/api';
import FilterBar from './FilterBar';

export default function NewsCarousel() {
  const [newsList, setNewsList] = useState([]);

  const loadNews = (filters = {}) => {
    fetchNews(filters).then(setNewsList);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="bg-gray-100 py-6 px-4" id='latest'>
      <FilterBar onFilter={loadNews} />
      <h2 className="text-2xl font-bold my-4">Latest News</h2>
      <div className="flex overflow-x-scroll gap-4 scrollbar-hide">
        {newsList.map((article, idx) => (
          <div key={idx} className="min-w-[300px] bg-white rounded shadow">
            <img src={article.urlToImage} alt={article.title} className="h-40 w-full object-cover rounded-t" />
            <div className="p-3">
              <h3 className="font-semibold">{article.title}</h3>
              <p className="text-sm">{article.description?.slice(0, 80)}...</p>
              <a href={article.url} target="_blank" className="text-blue-500 text-sm mt-2 inline-block">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
