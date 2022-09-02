import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
import PropTypes from "prop-types";
const SingleMovie = () => {
  const { fetchSearchMovies, movieById, setMovieById, fetchMovieById } = useGlobalContext()
  const { id } = useParams()

  const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );

  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };


  // fetchMovieById()
  console.log(movieById)
  if (id === ':id') {
    return (
      <div className='onlyMovies'>
        <h1 className='header'>Movie Details</h1>
        <YoutubeEmbed embedId="ub82Xb1C8os" />
      </div>
    )
  }
  if (movieById) {
    return (
      <div className="singleMovie">
        <div className="imgCont">
          <img src={movieById.Poster} alt="" />
        </div>
        <div className="info">
          <p><span className='emphas'>{movieById.Title} : </span>{movieById.Year}</p>
          <p><span className='emphas'> Plot: </span>{movieById.Plot}</p>
          <p><span className='emphas'> Country: </span>{movieById.Country}</p>
          <p><span className='emphas'> Imdb Rating: </span>{movieById.imdbRating}</p>


        </div>
      </div>
    )
  }

}

export default SingleMovie
