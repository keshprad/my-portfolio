(window.webpackJsonp=window.webpackJsonp||[]).push([[15,8,9],{442:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("513c0da4",content,!0,{sourceMap:!1})},443:function(t,e,n){var content=n(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("8b968ecc",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";n.r(e);var o=n(483),r=n(675),c=(n(13),n(54),n(38),n(454)),l=n.n(c),d={props:{title:{type:String,default:""},subtitle:{type:String,default:""},description:{type:String,default:""},height:{type:Number,default:375},imgSrc:{type:String,default:""},randImgSrcArr:{type:Array,default:function(){return[]}}},computed:{src:function(){return this.imgSrc?this.imgSrc:l.a.sample(this.randImgSrcArr)}}},m=(n(447),n(449),n(48)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:"",src:t.src,height:t.height}},[e(o.a,{staticClass:"content"},[e("h1",[t._v(t._s(t.title))]),t._v(" "),t.subtitle?e("br"):t._e(),t._v(" "),t.subtitle?e("h2",[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.description?e("br"):t._e(),t._v(" "),t.description?e("h3",[t._v(t._s(t.description))]):t._e()])],1)}),[],!1,null,"5d9c867b",null);e.default=component.exports},447:function(t,e,n){"use strict";n(442)},448:function(t,e,n){var o=n(19)(!1);o.push([t.i,".content[data-v-5d9c867b]{max-width:900px}.content p[data-v-5d9c867b]{margin-top:16px}.content h1[data-v-5d9c867b]{font-size:2em}.content h3[data-v-5d9c867b]{font-size:1.17em}",""]),t.exports=o},449:function(t,e,n){"use strict";n(443)},450:function(t,e,n){var o=n(19)(!1);o.push([t.i,".v-parallax__content{background:rgba(0,0,0,.25)}",""]),t.exports=o},458:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4c6b69b4",content,!0,{sourceMap:!1})},476:function(t,e,n){"use strict";n(458)},477:function(t,e,n){var o=n(19)(!1);o.push([t.i,".content[data-v-f7d28af0]{max-width:900px}.content p[data-v-f7d28af0]{margin-top:16px}",""]),t.exports=o},481:function(t,e,n){"use strict";n.r(e);n(33),n(55);var o={components:{PortfolioCard:n(462).default},props:{title:{type:String,default:function(){return""}},data:{type:Array,default:function(){return[]}}}},r=n(48),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("h2",{staticClass:"my-6 text-center text1--text",attrs:{id:t.title.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"").replace(/\s+/g,"-").toLowerCase()}},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t._l(t.data,(function(t,i){return e("PortfolioCard",{key:i,attrs:{card:t}})}))],2)}),[],!1,null,"71ed8a1e",null);e.default=component.exports;installComponents(component,{PortfolioCard:n(462).default})},482:function(t,e,n){"use strict";n.r(e);n(13),n(54);var o=n(159),r=n(444),c={components:{showAt:o.showAt,hideAt:o.hideAt,ParallaxImageHeader:r.default},data:function(){return{title:"Hi, I'm Rishi Keshav Pradeep 👋",subtitle:"I love software and learning!",description:"I'm a CS student at UMD with a strong interest in Algorithms, ML, Backend Engineering. I love learning new things, and meeting new people. ",imgSrc:"/img/portfolio-banner.png"}}},l=(n(476),n(48)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e("ParallaxImageHeader",{attrs:{title:t.title,subtitle:t.subtitle,description:t.description,"img-src":t.imgSrc}})],1),t._v(" "),e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e("ParallaxImageHeader",{attrs:{title:t.title,subtitle:t.subtitle,description:t.description,"img-src":t.imgSrc,height:"500"}})],1)],1)}),[],!1,null,"f7d28af0",null);e.default=component.exports;installComponents(component,{ParallaxImageHeader:n(444).default})},500:function(t,e,n){var content=n(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("16e4e24a",content,!0,{sourceMap:!1})},645:function(t,e,n){"use strict";n(500)},646:function(t,e,n){var o=n(19)(!1);o.push([t.i,".content[data-v-512293d2]{max-width:1024px;margin-bottom:50px}",""]),t.exports=o},672:function(t,e,n){"use strict";n.r(e);var o=n(483),r=n(481),c=n(482),l={components:{PortfolioCardList:r.default,Intro:c.default},data:function(){return{education:{title:"Education",data:[{title:"University of Maryland, College Park",subtitle:"BS in Computer Science and Statistics",imgSrc:["/img/education/umd-logo.png"],id:"umd",body:[['- Dean\'s List: Fall 2021, Spring 2022\n- Fellow at <a href="https://startupshell.org" target="_blank">StartupShell</a>\n- FIRE Research program - <a href="https://www.fire.umd.edu/coml" target="_blank">Capital One Machine Learning Group</a>\n- Presidential Scholarship'],["- GPA: 3.963\n- Select Coursework:\n\t- CMSC 351: Algorithms\n\t- CMSC 216: Intro to Computer Systems\n\t- CMSC 430: Intro to Compilers\n\t- CMSC 420: Advanced Data Structures\n"]],dates:"Aug 2021 - May 2024"},{title:"Lynbrook High School",id:"lhs",body:['- GPA: 3.88\n- Head of Front-End/Back-End @ <a href="https://lhswebdev.github.io/" target="_blank">Lynbrook WebDev</a>:\n\t- WebDev is a student interest club where we present about hundreds of topics including Networking, HTML/CSS/JS, frameworks, etc.\n- Vice-President @ Lynbrook Me to We:\n\t- Me to We is a club at Lynbrook affiliated with the WE Charity. Our club conducts campaigns to raise funding for a school in Totoras, Ecuador. I lead member meetings, guide our officer team, organize events, and maintain communications with affiliated organizations.'],dates:"2017 - 2021"}]},workExperience:{title:"Work Experience",data:[{title:"University of Maryland, College Park",subtitle:"Teaching Assistant - CMSC 216 (Intro to Computer Systems)",imgSrc:["/img/education/umd-logo.png"],links:[],body:["- Taught introductory systems concepts such as C, pointers, dynamic memory, memory management, Assembly.\n- Engaged directly with students by hosting recitation sessions and leading office hours in a class of 800+ students.\n- Provided feedback and areas of improvement for students through grading coding projects, quizzes, and exams."],dates:"Aug 2022 - Present"},{title:"Curie AI",subtitle:"Software Engineer Intern",imgSrc:[],links:[{icon:"mdi-link-variant",href:"https://curieai.com",target:"_blank"}],body:["- Implemented backend microservices for integrating Electronic Health Record systems with Curie services.\n- Delivered data transformer and wrapper APIs, enabling seamless retrieval of patient records across Curie services.\n- Dockerized microservices and deployed with AWS Elastic Kubernetes Service.\n- Read my reflection on my experience at Curie [here](/writing/curie-ai-internship-summer-22)."],dates:"Jun 2022 - Aug 2022"},{title:"Chaos Genius (YC '20)",subtitle:"Software Engineer Intern",imgSrc:["/img/work-experience/chaos-genius-dashboard.gif"],links:[{icon:"mdi-github",href:"https://github.com/chaos-genius/chaos_genius",target:"_blank"},{icon:"mdi-link-variant",href:"https://chaosgenius.io",target:"_blank"}],body:['- Worked on algorithms for Root Cause Analysis and Anomaly Detection for time series data.\n- Engineered a KPI validation feature, and developed an anomaly severity scoring algorithm.\n- Authored a blog post, <a href="https://chaosgenius.io/blog/a-brief-history-of-anomaly-detection/" target="_blank">"A Brief History of Anomaly Detection"</a>.'],dates:"Jun 2021 - Aug 2021"},{title:"Elevate the Future",subtitle:"Director of Project Falcon",imgSrc:["/img/work-experience/elevate-the-future.png"],body:["- Founded and spearheaded Project Falcon to develop websites for 30+ local businesses amidst the pandemic.\n- Collaborated directly with business owners to design and curate websites for their needs.\n- Conducted technical workshops for youth and led team of 20+ in website development for businesses."],dates:"Jul 2019 - May 2021"}]},projects:{title:"Projects",data:[{title:"YouTube Mentions",subtitle:"2nd Place Media Track @ PickHacks 2021",imgSrc:["/img/projects/youtube-mentions.gif"],links:[{icon:"mdi-github",href:"https://github.com/keshprad/youtube-mentions"},{iconText:"Devpost",href:"https://devpost.com/software/youtube-mentions"},{icon:"mdi-youtube",href:"https://www.youtube.com/watch?v=O9BwcoK1fEM"}],tldr:"Uses Named Entity Recognition to generate cards with relevant context for a given YouTube video",body:["- This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side.\n- Awards:\n\t- 2nd Place Media Track @ PickHacks 2021"]},{title:"MicroCaml",body:["- Built a lexer, parser, and evaluator for the MicroCaml language.\n- A dynamically-typed version of OCaml with a subset of its features."]},{title:"Path Visualizer",imgSrc:["/img/projects/path-visualizer.gif"],links:[{icon:"mdi-github",href:"https://github.com/keshprad/path-visualizer"},{icon:"mdi-link-variant",href:"https://keshprad.github.io/path-visualizer"}],body:["A web app for visualizing pathfinding algorithms built in Svelte. View [here](https://path-visualizer.keshprad.ml)!\n- Algorithms: A* search, Dijkstra's\n- Grid Types: Recursive Division Maze, Simple Random Grid, Blank Grid"]},{title:"Best Comeback",imgSrc:["/img/projects/best-comeback.gif"],links:[{icon:"mdi-github",href:"https://github.com/keshprad/best-comeback"},{icon:"mdi-image",href:"https://keshprad.github.io/best-comeback/#examples"}],body:['Want to end an argument with a win? This repo uses facial landmarks to automatically generate a "Deal With It" gif from an input image.']},{title:"Autoscriber",imgSrc:["/img/projects/autoscriber-app.gif"],links:[{icon:"mdi-github",href:"https://github.com/autoscriber-app",target:"_blank"},{icon:"mdi-link-variant",href:"https://autoscriber-app.github.io/",target:"_blank"}],tldr:"PWA for automatic online meeting notes using speech recognition and NLP.",body:["- Autoscriber is a progressive web app (PWA) that listens to your microphone audio, transcribes your speech, and summarizes your meeting in bullet point format.\n- During the meeting, participants simply open a session link and turn on their microphone.\n- Once the meeting is over, Autoscriber will use AI language models to analyze the conversation and jot down important sentences automatically."]},{title:"Algorithms",id:"algorithms-repo",links:[{icon:"mdi-github",href:"https://github.com/keshprad/Algorithms"}],body:["A repository full of various algorithms and data structures that I find interesting."]},{title:"competitive programming",links:[{icon:"mdi-github",href:"https://github.com/keshprad/competitive-programming"}],body:["competitive programming practice solutions"]}]},awardsAndCertifications:{title:"Awards & Certifications",data:[{title:"2nd Place Media Track",id:"pickhacks-2021",subtitle:"PickHacks 2021",imgSrc:["/img/projects/youtube-mentions.gif"],links:[{icon:"mdi-github",href:"https://github.com/keshprad/youtube-mentions"},{iconText:"Devpost",href:"https://devpost.com/software/youtube-mentions"},{icon:"mdi-youtube",href:"https://www.youtube.com/watch?v=O9BwcoK1fEM"}],tldr:"Uses Named Entity Recognition to generate cards with relevant context for a given YouTube video",body:["YouTube Mentions: This application analyzes the given YouTube video, retrieves quick snippets of relevant information about people, songs, games, etc. mentioned in the video, and displays them side-by-side."],dates:"Apr 2021"},{title:"Stanford Algorithms Specialization",id:"stanford-algos",imgSrc:["/img/awards-and-certifications/stanford-algorithms.png"],links:[{iconText:"Coursera",href:"https://www.coursera.org/account/accomplishments/specialization/JGJD68YT52NQ",target:"_blank"}],body:["**Courses:**\n- Divide and Conquer, Sorting and Searching, and Randomized Algorithms\n- Graph Search, Shortest Paths, and Data Structures\n- Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming\n- Shortest Paths Revisited, NP-Complete Problems and What To Do About Them"]},{title:"Google IT Support Specialization",id:"google-it",imgSrc:["/img/awards-and-certifications/google-it.png"],links:[{iconText:"Coursera",href:"https://www.coursera.org/account/accomplishments/specialization/KF6RGBL6NLTW/",target:"_blank"}],body:["**Courses:**\n- The Bits and Bytes of Computer Networking\n- IT Security: Defense against the digital dark arts\n- System Administration and IT Infrastructure Services\n- Technical Support Fundamentals\n- Operating Systems and You: Becoming a Power User"]}]}}},head:function(){return{title:"Portfolio"}}},d=(n(645),n(48)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"portfolio"}},[e("Intro"),t._v(" "),e(o.a,{staticClass:"content"},[e("PortfolioCardList",{attrs:{title:t.education.title,data:t.education.data}}),t._v(" "),e("PortfolioCardList",{attrs:{title:t.workExperience.title,data:t.workExperience.data}}),t._v(" "),e("PortfolioCardList",{attrs:{title:t.projects.title,data:t.projects.data}}),t._v(" "),e("PortfolioCardList",{attrs:{title:t.awardsAndCertifications.title,data:t.awardsAndCertifications.data}})],1)],1)}),[],!1,null,"512293d2",null);e.default=component.exports;installComponents(component,{Intro:n(482).default,PortfolioCardList:n(481).default})}}]);