(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{361:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4689c325",content,!0,{sourceMap:!1})},362:function(t,e,n){t.exports=n.p+"img/my_pic.cad5a14.jpg"},363:function(t,e,n){t.exports=n.p+"img/web.2daaaa3.jpg"},364:function(t,e,n){t.exports=n.p+"img/pyramids.40b6681.jpg"},365:function(t,e,n){"use strict";n(361)},366:function(t,e,n){var r=n(28)(!1);r.push([t.i,"header[data-v-c3fb00a2]{position:relative;height:100vh;min-height:100vh}header .container[data-v-c3fb00a2]{height:100%}header .intro h1[data-v-c3fb00a2]{line-height:2.3}header .intro h1 div[data-v-c3fb00a2]{display:inline-block}header .intro h1 div span[data-v-c3fb00a2]{position:relative;cursor:pointer}header .intro h1 div img[data-v-c3fb00a2]{cursor:pointer;width:73px;margin-right:10px;margin-left:10px;margin-bottom:-32px;border-radius:50%;transition:transform .4s ease}header .intro h1 div:hover img[data-v-c3fb00a2]{transform:scale(3.4)}header .intro h1.dark span[data-v-c3fb00a2]{box-shadow:inset 0 -0.0625em 0 rgba(26,25,23,.5)}header .intro h1.dark div:hover span[data-v-c3fb00a2]{box-shadow:inset 0 -0.0625em 0 #333}@media(min-width: 992px){header .intro h1[data-v-c3fb00a2]{font-size:3rem}}@media(min-width: 1300px){header .intro h1[data-v-c3fb00a2]{font-size:4.5rem}}header .header-bottom[data-v-c3fb00a2]{width:100%}header .header-bottom .icon[data-v-c3fb00a2]{font-size:30px}",""]),t.exports=r},367:function(t,e,n){"use strict";n.r(e);var r=n(354),d=n(352),o=(n(67),{name:"HeaderIntro",components:{NavBar:n(164).default},data:function(){return{time:null}},mounted:function(){setInterval(this.updateTime,1e3)},methods:{updateTime:function(){var t=new Date,e=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes();n<10&&(n="0"+n);var r=e+":"+n+" ";r+=e>11?"PM":"AM",this.time=r}}}),c=(n(365),n(45)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("header",[e(r.a,{staticClass:"d-flex align-content-space-between flex-wrap"},[e("NavBar",{staticClass:"animate-nav"}),e("div",{staticClass:"intro"},[e("h1",{class:{dark:!this.$vuetify.theme.dark}},[t._v("Hi there my name is "),e("div",[e("span",{staticClass:"underline"},[t._v("Walid Salah.")]),e("img",{attrs:{src:n(362)}})]),e("br"),t._v("I'm front end "),e("div",[e("span",{staticClass:"underline"},[t._v(" web developer,")]),e("img",{attrs:{src:n(363)}})]),t._v("and i am based in "),e("div",[e("span",{staticClass:"underline"},[t._v("Egypt")]),e("img",{attrs:{src:n(364)}})])])]),e("div",{staticClass:"header-bottom d-flex flex-wrap align-end justify-space-between pb-5"},[e(d.a,{staticClass:"icon"},[t._v("mdi-arrow-down")]),e("div",{staticClass:"time"},[t._v(t._s(t.time))])],1)],1)],1)}),[],!1,null,"c3fb00a2",null);e.default=component.exports;installComponents(component,{NavBar:n(164).default})}}]);