(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{1377:function(t,e,r){"use strict";r.r(e);var o=r(177),n=r(1379),c={props:{href:o.a.string.def("#"),type:o.a.oneOf(["primary","secondary"]).def("primary")},computed:{url:function(){return Object(n.b)(this.href)}}},l=(r(1380),r(45)),component=Object(l.a)(c,(function(){var t,e=this,r=e.$createElement;return(e._self._c||r)("a",e._g(e._b({class:(t={"ext-link":!0},t["ext-link--"+e.type]=!0,t),attrs:{href:e.url,target:"_blank",tabindex:"0"}},"a",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,"3b706e6f",null);e.default=component.exports},1378:function(t,e,r){var content=r(1381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("3aebf803",content,!0,{sourceMap:!1})},1379:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return l}));r(706),r(79),r(80),r(81),r(250),r(50),r(68);var o="utm_source=ludwigguerin.fr&utm_medium=site&utm_campaign=external_ref",n=function(t){return t.endsWith("?")||t.endsWith("&")?"".concat(t).concat(o):t.includes("?")?"".concat(t,"&").concat(o):"".concat(t,"?").concat(o)},c=function(t){return Array.isArray(t)?t.join(","):"string"==typeof t?t:""},l=function(t){var title=t.title,e=t.description,r=t.tags;return{title:title,meta:[{hid:"og:title",property:"og:title",content:title,template:"%s | Ludwig GUERIN"},{hid:"og:description",property:"og:description",content:e},{hid:"description",property:"description",content:e},{hid:"keywords",property:"keywords",content:c(r)}]}}},1380:function(t,e,r){"use strict";r(1378)},1381:function(t,e,r){var o=r(89)(!1);o.push([t.i,".ext-link--secondary[data-v-3b706e6f]{color:#fff!important}.ext-link--secondary[data-v-3b706e6f]::-moz-selection{background:#fff!important;color:#0087b3!important}.ext-link--secondary[data-v-3b706e6f]::selection{background:#fff!important;color:#0087b3!important}",""]),t.exports=o},1390:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"atWork":"Au boulot","coverImage":"Image de couverture"},"en":{"atWork":"At work","coverImage":"Cover image"}}'),delete t.options._Ctor}},1401:function(t,e,r){var content=r(1414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("c5e1d34c",content,!0,{sourceMap:!1})},1413:function(t,e,r){"use strict";r(1401)},1414:function(t,e,r){var o=r(89)(!1);o.push([t.i,".project__cover[data-v-376644ec]{max-width:100%;width:auto;height:auto;max-height:200px;margin:0 auto}",""]),t.exports=o},1415:function(t,e,r){"use strict";var o=r(1390),n=r.n(o);e.default=n.a},1423:function(t,e,r){"use strict";r.r(e);r(29),r(51),r(52),r(1425),r(358),r(79),r(37),r(143);var o=r(177),n={components:{ExternalLink:r(1377).default},props:{project:o.a.shape({type:o.a.custom((function(t){return"website"===t})).isRequired,url:o.a.string.isRequired,cover:o.a.oneOfType([o.a.string,o.a.custom((function(t){return null===t}))]).def(null),title:o.a.string.isRequired,description:o.a.string.isRequired,extras:o.a.arrayOf(o.a.shape({name:o.a.string.isRequired,url:o.a.string.isRequired}).loose),job:o.a.bool.def(!1)}).loose},computed:{projectRootUrl:function(){var t=new URL(this.project.url);return"".concat(t.protocol,"//").concat(t.hostname)},coverUrl:function(){return null===this.project.cover?"#":this.project.cover.replace("{{ site }}",this.projectRootUrl)}}},c=(r(1413),r(45)),l=r(1415),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ExternalLink",{attrs:{href:t.project.url}},[r("a-card",{attrs:{hoverable:""}},[r("img",{staticClass:"project__cover",attrs:{slot:"cover",alt:t.$t("coverImage"),src:t.coverUrl},slot:"cover"}),t._v(" "),t.project.job?r("a-badge",{attrs:{count:t.$t("atWork")}}):t._e(),t._v(" "),r("a-card-meta",{attrs:{title:t.project.title}},[r("p",{attrs:{slot:"description"},domProps:{innerHTML:t._s(t.project.description)},slot:"description"})]),t._v(" "),t.project.extras.length?r("a-row",{attrs:{slot:"actions",gutter:[16,16],type:"flex",justify:"center",align:"middle"},slot:"actions"},t._l(t.project.extras,(function(e){return r("a-col",{key:e.name},[r("a-button",{attrs:{type:"primary"}},[r("ExternalLink",{attrs:{href:e.url,type:"secondary"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")])],1)],1)})),1):t._e()],1)],1)}),[],!1,null,"376644ec",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{ExternalLink:r(1377).default})}}]);