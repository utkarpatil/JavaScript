import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function GenreChart({ movies }) {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const genreCount = {};

    movies.forEach((movie) => {
      if (movie.Genre) {
        movie.Genre.split(', ').forEach((genre) => {
          genreCount[genre] = (genreCount[genre] || 0) + 1;
        });
      }
    });

    const labels = Object.keys(genreCount);
    const data = Object.values(genreCount);

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: labels.map((_, i) => `hsl(${i * 40}, 70%, 60%)`)
          }
        ]
      },
      options: {
        responsive: true,
      },
    });
  }, [movies]);

  return (
    <div className="my-5">
      <h5>Genre Distribution</h5>
      <canvas ref={chartRef} height="100" />
    </div>
  );
}

export default GenreChart;
