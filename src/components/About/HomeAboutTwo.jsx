import {useState, useEffect, useRef} from "react";
import SectionTitleTwo from '../SectionTitles/SectionTitleTwo';
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';
// import CountUp from 'react-countup';
// import VisibilitySensor from "react-visibility-sensor";

const HomeAboutTwo = () => {
    // const [didViewCountUp, setDidViewCountUp] = useState(false);

    // const onVisibilityChange = isVisible => {
    //     if (isVisible) {
    //     setDidViewCountUp(true);
    //     }
    // };
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
        <div className="section section-padding-top section-padding-bottom-150">
            <div className="container">

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
                        <div className="about-content-area mt-0 mb-md-10 mb-10">
                            <SectionTitleTwo 
                                subTitle="We strive for excellence."
                                title="Delivering High Quality Solutions"
                            />

                            <div>
                                <p> We aim to deliver unparalleled services and cutting-edge
                                solutions to our clients, setting new standards for innovation
                                and excellence. We relentlessly pursue creativity and
                                ingenuity, leveraging the latest technologies to provide
                                personalized, responsive, and holistic services. Our
                                client-centric approach involves active listening and
                                collaboration, ensuring not only satisfaction but delight. We
                                are committed to responsible and sustainable business
                                practices, believing that true success is measured by the
                                positive impact we have on our clients, society, and the
                                environment.
                             </p> 
                                 
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="about-image-area about-shape-animation right-0 me-0">
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-1.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="about-image js-tilt">
                                <Tilt scale={scale} transitionSpeed={4000}>
                                    <img src={process.env.PUBLIC_URL + "images/about/about-2.jpg"} alt="" />
                                </Tilt>
                            </div>
                            <div className="shape shape-1" id="scene" ref={sceneEl}>
                                <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/video-shape-1.png"} alt="" /></span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HomeAboutTwo;
