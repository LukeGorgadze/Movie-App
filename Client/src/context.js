import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const movies = ["super", "avengers", "earth", "hero", "naruto", "Friday", "Saturday"];
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState(movies[Math.floor(Math.random() * movies.length)])
  const [trendingMovies, setTrendingMovies] = useState([])
  const [mainMovies, setMainMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState([])
  const [bookMarkedMovies, setBookMarkedMovies] = useState([])
  const [bookMarkedSeries, setBookMarkedSeries] = useState([])
  const [isSearching, setSearching] = useState(false)
  const [movieById,setMovieById] = useState(null)
  const [serieById,setSerieById] = useState(null)

  const fetchMovieById = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=618c3430`
    const response = await fetch(url)
    const responseJson = await response.json();
    // console.log(responseJson)
    if (responseJson.Title) {
      setMovieById(responseJson)
    }
  }
  const fetchSerieById = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=618c3430`
    const response = await fetch(url)
    const responseJson = await response.json();
    if (responseJson.Title) {
      setSerieById(responseJson)
    }
  }

  const fetchMainMovies = useCallback(async (str) => {
    setLoading(true)
    axios(`http://www.omdbapi.com/?s=${str}&apikey=618c3430`)
      .then(response => {
        console.log(response.data)
        setLoading(false)
        setMainMovies(response.data.Search)
      })
      .catch(err => {
        console.log("Error while fetching data: ", err);
        setLoading(false)
      })
  }, [])

  const fetchSearchMovies = async (searchTerm) => {
    // setLoading(true)
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=618c3430`

    const response = await fetch(url)
    const responseJson = await response.json();

    if (responseJson.Search) {
      setSearchedMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    fetchSearchMovies(searchTerm)
  }, [searchTerm])

  const fetchTrendingMovies = useCallback(async () => {
    setLoading(true)
    axios(`http://www.omdbapi.com/?s=Game&apikey=618c3430`)
      .then(response => {
        console.log(response.data)
        setLoading(false)
        setTrendingMovies(response.data.Search)
      })
      .catch(err => {
        console.log("Error while fetching data: ", err);
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchMainMovies(searchTerm)
    fetchTrendingMovies()
  }, [])


  return (
    <AppContext.Provider
      value={{
        loading, searchTerm, setSearchTerm, mainMovies, setMainMovies, trendingMovies, setTrendingMovies, bookMarkedMovies,
        setBookMarkedMovies, bookMarkedSeries, setBookMarkedSeries, searchedMovies, setSearchedMovies, fetchMainMovies,
        isSearching, setSearching, fetchSearchMovies,movieById,setMovieById,serieById,setSerieById,fetchMovieById,fetchSerieById
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
