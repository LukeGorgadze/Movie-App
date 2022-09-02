import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context';
import PropTypes from "prop-types";
const SingleSerie = () => {
  const { fetchSearchMovies, serieById, setSerieById, fetchSerieById } = useGlobalContext()
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
  console.log(serieById)
  if (id === ':id') {
    return (
      <div className='onlyMovies'>
        <h1 className='header'>Serie Details</h1>
        <YoutubeEmbed embedId="ILtz5nX3_fc" />
      </div>
    )
  }
  if (serieById) {
    return (
        <div className="singleMovie">
          <div className="imgCont">
            <img src={serieById.Poster} alt="" />
          </div>
          <div className="info">
            <p><span className='emphas'>{serieById.Title} : </span>{serieById.Year}</p>
            <p><span className='emphas'> Plot: </span>{serieById.Plot}</p>
            <p><span className='emphas'> Country: </span>{serieById.Country}</p>
            <p><span className='emphas'> Imdb Rating: </span>{serieById.imdbRating}</p>
          </div>
        </div>
    )
  }

}

export default SingleSerie
