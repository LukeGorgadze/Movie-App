import React from 'react'
import MovieList from '../components/MovieList'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Movie from '../components/Movie'
import { useGlobalContext } from '../context'
const SearchedResult = () => {
    const { searchedMovies } = useGlobalContext()

    return (
        <>
            <h1 className='header'>Searched results: </h1>
            <div className='searchedMovies'>
                {searchedMovies.length > 0 &&
                    (searchedMovies.map((movie, index) => {
                        return <Movie key={index} {...movie} favState={true} />
                    })
                    )

                }
            </div>
        </>
    )
}

export default SearchedResult