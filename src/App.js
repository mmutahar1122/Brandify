import './App.css';
import Navbar from './Navbar/Index';
import Home from './Home/Index';
import About from './About/Index';
import Facts from './Facts Section/Index';
import Skill from './Skills/Index';
import Resume from './Resume/Index';
import Portfolio from './Portfolio/Index';
import Services from './services/Index';
import Testimonial from './Testimonial/Index';
// import Contact from './Contact/Index';
import Footer from './Footer/Index';
import { useEffect } from 'react';
import { BrowserRouter,useLocation } from 'react-router-dom';



function App() {
  const ScrollToTop = () => {
    const gotoTOp = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [gotoTOp])
  }
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
     <Navbar/>
     <Home/>
     <About/>
     {/* <Facts/> */}
     <Skill/>
     {/* <Resume/> */}
     <Portfolio/>
     <Services/>
     <Testimonial/>
     {/* <Contact/> */}
     <Footer/>
     </BrowserRouter>

     
    </>
  );
}

export default App;
