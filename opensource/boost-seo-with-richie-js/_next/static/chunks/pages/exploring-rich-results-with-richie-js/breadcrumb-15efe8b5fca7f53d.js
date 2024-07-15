(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{7383:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exploring-rich-results-with-richie-js/breadcrumb",function(){return t(4644)}])},4644:function(e,i,t){"use strict";t.r(i),t.d(i,{__toc:function(){return l}});var r=t(5893),s=t(2673),o=t(3451),n=t(2848);t(9488);var a=t(2643),c=t(2154);let l=[{depth:2,value:"What is breadcrumb?",id:"what-is-breadcrumb"},{depth:2,value:"What are necessary data for breadcrumb rich result?",id:"what-are-necessary-data-for-breadcrumb-rich-result"},{depth:2,value:"Function and parameters",id:"function-and-parameters"},{depth:2,value:"Illustration of file system structure (tree)",id:"illustration-of-file-system-structure-tree"},{depth:2,value:"Output of a Instance",id:"output-of-a-instance"}];function h(e){let i=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",code:"code",strong:"strong",pre:"pre",span:"span"},(0,a.a)(),e.components);return c.zH||u("FileTree",!1),c.zH.File||u("FileTree.File",!0),c.zH.Folder||u("FileTree.Folder",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{children:"Breadcrumb (BreadcrumbList)"}),"\n",(0,r.jsx)(i.h2,{id:"what-is-breadcrumb",children:"What is breadcrumb?"}),"\n",(0,r.jsx)(i.p,{children:"A breadcrumb trail shows a page's position within the site hierarchy, aiding users in navigation and site exploration. Starting from the last breadcrumb, users can move up one level at a time through the site hierarchy."}),"\n",(0,r.jsxs)(i.p,{children:["Kindly Refer ",(0,r.jsx)(i.a,{href:"https://developers.google.com/search/docs/appearance/structured-data/breadcrumb",children:"Google Doc"})," to know more about breadcrumb rich result."]}),"\n",(0,r.jsx)(i.h2,{id:"what-are-necessary-data-for-breadcrumb-rich-result",children:"What are necessary data for breadcrumb rich result?"}),"\n",(0,r.jsxs)(i.p,{children:["Breadcrumb is generated by following file system structure(tree) and index file existance. And there is a parameter named ",(0,r.jsx)(i.code,{children:"domainAddress"})," that is configured inside ",(0,r.jsx)(i.code,{children:"rjs.config.json"})," and it would used inside breadcrumb rich snippets."]}),"\n",(0,r.jsxs)(c.UW,{type:"info",children:["If index file is existing in a directory then that is considered as a ",(0,r.jsx)(i.strong,{children:"level"}),", In this way it construct levels one by one."]}),"\n",(0,r.jsx)(i.h2,{id:"function-and-parameters",children:"Function and parameters"}),"\n",(0,r.jsxs)(c.UW,{type:"default",children:["By default input file is overwriiten with result so ",(0,r.jsx)(i.code,{children:"destination"})," is optional"]}),"\n",(0,r.jsxs)(c.UW,{type:"info",children:["This is only for API method.\r\nWe prefer CLI method for keeping it simpler (refer - ",(0,r.jsx)(i.a,{href:"/working-with-richie-js-api-and-cli",children:"Working with API & CLI"}),")."]}),"\n",(0,r.jsx)(i.pre,{"data-language":"js","data-theme":"default",filename:"func_params.js",hasCopyCode:!0,children:(0,r.jsxs)(i.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line highlighted",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"richResultType"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'breadcrumb'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"filePath"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pages/breadcrumb/sub-breadcrumb/notindex.html'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-constant)"},children:"destination"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'dist/breadcrumb.html'"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-comment)"},children:"/* optional */"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(i.span,{className:"line highlighted",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"richie"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"(richResultType"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" filePath"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" destination);"})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"illustration-of-file-system-structure-tree",children:"Illustration of file system structure (tree)"}),"\n",(0,r.jsx)(c.zH,{children:(0,r.jsxs)(c.zH.Folder,{name:"pages",defaultOpen:!0,children:[(0,r.jsx)(c.zH.File,{name:"index.html"}),(0,r.jsxs)(c.zH.Folder,{name:"breadcrumb",defaultOpen:!0,children:[(0,r.jsx)(c.zH.File,{name:"index.html"}),(0,r.jsxs)(c.zH.Folder,{name:"sub-breadcrumb",defaultOpen:!0,children:[(0,r.jsx)(c.zH.File,{name:"index.html"}),(0,r.jsx)(c.zH.File,{name:"notindex.html"})]})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"output-of-a-instance",children:"Output of a Instance"}),"\n",(0,r.jsx)(i.pre,{"data-language":"html","data-theme":"default",filename:"breadcrumb.html",hasCopyCode:!0,children:(0,r.jsxs)(i.code,{"data-language":"html","data-theme":"default",children:[(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-function)"},children:"type"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"application/ld+json"'}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'        "@context": "https://schema.org",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'        "@type": "BreadcrumbList",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'        "itemListElement": ['})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          {"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "@type": "ListItem",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "position": 1,'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "name": "Mimicking Root for breadcrumb - Level 1 ",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "item": "https://www.cresteem.com/pages"'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          },"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          {"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "@type": "ListItem",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "position": 2,'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "name": "Breadcrumb page - Level 2",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "item": "https://www.cresteem.com/pages/breadcrumb"'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          },"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          {"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "@type": "ListItem",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "position": 3,'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "name": "Sub breadcrumb Page | Level n",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "item": "https://www.cresteem.com/pages/breadcrumb/sub-breadcrumb"'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          },"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          {"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "@type": "ListItem",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "position": 4,'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "name": "Not index Page | Level- possible last",'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:'            "item": "https://www.cresteem.com/pages/breadcrumb/sub-breadcrumb/notindex."'})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"          }"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"        ]"})}),"\n",(0,r.jsx)(i.span,{className:"line",children:(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,r.jsxs)(i.span,{className:"line",children:[(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,r.jsx)(i.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Let's see what's next!"})})]})}function u(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:i}=Object.assign({},(0,a.a)(),e.components);return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/exploring-rich-results-with-richie-js/breadcrumb.mdx",route:"/exploring-rich-results-with-richie-js/breadcrumb",frontMatter:{title:"Breadcrumb",description:"Learn how to create breadcrumb rich results with Richie JS. Discover the necessary data and examples to get started with breadcrumb rich results and improve website navigation.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"},timestamp:1719191571e3,pageMap:[{kind:"Meta",data:{"*":{theme:{breadcrumb:!1}},index:{title:"Introduction"},"getting-started-with-richie-js":{title:"Getting Started"},"exploring-rich-results-with-richie-js":{title:"Supported Rich Results",theme:{breadcrumb:!0}},"configuring-richie-js-for-web-projects":{title:"Configurations",theme:{breadcrumb:!0}},"unlocking-intellisense-for-richie-js":{title:"Intellisense Support"},"working-with-richie-js-api-and-cli":{title:"Working with API & CLI"},"exploring-richie-js-repository":{title:"Demonstrations"},"contributing-to-richie-js":{title:"Contribute"},"frequently-asked-questions-about-richie-js":{title:"FAQ"},"richie-js-video-tutorial":{title:"Video"}}},{kind:"Folder",name:"configuring-richie-js-for-web-projects",route:"/configuring-richie-js-for-web-projects",children:[{kind:"Meta",data:{article:{title:"Article - Configurations"},breadcrumb:{title:"Breadcrumb - Configurations"},"movie-carousel":{title:"Movie & Carousel - Configurations"},"recipe-carousel":{title:"Recipe & Carousel - Configurations"},"course-carousel":{title:"Course & Carousel - Configurations"},"restaurant-carousel":{title:"Restaurant & Carousel - Configurations"},event:{title:"Event - Configurations"},faq:{title:"FAQ - Configurations"},"learning-video":{title:"Learning Video - Configurations"},"local-business":{title:"Local Business - Configurations"},organization:{title:"Organization - Configurations"},product:{title:"Product & Varients - Configurations"},"profile-page":{title:"Profile Page - Configurations"},"sitelinks-search-box":{title:"Sitelinks Search Box - Configurations"},"software-app":{title:"Software App - Configurations"}}},{kind:"MdxPage",name:"article",route:"/configuring-richie-js-for-web-projects/article",frontMatter:{title:"Article - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"breadcrumb",route:"/configuring-richie-js-for-web-projects/breadcrumb",frontMatter:{title:"Breadcrumb - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"course-carousel",route:"/configuring-richie-js-for-web-projects/course-carousel",frontMatter:{title:"Course & Carousel - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"event",route:"/configuring-richie-js-for-web-projects/event",frontMatter:{title:"Event - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"faq",route:"/configuring-richie-js-for-web-projects/faq",frontMatter:{title:"FAQ - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"learning-video",route:"/configuring-richie-js-for-web-projects/learning-video",frontMatter:{title:"Learning Video - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"local-business",route:"/configuring-richie-js-for-web-projects/local-business",frontMatter:{title:"Local Business - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"movie-carousel",route:"/configuring-richie-js-for-web-projects/movie-carousel",frontMatter:{title:"Movie & Carousel - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"organization",route:"/configuring-richie-js-for-web-projects/organization",frontMatter:{title:"Organization - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"product",route:"/configuring-richie-js-for-web-projects/product",frontMatter:{title:"Product & Variants - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"profile-page",route:"/configuring-richie-js-for-web-projects/profile-page",frontMatter:{title:"Profile Page - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"recipe-carousel",route:"/configuring-richie-js-for-web-projects/recipe-carousel",frontMatter:{title:"Recipe & Carousel - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"restaurant-carousel",route:"/configuring-richie-js-for-web-projects/restaurant-carousel",frontMatter:{title:"Restaurant & Carousel - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"sitelinks-search-box",route:"/configuring-richie-js-for-web-projects/sitelinks-search-box",frontMatter:{title:"Sitelinks Search Box - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"software-app",route:"/configuring-richie-js-for-web-projects/software-app",frontMatter:{title:"Software App - Configurations",description:"Configurations - Richie JS API References",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}}]},{kind:"MdxPage",name:"configuring-richie-js-for-web-projects",route:"/configuring-richie-js-for-web-projects",frontMatter:{title:"Intuitive Configuration: Enhancing Web Projects with Richie JS",description:"Learn how to configure Richie JS for your web project with ease. Discover the power of customizing input parsing and results with our intuitive configuration file structure. Get started with configuring rich results for your website today!",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"contributing-to-richie-js",route:"/contributing-to-richie-js",frontMatter:{title:"Contributing to Richie JS: Enhancing the SEO Experience Together",description:"Contribute to Richie JS, an open-source SEO tool that generates rich results. Learn how to get involved, fork the repository, and submit pull requests. Join our community and help improve Richie JS for a better SEO experience.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"Folder",name:"exploring-rich-results-with-richie-js",route:"/exploring-rich-results-with-richie-js",children:[{kind:"Meta",data:{article:{title:"Article"},breadcrumb:{title:"Breadcrumb"},"movie-carousel":{title:"Movie & Carousel"},"recipe-carousel":{title:"Recipe & Carousel"},"course-carousel":{title:"Course & Carousel"},"restaurant-carousel":{title:"Restaurant & Carousel"},event:{title:"Event"},faq:{title:"FAQ"},"learning-video":{title:"Learning Video"},"local-business":{title:"Local Business"},organization:{title:"Organization"},product:{title:"Product & Varients"},"profile-page":{title:"Profile Page"},"sitelinks-search-box":{title:"Sitelinks Search Box"},"software-app":{title:"Software App"}}},{kind:"MdxPage",name:"article",route:"/exploring-rich-results-with-richie-js/article",frontMatter:{title:"Article",description:"Learn how to create rich results for articles with Richie JS. Discover the necessary data and examples to get started with article rich results.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"breadcrumb",route:"/exploring-rich-results-with-richie-js/breadcrumb",frontMatter:{title:"Breadcrumb",description:"Learn how to create breadcrumb rich results with Richie JS. Discover the necessary data and examples to get started with breadcrumb rich results and improve website navigation.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"course-carousel",route:"/exploring-rich-results-with-richie-js/course-carousel",frontMatter:{title:"Course & Carousel",description:"Learn how to create course and carousel rich results with Richie JS. Discover the necessary data and examples to get started with course and carousel rich results and improve your website's visibility in search engines.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"event",route:"/exploring-rich-results-with-richie-js/event",frontMatter:{title:"Event",description:"Learn how to optimize your event listings with Google's event experience. Discover the necessary data requirements, including event name, mode, start date, end date, status, images, description, location, performer, organizer, and booking link. Improve your event's visibility and drive more traffic to your website.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"faq",route:"/exploring-rich-results-with-richie-js/faq",frontMatter:{title:"FAQ",description:"Learn how to optimize your FAQ page for Google search results, including the necessary data for FAQ rich results, and improve your online visibility and site traffic.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"learning-video",route:"/exploring-rich-results-with-richie-js/learning-video",frontMatter:{title:"Learning Video",description:"Learn how to optimize your learning video content for Google search results, including the necessary data for learning video rich results, and improve your video's visibility and engagement.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"local-business",route:"/exploring-rich-results-with-richie-js/local-business",frontMatter:{title:"Local Business",description:"Learn the power of structured data and Richie JS for achieving Local Business rich results. Improve your visibility on Google Search and Maps with this step-by-step tutorial.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"movie-carousel",route:"/exploring-rich-results-with-richie-js/movie-carousel",frontMatter:{title:"Movie & Carousel",description:"Unleash the power of movie carousels to engage users and boost your SEO. This comprehensive guide will teach you everything you need to know about implementing and optimizing movie carousels.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"organization",route:"/exploring-rich-results-with-richie-js/organization",frontMatter:{title:"Organization",description:"Discover the power of Richie JS for organizations structured data and how they can help you stand out in Google Search. Follow our step-by-step guide to implementing structured data and improving your search engine presence using Richie JS.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"product",route:"/exploring-rich-results-with-richie-js/product",frontMatter:{title:"Product & Variants",description:"Discover how Richie JS, developed by Cresteem, can transform your product listings. This ultimate guide will show you how to implement structured data effectively, improving your search engine visibility and boosting sales.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"profile-page",route:"/exploring-rich-results-with-richie-js/profile-page",frontMatter:{title:"Profile Page",description:"Discover how Richie JS, developed by Cresteem, can transform your profile page. This guide will show you how to implement structured data effectively, enhancing your online presence and boosting your reputation.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"recipe-carousel",route:"/exploring-rich-results-with-richie-js/recipe-carousel",frontMatter:{title:"Recipe & Carousel",description:"Explore the potential of recipe rich results with Cresteem's Richie JS. This guide will teach you how to showcase your recipes effectively, improving their visibility and making them stand out in search results.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"restaurant-carousel",route:"/exploring-rich-results-with-richie-js/restaurant-carousel",frontMatter:{title:"Restaurant & Carousel",description:"Explore the potential of restaurant rich results with Cresteem's Richie JS. This guide will teach you how to showcase your restaurant's information effectively, improving its visibility and making it easier for diners to find you.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"sitelinks-search-box",route:"/exploring-rich-results-with-richie-js/sitelinks-search-box",frontMatter:{title:"Sitelinks Search Box",description:"Discover how Richie JS, developed by Cresteem, can enhance your website's search functionality. This guide will show you how to implement structured data for sitelinks search boxes, making it easier for users to find what they're looking for on your site.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"software-app",route:"/exploring-rich-results-with-richie-js/software-app",frontMatter:{title:"Software App",description:"Discover how Richie JS, developed by Cresteem, can enhance your software app's visibility. This guide will show you how to implement structured data effectively, making your app stand out in search results and attracting more users.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}}]},{kind:"MdxPage",name:"exploring-rich-results-with-richie-js",route:"/exploring-rich-results-with-richie-js",frontMatter:{title:"The Ultimate List of Rich Results Supported by Richie JS",description:"Discover the power of Richie JS, a versatile SEO tool that supports a wide range of rich results, including Article, Breadcrumb, Movie, Recipe, Course, Restaurant, Event, FAQ, Learning Video, Local Business, Organization, Product, and more. Learn how to simplify your SEO process and boost your online visibility with our innovative solution.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"exploring-richie-js-repository",route:"/exploring-richie-js-repository",frontMatter:{title:"Dive into Richie JS: A Step-by-Step Guide with Sample Files",description:"Are you ready to unlock the power of Richie JS? Our detailed guide and demo repository will walk you through this versatile JavaScript tool, helping you understand its functionalities and integration with ease.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"frequently-asked-questions-about-richie-js",route:"/frequently-asked-questions-about-richie-js",frontMatter:{title:"All Your Richie JS Questions Answered: A Comprehensive FAQ",description:"Learn about Richie JS, an open-source SEO tool that generates rich results for enhanced search engine visibility and user experience. Discover its features, configurations, and usage guides to improve your website's search engine performance.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"getting-started-with-richie-js",route:"/getting-started-with-richie-js",frontMatter:{title:"Getting Started with Richie JS: Enhance Your SEO Journey",description:"Discover Richie JS, a powerful SEO tool that generates rich results for enhanced search engine visibility and improved user experience. Learn how to simplify your SEO process and increase your online presence with our innovative solution.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Enhance Your SEO Game: Meet Richie JS, a Rich Results Generator",description:"Boost your website's visibility with Richie JS, a powerful SEO tool that generates rich results for enhanced search engine rankings and improved user experience. Learn how to simplify your SEO process and increase your online presence with our innovative solution.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"richie-js-video-tutorial",route:"/richie-js-video-tutorial",frontMatter:{title:"Richie JS Video Tutorial: Simplify Your SEO Process",description:"Discover Richie JS, an open-source SEO tool that generates rich results for enhanced search engine visibility and user experience. Learn how to use Richie JS to simplify rich result generation, improve website performance, and increase audience engagement.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"unlocking-intellisense-for-richie-js",route:"/unlocking-intellisense-for-richie-js",frontMatter:{title:"Intellisense Support: Smart Configuration for Richie JS",description:"Boost your configuration productivity with IntelliSense support for Richie JS. Learn how to enable intelligent code suggestions, autocomplete, and error highlighting in VS Code for efficient and error-free configuration.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}},{kind:"MdxPage",name:"working-with-richie-js-api-and-cli",route:"/working-with-richie-js-api-and-cli",frontMatter:{title:"Maximizing SEO with Richie JS: Dive into API and CLI Functionality",description:"Richie JS is an SEO tool that generates rich results, enhancing search engine visibility and user experience. Learn how to configure Richie JS, enable intellisense support, and use it with CLI or API to improve your website's SEO.",thumbnailUrl:"https://www.cresteem.com/opensource/boost-seo-with-richie-js/thumbnail.png"}}],flexsearch:{codeblocks:!0},title:"Breadcrumb",headings:l},pageNextRoute:"/exploring-rich-results-with-richie-js/breadcrumb",nextraLayout:o.ZP,themeConfig:n.Z};i.default=(0,s.j)(d)}},function(e){e.O(0,[317,229,739,888,774,179],function(){return e(e.s=7383)}),_N_E=e.O()}]);