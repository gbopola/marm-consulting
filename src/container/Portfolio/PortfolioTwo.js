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

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 mesonry-list">
                     <div className='col-4' style={{background: "url('https://res.cloudinary.com/gbopola/image/upload/v1717330412/ngkwmgtvhbmfvgj6ijbd.jpg') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-4' style={{background: "url('https://res.cloudinary.com/gbopola/image/upload/v1717330412/ngkwmgtvhbmfvgj6ijbd.jpg') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-4' style={{background: "url('https://res.cloudinary.com/gbopola/image/upload/v1717330412/ngkwmgtvhbmfvgj6ijbd.jpg') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-4' style={{background: "url('https://res.cloudinary.com/gbopola/image/upload/v1717330412/ngkwmgtvhbmfvgj6ijbd.jpg') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-4' style={{background: "url('https://res.cloudinary.com/gbopola/image/upload/v1717330412/ngkwmgtvhbmfvgj6ijbd.jpg') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     <div className='col-4' style={{background: "url('https://res.cloudinary.com/gbopola/image/upload/v1717330412/ngkwmgtvhbmfvgj6ijbd.jpg') no-repeat center center/cover", height: 500}}>
                       
                     </div>
                     
                     
                </div>
            </div>
        </div>
    )
}

export default PortfolioTwo;
