import "./bar.css"
import React, { useState, useEffect } from 'react';

const BarGraph = ({ dailyScores }) => {
  const [bars, setBars] = useState(() => {
    const savedBars = localStorage.getItem('barGraphBars');
    return savedBars ? JSON.parse(savedBars) : new Array(23).fill(0);
  });

  useEffect(() => {
    if (dailyScores.length > 0) {
      const newBars = bars.slice(1); // Remove the first bar
      newBars.push(dailyScores[dailyScores.length - 1] * 10); // Add the latest score (multiplied by 10)
      setBars(newBars);
    }
  }, [dailyScores]);

  useEffect(() => {
    // Save the bars data to localStorage
    localStorage.setItem('barGraphBars', JSON.stringify(bars));
  }, [bars]);

  return (
    <div className="bar-graph">
      {bars.map((barHeight, index) => (
        <div
          key={index}
          className="bar"
          style={{
            width: '15px',
            height: barHeight + 'px', // Height directly from the bars data
          }}
        >
          {barHeight > 0 ? (barHeight / 10).toFixed(1) : ''} {/* Display the value if the bar is filled, with 0.1 decimal accuracy */}
        </div>
      ),)}
    </div>
  );
};

export default BarGraph;
