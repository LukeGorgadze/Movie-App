import React, { useEffect, useState } from 'react'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { TbMovie } from 'react-icons/tb'
import { useGlobalContext } from '../context';
import { useParams, Link } from 'react-router-dom'
const Movie = (props) => {

    const { bookMarkedMovies, setBookMarkedMovies, bookMarkedSeries, setBookMarkedSeries,
        mainMovies, setMainMovies,
        movieById, setMovieById, fetchMovieById,fetchSerieById } = useGlobalContext()
    const [bookState, setBookState] = useState(props.favState ? <BsBookmarkStar /> : <BsBookmarkStarFill />)
    const [arState, setArState] = useState(props.favState)
    useEffect(() => {
        // console.log(arState)
        // console.log(bookMarkedMovies)
        // console.log(bookMarkedSeries)
        console.log(mainMovies)
    }, [arState])


    const AddToFavs = () => {

        if (props.Type === 'movie') {
            const newMovie = <Movie key={props.imdbID} {...props} favState={!arState} />
            const newMovies = [...bookMarkedMovies.filter((fav) => fav.props.imdbID !== props.imdbID), newMovie]
            setBookMarkedMovies(newMovies)
        } else if (props.Type === 'series') {
            const newSerie = <Movie key={props.imdbID} {...props} favState={!arState} />
            const newSeries = [...bookMarkedSeries.filter((fav) => fav.props.imdbID !== props.imdbID), newSerie]
            setBookMarkedSeries(newSeries)
        }
        console.log("added")
        setBookState(<BsBookmarkStarFill />)
        setArState(!arState)

    }
    const RemoveFromFavs = () => {

        if (props.Type === 'movie') {
            const newMovies = bookMarkedMovies.filter((fav) => fav.props.imdbID !== props.imdbID)
            setBookMarkedMovies(newMovies)
        } else if (props.Type === 'series') {
            const newSeries = bookMarkedSeries.filter((fav) => fav.props.imdbID !== props.imdbID)
            setBookMarkedSeries(newSeries)
        }


        console.log("removed")
        setBookState(<BsBookmarkStar />)
        setArState(!arState)
    }

    const onMovieClick = () => {
        console.log("click")
        console.log(props.imdbID)
        props.Type === 'movie'? fetchMovieById(props.imdbID) : fetchSerieById(props.imdbID)
    }

    return (
        <div className='movie' onClick={onMovieClick}>
            <div className={props.trendMovie ? 'movieImgCont trend' : 'movieImgCont'} src={props.Poster} alt="" >
                <Link to={props.Type === 'movie'? `/movies/${props.imdbID}` : `/series/${props.imdbID}`}><img src={props.Poster} alt="" /></Link>
                <div className="movie-tag">
                    <p className='movie-info'>{props.Year} <TbMovie className='movie-icon' /> {props.Type}</p>
                    <p className='movie-title'>{props.Title}</p>
                </div>
                <div
                    className="bookMark"
                    onClick={arState ? AddToFavs : RemoveFromFavs}>
                    {bookState}
                </div>
            </div>
        </div>
    )
}

export default Movie
