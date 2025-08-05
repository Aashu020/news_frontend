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

export const delNews = async (id)=>{
  const res = await axios.delete(`${BASE_URL}/del/${id}`);
  return res.data;
}

//Get a single article by ID
export const fetchNewsById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};