(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{1377:function(t,e,r){"use strict";r.r(e);var n=r(177),o=r(1379),c={props:{href:n.a.string.def("#"),type:n.a.oneOf(["primary","secondary"]).def("primary")},computed:{url:function(){return Object(o.b)(this.href)}}},l=(r(1380),r(45)),component=Object(l.a)(c,(function(){var t,e=this,r=e.$createElement;return(e._self._c||r)("a",e._g(e._b({class:(t={"ext-link":!0},t["ext-link--"+e.type]=!0,t),attrs:{href:e.url,target:"_blank",tabindex:"0"}},"a",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,"3b706e6f",null);e.default=component.exports},1378:function(t,e,r){var content=r(1381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("3aebf803",content,!0,{sourceMap:!1})},1379:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return l}));r(706),r(79),r(80),r(81),r(250),r(50),r(68);var n="utm_source=ludwigguerin.fr&utm_medium=site&utm_campaign=external_ref",o=function(t){return t.endsWith("?")||t.endsWith("&")?"".concat(t).concat(n):t.includes("?")?"".concat(t,"&").concat(n):"".concat(t,"?").concat(n)},c=function(t){return Array.isArray(t)?t.join(","):"string"==typeof t?t:""},l=function(t){var title=t.title,e=t.description,r=t.tags;return{title:title,meta:[{hid:"og:title",property:"og:title",content:title,template:"%s | Ludwig GUERIN"},{hid:"og:description",property:"og:description",content:e},{hid:"description",property:"description",content:e},{hid:"keywords",property:"keywords",content:c(r)}]}}},1380:function(t,e,r){"use strict";r(1378)},1381:function(t,e,r){var n=r(89)(!1);n.push([t.i,".ext-link--secondary[data-v-3b706e6f]{color:#fff!important}.ext-link--secondary[data-v-3b706e6f]::-moz-selection{background:#fff!important;color:#0087b3!important}.ext-link--secondary[data-v-3b706e6f]::selection{background:#fff!important;color:#0087b3!important}",""]),t.exports=n},1400:function(t,e,r){var content=r(1412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("752e0e73",content,!0,{sourceMap:!1})},1411:function(t,e,r){"use strict";r(1400)},1412:function(t,e,r){var n=r(89)(!1);n.push([t.i,".project__cover[data-v-c50b41f6]{max-width:100%;width:auto;height:auto;max-height:200px;margin:0 auto}",""]),t.exports=n},1422:function(t,e,r){"use strict";r.r(e);r(37),r(143);var n=r(177),o={components:{ExternalLink:r(1377).default},props:{project:n.a.shape({cover:n.a.oneOfType([n.a.string,n.a.custom((function(t){return null===t}))]).def(null),type:n.a.custom((function(t){return"github"===t})).isRequired,repo:n.a.string.isRequired,title:n.a.string.isRequired,description:n.a.string.isRequired}).loose},computed:{url:function(){return"https://github.com/Voltra/".concat(this.project.repo)},coverUrl:function(){return"string"==typeof this.project.cover?this.project.cover.replace("{{ repo }}",this.url):"/".concat("img/og.jpg")}}},c=(r(1411),r(45)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ExternalLink",{attrs:{href:t.url}},[r("a-card",{attrs:{hoverable:""}},[r("img",{staticClass:"project__cover",attrs:{slot:"cover",alt:"Image de couverture",src:t.coverUrl},slot:"cover"}),t._v(" "),r("a-card-meta",{attrs:{title:t.project.title}},[r("p",{attrs:{slot:"description"},domProps:{innerHTML:t._s(t.project.description)},slot:"description"})])],1)],1)}),[],!1,null,"c50b41f6",null);e.default=component.exports;installComponents(component,{ExternalLink:r(1377).default})}}]);