import { Fragment } from 'react';
import { Link, animateScroll as scroll } from "react-scroll"; 
import '../styles/Header.scss';
function Header(){
    return(
        <Fragment>
            <header className='col-lg-12 header-container'>
                <div className='row'>
                    <div className='col-lg-6 logo-container'>
                        <div>AESTHETICA
                            <span>Interiors</span>
                        </div>
                    </div>
                    <div className='row col-lg-6 nav-container'>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                        <Link activeClass="active" to="studio" spy={true} smooth={true} offset={-70} duration={500}>Studio</Link>
                        <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-70} duration={500}>Blog</Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                    </div>
                </div>
                
                
            </header>
        </Fragment>
    )
}

export default Header;