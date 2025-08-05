import { useEffect, useState } from 'react';
import { fetchTopHeadlines } from './services/api';

export default function HeroSection() {
  const [topNews, setTopNews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchTopHeadlines().then(setTopNews);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % topNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [topNews]);

  if (topNews.length === 0) return null;

  const activeArticle = topNews[activeIndex];
  const imageUrl = activeArticle?.urlToImage || '/fallback.jpg';

  return (
    <div
      id='hero'
      className="relative h-[91vh] w-full bg-center bg-cover transition-all duration-700"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {activeArticle?.title || 'No title'}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            {activeArticle?.description?.slice(0, 150) || 'No description'}...
          </p>
          <a
            href={activeArticle?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition"
          >
            Read Full Article →
          </a>
        </div>
      </div>
    </div>
  );
}
