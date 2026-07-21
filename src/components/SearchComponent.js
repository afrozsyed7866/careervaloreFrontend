import { useState, useEffect } from 'react';

export default function SearchComponent({ onSearch }) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Debounce delay of 300ms

    return () => {
      clearTimeout(handler); // Cleanup the timeout
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      onSearch(debouncedQuery); // Call the search function when debouncedQuery changes
    }
  }, [debouncedQuery]);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
      />
    </div>
  );
}
