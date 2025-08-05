// import axios from 'axios';

// const BASE_URL = 'http://localhost:5000/api/news';

// // ✅ This should fetch saved news from MongoDB
// export const fetchNews = async () => {
//   const res = await axios.get(BASE_URL);
//   return res.data; // ⬅️ This will be an array like: [{...}, {...}]
// };

// // ✅ This one pulls fresh from NewsAPI and saves to DB
// export const fetchAndStoreNews = async () => {
//   const res = await axios.get(`${BASE_URL}/fetch`);
//   return res.data; // ⬅️ This returns { message, count }
// };
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/news';

export const fetchNews = async (filters = {}) => {
  const res = await axios.get(BASE_URL, { params: filters });
  return res.data;
};

export const fetchAndStoreNews = async () => {
  const res = await axios.get(`${BASE_URL}/fetch`);
  return res.data;
};

export const fetchTopHeadlinesToDB = async () => {
  const res = await axios.get(`${BASE_URL}/fetch-top-headlines`);
  return res.data;
};

export const fetchTopHeadlines = async () => {
  const res = await axios.get(BASE_URL, {
    params: { source: 'bbc-news', limit: 8 }
  });
  return res.data;
};
