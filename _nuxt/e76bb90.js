(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6],{401:function(t,e,n){"use strict";n.r(e);var l=n(0),r=n(406),o={components:{EnlargeableImage:l.a.component("VueEnlargeableImage",r.a)},props:{src:{type:String,default:function(){return""}},srcLarge:{type:String,default:function(){return""}}}},c=(n(407),n(46)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"img"},[e("EnlargeableImage",{attrs:{src:t.src,src_large:t.srcLarge}})],1)}),[],!1,null,"4cd97480",null);e.default=component.exports;installComponents(component,{EnlargeableImage:n(401).default})},402:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("829ccd1e",content,!0,{sourceMap:!1})},404:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("dbc4c706",content,!0,{sourceMap:!1})},406:function(t,e,n){"use strict";var script={name:"EnlargeableImage",props:{src:{type:String},src_large:{type:String},animation_duration:{type:String,default:"700"},trigger:{type:String,default:"click"}},data(){return{state:this.state,styles:this.styles}},methods:{init(){var t=this;t.state="delarged",t.delay=50,t.adjust_top=0,t.wait=!1;var e=parseInt(t.$props.animation_duration)/1e3;0==e&&(t.delay=0),e=e.toFixed(2),t.transition_value="width "+e+"s, height "+e+"s, top "+e+"s, left "+e+"s, background-color "+e+"s",t.styles={transition:t.transition_value},"hover"==t.$props.trigger&&(t.styles.pointerEvents="none")},enlarge(){var t=this,rect=t.$refs.slot.getBoundingClientRect();t.styles={position:"fixed",left:Math.round(rect.left)+"px",top:Math.round(rect.top+t.adjust_top)+"px",width:Math.round(rect.right-rect.left)+"px",height:Math.round(rect.bottom-rect.top)+"px",backgroundImage:"url("+t.$props.src+")",transition:t.transition_value},"hover"==t.$props.trigger&&(t.styles.pointerEvents="none"),t.state="enlarging",void 0!==t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.$emit("enlarging"),t.styles={backgroundImage:"url("+t.$props.src+")",transition:t.transition_value},"hover"==t.$props.trigger&&(t.styles.pointerEvents="none"),void 0!==t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.state="enlarged",t.$emit("enlarged")}),t.$props.animation_duration)}),t.delay)},reset(){var t=this;if("delarging"!=t.state){var rect=t.$refs.slot.getBoundingClientRect();void 0!==t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.state="delarging",t.$emit("delarging"),t.styles={backgroundImage:"url("+t.$props.src+")",position:"fixed",left:Math.round(rect.left)+"px",top:Math.round(rect.top+t.adjust_top)+"px",width:Math.round(rect.right-rect.left)+"px",height:Math.round(rect.bottom-rect.top)+"px",transition:t.transition_value},"hover"==t.$props.trigger&&(t.styles.pointerEvents="none"),void 0!==t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.state="delarged",t.$emit("delarged")}),t.$props.animation_duration)}),0)}else t.enlarge()}},mounted:function(){this.init()}};function l(template,style,script,t,e,n,l,r,o,c){"boolean"!=typeof l&&(o=r,r=l,l=!1);const d="function"==typeof script?script.options:script;let v;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(v=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,o(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=v):style&&(v=l?function(t){style.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),v)if(d.functional){const t=d.render;d.render=function(e,n){return v.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,v):[v]}return script}const r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(t){return(t,style)=>function(t,e){const n=r?e.media||"default":t,style=d[n]||(d[n]={ids:new Set,styles:[]});if(!style.ids.has(t)){style.ids.add(t);let code=e.source;if(e.map&&(code+="\n/*# sourceURL="+e.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",e.media&&style.element.setAttribute("media",e.media),void 0===c&&(c=document.head||document.getElementsByTagName("head")[0]),c.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{const t=style.ids.size-1,e=document.createTextNode(code),n=style.element.childNodes;n[t]&&style.element.removeChild(n[t]),n.length?style.element.insertBefore(e,n[t]):style.element.appendChild(e)}}}(t,style)}let c;const d={};const v=l({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"enlargeable-image":!0,active:"delarged"!=t.state}},[n("div",t._g({ref:"slot",staticClass:"slot"},"click"==this.$props.trigger?{click:t.enlarge}:{mouseenter:t.enlarge,mouseleave:t.reset}),[t._t("default",[n("img",{staticClass:"default",attrs:{src:this.$props.src}})])],2),t._v(" "),n("div",t._g({staticClass:"full",class:t.state,style:t.styles},"click"==this.$props.trigger?{click:t.reset}:{}),["enlarged"!=t.state?n("img",{attrs:{src:this.$props.src}}):t._e(),t._v(" "),"enlarged"==t.state?n("img",{attrs:{src:this.$props.src_large}}):t._e()])])},staticRenderFns:[]},(function(t){t&&t("data-v-74c9692d_0",{source:".enlargeable-image>.slot[data-v-74c9692d]{display:inline-block;max-width:100%;max-height:100%;cursor:zoom-in}.enlargeable-image>.slot>img.default[data-v-74c9692d]{max-width:100%;vertical-align:middle}.enlargeable-image.active>.slot[data-v-74c9692d]{opacity:.3;filter:grayscale(100%)}.enlargeable-image .full[data-v-74c9692d]{cursor:zoom-out;background-color:transparent;align-items:center;justify-content:center;background-position:center center;background-repeat:no-repeat;background-size:contain;display:none}.enlargeable-image .full>img[data-v-74c9692d]{object-fit:contain;width:100%;height:100%}.enlargeable-image .full.enlarging[data-v-74c9692d]{display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background-color:transparent;cursor:zoom-out;z-index:3}.enlargeable-image .full.enlarged[data-v-74c9692d]{display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background-color:transparent;cursor:zoom-out;z-index:2}.enlargeable-image .full.delarging[data-v-74c9692d]{display:flex;position:fixed;left:0;top:0;width:100%;height:100%;background-color:transparent;cursor:zoom-in;z-index:1}",map:void 0,media:void 0})}),script,"data-v-74c9692d",false,undefined,!1,o,void 0,void 0),m=function(t){m.installed||(m.installed=!0,t.component("VueEnlargeableImage",v))};v.install=m,e.a=v},407:function(t,e,n){"use strict";n(402)},408:function(t,e,n){var l=n(30)(!1);l.push([t.i,".img[data-v-4cd97480]{background-color:rgba(0,0,0,.25);-o-object-fit:contain;object-fit:contain;margin:0;padding:10px;max-height:200px;max-width:275px;border-radius:20px}.img[data-v-4cd97480] img.default{border-radius:10px}.img[data-v-4cd97480] .full img{background:var(--v-background2-base)}",""]),t.exports=l},409:function(t,e,n){"use strict";n.r(e);var l=n(398),r=n(177),o=n(101),c=n(395),d=n(399),v=n(390),m=n(431),h=n(430),_=n(396),f=(n(25),n(55),n(416)),y=n.n(f),x={components:{EnlargeableImage:n(401).default,VueMarkdown:y.a},props:{card:{type:Object,default:function(){}}}},k=(n(413),n(46)),component=Object(k.a)(x,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mx-auto my-5 grey darken-4",attrs:{id:(t.card.id?t.card.id:t.card.title).replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"").replace(/\s+/g,"-").toLowerCase()}},[e(h.a,[e("span",{staticClass:"font-weight-bold"},[t._v("\n      "+t._s(t.card.title)+"\n    ")]),t._v(" "),t.card.subtitle?e("span",{staticClass:"font-italic font-weight-regular"},[t._v("\n       - "+t._s(t.card.subtitle)+"\n    ")]):t._e(),t._v(" "),e(_.a),t._v(" "),t.card.dates?e("span",{staticClass:"subtitle-2 grey--text"},[t._v("\n      ("+t._s(t.card.dates)+")\n    ")]):t._e()],1),t._v(" "),e(c.a),t._v(" "),e(h.a,{staticClass:"align-start pa-2"},[t.card.imgSrc&&t.card.imgSrc.length>0?e("div",t._l(t.card.imgSrc,(function(t,n){return e(m.a,{key:n},[e("EnlargeableImage",{attrs:{src:t,"src-large":t}})],1)})),1):t._e(),t._v(" "),e("div",{staticClass:"description px-2"},[t.card.tldr?e("vue-markdown",{staticClass:"md px-2 pb-2 font-weight-bold text1--text"},[t._v("tldr: "+t._s(t.card.tldr))]):t._e(),t._v(" "),t.card.tldr?e(c.a):t._e(),t._v(" "),t.card.body.length>0&&Array.isArray(t.card.body[0])?e("div",{staticClass:"d-flex"},t._l(t.card.body,(function(col,n){return e("div",{key:n,style:"width: ".concat(100/t.card.body.length,"%")},t._l(col,(function(content,n){return e(o.a,{key:n,staticClass:"body-2 pa-2"},[e("vue-markdown",{staticClass:"md"},[t._v(t._s(content))])],1)})),1)})),0):t._l(t.card.body,(function(content,n){return e(o.a,{key:n,staticClass:"body-2 pa-2"},[e("vue-markdown",{staticClass:"md"},[t._v(t._s(content))])],1)})),t._v(" "),t.card.links?e(o.a,{staticClass:"pa-2"},t._l(t.card.links,(function(link,n){return e(d.a,{key:n,scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return[e("a",{staticClass:"link mr-4 text-decoration-none",attrs:{href:link.href,target:link.target?link.target:""}},[link.icon?e(v.a,{attrs:{color:r?"primary":"text1"},domProps:{textContent:t._s(link.icon)}}):link.iconText?e(l.a,{attrs:{text:"",color:r?"primary":"text1"},domProps:{textContent:t._s(link.iconText)}}):t._e()],1)]}}],null,!0)})})),1):t._e()],2)])],1)}),[],!1,null,"4d51df45",null);e.default=component.exports;installComponents(component,{EnlargeableImage:n(401).default})},411:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0e36439c",content,!0,{sourceMap:!1})},412:function(t,e,n){var l=n(30)(!1);l.push([t.i,'.theme--light.v-list-item--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){color:rgba(0,0,0,.87)}.theme--light.v-list-item .v-list-item__mask{color:rgba(0,0,0,.38);background:#eee}.theme--light.v-list-item:not(.v-list-item--disabled) .v-list-item__action-text,.theme--light.v-list-item:not(.v-list-item--disabled) .v-list-item__subtitle{color:rgba(0,0,0,.6)}.theme--light.v-list-item:hover:before{opacity:.04}.theme--light.v-list-item--active:before,.theme--light.v-list-item--active:hover:before,.theme--light.v-list-item:focus:before{opacity:.12}.theme--light.v-list-item--active:focus:before,.theme--light.v-list-item.v-list-item--highlighted:before{opacity:.16}.theme--dark.v-list-item--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled){color:#fff}.theme--dark.v-list-item .v-list-item__mask{color:hsla(0,0%,100%,.5);background:#494949}.theme--dark.v-list-item:not(.v-list-item--disabled) .v-list-item__action-text,.theme--dark.v-list-item:not(.v-list-item--disabled) .v-list-item__subtitle{color:hsla(0,0%,100%,.7)}.theme--dark.v-list-item:hover:before{opacity:.08}.theme--dark.v-list-item--active:before,.theme--dark.v-list-item--active:hover:before,.theme--dark.v-list-item:focus:before{opacity:.24}.theme--dark.v-list-item--active:focus:before,.theme--dark.v-list-item.v-list-item--highlighted:before{opacity:.32}.v-list-item{align-items:center;display:flex;flex:1 1 100%;letter-spacing:normal;min-height:48px;outline:none;padding:0 16px;position:relative;text-decoration:none}.v-list-item--disabled{pointer-events:none}.v-list-item--selectable{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto}.v-list-item:after{content:"";min-height:inherit;font-size:0}.v-list-item__action{align-self:center;margin:12px 0}.v-list-item__action .v-input,.v-list-item__action .v-input--selection-controls__input,.v-list-item__action .v-input__control,.v-list-item__action .v-input__slot{margin:0!important}.v-list-item__action .v-input{padding:0}.v-list-item__action .v-input .v-messages{display:none}.v-list-item__action-text{font-size:.75rem}.v-list-item__avatar{align-self:center;justify-content:flex-start}.v-list-item__avatar,.v-list-item__avatar.v-list-item__avatar--horizontal{margin-bottom:8px;margin-top:8px}.v-application--is-ltr .v-list-item__avatar.v-list-item__avatar--horizontal:first-child{margin-left:-16px}.v-application--is-rtl .v-list-item__avatar.v-list-item__avatar--horizontal:first-child{margin-right:-16px}.v-application--is-ltr .v-list-item__avatar.v-list-item__avatar--horizontal:last-child{margin-left:-16px}.v-application--is-rtl .v-list-item__avatar.v-list-item__avatar--horizontal:last-child{margin-right:-16px}.v-list-item__content{align-items:center;align-self:center;display:flex;flex-wrap:wrap;flex:1 1;overflow:hidden;padding:12px 0}.v-list-item__content>*{line-height:1.1;flex:1 0 100%}.v-list-item__content>:not(:last-child){margin-bottom:2px}.v-list-item__icon{align-self:flex-start;margin:16px 0}.v-application--is-ltr .v-list-item__action:last-of-type:not(:only-child),.v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child),.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child){margin-left:16px}.v-application--is-ltr .v-list-item__avatar:first-child,.v-application--is-rtl .v-list-item__action:last-of-type:not(:only-child),.v-application--is-rtl .v-list-item__avatar:last-of-type:not(:only-child),.v-application--is-rtl .v-list-item__icon:last-of-type:not(:only-child){margin-right:16px}.v-application--is-rtl .v-list-item__avatar:first-child{margin-left:16px}.v-application--is-ltr .v-list-item__action:first-child,.v-application--is-ltr .v-list-item__icon:first-child{margin-right:32px}.v-application--is-rtl .v-list-item__action:first-child,.v-application--is-rtl .v-list-item__icon:first-child{margin-left:32px}.v-list-item__action,.v-list-item__avatar,.v-list-item__icon{display:inline-flex;min-width:24px}.v-list-item .v-list-item__subtitle,.v-list-item .v-list-item__title{line-height:1.2}.v-list-item__subtitle,.v-list-item__title{flex:1 1 100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list-item__title{align-self:center;font-size:1rem}.v-list-item__title>.v-badge{margin-top:16px}.v-list-item__subtitle{font-size:.875rem}.v-list--dense .v-list-item,.v-list-item--dense{min-height:40px}.v-list--dense .v-list-item .v-list-item__icon,.v-list-item--dense .v-list-item__icon{height:24px;margin-top:8px;margin-bottom:8px}.v-list--dense .v-list-item .v-list-item__content,.v-list-item--dense .v-list-item__content{padding:8px 0}.v-list--dense .v-list-item .v-list-item__subtitle,.v-list--dense .v-list-item .v-list-item__title,.v-list-item--dense .v-list-item__subtitle,.v-list-item--dense .v-list-item__title{font-size:.8125rem;font-weight:500;line-height:1rem}.v-list--dense .v-list-item.v-list-item--two-line,.v-list-item--dense.v-list-item--two-line{min-height:60px}.v-list--dense .v-list-item.v-list-item--three-line,.v-list-item--dense.v-list-item--three-line{min-height:76px}.v-list-item--link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-list-item--link:before{background-color:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-list .v-list-item--active,.v-list .v-list-item--active .v-icon{color:inherit}.v-list-item__action--stack{align-items:flex-end;align-self:stretch;justify-content:space-between;white-space:nowrap;flex-direction:column}.v-list--three-line .v-list-item .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list--three-line .v-list-item .v-list-item__icon,.v-list--two-line .v-list-item .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list--two-line .v-list-item .v-list-item__icon,.v-list-item--three-line .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list-item--three-line .v-list-item__icon,.v-list-item--two-line .v-list-item__avatar:not(.v-list-item__avatar--horizontal),.v-list-item--two-line .v-list-item__icon{margin-bottom:16px;margin-top:16px}.v-list--two-line .v-list-item,.v-list-item--two-line{min-height:64px}.v-list--two-line .v-list-item .v-list-item__icon,.v-list-item--two-line .v-list-item__icon{margin-bottom:32px}.v-list--three-line .v-list-item,.v-list-item--three-line{min-height:88px}.v-list--three-line .v-list-item .v-list-item__action,.v-list--three-line .v-list-item .v-list-item__avatar,.v-list-item--three-line .v-list-item__action,.v-list-item--three-line .v-list-item__avatar{align-self:flex-start;margin-top:16px;margin-bottom:16px}.v-list--three-line .v-list-item .v-list-item__content,.v-list-item--three-line .v-list-item__content{align-self:stretch}.v-list--three-line .v-list-item .v-list-item__subtitle,.v-list-item--three-line .v-list-item__subtitle{white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box}',""]),t.exports=l},413:function(t,e,n){"use strict";n(404)},414:function(t,e,n){var l=n(30)(!1);l.push([t.i,"div.md[data-v-4d51df45] p{margin:0}div.description[data-v-4d51df45]{width:100%}.link:hover>i[data-v-4d51df45]{transform:scale(1.2) rotate(-10deg)}",""]),t.exports=l},430:function(t,e,n){"use strict";n(15),n(13),n(17),n(7),n(21),n(14),n(22);var l=n(2),r=(n(411),n(66)),o=n(96),c=n(186),d=n(49),v=n(124),m=n(185),h=n(1),_=n(11),f=n(18);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=Object(f.a)(r.a,o.a,d.a,Object(c.a)("listItemGroup"),Object(v.b)("inputValue"));e.a=k.extend().extend({name:"v-list-item",directives:{Ripple:m.a},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return x(x({"v-list-item":!0},o.a.options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(o.a.options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(_.d)("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=x({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t},toggle:function(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render:function(t){var e=this,n=this.generateRouteLink(),l=n.tag,data=n.data;data.attrs=x(x({},data.attrs),this.genAttrs()),data[this.to?"nativeOn":"on"]=x(x({},data[this.to?"nativeOn":"on"]),{},{keydown:function(t){e.disabled||(t.keyCode===h.k.enter&&e.click(t),e.$emit("keydown",t))}}),this.inactive&&(l="div"),this.inactive&&this.to&&(data.on=data.nativeOn,delete data.nativeOn);var r=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(l,this.isActive?this.setTextColor(this.color,data):data,r)}})},431:function(t,e,n){"use strict";n(15),n(13),n(17),n(7),n(21),n(14),n(22);var l=n(2),r=n(126),o=n(124),c=n(95),d=n(18),v=n(1);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(d.a)(r.a,o.a).extend({name:"VLazy",directives:{intersect:c.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(v.j)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}})}}]);