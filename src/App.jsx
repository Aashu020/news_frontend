import { useEffect, useState } from 'react';
import { fetchAndStoreNews, fetchNews } from './services/api';
import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import NewsCarousel from './components/NewCarousel';
import NewsCard from './components/NewsCard';
import NewsDetailPage from './NewPage'; // ✅ make sure this exists

function App() {
  const [newsList, setNewsList] = useState([]);

  const loadNews = async () => {
    try {
      const news = await fetchNews();
      setNewsList(news);
    } catch (err) {
      console.error("Error loading news:", err);
    }
  };

  const initializeNews = async () => {
    try {
      const saved = await fetchAndStoreNews();
      console.log("News fetched/stored:", saved);
    } catch (err) {
      console.warn("Initial fetch skipped (may already exist)", err.message);
    } finally {
      loadNews();
    }
  };

  useEffect(() => {
    initializeNews();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <NewsCarousel newsList={newsList} />
              <NewsCard newsList={newsList} />
            </>
          }
        />
        
        {/* News detail route */}
        <Route path="/news/:id" element={<NewsDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
