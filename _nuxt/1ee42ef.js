(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4],{1377:function(t,n,e){"use strict";e.r(n);var o=e(177),r=e(1379),c={props:{href:o.a.string.def("#"),type:o.a.oneOf(["primary","secondary"]).def("primary")},computed:{url:function(){return Object(r.b)(this.href)}}},l=(e(1380),e(45)),component=Object(l.a)(c,(function(){var t,n=this,e=n.$createElement;return(n._self._c||e)("a",n._g(n._b({class:(t={"ext-link":!0},t["ext-link--"+n.type]=!0,t),attrs:{href:n.url,target:"_blank",tabindex:"0"}},"a",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,"3b706e6f",null);n.default=component.exports},1378:function(t,n,e){var content=e(1381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(90).default)("3aebf803",content,!0,{sourceMap:!1})},1379:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return l}));e(706),e(79),e(80),e(81),e(250),e(50),e(68);var o="utm_source=ludwigguerin.fr&utm_medium=site&utm_campaign=external_ref",r=function(t){return t.endsWith("?")||t.endsWith("&")?"".concat(t).concat(o):t.includes("?")?"".concat(t,"&").concat(o):"".concat(t,"?").concat(o)},c=function(t){return Array.isArray(t)?t.join(","):"string"==typeof t?t:""},l=function(t){var title=t.title,n=t.description,e=t.tags;return{title:title,meta:[{hid:"og:title",property:"og:title",content:title,template:"%s | Ludwig GUERIN"},{hid:"og:description",property:"og:description",content:n},{hid:"description",property:"description",content:n},{hid:"keywords",property:"keywords",content:c(e)}]}}},1380:function(t,n,e){"use strict";e(1378)},1381:function(t,n,e){var o=e(89)(!1);o.push([t.i,".ext-link--secondary[data-v-3b706e6f]{color:#fff!important}.ext-link--secondary[data-v-3b706e6f]::-moz-selection{background:#fff!important;color:#0087b3!important}.ext-link--secondary[data-v-3b706e6f]::selection{background:#fff!important;color:#0087b3!important}",""]),t.exports=o},1384:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e(1379),r={head:function(){return Object(o.a)({title:this.$t("seo.title"),description:this.$t("seo.description"),tags:this.$t("seo.keywords")})}}},1402:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"fr":{"seo":{"title":"Me contacter","description":"Me contacter dans un cadre professionnel","keywords":"contact,professionnel,linkedin,mail"},"title":"Me Contacter","intro":"Pour plus d\'informations ou pour me contacter dans un cadre professionnel, merci d\'utiliser les moyens suivants&nbsp;&colon;"},"en":{"seo":{"title":"Get in touch","description":"Get in touch, for business only","keywords":"contact,professional,business,work,linkedin,mail"},"title":"Get in touch","intro":"For more info, or to contact me for business, use the means below&colon;"}}'),delete t.options._Ctor}},1426:function(t,n,e){"use strict";var o=e(1402),r=e.n(o);n.default=r.a},1438:function(t,n,e){"use strict";e.r(n);var o={mixins:[e(1384).a],data:function(){return{linkedin:"https://www.linkedin.com/in/ludwig-guerin"}}},r=e(45),c=e(1426),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a-card",{attrs:{xs:12,sm:10,md:8,lg:6,xl:4,title:t.$t("title")},scopedSlots:t._u([{key:"extra",fn:function(){return[e("a-icon",{attrs:{type:"notification"}})]},proxy:!0}])},[t._v(" "),e("a-row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("a-col",{attrs:{span:12}},[e("p",{domProps:{innerHTML:t._s(t.$t("intro"))}}),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("a-row",{attrs:{type:"flex",justify:"space-around",align:"middle"}},[e("a-col",[e("a-button-group",[e("a-button",{attrs:{type:"primary",icon:"linkedin"}},[e("ExternalLink",{attrs:{href:t.linkedin,type:"secondary"}},[t._v("\n\t\t\t\t\t\t\t\tLinkedIn\n\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);n.default=component.exports;installComponents(component,{ExternalLink:e(1377).default})}}]);