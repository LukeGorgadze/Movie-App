import React from 'react'
import { Link, useMatch, useResolvedPath, useNavigate} from "react-router-dom"
import { MdMovieCreation, MdWindow, MdTv } from 'react-icons/md'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { TbMovie } from 'react-icons/tb'
import Panda from '../images/panda.png'
import {useCookies} from 'react-cookie'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from 'react'
const Navbar = () => {
    const navigate = useNavigate()
    
    const [cookies,setCookie,removeCookie] = useCookies([]);
    
    const logOut = () => {
        removeCookie("jwt")
        navigate("/register")
    }
    return (
        <div className='Navbar'>
            <div className="Navbar-content">
                <MdMovieCreation className='Navbar-main' />
                <CustomButtonLink to="/"><MdWindow className='Navbar-icon' /></CustomButtonLink>
                <CustomButtonLink to="/movies/:id"><TbMovie className='Navbar-icon' /></CustomButtonLink>
                <CustomButtonLink to="/series/:id"><MdTv className='Navbar-icon' /></CustomButtonLink>
                <CustomButtonLink to="/bookmarks"><BsBookmarkStarFill className='Navbar-icon' /></CustomButtonLink>
                <img src={Panda} alt="panda" className='Navbar-user-icon' onClick={logOut} />
            </div>

        </div>
    )
}

function CustomButtonLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (

        <Link to={to} {...props}>
            <button className={isActive ? 'Navbar-button activeButt' : 'Navbar-button'}>
                {children}
            </button>
        </Link >


    )
}

export default Navbar
