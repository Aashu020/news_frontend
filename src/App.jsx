// import { useEffect, useState } from 'react';
// import NewsCard from './components/NewsCard';
// import { fetchNews, fetchAndStoreNews } from './services/api';

// function App() {
//   const [newsList, setNewsList] = useState([]);

//   const fetchExternalNews = async () => {
//     try {
//       const result = await fetchAndStoreNews();
//       console.log("News fetched and stored:", result);
//       // ✅ Now load news from DB
//       loadNews();
//     } catch (err) {
//       console.error("Error fetching/storing news:", err);
//     }
//   };
  
//   const loadNews = async () => {
//     try {
//       const news = await fetchNews(); // returns array from /api/news
//       console.log("Loaded news:", news);
//       setNewsList(news);
//     } catch (err) {
//       console.error("Error loading news:", err);
//     }
//   };

//   useEffect(() => {
//     loadNews();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">📰 NewsFetch</h1>
//         <button
//           onClick={fetchExternalNews}
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Fetch Latest News
//         </button>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//         {newsList.map((article, index) => (
//           <NewsCard key={index} news={article} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import NewsCarousel from './components/NewCarousel';
import NewsCard from './components/NewsCard';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar/>
      <HeroSection />
      <NewsCarousel />
      <NewsCard/>
    </div>
  );
}

export default App;
