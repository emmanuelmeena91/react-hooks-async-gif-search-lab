import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query !== '') {
      fetchGifs(query);
    }
  }, [query]);

  const fetchGifs = async (searchQuery) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=YOUR_API_KEY&rating=g`
      );
      const data = await response.json();
      setGifs(data.data.slice(0, 3));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    }
  };

  const handleSubmit = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
      <GifSearch onSubmit={handleSubmit} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Search Results</h2>
          {gifs.map((gif) => (
            <div key={gif.id}>
              <img src={gif.images.original.url} alt={gif.title} />
              <p>{gif.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GifListContainer;