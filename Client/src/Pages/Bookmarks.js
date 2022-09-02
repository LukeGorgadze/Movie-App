import React, { useEffect } from 'react'
import MovieList from '../components/MovieList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Movie from '../components/Movie'
import { useGlobalContext } from '../context'
const Bookmarks = () => {
    const { bookMarkedMovies, trendingMovies, bookMarkedSeries, setBookMarkedSeries } = useGlobalContext()
    // useEffect(() => {
    //     console.log('update')
    // },[bookMarkedMovies])

    const showMovies = bookMarkedMovies.length > 0 &&
        (bookMarkedMovies.map((movie, index) => {
            console.log(movie)
            return <Movie key={movie.props.imdbID} {...movie.props} favState={false} />
        })
        )

    const showSeries = bookMarkedSeries.length > 0 &&
        (bookMarkedSeries.map((movie, index) => {
            console.log(movie)
            return <Movie key={movie.props.imdbID} {...movie.props} favState={false} />
        })
        )
    return (
        <>
            <div className='onlyMovies'>
                <h1 className='header'>Favourite Movies: </h1>
                <div className='FavMoviesSeries'>
                    {showMovies
                    }
                </div>
                <h1 className='header'>Favourite Series: </h1>
                <div className='FavMoviesSeries'>
                    {showSeries
                    }
                </div>

            </div>

        </>

    )
}

export default Bookmarks