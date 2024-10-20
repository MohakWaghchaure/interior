import './App.scss';
import { Children, Fragment, useRef } from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Studio from './components/Studio';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
  return (
    <Fragment>
      <div className='body-wrapper'>
        <div className='overlay'>
          <div className='text'>Please use large resolution screen for better experience</div>
        </div>
        <Header></Header>
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Studio></Studio>
        <Blog></Blog>
        <ContactUs></ContactUs>
        <Footer></Footer>
        <div className="built-by">Built by <a href="https://mohakwaghchaure.github.io/portfolio/">Mohak Sunil Waghchaure</a></div>
      </div>
    </Fragment>
  );
}

export default App;
