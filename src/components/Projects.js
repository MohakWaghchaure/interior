import { Fragment } from 'react';
import Container from './Container';

function Projects(){
    return(
        <Fragment>
            <Container id="projects">                
                    <div className="col-lg-12 projects-title-container">
                        <h2>Our Projects</h2>
                    </div>
                    <div className='row'>
                        <div className="col-lg-5 project-description-container">
                            <div className="col-lg-12 projects-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-lg-12 projects-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-lg-12 projects-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-lg-12 projects-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-lg-12 projects-button">
                                <button>View All</button>
                            </div>
                            
                        </div>
                        <div className="col-lg-7 our-projects-wrapper">
                            <div className='our-projects-container'>
                                <div className='project one'></div>
                                <div className='project two'></div>
                                <div className='project three'></div>
                                <div className='project four'></div>
                            </div>
                        </div>
                    </div>
                    
                    
                
                
            </Container>
        </Fragment>
    )
}
export default Projects;