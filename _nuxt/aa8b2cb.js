(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{176:function(t,e,r){"use strict";r.r(e);var o=r(398),n=r(177),c=r(101),l=r(395),d=r(397),v=r(399),f=r(390),h={props:{socials:{type:Object,default:function(){}}}},m=(r(357),r(46)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{padless:""}},[e(n.a,{staticClass:"footer text-center",attrs:{flat:"",tile:"",width:"100%"}},[e(c.a,[e("div",[e(v.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.devpost,text:"",color:n?"primary":"text1"}},[t._v("Devpost")])]}}])}),t._v(" "),e(v.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.linkedin,icon:"",color:n?"primary":"text1"}},[e(f.a,[t._v("mdi-linkedin")])],1)]}}])}),t._v(" "),e(v.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.github,icon:"",color:n?"primary":"text1"}},[e(f.a,[t._v("mdi-github")])],1)]}}])}),t._v(" "),e(v.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:t.socials.resume}},[e(o.a,{attrs:{href:"#",text:"",color:n?"primary":"text1"}},[t._v("Resume")])],1)]}}])})],1)]),t._v(" "),e(l.a),t._v(" "),e(c.a,{staticClass:"white--text"},[e("strong",[t._v("keshprad")]),t._v(" — "+t._s((new Date).getFullYear())),e("br"),t._v("\n      Built with\n      "),e("a",{staticClass:"fill-animation",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt.js")])])],1)],1)}),[],!1,null,"3c217958",null);e.default=component.exports},246:function(t,e,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("edfa38a4",content,!0,{sourceMap:!1})},247:function(t,e,r){var content=r(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("0a2b7ad9",content,!0,{sourceMap:!1})},248:function(t,e,r){var content=r(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("abc10966",content,!0,{sourceMap:!1})},261:function(t,e,r){"use strict";var o=r(394),n=r(176),c=r(97),l={components:{Footer:n.default,Navbar:c.default},data:function(){return{socials:{devpost:"https://devpost.com/keshprad",linkedin:"https://www.linkedin.com/in/keshprad/",github:"https://github.com/keshprad",resume:"/resume",redirects:"https://keshprad.github.io/redirects/"}}},mounted:function(){var t=window.innerHeight-(document.getElementById("navbar").clientHeight+document.getElementById("footer").clientHeight);document.getElementById("content").style.minHeight="".concat(t,"px")}},d=(r(366),r(368),r(46)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[e("Navbar",{attrs:{id:"navbar",socials:t.socials}}),t._v(" "),e("Nuxt",{attrs:{id:"content"}}),t._v(" "),e("Footer",{attrs:{id:"footer",socials:t.socials}})],1)}),[],!1,null,"43132664",null);e.a=component.exports;installComponents(component,{Navbar:r(97).default,Footer:r(176).default})},262:function(t,e,r){"use strict";var o=r(394),n={components:{Navbar:r(97).default},data:function(){return{socials:{devpost:"https://devpost.com/keshprad",linkedin:"https://www.linkedin.com/in/keshprad/",github:"https://github.com/keshprad",resume:"/resume",redirects:"https://keshprad.github.io/redirects/"}}},mounted:function(){var t=window.innerHeight-document.getElementById("navbar").clientHeight;document.getElementById("content").style.minHeight="".concat(t,"px")}},c=r(46),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[e("Navbar",{attrs:{id:"navbar",socials:t.socials}}),t._v(" "),e("div",{attrs:{id:"content"}},[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:r(97).default})},269:function(t,e,r){r(270),t.exports=r(271)},357:function(t,e,r){"use strict";r(246)},358:function(t,e,r){var o=r(30)(!1);o.push([t.i,".footer[data-v-3c217958]{background-color:#1e1e1e;border-color:#1e1e1e}",""]),t.exports=o},366:function(t,e,r){"use strict";r(247)},367:function(t,e,r){var o=r(30)(!1);o.push([t.i,"body,html{background:#1e1e1e}",""]),t.exports=o},368:function(t,e,r){"use strict";r(248)},369:function(t,e,r){var o=r(30)(!1);o.push([t.i,"#portfolio[data-v-43132664]{max-width:100vw;padding:0}",""]),t.exports=o},73:function(t,e,r){"use strict";var o=r(394),n=r(399),c=r(390),l={components:{},layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"Error 404: Page Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},d=r(46),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[e("div",{attrs:{id:"content"}},[404===t.error.statusCode?e("h1",{staticClass:"text-center mb-8"},[t._v("\n      "+t._s(t.pageNotFound)+"\n    ")]):e("h1",{staticClass:"text-center mb-8"},[t._v("\n      "+t._s(t.otherError)+"\n    ")]),t._v(" "),e("h1",{staticClass:"text-center text-decoration-underline"},[t._v("Pages:")]),t._v(" "),e("h2",{staticClass:"text-center my-1"},[e(n.a,{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[e("NuxtLink",{staticClass:"text-decoration-none fill-animation",attrs:{to:"/"}},[e(c.a,{staticClass:"mb-1",attrs:{color:o?"text1":"primary"}},[t._v("\n            mdi-home\n          ")]),t._v("\n          Home\n        ")],1)]}}])})],1),t._v(" "),e("h2",{staticClass:"text-center my-1"},[e(n.a,{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[e("NuxtLink",{staticClass:"text-decoration-none fill-animation",attrs:{to:"/resume"}},[e(c.a,{staticClass:"mb-1",attrs:{color:o?"text1":"primary"}},[t._v("\n            mdi-file-account\n          ")]),t._v("\n          Resume\n        ")],1)]}}])})],1)])])}),[],!1,null,"22062dcf",null);e.a=component.exports},97:function(t,e,r){"use strict";r.r(e);var o=r(398),n=r(177),c=r(399),l=r(390),d=r(396),v=r(178),f=r(174),h=r(175),m={components:{showAt:h.showAt,hideAt:h.hideAt},props:{socials:{type:Object,default:function(){}}}},_=r(46),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{tile:""}},[e(v.a,{attrs:{dense:"",color:"#1e1e1e"}},[e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return[e(f.a,[e("NuxtLink",{class:"text-decoration-none ".concat(o?"primary--text":"text1--text"),attrs:{to:"/"}},[t._v("Portfolio | keshprad")])],1)]}}])})],1),t._v(" "),e(d.a),t._v(" "),e("div",[e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{small:"",href:t.socials.devpost,text:"",color:n?"primary":"text1"}},[t._v("Devpost")])]}}])})],1),t._v(" "),e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.linkedin,icon:"",small:"",color:n?"primary":"text1"}},[e(l.a,[t._v("mdi-linkedin")])],1)]}}])})],1),t._v(" "),e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.linkedin,icon:"",color:n?"primary":"text1"}},[e(l.a,[t._v("mdi-linkedin")])],1)]}}])})],1),t._v(" "),e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:"/"}},[e(o.a,{attrs:{icon:"",small:"",color:n?"primary":"text1"}},[e(l.a,[t._v("mdi-home")])],1)],1)]}}])})],1),t._v(" "),e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.github,icon:"",small:"",color:n?"primary":"text1"}},[e(l.a,[t._v("mdi-github")])],1)]}}])})],1),t._v(" "),e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.github,icon:"",color:n?"primary":"text1"}},[e(l.a,[t._v("mdi-github")])],1)]}}])})],1),t._v(" "),e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.redirects,icon:"",small:"",color:n?"primary":"text1"}},[e(l.a,[t._v("mdi-link-variant")])],1)]}}])})],1),t._v(" "),e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.redirects,icon:"",color:n?"primary":"text1"}},[e(l.a,[t._v("mdi-link-variant")])],1)]}}])})],1),t._v(" "),e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:t.socials.devpost,text:"",color:n?"primary":"text1"}},[t._v("Devpost")])]}}])})],1),t._v(" "),e("NuxtLink",{staticClass:"text-decoration-none",attrs:{to:t.socials.resume}},[e("show-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:"#",text:"",color:n?"primary":"text1"}},[t._v("Resume")])]}}])})],1),t._v(" "),e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[e(o.a,{attrs:{href:"#",text:"",small:"",color:n?"primary":"text1"}},[t._v("Resume")])]}}])})],1)],1)],1),t._v(" "),e("hide-at",{attrs:{breakpoint:"mediumAndAbove"}},[e(d.a)],1)],1)],1)}),[],!1,null,"0ca416c8",null);e.default=component.exports}},[[269,10,2,11]]]);