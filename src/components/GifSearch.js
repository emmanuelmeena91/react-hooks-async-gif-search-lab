import React, { useState } from 'react';

const GifSearch = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for GIFs"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;