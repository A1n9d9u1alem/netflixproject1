/*import React, { useEffect,useState} from "react"
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube'
//import { width } from "@mui/system";
const Row = ( {title, fetchUrl, isLargeRow}) => {

     const[movies, setMovie]=useState([]);
     const[trailerUrl, setTrailer]=useState("");
     const base_url="https://image.tmdb.org/t/p/original",


     useEffect(() =>{
      (async()  =>{
             
        try{
           //console.log(fetchUrl)
           const request =await axios.get(fetchUrl);
           //console.log(request) 
           setMovie(request.data.results);
       }
     catch (error) {
        console.log("error",error) 
    }
      })()
},[fetchUrl]
)
         const  handleClick=(movie) =>{
      
        if (traileUrl){
         setTrailerUrl('')
  }
else{

    movieTrailer(movie?.title||movie?.name ||movie?.orginal_name)
    .then((url) =>
    {
        console.log(url) 
        const urlParms=new URLSearchParams(new URL(url).search)
        console.log( urlParms) 
        console.log( urlParms.get('v'))
        setTrailerUrl(urlParms.get('v'));
    }
     )
}
       }
        const opts={
            height:'390',
            width:"100%",
            playerVars: {

            autoplay:1,
 },

 }
  return (
    <div className="row">
        <h1> {title} </h1>
        <div className="row_posters">
          
          {movies?.map((movie,index)=>(
            <img
            onClick={()=> handleClick(movie)}
           key={index} src={`&{base_url}&{isLargeRow ?movie.poster_path :movie.backdrop_path}`}alt={movie.name} className={`row__poster & {isLargeRow && "row__posterLarge" }`}/>
          )
        )}
        </div>
        <div   style={{padding: '40px'}}>
        
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
  </div>
 </div>
  )
}

export default Row*/

import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log("Trailer not found", error));
    }
  };

  const opts = {
    height: '390',
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
