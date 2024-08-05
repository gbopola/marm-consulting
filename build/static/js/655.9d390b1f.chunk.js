"use strict";(self.webpackChunkexomac=self.webpackChunkexomac||[]).push([[655],{6713:(e,s,i)=>{i.d(s,{A:()=>o});i(5043);var a=i(7619),n=i.n(a),t=i(579);const l=e=>{let{data:s,classOption:i}=e;return(0,t.jsxs)("div",{className:`contact-info ${i}`,children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(n(),{id:`contactsvg-${s.id}`,option:{file:s.icon,animTimingFunction:"EASE",type:"oneByOne",delay:80}})}),(0,t.jsxs)("div",{className:"info",children:[(0,t.jsx)("h4",{className:"title",children:s.title}),(0,t.jsx)("span",{className:"info-text",dangerouslySetInnerHTML:{__html:s.info}})]})]})};l.defaultProps={classOption:"contact-info ct-info-two"};const o=l},6874:(e,s,i)=>{i.d(s,{A:()=>o});i(5043);var a=i(7619),n=i.n(a),t=i(579);const l=e=>{let{data:s,classOption:i}=e;return(0,t.jsxs)("div",{className:`icon-box text-center ${i}`,children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(n(),{id:`servicesvg-${s.id}`,option:{file:s.icon,animTimingFunction:"EASE",type:"oneByOne",delay:80}})}),(0,t.jsxs)("div",{className:"content",children:[(0,t.jsx)("h3",{className:"title",children:s.title}),(0,t.jsx)("div",{className:"desc",children:(0,t.jsx)("p",{children:s.desc})})]})]})};l.defaultProps={classOption:"icon-box text-center"};const o=l},2370:(e,s,i)=>{i.d(s,{A:()=>l});var a=i(5043),n=i(1258),t=i(579);const l=()=>{var e,s,i;const{register:l,handleSubmit:o,formState:{errors:c}}=(0,n.mN)({mode:"onBlur"});return(0,t.jsxs)(a.Fragment,{children:[(0,t.jsx)("form",{onSubmit:o((e=>console.log(e))),children:(0,t.jsxs)("div",{className:"row mb-n4",children:[(0,t.jsxs)("div",{className:"col-md-12 col-12 mb-4",children:[(0,t.jsx)("input",{type:"text",placeholder:"Your Name *",name:"name",...l("name",{required:"Name is required"})}),(null===c||void 0===c?void 0:c.name)&&(0,t.jsx)("p",{children:null===(e=c.name)||void 0===e?void 0:e.message})]}),(0,t.jsxs)("div",{className:"col-md-12 col-12 mb-4",children:[(0,t.jsx)("input",{type:"email",placeholder:"Email *",name:"email",...l("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"invalid email address"}})}),(null===c||void 0===c?void 0:c.email)&&(0,t.jsx)("p",{children:null===(s=c.email)||void 0===s?void 0:s.message})]}),(0,t.jsxs)("div",{className:"col-12 mb-6",children:[(0,t.jsx)("textarea",{name:"message",placeholder:"Message",...l("message",{required:"Message is required"})}),(null===c||void 0===c?void 0:c.message)&&(0,t.jsx)("p",{children:null===(i=c.message)||void 0===i?void 0:i.message})]}),(0,t.jsx)("div",{className:"col-12 text-center mb-4",children:(0,t.jsx)("button",{type:"submit",className:"btn btn-primary btn-hover-secondary",children:"Get in touch"})})]})}),(0,t.jsx)("p",{className:"form-messege"})]})}},1057:(e,s,i)=>{i.d(s,{A:()=>t});i(5043);var a=i(579);const n=e=>{let{title:s,subTitle:i,titleOption:n,headingOption:t}=e;return(0,a.jsxs)("div",{className:`section-title ${n}`,"data-aos":"fade-up",children:[(0,a.jsx)("h2",{className:`title ${t}`,dangerouslySetInnerHTML:{__html:s}}),(0,a.jsx)("p",{className:"sub-title",children:i})]})};n.defaultProps={titleOption:"text-center",headingOption:"title"};const t=n},827:(e,s,i)=>{i.d(s,{A:()=>t});i(5043);var a=i(579);const n=e=>{let{subTitle:s,title:i,classOption:n}=e;return(0,a.jsxs)("div",{className:`section-title-two ${n}`,"data-aos":"fade-up",children:[(0,a.jsx)("span",{className:"sub-title",children:s}),(0,a.jsx)("h3",{className:"title",dangerouslySetInnerHTML:{__html:i}})]})};n.defaultProps={classOption:"section-title-two"};const t=n},7362:(e,s,i)=>{i.d(s,{A:()=>r,q:()=>l.qr});var a=i(5043),n=i(3024),t=i(7601),l=i(4671),o=i(579);const c=(0,a.forwardRef)(((e,s)=>{let{options:i,children:a,className:c,navClass:r,navStyle:d,navPosition:m,dotStyle:p,dotPosition:v}=e;const h=void 0!==(null===i||void 0===i?void 0:i.modules)?i.modules:[],g=`prev-${r||"swiper-nav"}`,u=`next-${r||"swiper-nav"}`,x={slidesPerView:3,spaceBetween:30,loop:!1,autoplay:{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{},...i,modules:[t.Vx,t.dK,t.Jq,t.Ij,...h],navigation:!(null===i||void 0===i||!i.navigation)&&{prevEl:`.${g}`,nextEl:`.${u}`},pagination:!(null===i||void 0===i||!i.pagination)&&{clickable:!0}};return(0,o.jsxs)("div",{className:(0,n.A)(c,"swiper-wrap position-relative",x.navigation&&d&&`nav-style-${d}`,x.navigation&&m&&`nav-position-${m}`,x.pagination&&p&&`dot-style-${p}`,x.pagination&&v&&`dot-position-${v}`),ref:s,children:[(0,o.jsx)(l.RC,{...x,children:a}),(null===x||void 0===x?void 0:x.navigation)&&(0,o.jsx)(o.Fragment,{})]})}));c.defaultProps={prevIcon:"fa fa-angle-left",nextIcon:"fa fa-angle-right",navStyle:1,navPosition:1,dotStyle:1,dotPosition:1},c.displayName="SwiperSlider";const r=c},852:(e,s,i)=>{i.d(s,{A:()=>t});i(5043);var a=i(579);const n=e=>{let{classOption:s}=e;return(0,a.jsx)("div",{className:`brand-section section ${s}`,children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row"})})})};n.defaultProps={classOption:"brand-section section section-padding-bottom"};const t=n},8614:(e,s,i)=>{i.d(s,{A:()=>c});i(5043);const a=JSON.parse('[{"id":"1","title":"Unlocking Success Through Strategic Consulting","desc":"At Marm Consulting, we deliver tailored solutions driving growth, efficiency, and innovation. With deep insights into Nigeria\'s business landscape, we partner with you to navigate challenges and seize opportunities.","backgroundImage":"/images/hero-image/hero-2.jpg"}]');var n=i(5475),t=i(579);const l=e=>{let{data:s}=e;return(0,t.jsx)("div",{className:"intro-section overlay section",style:{backgroundImage:`url(${""+s.backgroundImage})`},children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row row-cols-lg-1 row-cols-1",children:(0,t.jsx)("div",{className:"col align-self-center",children:(0,t.jsxs)("div",{className:"intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8",children:[(0,t.jsx)("h2",{className:"title",children:s.title}),(0,t.jsx)("div",{className:"desc",children:(0,t.jsx)("p",{children:s.desc})}),(0,t.jsx)(n.N_,{to:"/contact",className:"btn btn-primary btn-hover-secondary",children:"Get Started"}),(0,t.jsx)(n.N_,{to:"/about",className:"btn btn-outline-white btn-hover-primary",children:" Learn More "})]})})})})})};var o=i(7362);const c=()=>(0,t.jsx)("div",{className:"intro-slider-wrap section",children:(0,t.jsx)(o.A,{className:"intro-slider",options:{slidesPerView:1,navigation:!0},children:a&&a.map(((e,s)=>(0,t.jsx)(o.q,{children:(0,t.jsx)(l,{data:e},s)},s)))})})},1578:(e,s,i)=>{i.d(s,{A:()=>t});i(5043);var a=i(1057);i.p;var n=i(579);const t=()=>(0,n.jsx)("div",{className:"section section-padding-t90 ag-masonary-wrapper","data-bg-color":"#f8faff",children:(0,n.jsxs)("div",{className:"container-fluid px-0",children:[(0,n.jsx)(a.A,{title:"Our Project Works.",subTitle:"Showcasing successful projects that demonstrate our expertise and commitment to excellence."}),(0,n.jsxs)("div",{className:"row  g-0 mesonry-list",children:[(0,n.jsx)("div",{className:"col-12 col-sm-6 col-lg-4",style:{background:"url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730714/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOC40MF90ZmFlYnQ=/drilldown') no-repeat center center/cover",height:500}}),(0,n.jsx)("div",{className:"col-12 col-sm-6 col-lg-4",style:{background:"url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730774/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS4wNF96ZmRpODI=/drilldown') no-repeat center center/cover",height:500}}),(0,n.jsx)("div",{className:"col-12 col-sm-6 col-lg-4",style:{background:"url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730825/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS4xOF90N2NpaWs=/drilldowng') no-repeat center center/cover",height:500}}),(0,n.jsx)("div",{className:"col-12 col-sm-6 col-lg-4",style:{background:"url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730929/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS4yNl9qZWwyYmc=/drilldown') no-repeat center center/cover",height:500}}),(0,n.jsx)("div",{className:"col-12 col-sm-6 col-lg-4",style:{background:"url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718730973/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4yOS40N19pMGhsdTk=/drilldown') no-repeat center center/cover",height:500}}),(0,n.jsx)("div",{className:"col-12 col-sm-6 col-lg-4",style:{background:"url('https://res-console.cloudinary.com/gbopola/thumbnails/v1/image/upload/v1718731118/V2hhdHNBcHBfSW1hZ2VfMjAyNC0wNi0xN19hdF8xMC4zMS4wOF9zaTZ5ZXo=/drilldown') no-repeat center center/cover",height:500}})]})]})})},3397:(e,s,i)=>{i.d(s,{A:()=>c});i(5043);var a=i(4696),n=i(6874),t=i(1057),l=i(579);const o=e=>{let{classOption:s}=e;return(0,l.jsx)("div",{className:`section section-padding-t90-b100 ${s}`,children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(t.A,{title:"Our Consulting Services",subTitle:"Expert Solutions for Lasting Success"}),(0,l.jsx)("div",{className:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6",children:a&&a.slice(0,7).map(((e,s)=>(0,l.jsx)("div",{className:"col mb-6","data-aos":"fade-up",children:(0,l.jsx)(n.A,{classOption:"box-border",data:e},s)},s)))})]})})};o.defaultProps={classOption:"section section-padding-t90-b100"};const c=o},4737:(e,s,i)=>{i.r(s),i.d(s,{default:()=>w});var a=i(5043),n=i(9624),t=i(7756),l=i(827),o=i(1045),c=i(5719),r=i.n(c),d=i(579);const m=()=>{const[e]=(0,a.useState)(1.04),s=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const e=new(r())(s.current,{relativeInput:!0});return e.enable(),()=>e.disable()}),[]),(0,d.jsx)("div",{className:"section section-padding-top section-padding-bottom-150",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row",children:[(0,d.jsx)("div",{className:"col-xl-6 col-lg-6 col-12","data-aos":"fade-up",children:(0,d.jsxs)("div",{className:"about-content-area mt-0 mb-md-10 mb-10",children:[(0,d.jsx)(l.A,{subTitle:"We strive for excellence.",title:"Delivering High Quality Solutions"}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{children:" We aim to deliver unparalleled services and cutting-edge solutions to our clients, setting new standards for innovation and excellence. We relentlessly pursue creativity and ingenuity, leveraging the latest technologies to provide personalized, responsive, and holistic services. Our client-centric approach involves active listening and collaboration, ensuring not only satisfaction but delight. We are committed to responsible and sustainable business practices, believing that true success is measured by the positive impact we have on our clients, society, and the environment."})})]})}),(0,d.jsx)("div",{className:"col-xl-6 col-lg-6 col-12","data-aos":"fade-up","data-aos-delay":"300",children:(0,d.jsxs)("div",{className:"about-image-area about-shape-animation right-0 me-0",children:[(0,d.jsx)("div",{className:"about-image js-tilt",children:(0,d.jsx)(o.A,{scale:e,transitionSpeed:4e3,children:(0,d.jsx)("img",{src:"images/about/about-1.jpg",alt:""})})}),(0,d.jsx)("div",{className:"about-image js-tilt",children:(0,d.jsx)(o.A,{scale:e,transitionSpeed:4e3,children:(0,d.jsx)("img",{src:"images/about/about-2.jpg",alt:""})})}),(0,d.jsx)("div",{className:"shape shape-1",id:"scene",ref:s,children:(0,d.jsx)("span",{"data-depth":"1",children:(0,d.jsx)("img",{src:"images/shape-animation/video-shape-1.png",alt:""})})})]})})]})})})};var p=i(3397),v=i(1578),h=i(7617),g=i(6713),u=i(1057),x=i(2370);const j=()=>{const e=(0,a.useRef)(null);return(0,a.useEffect)((()=>{const s=new(r())(e.current,{relativeInput:!0});return s.enable(),()=>s.disable()}),[]),(0,d.jsxs)("div",{className:"section section-padding contact-section",children:[(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"row row-cols-lg-2 row-cols-1 align-items-center",children:[(0,d.jsx)("div",{className:"col","data-aos":"fade-up",children:(0,d.jsxs)("div",{className:"contact-Information me-xl-7",children:[(0,d.jsx)(l.A,{subTitle:"Innovative & cutting-edge technology",title:"We use latest technologies that are proven and practical"}),h&&h.map(((e,s)=>(0,d.jsx)(a.Fragment,{children:(0,d.jsx)(g.A,{classOption:"ct-info-two",data:e},s)},s)))]})}),(0,d.jsx)("div",{className:"col mt-lg-0 mt-md-10 mt-8","data-aos":"fade-up",children:(0,d.jsxs)("div",{className:"contact-form-area box-shadow",children:[(0,d.jsx)(u.A,{titleOption:"section-title text-center mb-7",headingOption:"title fz-28",title:"Contact Us",subTitle:"Reach out to explore how our expert services can drive your business forward."}),(0,d.jsx)(x.A,{}),(0,d.jsx)("div",{className:"shape shape-1",id:"scene",ref:e,children:(0,d.jsx)("span",{"data-depth":"1",children:(0,d.jsx)("img",{src:"/images/shape-animation/contact-shape.png",alt:""})})})]})})]})}),(0,d.jsx)("div",{className:"shape shape-1 scene",children:(0,d.jsx)("span",{"data-depth":"1",children:(0,d.jsx)("img",{src:"/images/shape-animation/newsletter-shape.png",alt:""})})})]})};var N=i(852),b=i(1999),f=i(1818),y=i(8614);const w=()=>(0,d.jsxs)(a.Fragment,{children:[(0,d.jsx)(n.A,{title:"Marm Consulting Services"}),(0,d.jsx)(t.A,{}),(0,d.jsx)(y.A,{}),(0,d.jsx)(m,{}),(0,d.jsx)(p.A,{classOption:"bg-color-1"}),(0,d.jsx)(v.A,{}),(0,d.jsx)(j,{}),(0,d.jsx)(N.A,{classOption:"section-padding-bottom"}),(0,d.jsx)(b.A,{}),(0,d.jsx)(f.A,{})]})},7617:e=>{e.exports=JSON.parse('[{"id":"1","icon":"images/svg/linea/linea-basic-map.svg","title":"Our Locations","info":"48 Iwofe Road, Port Harcourt, Rivers State, Nigeria"},{"id":"2","icon":"images/svg/linea/linea-basic-message-txt.svg","title":"Give Us A Call","info":"+234 90 7070 4200"},{"id":"3","icon":"images/svg/linea/linea-basic-mail-open-text.svg","title":"Help Desk","info":"contact@marmconsultingservices.com"}]')},4696:e=>{e.exports=JSON.parse('[{"id":"1","icon":"images/svg/linea/earth.svg","title":"Environmental Management","desc":"Sustainable strategies and solutions for managing environmental impacts and compliance requirements.","pageLink":"Learn More","link":"service"},{"id":"2","icon":"images/svg/linea/book.svg","title":"Specialist Training","desc":"Customized training programs to enhance skills and knowledge in specialized fields.","pageLink":"Learn More","link":"service"},{"id":"3","icon":"images/svg/linea/users.svg","title":"Specialist Recruitment","desc":"Expert recruitment services to find and place highly skilled professionals in niche areas.","pageLink":"Learn More","link":"service"},{"id":"4","icon":"images/svg/linea/container.svg","title":"Procurement Management","desc":"Efficient procurement strategies to optimize purchasing processes and supplier relationships.","pageLink":"Learn More","link":"service"},{"id":"5","icon":"images/svg/linea/database.svg","title":"Information Systems","desc":"Innovative IT solutions to enhance data management, security, and operational efficiency.","pageLink":"Learn More","link":"service"},{"id":"6","icon":"images/svg/linea/nfc.svg","title":"Telecommunications","desc":"Comprehensive telecom services to improve communication infrastructure and connectivity.","pageLink":"Learn More","link":"service"},{"id":"7","icon":"images/svg/linea/leaf.svg","title":"Renewable Energy","desc":"Comprehensive services to harness the power of nature and reduce your carbon footprint. ","pageLink":"Learn More","link":"service"}]')}}]);
//# sourceMappingURL=655.9d390b1f.chunk.js.map