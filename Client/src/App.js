import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useGlobalContext } from './context';
import { LoaderDef } from './loaders/defaultLoader'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleMovie from './components/SingleMovie'
import SingleSerie from './components/SingleSerie'
import Bookmarks from './Pages/Bookmarks'
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  const { loading } = useGlobalContext()

  if (loading) {
    return (<LoaderDef />)
  }
  return (
    <Router>
      <div className="Container">
      <Navbar />
        <Routes>
          {
            <>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/bookmarks' element={<Bookmarks />} />
            <Route path='/movies/:id' element={<SingleMovie />} />
            <Route path='/series/:id' element={<SingleSerie />} />
            
            </>
            
            // <Route path='*' element={<Error />} /> */
          }
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
