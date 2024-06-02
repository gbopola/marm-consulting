import {useState, useEffect, useRef} from "react";
import SectionTitle from '../SectionTitles/SectionTitle';
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
import {Link} from "react-router-dom";

const HomeAbout = () => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-padding-t90 section-padding-bottom-200">
            <div className="container">

                <SectionTitle
                    title="Delivering High-Quality Solutions"
                    // subTitle="Our team of designers, developers and creatives are perfectionists
                    // who love what they do and love"
                />

                <div className="row">

                    
                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-image-area">
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/home-one-about/home_agency_about_1.jpg"} alt="" />
                                </Tilt>
                            </div>
                        
                            <div className="about-image">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/home-one-about/home_agency_about_2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                            </div>

                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-content-area">
                            <SectionTitleTwo 
                                subTitle="Every day brings new challenges"
                                title="Consulting firm focused on vision, product and people"
                            />

                            <p>We aim to deliver unparalleled services and cutting-edge solutions to our clients, setting new standards for innovation and excellence. We relentlessly pursue creativity and ingenuity, leveraging the latest technologies to provide personalized, responsive, and holistic services. Our client-centric approach involves active listening and collaboration, ensuring not only satisfaction but delight. We are committed to responsible and sustainable business practices, believing that true success is measured by the positive impact we have on our clients, society, and the environment.</p>

                            <Link className="btn btn-primary btn-hover-secondary mt-xl-8 mt-lg-8 mt-md-6 mt-4" to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAbout;
