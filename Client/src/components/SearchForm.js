import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';
import { RiSearchLine } from 'react-icons/ri'
export default function SearchForm() {
    const { fetchSearchMovies, searchTerm, setSearchTerm, searchedMovies, setSearchedMovies, fetchMainMovies, isSearching, setSearching } = useGlobalContext()
    const searchValue = React.useRef('')

    // React.useEffect(() => {
    //     searchValue.current.focus()
    // }, [])
    console.log(isSearching)
    function searchMovie(e) {
        e.preventDefault()
        setSearchTerm(searchValue.current.value)
        if (searchValue.current.value.length > 3) {
            console.log("Hit")
        }
        if (searchValue.current.value.length > 0) {
            setSearching(true)
        } else {
            setSearching(false)
        }


    }
    function handleSubmit(e) {
        e.preventDefault()


    }
    return (

        <form onSubmit={handleSubmit} className="searchBar" >
            <button type="submit" className='searchButton' >
                <RiSearchLine className='searchButton-icon' />
            </button>
            <input type='text'
                name='name'
                id='name'
                ref={searchValue}
                onChange={searchMovie}
                placeholder="Search for movies or TV series"
                className='search' />

        </form>

    )
}
