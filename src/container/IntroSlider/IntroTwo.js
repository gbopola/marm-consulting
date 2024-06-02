import React from 'react';
// import YoutubeBackground from 'react-youtube-background'
import {Link} from "react-router-dom";

const IntroTwo = () => {
    return (
            
                <div className="container">
                    <div className="row row-cols-lg-1 row-cols-1">

                        <div className="col align-self-center">
                            <div className="intro-content-two text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                <h2 className="title">Unlocking Success Through Strategic Consulting</h2>
                                <div className="desc">
                                    
                                </div>
                                <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-primary btn-hover-secondary">Get Started</Link>
                                <Link to={process.env.PUBLIC_URL + "/"} className="btn btn-outline-white btn-hover-primary"> Learn More </Link>
                            </div>
                        </div>

                    </div>
                </div>
            
    )
}


export default IntroTwo;
