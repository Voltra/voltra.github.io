(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-09a8a9dc":1,"chunk-23f54be0":1,"chunk-3531d29b":1,"chunk-ab39732e":1,"chunk-de220820":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===n||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],p.parentNode.removeChild(p),r(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"025e":function(e,t,r){r("99af"),r("caad"),r("8a79"),r("2532");var n="utm_source=ludwigguerin.fr&utm_medium=site&utm_campaign=external_ref",a=function(e){return e.endsWith("?")||e.endsWith("&")?"".concat(e).concat(n):e.includes("?")?"".concat(e,"&").concat(n):"".concat(e,"?").concat(n)},o=function(){var e=document.getElementById("loader");e?(e.classList.add("loaded"),document.body.classList.remove("locked"),setTimeout((function(){return e.remove()}),2e3)):console.warn("No loader found!")};e.exports={utm:n,withUtm:a,stopLoader:o}},"0b0f":function(e,t,r){},"16a3":function(e,t,r){"use strict";var n=r("cd8c"),a=r.n(n);a.a},"1a5d":function(e,t,r){var n={"./404.vue":["8cdb","chunk-2d0e95df"],"./About.vue":["f820","chunk-3531d29b"],"./Contact.vue":["b8fa","chunk-de220820"],"./Cv.vue":["1826","chunk-09a8a9dc"],"./Home.vue":["bb51","chunk-23f54be0"],"./Projects.vue":["acca","chunk-ab39732e"]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r(a)}))}a.keys=function(){return Object.keys(n)},a.id="1a5d",e.exports=a},2076:function(e,t,r){e.exports={primary:"#0087b3",secondary:"#006181",ternary:"#09c6d6",accent:"#09c6d6",info:"#0c549b",error:"#b62222",warning:"#e9d30f"}},"244f":function(e,t,r){},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("a-layout",{directives:[{name:"konami",rawName:"v-konami",value:e.openFloatingPlayer,expression:"openFloatingPlayer"}],staticClass:"main"},[r("Navbar"),r("a-layout-content",{staticStyle:{display:"flex"}},[r("FloatingPlayer",{attrs:{isOpen:e.displayFloatingPlayer},on:{open:e.openFloatingPlayer,close:e.closeFloatingPlayer}}),r("a-row",{staticClass:"container",attrs:{type:"flex",justify:"center",align:"middle"}},[r("a-col",{staticStyle:{position:"relative"},attrs:{xs:11,lg:9,xl:8}},[r("keep-alive",[r("transition",{staticClass:"router",attrs:{name:e.transitionName,mode:"out-in"}},[r("router-view")],1)],1)],1),r("a-back-top",{staticStyle:{right:"3%",bottom:"3%"}},[r("a-button",{attrs:{type:"primary",shape:"circle",size:"large"}},[r("a-icon",{attrs:{type:"up"}})],1)],1)],1)],1),r("a-layout-footer",{staticClass:"footer"},[r("p",{staticClass:"foot"},[r("span",[e._v("Ludwig GUERIN ©"),r("span",{domProps:{innerHTML:e._s(e.copyrightYear)}})]),r("GdprOpener",{staticClass:"opener",attrs:{gdpr:e.$refs.gdpr}}),r("router-link",{attrs:{to:{name:"About"}}},[e._v(" Mentions légales ")])],1),r("keep-alive",[r("GdprBanner",{ref:"gdpr"})],1)],1)],1)],1)},o=[],s=(r("99af"),r("ac1f"),r("1276"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout",[r("a-card",{directives:[{name:"show",rawName:"v-show",value:e.opened,expression:"opened"}],staticClass:"gdpr-banner"},[r("Gdpr",{ref:"gdpr",attrs:{opened:e.openModal},on:{close:e.close}}),r("div",{staticClass:"gdpr-banner__text"},[e._v(" Nous utilisons des cookies pour garantir le fonctionnement du site. ")]),r("a-button-group",{staticClass:"gdpr-banner__buttons"},[r("a-button",{staticClass:"gdpr-banner__disable",attrs:{type:"danger"},on:{click:e.disableAll}},[e._v(" Tout refuser ")]),r("a-button",{staticClass:"gdpr-banner__disable",attrs:{type:"success"},on:{click:e.enableAll}},[e._v(" Tout accepter ")]),r("a-button",{staticClass:"gdpr-banner__tweak",attrs:{type:"info"},on:{click:e.open}},[e._v(" Modifier ")]),r("a-button",{staticClass:"gdpr-banner__accept",attrs:{type:"primary"},on:{click:e.save}},[e._v(" OK ")])],1)],1)],1)}),i=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{staticClass:"gdpr-modal",attrs:{centered:!0,closable:!1,visible:e.opened,okText:"Sauvegarder",cancelText:"Annuler"},on:{cancel:e.discard,ok:e.save}},[r("GdprManager",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.manager,a=t.groups,o=t.toggleManager;return r("a-card",{staticClass:"gdpr",attrs:{title:"Règlement sur la Gestion et la Protection des Données personnelles"}},[r("a-switch",{staticClass:"gdpr__switch",attrs:{slot:"extra",checked:n.enabled},on:{change:o},slot:"extra"}),r("a-button-group",{staticClass:"gdpr__ables"},[r("a-button",{staticClass:"primary gdpr__able",attrs:{type:"error"},on:{click:e.disableAll}},[e._v("Tout refuser")]),r("a-button",{staticClass:"primary gdpr__able",attrs:{type:"primary"},on:{click:e.enableAll}},[e._v("Tout accepter")])],1),e._l(a,(function(t){return r("GdprGroup",{key:t.name,attrs:{group:t},scopedSlots:e._u([{key:"default",fn:function(n){var a=n.guards,o=n.toggleGroup;return r("a-card",{staticClass:"gdpr__group",attrs:{title:t.name}},[a.length>1?r("a-switch",{staticClass:"gdpr__switch",attrs:{slot:"extra",disabled:t.required,checked:t.enabled},on:{change:o},slot:"extra"}):e._e(),r("p",{staticClass:"gdpr__description"},[e._v(" "+e._s(t.description)+" ")]),e._l(a,(function(t){return r("GdprGuard",{key:t.name,attrs:{guard:t},scopedSlots:e._u([{key:"default",fn:function(n){var o=n.toggleGuard;return r("a-card",{staticClass:"gdpr__item",attrs:{title:t.name}},[e.$gdprStorageToString(t.storage)?r("em",{staticClass:"gdpr__storage"},[e._v(" Situé dans : "+e._s(e.$gdprStorageToString(t.storage))+" ")]):e._e(),r("p",{staticClass:"gdpr__description"},[e._v(e._s(t.description))]),a.length>1?r("a-switch",{staticClass:"gdpr__switch",attrs:{slot:"extra",disabled:t.required,checked:t.enabled},on:{change:o},slot:"extra"}):e._e()],1)}}],null,!0)})}))],2)}}],null,!0)})}))],2)}}])})],1)},l=[],d=r("5397"),u=r("e268"),p="bottomRight",f={components:{GdprManager:u["GdprManager"],GdprGroup:u["GdprGroup"],GdprGuard:u["GdprGuard"]},props:{opened:d["a"].bool.def(!1)},methods:{enableAll:function(){this.$gdpr.enable()},disableAll:function(){this.$gdpr.disable()},close:function(){this.$emit("close")},discard:function(){var e=this.$gdpr_serde.storeIfNotExists(this.$gdpr.raw());e?this.$notification.info({message:"Nous avons bien annulé vos modifications",placement:p}):this.$notification.error({message:"Nous n'avons pas réussi à annuler vos modifications",placement:p}),this.close()},save:function(){var e=this.$gdpr_serde.store(this.$gdpr.raw());e?this.$notification.success({message:"Nous avons sauvegardé vos préférences",placement:p}):this.$notification.error({message:"Nous n'avons pas réussi à sauvegarder vos préférences",placement:p}),this.close()}}},g=f,b=(r("8cab"),r("2877")),m=Object(b["a"])(g,c,l,!1,null,null,null),h=m.exports,v={props:{},components:{Gdpr:h},data:function(){return{opened:!this.$gdpr_serde.exists(),openModal:!1}},methods:{save:function(){this.$refs.gdpr.save()},open:function(){this.$gdpr_serde.check(),this.opened=!0,this.openModal=!0},close:function(){this.opened=!1,this.openModal=!1},enableAll:function(){this.$refs.gdpr.enableAll(),this.save()},disableAll:function(){this.$refs.gdpr.disableAll(),this.save()}}},y=v,j=Object(b["a"])(y,s,i,!1,null,null,null),w=j.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-button",{attrs:{type:"primary",shape:"circle"},on:{click:function(t){return e.gdpr.open()}}},[r("svg",{staticClass:"opener__svg",attrs:{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M21.598 11.064C21.4776 10.9732 21.3384 10.9105 21.1906 10.8808C21.0428 10.851 20.8901 10.8548 20.744 10.892C20.5016 10.9597 20.2516 10.996 20 11C18.346 11 17 9.65401 16.997 8.06301C17.002 8.02901 17.013 7.92701 17.014 7.89301C17.0205 7.73667 16.9902 7.58099 16.9255 7.43853C16.8607 7.29608 16.7634 7.17084 16.6414 7.07293C16.5193 6.97501 16.376 6.90717 16.2229 6.87487C16.0698 6.84258 15.9112 6.84673 15.76 6.88701C15.5126 6.9575 15.2572 6.99549 15 7.00001C13.346 7.00001 12 5.65401 12 4.00001C12 3.78301 12.031 3.55601 12.099 3.28401C12.1375 3.12875 12.1382 2.96652 12.101 2.81094C12.0638 2.65536 11.9899 2.51097 11.8854 2.38989C11.7808 2.26881 11.6488 2.17457 11.5003 2.11508C11.3518 2.05559 11.1912 2.03259 11.032 2.04801C8.55546 2.27883 6.25502 3.42827 4.58345 5.27011C2.91188 7.11195 1.99027 9.51276 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 11.951 21.997 11.903 21.993 11.84C21.9896 11.6893 21.9524 11.5413 21.884 11.407C21.8156 11.2726 21.7179 11.1554 21.598 11.064V11.064ZM12 20C7.589 20 4 16.411 4 12C3.99286 10.2233 4.5802 8.49523 5.66855 7.09085C6.7569 5.68647 8.28371 4.68648 10.006 4.25001C10.0716 5.53074 10.6262 6.73747 11.5554 7.62129C12.4846 8.50511 13.7176 8.99861 15 9.00001L15.101 8.99901C15.3305 10.1173 15.9352 11.1235 16.8149 11.851C17.6946 12.5785 18.7965 12.9836 19.938 12.999C19.444 16.941 16.073 20 12 20Z",fill:"white"}}),r("path",{attrs:{d:"M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z",fill:"white"}}),r("path",{attrs:{d:"M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z",fill:"white"}}),r("path",{attrs:{d:"M7.5 14C8.32843 14 9 13.3284 9 12.5C9 11.6716 8.32843 11 7.5 11C6.67157 11 6 11.6716 6 12.5C6 13.3284 6.67157 14 7.5 14Z",fill:"white"}}),r("path",{attrs:{d:"M15.5 17C16.3284 17 17 16.3284 17 15.5C17 14.6716 16.3284 14 15.5 14C14.6716 14 14 14.6716 14 15.5C14 16.3284 14.6716 17 15.5 17Z",fill:"white"}}),r("path",{attrs:{d:"M10.5 18C11.3284 18 12 17.3284 12 16.5C12 15.6716 11.3284 15 10.5 15C9.67157 15 9 15.6716 9 16.5C9 17.3284 9.67157 18 10.5 18Z",fill:"white"}})])])},C=[],k={props:["gdpr"]},x=k,S=(r("582d"),Object(b["a"])(x,_,C,!1,null,null,null)),G=S.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout-header",{staticClass:"nav"},[r("a-page-header",{ref:"header",staticClass:"nav__header",attrs:{backIcon:!1}},[r("router-link",{staticClass:"nav__title",attrs:{slot:"title",to:{name:"Home"}},slot:"title"},[r("a-avatar",e._b({},"a-avatar",e.avatar,!1)),e._v("Ludwig ")],1),r("a-menu",{staticClass:"menu",attrs:{slot:"extra",mode:"horizontal",selectedKeys:e.selectedKeys},on:{click:e.onClick},slot:"extra"},e._l(e.routes,(function(t){return r("a-menu-item",{key:e.extractKey(t)},[r("a-icon",{attrs:{type:e.extractIcon(t)}}),e._v(" "+e._s(e.extractTitle(t))+" ")],1)})),1)],1)],1)},O=[],E=(r("4de4"),r("b0c0"),{mounted:function(){},data:function(){return{avatar:{src:"/img/voltra.png",alt:"Logo",size:"large"}}},computed:{routes:function(){var e=this;return this.$router.options.routes.filter((function(t){return e.isNavRoute(t)}))},selectedKeys:function(){var e=this.extractKey(this.$route);return e?[e]:[]}},methods:{isNavRoute:function(e){return!!e&&"meta"in e&&"nav"in e.meta&&"icon"in e.meta.nav&&"title"in e.meta.nav&&e.meta.nav},extractKey:function(e){return e.name},extractIcon:function(e){return e.meta.nav.icon},extractTitle:function(e){return e.meta.nav.title},onClick:function(e){var t=e.key;t!==this.extractKey(this.$route)&&this.$router.push({name:t})}}}),N=E,P=(r("16a3"),Object(b["a"])(N,$,O,!1,null,null,null)),A=P.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("WindowWrapper",{staticClass:"floating"},[r("hsc-window",e._b({on:{closebuttonclick:e.close}},"hsc-window",e.windowProps,!1),[e.isOpen?r("iframe",{attrs:{width:e.width,height:e.height,src:e.url,title:e.title,loading:"lazy",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):e._e()])],1)},M=[],T=r("bc23"),L=r("2076"),F={window:{color:"white",boxShadow:"0 2pt 4pt rgba(0, 0, 0, 0.5)",backgroundColor:"#e9ebee",bottom:"20px",right:"20px"},titlebar:{backgroundColor:L["secondary"]},content:{},button:{color:"white",lineHeight:1,fontSize:"1.5rem",cursor:"pointer"}},I={props:{isOpen:d["a"].bool.def(!1)},components:{WindowWrapper:Object(T["StyleFactory"])(F)},data:function(){return{width:300,height:168,id:"Sz5aa7SdA24",title:"Mushroom Paradise - Felxprod",windowStyle:F}},computed:{url:function(){return"https://www.youtube-nocookie.com/embed/".concat(this.id,"?autoplay=1")},windowProps:function(){return{positionHint:"10 / 10",title:this.title,isOpen:this.isOpen,closeButton:!0,padding:0,overflow:"hidden",width:this.width,height:this.height-15}}},methods:{open:function(){this.$emit("open")},close:function(){this.$emit("close")}}},R=I,D=(r("d679"),Object(b["a"])(R,z,M,!1,null,null,null)),U=D.exports,B=r("c1df"),K=r.n(B),Y="fade",q={data:function(){return{transitionName:Y,currentYear:K()().format("YYYY"),displayFloatingPlayer:!1}},methods:{openFloatingPlayer:function(){this.displayFloatingPlayer=!0},closeFloatingPlayer:function(){this.displayFloatingPlayer=!1}},created:function(){var e=this;this.$router.beforeEach((function(t,r,n){var a=t.meta.transitionName||r.meta.transitionName||"slide";if("slide"===a){var o=t.path.split("/").length,s=r.path.split("/").length;a=o<=s?"slide-right":"slide-left"}e.transitionName=a||Y,n()}))},metaInfo:function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat("https://www.ludwig-guerin.fr").concat(e)},t=e("/".concat("img/og.jpg")),r="Site officiel de Ludwig GUERIN, aka Voltra the dev";return{htmlAttrs:{prefix:"og: http://ogp.me/ns#"},title:"Ludwig GUERIN",titleTemplate:"%s | Ludwig GUERIN",meta:[{property:"og:type",content:"website"},{property:"og:site_name",content:"Ludwig GUERIN"},{property:"og:image",content:t},{property:"twitter:card",content:"summary"},{property:"twitter:image",content:t},{vmid:"og:title",property:"og:title",content:"Ludwig GUERIN",template:"%s | Ludwig GUERIN"},{vmid:"og:description",property:"og:description",content:r},{vmid:"description",property:"og:description",content:r},{vmid:"keywords",property:"keywords",content:""}]}},components:{GdprBanner:w,GdprOpener:G,Navbar:A,FloatingPlayer:U},computed:{copyrightYear:function(){return parseInt(this.currentYear,10)>2020?"2020&nbsp-&nbsp;".concat(this.currentYear):this.currentYear}}},H=q,Z=(r("5c0b"),Object(b["a"])(H,a,o,!1,null,null,null)),V=Z.exports,W=r("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var J=r("8c4f"),Q=r("d046");n["a"].use(J["a"]);var X=new J["a"]({mode:"hash",base:"/",routes:Q["routes"]}),ee=X,te=r("f23d");r("0b0f");n["a"].use(te["a"]);r("4160"),r("159b");var re=r("8df1");[n["a"],n["a"].prototype].forEach((function(e){Object.defineProperties(e,{$json:{get:function(){return re["$json"]}}})}));var ne=r("2909"),ae=r("8ded"),oe=r.n(ae),se=r("e679"),ie=r.n(se),ce=r("ee7c"),le=r.n(ce),de=[].concat(Object(ne["a"])(ie.a),[le.a]);de.forEach((function(e){return oe.a.addPlugin(e)})),[n["a"],n["a"].prototype].forEach((function(e){Object.defineProperties(e,{$localStorage:{get:function(){return oe.a}}})}));var ue=r("f7b8"),pe="gdpr",fe="".concat(pe,"__version"),ge="3.1.0",be=function(){return K()().startOf("month").add(13,"months").toDate()},me=function(){return ue["GdprManagerBuilder"].make().startRequiredGroup(ue["GdprStorage"].LocalStorage,"RGPD","Gestion des préférences relatives à la protection des données").withEnabledGuard(pe,"Sauvegarde de vos préférences RGPD").withEnabledGuard(fe,"Version des paramètres RGPD").endGroup().build()},he=function e(t,r){if("$gdpr"in t.prototype){var n=t.prototype.$gdpr;if(r==n.manager)return;n.manager=r,n.$emit("change")}else t.nextTick((function(){return e(t,r)}))},ve=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.$localStorage.removeExpiredKeys(),e.$localStorage.has(fe)||(e.$localStorage.set(fe,ge,be()),e.$localStorage.remove(pe));var r=e.$localStorage.get(pe),n=e.$localStorage.get(fe);try{var a=ue["GdprDeserializer"].manager(r),o=ge===n;return o?a?(t&&he(e,a),a):null:(e.$localStorage.remove(pe),e.$localStorage.set(fe,ge,be()),null)}catch(s){return null}},ye=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return null!==ve(e,t)},je=function(e,t){e.$localStorage.set(pe,t,be());try{return ye(e)}catch(r){return!1}},we=function(e,t){return ye(e)||je(e,t)},_e=function(e,t){var r=ve(e),n=t(e,pe);return r||(he(e,n),n)},Ce=_e(n["a"],me);n["a"].use(u["VueGdprGuard"],{manager:Ce}),[n["a"],n["a"].prototype].forEach((function(e){Object.defineProperties(e,{$gdpr_serde:{get:function(){return{restore:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return ve.apply(void 0,[n["a"]].concat(t))},store:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return je.apply(void 0,[n["a"]].concat(t))},storeIfNotExists:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return we.apply(void 0,[n["a"]].concat(t))},exists:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return ye.apply(void 0,[n["a"]].concat(t))},check:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];n["a"].nextTick((function(){setTimeout((function(){ye.apply(void 0,[n["a"]].concat(t))}),100)}))}}}},$gdprStorageToString:{get:function(){return function(e){switch(e){case ue["GdprStorage"].Cookie:return"cookies";case ue["GdprStorage"].FileSystem:return"fichiers locaux";case ue["GdprStorage"].IndexedDb:return"base de données intégrée";case ue["GdprStorage"].LocalStorage:return"localStorage";case ue["GdprStorage"].SessionStorage:return"sessionStorage";case ue["GdprStorage"].ServerStorage:return"serveur";default:return null}}}}})}));var ke=r("4eb5"),xe=r.n(ke);xe.a.config.autoSetContainer=!0,n["a"].use(xe.a);r("8350");n["a"].use(T);var Se=r("574a"),Ge=r.n(Se);n["a"].use(Ge.a),new n["a"]({router:ee,render:function(e){return e(V)}}).$mount("#app")},"582d":function(e,t,r){"use strict";var n=r("f27c"),a=r.n(n);a.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},8350:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r("a4d3"),r("e01a"),r("a15b");var n=r("2b0e"),a=r("58ca");n["a"].use(a["a"],{refreshOnNavigation:!0});var o=function(e){return Array.isArray(e)?e.join(","):"string"==typeof e?e:""},s=function(e){var t=e.title,r=e.description,n=e.tags;return{title:t,meta:[{vmid:"og:title",property:"og:title",content:t},{vmid:"og:description",property:"og:description",content:r},{vmid:"description",property:"description",content:r},{vmid:"keywords",property:"keywords",content:o(n)}]}}},"8cab":function(e,t,r){"use strict";var n=r("244f"),a=r.n(n);a.a},"9c0c":function(e,t,r){e.exports={primary:"#0087b3",secondary:"#006181",ternary:"#09c6d6",accent:"#09c6d6",info:"#0c549b",error:"#b62222",warning:"#e9d30f"}},cd8c:function(e,t,r){e.exports={primary:"#0087b3",secondary:"#006181",ternary:"#09c6d6",accent:"#09c6d6",info:"#0c549b",error:"#b62222",warning:"#e9d30f"}},d046:function(e,t,r){r("b0c0"),r("d3b7");var n=r("fa0f").default,a=r("025e"),o=a.stopLoader,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/#".concat(e)};n.setViewResolver((function(e){return"string"===typeof e?function(){return r("1a5d")("./".concat(e,".vue"))}:e}));var i=!1,c=function(e,t,r){r(),i||(o(),i=!0)};n.group({beforeEnter:c},(function(){n.view("/","Home").name("Home").options({meta:{nav:{title:"Accueil",icon:"home"},sitemap:{loc:s("/"),lastmod:"2021-09-08",priority:1}}}),n.view("/projets","Projects").name("Projects").options({meta:{nav:{title:"Projets",icon:"project"},sitemap:{loc:s("/projets"),lastmod:"2021-09-08",priority:.8}}}),n.view("/cv","Cv").name("Cv").options({meta:{nav:{title:"CV",icon:"file-text"},sitemap:{loc:s("/cv"),lastmod:"2021-09-08",priority:.9}}}),n.view("/contact","Contact").name("Contact").options({meta:{nav:{title:"Me Contacter",icon:"notification"},sitemap:{loc:s("/contact"),lastmod:"2021-09-08",priority:.7}}}),n.view("/mentions-legales","About").name("About").options({meta:{sitemap:{loc:s("/mentions-legales"),lastmod:"2021-09-08",priority:.1}}}),n.view("*","404").name("404").options({meta:{sitemap:{ignoreRoute:!0}}})}));var l=n.all();e.exports={routes:l}},d679:function(e,t,r){"use strict";var n=r("db80"),a=r.n(n);a.a},db80:function(e,t,r){e.exports={primary:"#0087b3",secondary:"#006181",ternary:"#09c6d6",accent:"#09c6d6",info:"#0c549b",error:"#b62222",warning:"#e9d30f"}},f27c:function(e,t,r){}});
//# sourceMappingURL=app.js.map