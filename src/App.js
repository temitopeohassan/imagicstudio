import React, {useState}  from 'react';
import Home from './pages/';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Nomatch from './pages/nomatch';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
          const [isOpen, setIsOpen] = useState(false)

        const toggle = () =>{
        setIsOpen(!isOpen)
        }



  return (
 <>
  <Router>
  <ScrollToTop />
  <Header />
    <Routes>
     <Route exact path="/" element={<Home />}/>
     <Route path="/about" element={<About />}/>
     <Route path="/services" element={<Services />}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path="/nomatch" element={<Nomatch />}/>
 	  </Routes>
    <Footer />
    </Router>
     
    </>
  );
}

export default App;