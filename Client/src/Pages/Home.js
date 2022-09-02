import React,{useEffect} from 'react'
import MovieList from '../components/MovieList'
import {useCookies} from 'react-cookie'
import { Link, useMatch, useResolvedPath, useNavigate} from "react-router-dom"
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
const Home = () => {
  const navigate = useNavigate()
  const [cookies,setCookie,removeCookie] = useCookies([]);
  useEffect(() => {
    const verifyUser = async () => {
        if(!cookies.jwt){
            navigate("/login")
        }else{
            const { data } = await axios.post("http://localhost:5000",
            {},
            {withCredentials:true})

            if(!data.status){
                removeCookie("jwt")
                navigate("/login")
            }else toast(`HI ${data.user}`,{theme:"dark"})
        }
    }
    verifyUser()
},[cookies,navigate,removeCookie])

  return (
    <>
        <MovieList />
        <ToastContainer/>
    </>
    

  )
}

export default Home
