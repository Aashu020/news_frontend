import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsById } from './services/api';

export default function NewsDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchNewsById(id).then(setArticle);
  }, [id]);

  if (!article) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="w-full h-80 object-cover rounded mb-4" />
      <p className="text-gray-700 text-lg">{article.content || article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="block text-blue-600 mt-4 underline">
        Read on Original Source →
      </a>
    </div>
  );
}
