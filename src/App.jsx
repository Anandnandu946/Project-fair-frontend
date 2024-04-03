
import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/login"} element={<Auth/>}/>
      <Route path={"/register"} element={<Auth register/>}/>
      <Route path={"/dashboard"} element={<Dashboard/>}/>
      <Route path={"/projects"} element={<Projects/>}/>
      <Route path={"*"} element={<Navigate to={"/"} />}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
