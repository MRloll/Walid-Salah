(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{161:function(t,o,e){"use strict";o.a=function(t){var o=t.app,e=localStorage.getItem("dark");console.log(e),o.context.$vuetify.theme.dark="false"===e}},164:function(t,o,e){"use strict";e.r(o);var n={name:"NavBar",components:{NavButtons:e(89).default},props:{error:{type:Object,default:null}}},r=(e(327),e(45)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("nav",{staticClass:"bar"},[o("div",{staticClass:"btns-wrapper d-flex justify-space-between"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("Walid Salah "),o("br"),t._v(" Front end Developer")]),o("nav-buttons",{staticClass:"d-md-block d-none",attrs:{error:t.error}})],1)])}),[],!1,null,"66c8c649",null);o.default=component.exports;installComponents(component,{NavButtons:e(89).default})},225:function(t,o,e){var content=e(326);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("02875d32",content,!0,{sourceMap:!1})},226:function(t,o,e){var content=e(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("7c2428d5",content,!0,{sourceMap:!1})},227:function(t,o,e){var content=e(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("582d0e57",content,!0,{sourceMap:!1})},233:function(t,o,e){"use strict";var n=e(351),r=e(355),l={name:"DefaultLayout",components:{NavButtons:e(89).default},data:function(){return{showBottomNav:!1}},mounted:function(){var t=this;document.addEventListener("scroll",(function(){window.scrollY>50?t.showBottomNav=!0:t.showBottomNav=!1}))}},d=e(45),component=Object(d.a)(l,(function(){var t=this._self._c;return t(n.a,{attrs:{dark:""}},[t("nav-buttons",{staticClass:"bottom d-flex",class:{shown:this.showBottomNav,"dark-nav":!this.$vuetify.theme.dark}}),t("Transition",{attrs:{name:"slide-fade"}},[t(r.a,[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);o.a=component.exports;installComponents(component,{NavButtons:e(89).default})},240:function(t,o,e){e(241),t.exports=e(242)},325:function(t,o,e){"use strict";e(225)},326:function(t,o,e){var n=e(28)(!1);n.push([t.i,"div .nav-btn[data-v-040a0c90]{height:60px !important;border:2px solid;border-radius:999px;font-size:20px;font-weight:400;transition:background-color .25s,color .25s}div .nav-btn.theme-toggle[data-v-040a0c90]{width:60px;height:60px}div .nav-btn[data-v-040a0c90]:hover{background-color:#e5e4df;color:#1a1917}div.dark .nav-btn[data-v-040a0c90]:hover{background-color:#1a1917;color:#e5e4df}.bottom[data-v-040a0c90]{overflow:hidden;opacity:0;border-radius:999px;background-color:#e5e4df;z-index:10;position:fixed;bottom:-100px;left:50%;transform:translate(-50%) scale(0.7);transition:all .5s cubic-bezier(0.25, 1, 0.25, 1)}.bottom .nav-btn[data-v-040a0c90]{border:none;color:#1a1917;height:40px !important}.bottom .nav-btn[data-v-040a0c90]:hover{color:#1a1917}.bottom.dark-nav[data-v-040a0c90]{background-color:#1a1917}.bottom.dark-nav .nav-btn[data-v-040a0c90]{color:#e5e4df;border:none}.bottom.dark-nav .nav-btn[data-v-040a0c90]:hover{background-color:#1a1917}@media(max-width: 767px){.bottom .nav-btn[data-v-040a0c90]{padding:27px 12px;font-size:17px;margin:0 !important}.bottom .nav-btn.theme-toggle[data-v-040a0c90]{width:47px;min-width:0}}.shown[data-v-040a0c90]{transform:translate(-50%) scale(1);bottom:50px;opacity:1}",""]),t.exports=n},327:function(t,o,e){"use strict";e(226)},328:function(t,o,e){var n=e(28)(!1);n.push([t.i,"body nav.bar[data-v-66c8c649]{width:100%;padding:20px 0}body nav.bar a[data-v-66c8c649]{font-size:22px;font-weight:400;text-decoration:none;color:inherit}",""]),t.exports=n},329:function(t,o,e){"use strict";e(227)},330:function(t,o,e){var n=e(28)(!1);n.push([t.i,"h1[data-v-d324ff70]{font-size:3rem}.error-container[data-v-d324ff70]{font-size:4rem;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;width:100%}",""]),t.exports=n},333:function(t,o,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(29).default)("70f4beca",content,!0,{sourceMap:!1})},334:function(t,o,e){var n=e(28)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap);"]),n.push([t.i,'h1,h2,h3,h4,h5,h6,p,a,div,small,button,span{font-family:"Poppins",sans-serif !important}h2{font-size:1.5rem;min-width:300px}*{text-transform:capitalize}.v-btn__content{opacity:1 !important}.v-application{transition:all .4s ease !important}.v-main{transition:inherit !important}.container{max-width:unset !important;width:90% !important}.underline{box-shadow:inset 0 -0.0625em 0 rgba(229,228,223,.5);transition-property:box-shadow;transition-duration:.25s,.25s;transition-timing-function:ease,ease}.underline:hover{box-shadow:inset 0 -0.0625em 0 #fff}.dark .underline{box-shadow:inset 0 -0.0625em 0 rgba(26,25,23,.5)}.dark div:hover span,.dark .underline:hover{box-shadow:inset 0 -0.0625em 0 #333}.page-enter-active,.page-leave-active{transition:all .3s}.page-enter{transform:translateX(30px);opacity:0}.page-leave-to{transform:translateX(-30px);opacity:0}',""]),t.exports=n},345:function(t,o){},65:function(t,o,e){"use strict";var n=e(351),r=e(353),l=e(354),d={name:"EmptyLayout",components:{NavBar:e(164).default},props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Page Not Found",otherError:"An error occurred",showButtons:!0}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(e(329),e(45)),component=Object(c.a)(d,(function(){var t=this,o=t._self._c;return o(n.a,{attrs:{dark:""}},[o(l.a,[o("navBar",{attrs:{error:t.error}}),t._v(" "),o("div",{staticClass:"error-container"},[o("p",[t._v("Oops!")]),t._v(" "),o("p",[t._v("Someting went wrong")]),t._v(" "),404===t.error.statusCode?o("h1",[t._v("\n                "+t._s(t.pageNotFound)+"\n            ")]):o("h1",[t._v("\n                "+t._s(t.otherError)+"\n            ")]),t._v(" "),o(r.a,{attrs:{to:"/"}},[t._v("Go back to home")])],1)],1)],1)}),[],!1,null,"d324ff70",null);o.a=component.exports},89:function(t,o,e){"use strict";e.r(o);var n=e(353),r=e(352),l=(e(31),{props:{error:{type:Object,default:null}},computed:{routerName:function(){return this.error&&404===this.error.statusCode||"/Myportfolio"===this.$route.path?{path:"/",name:"Home"}:{path:"Myportfolio",name:"Portfolio"}}},methods:{toggleTheme:function(){localStorage.setItem("dark",this.$vuetify.theme.dark),this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}}),d=(e(325),e(45)),component=Object(d.a)(l,(function(){var t=this,o=t._self._c;return o("div",{class:{dark:!this.$vuetify.theme.dark}},[o(n.a,{staticClass:"ma-2 nav-btn",attrs:{outlined:"",plain:"",href:"mailto:walidelloll2018@gmail.com"}},[t._v("Email")]),o(n.a,{staticClass:"ma-2 nav-btn",attrs:{outlined:"",plain:"",target:"_blank",href:"https://www.linkedin.com/in/walid-salah-b63631170/"}},[t._v("Linked In")]),o(n.a,{staticClass:"ma-2 nav-btn",attrs:{outlined:"",plain:"",to:t.routerName.path}},[t._v(t._s(t.routerName.name))]),o(n.a,{staticClass:"ma-2 nav-btn theme-toggle",attrs:{outlined:"",plain:""},on:{click:t.toggleTheme}},[o(r.a,[t._v(t._s(this.$vuetify.theme.dark?"mdi-weather-night":"mdi-white-balance-sunny"))])],1)],1)}),[],!1,null,"040a0c90",null);o.default=component.exports}},[[240,8,2,9]]]);