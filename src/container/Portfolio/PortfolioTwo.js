import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
// import useMasonry from "../../hooks/use-masonry";
// import WorkFilter from "../../components/Work/WorkFilter";
// import WorkItem from "../../components/Work/WorkItem";
// import workData from '../../data/work/workDetails.json';
import '../../assets/images/portfolio/image-1.jpg'
// import {slugify} from "../../utils";

const PortfolioTwo = () => {
  
    // Isotope Categories list JS

    

    return (
        <div className="section section-padding-t90 ag-masonary-wrapper" data-bg-color="#f8faff">
            <div className="container-fluid px-0">
                <SectionTitle
                    title="Our Project Works."
                    subTitle="Showcasing successful projects that demonstrate our expertise and commitment to excellence."
                />

                {/* <WorkFilter classOption="messonry-button text-center mb-lg-13 mb-md-13 mb-6" categories={categories} data-aos="fade-up"/> */}

                <div className="row  g-0 mesonry-list">
                     <div className='col-12 col-sm-6 col-lg-4' style={{background: "url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730714/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOC40MF90ZmFlYnQ=/drilldown') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-12 col-sm-6 col-lg-4' style={{background: "url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730774/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS4wNF96ZmRpODI=/drilldown') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-12 col-sm-6 col-lg-4' style={{background: "url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730825/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS4xOF90N2NpaWs=/drilldowng') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-12 col-sm-6 col-lg-4' style={{background: "url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730929/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS4yNl9qZWwyYmc=/drilldown') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-12 col-sm-6 col-lg-4' style={{background: "url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730973/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS40N19pMGhsdTk=/drilldown') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-12 col-sm-6 col-lg-4' style={{background: "url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718731118/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4zMS4wOF9zaTZ5ZXo=/drilldown') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     
                     
                </div>
            </div>
        </div>
    )
}

export default PortfolioTwo;
