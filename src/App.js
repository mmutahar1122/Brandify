import './App.css';
import Navbar from './Pages/Front-end/Navbar/Index';
import Home from './Pages/Front-end/Home/Index';
import About from './Pages/Front-end/About/Index';
import Facts from './Pages/Front-end/Facts Section/Index';
import Skill from './Pages/Front-end/Skills/Index';
import Resume from './Pages/Front-end/Resume/Index';
import Portfolio from './Pages/Front-end/Portfolio/Index';
// import Services from './services/Index';
import Services from './Pages/Front-end/services/Index';
import Testimonial from './Pages/Front-end/Testimonial/Index';
import Contact from './Pages/Front-end/Contact/Index';
import Footer from './Pages/Front-end/Footer/Index';
import { useEffect, useState } from 'react';
import { BrowserRouter, useLocation, Routes, Route, Navigate  } from 'react-router-dom';
import Signup from './Pages/Authentication/Signup-Auth';
import Login from './Pages/Authentication/Login-Auth';
import { ToastContainer} from 'react-toastify';




function App() {
  // const [loginToken,setLoginToken]=useState(localStorage.getItem('token'))
  // const ScrollToTop = () => {
  //   const gotoTOp = useLocation();
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [gotoTOp])
  // }
  return (
    <>


    {/* <ScrollToTop/> */}
     <Navbar/>
      <Home />
                  <About />
                  <Facts />
                  <Skill />
                  {/* <Resume /> */}
                  <Portfolio />
                  <Services />
                  {/* <Testimonial /> */}
                  <Contact />
                  {/* <Footer /> */}
                  <ToastContainer/>

    </>
  );
}

export default App;