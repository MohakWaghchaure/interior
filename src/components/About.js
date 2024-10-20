import { Fragment } from 'react';
import Container from './Container';
 
function About(){
    return(
        <Fragment>
            <Container className="about-adj" id="about">                
                <div className="row col-lg-4 about-title">
                    <div className="col-lg-12"><h2>Special viewpoint</h2></div>
                    {/* <div className="col-lg-12">viewpoint</div> */}
                </div>
                <div className="row col-lg-8 about-description-container">
                    <div className="col-lg-6 about-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </div>
                    <div className="col-lg-6 about-description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export default About;