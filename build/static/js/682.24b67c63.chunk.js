"use strict";(self.webpackChunkexomac=self.webpackChunkexomac||[]).push([[682],{4762:(e,t,a)=>{a.d(t,{A:()=>r});a(5043);var s=a(2030),i=a(5475),n=a(579);const r=e=>{let{data:t}=e;const a=t.categories.map(((e,a)=>(0,n.jsxs)(i.N_,{to:`/category/${(0,s.Yv)(e)}`,children:[e,a!==t.categories.length-1&&","]},a)));return(0,n.jsxs)("div",{className:"blog-3 col",children:[(0,n.jsx)("div",{className:"thumbnail",children:(0,n.jsx)(i.N_,{to:`/blog-details/${t.id}`,className:"image",children:(0,n.jsx)("img",{src:`/${t.largeImage}`,alt:"Blog Image"})})}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsxs)("ul",{className:"meta",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fa fa-pencil-alt"}),t.author]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"far fa-calendar"}),t.date]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fas fa-tags"}),a]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("i",{className:"fas fa-comments"}),"4 Comments"]})]}),(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(i.N_,{to:`/blog-details/${t.id}`,children:t.title})}),(0,n.jsx)("div",{className:"desc",children:(0,n.jsx)("p",{children:t.excerpt})}),(0,n.jsx)(i.N_,{to:`/blog-details/${t.id}`,className:"btn btn-primary btn-hover-secondary mt-6",children:"Read More"})]})]})}},1057:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var s=a(579);const i=e=>{let{title:t,subTitle:a,titleOption:i,headingOption:n}=e;return(0,s.jsxs)("div",{className:`section-title ${i}`,"data-aos":"fade-up",children:[(0,s.jsx)("h2",{className:`title ${n}`,dangerouslySetInnerHTML:{__html:t}}),(0,s.jsx)("p",{className:"sub-title",children:a})]})};i.defaultProps={titleOption:"text-center",headingOption:"title"};const n=i},4440:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var s=a(5475),i=a(579);const n=()=>(0,i.jsx)("div",{className:"sidebar-widget-content",children:(0,i.jsxs)("div",{className:"sidebar-widget-banner overlay-two",style:{backgroundImage:"url(/images/bg/breadcrumb-bg.jpg)"},children:[(0,i.jsx)("h3",{className:"title",children:"Subscribe to our newsletter"}),(0,i.jsx)("p",{children:"All the latest marketing news, including updates on brand campaigns, and the most interesting insights"}),(0,i.jsx)(s.N_,{to:"/",children:"Subscribe Now"})]})})},1006:(e,t,a)=>{a.d(t,{A:()=>o});a(5043);var s=a(2030),i=a(109),n=a(5475),r=a(579);const o=()=>{const e=i.map((e=>e.categories));let t=(0,s.Ge)(e),a=[];return t.forEach((e=>{const t={title:e.trim(),slug:(0,s.Yv)(e),count:1},i=(0,s.ZN)(t,a);if(-1!==i){const t=a[i].count;a[i]={title:e.trim(),slug:(0,s.Yv)(e),count:t+1}}else a.push(t)})),(0,r.jsx)("div",{className:"sidebar-widget-content",children:(0,r.jsx)("ul",{className:"sidebar-widget-cate-list",children:a.map((e=>(0,r.jsx)("li",{children:(0,r.jsxs)(n.N_,{to:`/category/${e.slug}`,children:[(0,r.jsx)("span",{className:"text",children:e.title}),(0,r.jsx)("span",{className:"count",children:e.count})]})},e.slug)))})})}},6704:(e,t,a)=>{a.d(t,{A:()=>r});a(5043);var s=a(5475),i=a(109),n=a(579);const r=()=>(0,n.jsx)("div",{className:"sidebar-widget-content",children:(0,n.jsx)("ul",{className:"sidebar-widget-list-post",children:i.slice(0,4).map((e=>(0,n.jsxs)("li",{children:[(0,n.jsx)("span",{className:"cate",children:e.categories.slice(0,1)}),(0,n.jsx)(s.N_,{to:`/blog-details/${e.id}`,children:e.title})]},e.id)))})})},5178:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);var s=a(579);const i=()=>(0,s.jsx)("div",{className:"sidebar-widget-content",children:(0,s.jsx)("div",{className:"sidebar-widget-search",children:(0,s.jsxs)("form",{children:[(0,s.jsx)("input",{type:"text",placeholder:"Search..."}),(0,s.jsx)("button",{children:(0,s.jsx)("i",{className:"fas fa-search"})})]})})})},2268:(e,t,a)=>{a.d(t,{A:()=>o});a(5043);var s=a(5475),i=a(2030),n=a(109),r=a(579);const o=()=>{const e=n.map((e=>e.tags));let t=(0,i.Ge)(e),a=[];return t.forEach((e=>{const t={title:e.trim(),slug:(0,i.Yv)(e)},s=(0,i.ZN)(t,a);-1!==s?a[s]={title:e.trim(),slug:(0,i.Yv)(e)}:a.push(t)})),(0,r.jsx)("div",{className:"sidebar-widget-content",children:(0,r.jsx)("div",{className:"tagcloud",children:a.map((e=>(0,r.jsx)(s.N_,{to:`/tag/${e.slug}`,children:e.title},e.slug)))})})}},7098:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(5043),i=a(579);const n=e=>{let{title:t,classOption:a}=e;return(0,i.jsx)(s.Fragment,{children:(0,i.jsx)("h3",{className:`sidebar-widget-title ${a}`,children:t})})};n.defaultProps={classOption:"sidebar-widget-title"};const r=n},7782:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);var s=a(579);const i=e=>(0,s.jsx)("div",{className:"sidebar-widget",children:e.children})},1334:(e,t,a)=>{a.d(t,{A:()=>i});a(5043);var s=a(579);const i=e=>(0,s.jsx)("div",{className:"sidebar-widget-wrapper",children:e.children})},6251:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var s=a(5475),i=a(579);const n=e=>{let{title:t,content:a,contentTwo:n,image:r}=e;return(0,i.jsxs)("div",{className:"page-title-section section section-padding-top overlay-two",style:{backgroundImage:`url(/${r})`},children:[(0,i.jsx)("div",{className:"page-title",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("h1",{className:"title",children:t})})}),(0,i.jsx)("div",{className:"page-breadcrumb position-static",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("ul",{className:"breadcrumb justify-content-center",children:[(0,i.jsx)("li",{children:(0,i.jsx)(s.N_,{to:"/",children:a})}),(0,i.jsx)("li",{className:"current",children:n})]})})})]})}},2235:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(5043),i=a(1057),n=a(5475),r=a(5719),o=a.n(r),l=a(579);const d=()=>{const e=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const t=new(o())(e.current,{relativeInput:!0});return t.enable(),()=>t.disable()}),[]),(0,l.jsxs)("div",{className:"section section-bg-image section-padding-t110-b120 newsletter-section overlay-two",style:{backgroundImage:"url(/images/bg/newsletter.jpg)"},children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row align-items-center",children:(0,l.jsx)("div",{className:"col-lg-12 m-auto",children:(0,l.jsxs)("div",{className:"cta-content text-center",children:[(0,l.jsx)(i.A,{titleOption:"color-light text-center mb-0",title:"Let\u2019s find out how to work together",subTitle:"Ready to start your project? The contact information collected through\r this form will only be used to send a response to your inquiry."}),(0,l.jsx)(n.N_,{to:"/",className:"btn btn-primary btn-hover-secondary mt-6","data-aos":"fade-up","data-aos-delay":"300",children:"Get Started"})]})})})}),(0,l.jsx)("div",{className:"shape shape-1",id:"scene",ref:e,children:(0,l.jsx)("span",{"data-depth":"1",children:(0,l.jsx)("img",{src:"/images/shape-animation/newsletter-shape.png",alt:""})})})]})}},109:e=>{e.exports=JSON.parse('[{"id":1,"image":"images/blog/370/blog-1.jpg","largeImage":"images/blog/770/blog-2.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Marketing","UX Design"],"title":"How your sales can work together in account-based marketing","excerpt":"We have always known the power of digital, and we\'ve mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":2,"image":"images/blog/370/blog-2.jpg","largeImage":"images/blog/770/blog-1.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["App","Startup"],"title":"The six things marketers need to understand about DTC marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":3,"image":"images/blog/370/blog-3.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["UX Design","Marketing"],"title":"Eleven top tips for developing agile marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":4,"image":"images/blog/370/blog-4.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Startup","UX Design","Marketing"],"title":"How your sales can work together in account-based marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":5,"image":"images/blog/370/blog-5.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Startup","Marketing"],"title":"The six things marketers need to understand about DTC marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]},{"id":6,"image":"images/blog/370/blog-6.jpg","largeImage":"images/blog/770/blog-3.jpg","author":"Written by Admin","date":"10 Oct 2020","view":"70 views","categories":["Startup","UX Design"],"title":"Eleven top tips for developing agile marketing","excerpt":"Beautiful and usable design can be the deciding factor between a successful and a failing business. Great designers are treated like superstars. And it\u2019s so fulfilling to design beautiful things that people love to use.","body":["<p><strong>We have always known the power of digital, and we have mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that busine- sses have been talking about for so long, and those colleagues are turning to us in Marketing to provide guidance.</strong></p>","<p>Even if it is a brave new world for everyone else, for marketers it is another day in the proverbial office.</p>","<p>Now, the digital evolution is resonating across organizations. The pandemic has shifted internal structures and changed relationships with customers, and as a result marketers have become more valuable than ever.</p>","<p><strong>The Shift Inside Organizations: Marketers Become Indispensable in a Digital World.</strong></p>","<p>Marketing has often been known as the department that makes PowerPoints and polishes websites. That was not ever close to the whole truth, of course, but past company structures \u2014 in which Marketing always played second fiddle to Sales \u2014 allowed that falsehood to persist.</p>","<p>The pandemic has transformed what the marketing team means to an organization: It is given us agency. It is upended the customer journey. It is redefined how sales and marketing teams should interact. And it is forced businesses to see the value that marketers provide in a digital world.</p>"],"tags":["App","Branding","Development","Design"]}]')}}]);
//# sourceMappingURL=682.24b67c63.chunk.js.map