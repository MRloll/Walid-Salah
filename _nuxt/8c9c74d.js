(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4],{357:function(e,t,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("42693a2d",content,!0,{sourceMap:!1})},358:function(e,t,r){"use strict";r.r(t);var n=r(411),c=r(352),l=r(412),d={name:"ContactMe"},o=(r(359),r(45)),component=Object(o.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t("section",{staticClass:"contact"},[t("div",{staticClass:"contact-info d-lg-flex align-baseline"},[t("h2",{staticClass:"mb-5"},[e._v("connect with me")]),t("div",{staticClass:"ml-10"},[t("div",{class:{dark:!this.$vuetify.theme.dark}},[e._m(0)]),t(l.a,{staticClass:"contact-icons mt-10"},[t(n.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t("div",{staticClass:"wrapper"},[t(c.a,[e._v("mdi-home-account")]),t("span",[e._v("Mansoura, Daqahliya, Egypt")])],1)]),t(n.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t("div",{staticClass:"wrapper"},[t("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=01013817471"}},[t(c.a,[e._v("mdi-whatsapp")]),e._v("(02) 01013194797")],1)])]),t(n.a,{attrs:{cols:"5",sm:"6",md:"2"}},[t("div",{staticClass:"wrapper"},[t("a",{attrs:{href:"mailto:walidelloll2018@gmail.com"}},[t(c.a,[e._v("mdi-email")]),e._v("email")],1)])]),t(n.a,{attrs:{cols:"6",sm:"6",md:"2"}},[t("div",{staticClass:"wrapper"},[t("a",{attrs:{target:"_blank",href:"https://github.com/MRloll"}},[t(c.a,[e._v("mdi-github")]),e._v("github")],1)])])],1)],1)])])])}),[function(){var e=this,t=e._self._c;return t("p",[e._v("If you want to team up or just chat, you can"),t("a",{staticClass:"underline",attrs:{href:"mailto:walidelloll2018@gmail.com"}},[e._v(" write me an email")]),e._v(" or hit me up\nvia "),t("a",{staticClass:"underline",attrs:{target:"_blank",href:"https://www.linkedin.com/in/walid-salah-b63631170/"}},[e._v("linked in")]),e._v(".\nor text me on "),t("a",{staticClass:"underline",attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=01013817471"}},[e._v("whatsApp")]),e._v("\nand if you want to check my "),t("a",{staticClass:"underline",attrs:{target:"_blank",href:"https://github.com/MRloll"}},[e._v("github, here it is")]),e._v(".")])}],!1,null,"6d4b40c2",null);t.default=component.exports},359:function(e,t,r){"use strict";r(357)},360:function(e,t,r){var n=r(28)(!1);n.push([e.i,".contact[data-v-6d4b40c2]{padding-bottom:200px;margin-top:100px}.contact h2[data-v-6d4b40c2]{min-width:300px}.contact p[data-v-6d4b40c2]{font-size:30px}.contact span[data-v-6d4b40c2]{margin-left:10px}.contact a[data-v-6d4b40c2]{text-decoration:none;color:inherit}.contact a i[data-v-6d4b40c2]{margin-right:10px}@media(min-width: 1200px){.contact p[data-v-6d4b40c2]{font-size:45px}}",""]),e.exports=n},361:function(e,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("4689c325",content,!0,{sourceMap:!1})},362:function(e,t,r){e.exports=r.p+"img/my_pic.cad5a14.jpg"},363:function(e,t,r){e.exports=r.p+"img/web.2daaaa3.jpg"},364:function(e,t,r){e.exports=r.p+"img/pyramids.40b6681.jpg"},365:function(e,t,r){"use strict";r(361)},366:function(e,t,r){var n=r(28)(!1);n.push([e.i,"header[data-v-c3fb00a2]{position:relative;height:100vh;min-height:100vh}header .container[data-v-c3fb00a2]{height:100%}header .intro h1[data-v-c3fb00a2]{line-height:2.3}header .intro h1 div[data-v-c3fb00a2]{display:inline-block}header .intro h1 div span[data-v-c3fb00a2]{position:relative;cursor:pointer}header .intro h1 div img[data-v-c3fb00a2]{cursor:pointer;width:73px;margin-right:10px;margin-left:10px;margin-bottom:-32px;border-radius:50%;transition:transform .4s ease}header .intro h1 div:hover img[data-v-c3fb00a2]{transform:scale(3.4)}header .intro h1.dark span[data-v-c3fb00a2]{box-shadow:inset 0 -0.0625em 0 rgba(26,25,23,.5)}header .intro h1.dark div:hover span[data-v-c3fb00a2]{box-shadow:inset 0 -0.0625em 0 #333}@media(min-width: 992px){header .intro h1[data-v-c3fb00a2]{font-size:3rem}}@media(min-width: 1300px){header .intro h1[data-v-c3fb00a2]{font-size:4.5rem}}header .header-bottom[data-v-c3fb00a2]{width:100%}header .header-bottom .icon[data-v-c3fb00a2]{font-size:30px}",""]),e.exports=n},367:function(e,t,r){"use strict";r.r(t);var n=r(354),c=r(352),l=(r(67),{name:"HeaderIntro",components:{NavBar:r(164).default},data:function(){return{time:null}},mounted:function(){setInterval(this.updateTime,1e3)},methods:{updateTime:function(){var e=new Date,t=e.getHours()<10?"0"+e.getHours():e.getHours(),r=e.getMinutes();r<10&&(r="0"+r);var n=t+":"+r+" ";n+=t>11?"PM":"AM",this.time=n}}}),d=(r(365),r(45)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("header",[t(n.a,{staticClass:"d-flex align-content-space-between flex-wrap"},[t("NavBar",{staticClass:"animate-nav"}),t("div",{staticClass:"intro"},[t("h1",{class:{dark:!this.$vuetify.theme.dark}},[e._v("Hi there my name is "),t("div",[t("span",{staticClass:"underline"},[e._v("Walid Salah.")]),t("img",{attrs:{src:r(362)}})]),t("br"),e._v("I'm front end "),t("div",[t("span",{staticClass:"underline"},[e._v(" web developer,")]),t("img",{attrs:{src:r(363)}})]),e._v("and i am based in "),t("div",[t("span",{staticClass:"underline"},[e._v("Egypt")]),t("img",{attrs:{src:r(364)}})])])]),t("div",{staticClass:"header-bottom d-flex flex-wrap align-end justify-space-between pb-5"},[t(c.a,{staticClass:"icon"},[e._v("mdi-arrow-down")]),t("div",{staticClass:"time"},[e._v(e._s(e.time))])],1)],1)],1)}),[],!1,null,"c3fb00a2",null);t.default=component.exports;installComponents(component,{NavBar:r(164).default})},383:function(e,t,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(29).default)("31a7dc5b",content,!0,{sourceMap:!1})},408:function(e,t,r){"use strict";r(383)},409:function(e,t,r){var n=r(28)(!1);n.push([e.i,".d-block[data-v-6168bfe7]{display:block}section[data-v-6168bfe7]{padding:100px 0}section.exe-wrapper .qualifications[data-v-6168bfe7]{margin-top:100px}section.exe-wrapper .qualifications[data-v-6168bfe7],section.exe-wrapper .experience[data-v-6168bfe7]{padding-top:50px}section.exe-wrapper .qualifications ul[data-v-6168bfe7],section.exe-wrapper .experience ul[data-v-6168bfe7]{list-style-type:none;font-size:22px}section.exe-wrapper .qualifications ul li[data-v-6168bfe7],section.exe-wrapper .experience ul li[data-v-6168bfe7]{display:flex;align-items:baseline;margin-bottom:10px}section.exe-wrapper .qualifications ul li p[data-v-6168bfe7],section.exe-wrapper .experience ul li p[data-v-6168bfe7]{margin:0;margin-left:10px}section.exe-wrapper .qualifications ul li a[data-v-6168bfe7],section.exe-wrapper .experience ul li a[data-v-6168bfe7]{text-decoration:none;margin:0 5px;color:inherit}@media(min-width: 1200px){section.exe-wrapper .qualifications li[data-v-6168bfe7],section.exe-wrapper .experience li[data-v-6168bfe7]{font-size:27px}}section.techno h2[data-v-6168bfe7]{margin-bottom:50px}section.techno .wrapper[data-v-6168bfe7]{margin:auto;font-size:30px;border:1px solid #ffffff47;border-radius:24px;transition:all 1s ease;height:180px;cursor:pointer;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;align-content:center}section.techno .wrapper i[data-v-6168bfe7]{width:100%;font-size:30px !important}section.techno .wrapper[data-v-6168bfe7]:hover{border-color:#fff}",""]),e.exports=n},415:function(e,t,r){"use strict";r.r(t);var n=r(411),c=r(354),l=r(352),d=r(412),o=r(221),v=r(367),m=r(358),f={name:"IndexPage",components:{HeaderIntro:v.default,ContactMe:m.default},head:function(){return{title:"Home"}}},h=(r(408),r(45)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("div",[t("HeaderIntro"),t(c.a,[t("section",{staticClass:"exe-wrapper"},[t("div",{staticClass:"experience d-lg-flex align-baseline"},[t("h2",{staticClass:"mb-5"},[e._v("experience")]),t("ul",{staticClass:"wrapper"},[t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("( Jan 2023 - present ) working as full time Vuejs developer at "),t("a",{staticClass:"underline",attrs:{href:"https://elryad.com/ar/",target:"_blank"}},[e._v("Elryad company for web design ")])])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("develping web apps for Learning managment systems using vue.js, nuxt.js, vuetify ,etc .")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Collaborate with backend developers and and integrate REST apis in the wep apps")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Implement, debug, configure, build, deploy and test applications. ")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Full access to the clinets meetings and Accurately translate user and business needs into functional frontend code Job Requirements.")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Develop and maintain web and cross-platform applications using HTML, CSS, JavaScript and related technologies.")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Implement clean, modern, smooth animations and transitions that provide an excellent user experience")])],1),t("div",{staticClass:"exe-wrapper"})])]),t("div",{staticClass:"experience d-lg-flex align-baseline"},[t("h2",{staticClass:"mb-5"},[e._v("experience")]),t("ul",{staticClass:"wrapper"},[t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("( 2020 - 2021 ) +1 year remote and freelancer Front end Developer")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Created responsive web applications Using JavaScript, HTML, and CSS, bootstrap, vue.js, nuxt.js, vuetify ,etc .")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Conceived and built optimized landing pages in HTML5 and CSS3, Vue.js includingintegration and cross-browser compatibility, to support marketing")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Collaborated with in-house web designers to create sleek and innovative UI design.")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Accurately translate user and business needs into functional frontend code Job Requirements.")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Implement static web user interfaces based on the provided visuals, combining them with front-end dynamic presentation technologies (Javascript frameworks).")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Assure that all user input is validated before submitting to back-end.")])],1),t("div",{staticClass:"exe-wrapper"})])]),t("div",{staticClass:"qualifications d-lg-flex align-baseline"},[t("h2",{staticClass:"mb-5"},[e._v("qualifications")]),t("ul",{staticClass:"wrapper"},[t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Knowledge of modern development tools, like Git")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Proficiency in JavaScript language, including its syntax and features.")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Strong understanding of the Vue.js framework and its core principles")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Familiarity with the Vue.js ecosystem. (Vuex, VueRouter)")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Knowledge of server-side rendering.")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Ability to write efficient, secure, clean, and scalable JavaScript code.")])],1),t("li",[t(l.a,[e._v("mdi-check-circle")]),e._v(" "),t("p",[e._v("Good knowlege of Nuxtjs initutive vue framwork and Vuetify the Material Component Framework for Vue")])],1)])])]),t("section",{staticClass:"techno text-center"},[t("h2",[e._v("technologies")]),t(d.a,[t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-language-html5")]),t("p",[e._v("Html5")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-language-css3")]),t("p",[e._v("css3")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-bootstrap")]),t("p",[e._v("bootstrap")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-language-javascript")]),t("p",[e._v("javascript")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-sass")]),t("p",[e._v("sass")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-jquery")]),t("p",[e._v("jquery")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-vuejs")]),t("p",[e._v("vuejs")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-vuetify")]),t("p",[e._v("vuetify")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-nuxt")]),t("p",[e._v("nuxtJs")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-git")]),t("p",[e._v("git")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-github")]),t("p",[e._v("github")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t(l.a,[e._v("mdi-code-json")]),t("p",[e._v("json")])],1)]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t("p",[e._v("pug")])])]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t("p",[e._v("ajax")])])]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t("p",[e._v("Axios")])])]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t("p",[e._v("ES6")])])]),t(n.a,{attrs:{lg:"2",md:"3",sm:"4",cols:"6"}},[t("div",{directives:[{def:o.a,name:"ripple",rawName:"v-ripple"}],staticClass:"wrapper"},[t("p",[e._v("vue3")])])])],1)],1),t("ContactMe")],1)],1)}),[],!1,null,"6168bfe7",null);t.default=component.exports;installComponents(component,{HeaderIntro:r(367).default,ContactMe:r(358).default})}}]);