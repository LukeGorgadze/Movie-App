import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import Movie from './Movie'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import SearchForm from './SearchForm';
import SearchedResult from '../Pages/SearchResult';
import Navbar from '../components/Navbar'
import { useGlobalContext } from '../context';



const MovieList = () => {
    const { mainMovies, trendingMovies, loading, setSearchTerm, isSearching, setSearching,setMainMovies } = useGlobalContext()

    const options = {
        margin: 60,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 5,

            }
        },
    };
    if (isSearching) {
        return (
            <div className='onlyMovies'>
                <SearchForm />
                <SearchedResult />
            </div>


        )
    }

    const owlCar = () => {
        return (
            <OwlCarousel {...options} className='owl'>
                {trendingMovies.map((movie, index) => {
                    return <Movie key={movie.imdbID} {...movie} favState={true} trendMovie={true} />
                })}
            </OwlCarousel>
        )
    }

    // const showMainMovies = 

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const memoizedOwl = useCallback(owlCar,[options])
    return (
        <>
            <div className='onlyMovies'>
                <SearchForm />
                {!isSearching && trendingMovies.length > 0 && (
                    <>
                        <h1 className='header'>Trending</h1>
                        <div className="trending">
                            {memoizedOwl()}
                        </div>
                    </>
                )}

                <h1 className='header'>Recommended for you</h1>
                <div className='movieRecommended'>
                    {mainMovies.map((movie, index) => {
                        return <Movie key={movie.imdbID} {...movie} favState={true} />
                    })}
                </div>

            </div>
        </>
    )
}

export default MovieList
