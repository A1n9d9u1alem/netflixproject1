//commit
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomMovie =
          request.data.results[Math.floor(Math.random() * request.data.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    })();
  }, []);

  return (
    <div
      className="Banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
        {movie?.title || movie?.name || movie?.original_name}

        </h1>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* Uncomment and define truncate if needed */}
        {/* <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1> */}
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;
