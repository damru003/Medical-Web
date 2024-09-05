import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { HomePage } from './components/home-page/HomePage';
import { AboutPage } from './components/about-page/AboutPage';
import { ServicesPage } from './components/services-page/ServicesPage';
import { PricingPage } from './components/pricing-page/PricingPage';
import { ContactPage } from './components/contact-page/ContactPage';
import { BlogPage } from './components/blog-page/BlogPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='services' element={<ServicesPage/>}/>
            <Route path='pricing' element={<PricingPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
            <Route path='blog' element={<BlogPage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
