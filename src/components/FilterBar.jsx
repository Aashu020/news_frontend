import { useState } from 'react';
import { X } from 'lucide-react'; // or use "×" if you don’t want to install

export default function FilterBar({ onFilter }) {
  const [title, setTitle] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ title, from, to });
  };

  const clearTitle = () => {
    setTitle('');
    onFilter({ title: '', from, to });
  };

  const clearFrom = () => {
    setFrom('');
    onFilter({ title, from: '', to });
  };

  const clearTo = () => {
    setTo('');
    onFilter({ title, from, to: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 p-4 bg-white shadow rounded-md"
    >
      {/* Title Input */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search by title..."
          className="border p-2 rounded w-full pr-10"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title && (
          <button
            type="button"
            onClick={clearTitle}
            className="absolute right-2 top-2 text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* From Date Input */}
      <div className="relative">
        <input
          type="date"
          className="border p-2 rounded pr-10"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        {from && (
          <button
            type="button"
            onClick={clearFrom}
            className="absolute right-2 top-2 text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* To Date Input */}
      <div className="relative">
        <input
          type="date"
          className="border p-2 rounded pr-10"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        {to && (
          <button
            type="button"
            onClick={clearTo}
            className="absolute right-2 top-2 text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Filter
      </button>
    </form>
  );
}
