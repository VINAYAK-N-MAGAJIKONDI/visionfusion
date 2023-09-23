import React, { useState, useEffect } from 'react';
import './quotes.css'; // Create a CSS file for styling

const DailyZenQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchDailyQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setQuote(data.content);
        setAuthor(data.author);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchDailyQuote();
  }, []);

  return (
    <div className="daily-zen-quote-container">
      <div className="zen-quote">
        <blockquote className="quote-text">
          {quote}
          {author && <cite>- {author}</cite>}
        </blockquote>
      </div>
    </div>
  );
};

export default DailyZenQuote;
