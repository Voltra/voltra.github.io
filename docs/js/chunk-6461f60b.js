(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6461f60b"],{"025e":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("99af"),r("caad"),r("8a79"),r("2532");var n="utm_source=ludwigguerin.fr&utm_medium=site&utm_campaign=external_ref",i=function(e){return e.endsWith("?")||e.endsWith("&")?"".concat(e).concat(n):e.includes("?")?"".concat(e,"&").concat(n):"".concat(e,"?").concat(n)}},"0db5":function(e,t,r){"use strict";var n=r("2459"),i=r.n(n);i.a},1322:function(e,t,r){"use strict";var n=function(){var e,t=this,r=t.$createElement,n=t._self._c||r;return n("a",{class:(e={"ext-link":!0},e["ext-link--"+t.type]=!0,e),attrs:{href:t.url,target:"_blank"}},[t._t("default")],2)},i=[],s=r("5397"),a=r("025e"),l={props:{href:s["a"].string.def("#"),type:s["a"].oneOf(["primary","secondary"]).def("primary")},computed:{url:function(){return Object(a["a"])(this.href)}}},o=l,u=(r("0db5"),r("2877")),c=Object(u["a"])(o,n,i,!1,null,"928bf684",null);t["a"]=c.exports},2459:function(e,t,r){},2532:function(e,t,r){"use strict";var n=r("23e7"),i=r("5a34"),s=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(s(this)).indexOf(i(e),arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},"8a79":function(e,t,r){"use strict";var n=r("23e7"),i=r("06cf").f,s=r("50c4"),a=r("5a34"),l=r("1d80"),o=r("ab13"),u=r("c430"),c="".endsWith,d=Math.min,p=o("endsWith"),f=!u&&!p&&!!function(){var e=i(String.prototype,"endsWith");return e&&!e.writable}();n({target:"String",proto:!0,forced:!f&&!p},{endsWith:function(e){var t=String(l(this));a(e);var r=arguments.length>1?arguments[1]:void 0,n=s(t.length),i=void 0===r?n:d(s(r),n),o=String(e);return c?c.call(t,o,i):t.slice(i-o.length,i)===o}})},ab13:function(e,t,r){var n=r("b622"),i=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[i]=!1,"/./"[e](t)}catch(n){}}return!1}},caad:function(e,t,r){"use strict";var n=r("23e7"),i=r("4d64").includes,s=r("44d2"),a=r("ae40"),l=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!l},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),s("includes")},f820:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-card",{attrs:{title:"Mentions légales"}},[r("a-icon",{attrs:{slot:"extra",type:"audit",size:"large"},slot:"extra"}),r("a-collapse",{attrs:{defaultActiveKey:1}},[r("a-collapse-panel",{key:1,attrs:{header:"Protection des données"}},[e._v(" Comme prévu par le "),r("ExternalLink",{attrs:{href:"https://www.cnil.fr/fr/reglement-europeen-protection-donnees"}},[e._v(" Règlement Général sur la Protection des Données ")]),e._v(" l'intégralité des données personnelles utilisées sont recensées et modifiables à la guise de l'utilisateur (que ce soit via le bandeau lors de la visite initiale, ou par le bouton de cookies en bas de page). Ces données sont conservées pour la durée maximale prévue par la loi."),r("br"),r("br"),e._v(" De plus, le consentement à l'utilisation de ces données est valide pour une durée maximale de 13 mois, après laquelle il sera redemandé."),r("br"),r("br"),e._v(" Aucune donnée n'est collectée à des fins d'analyses et sont donc uniquement présentes sur le matériel de l'utilisateur. Ainsi, il est possible de supprimer ces données à tout moment et ce à la guise de l'utilisateur. ")],1),r("a-collapse-panel",{key:2,attrs:{header:"Hébergement"}},[e._v(" Ce site internet est hébergé par Github par le biais du service "),r("ExternalLink",{attrs:{href:"https://pages.github.com/"}},[e._v(" Github Pages. ")]),r("ul",[r("li",[r("strong",[e._v("Statut du propriétaire :")]),e._v(" Personne physique ")]),r("li",[r("strong",[e._v("Adresse de courrier électronique :")]),r("ExternalLink",{attrs:{href:"mailto:"+e.mail}},[e._v(" "+e._s(e.mail)+" ")])],1),r("li",[r("strong",[e._v("Créateur du site :")]),e._v(" Ludwig GUERIN ")]),r("li",[r("strong",[e._v("Responsable de la publication :")]),e._v(" Ludwig GUERIN ")]),r("li",[r("strong",[e._v("Webmestre :")]),e._v(" Ludwig GUERIN ")]),r("li",[r("strong",[e._v("Hébergeur :")]),e._v(" Github ")]),r("li",[r("strong",[e._v("Contacter l'hébergeur :")]),r("ExternalLink",{attrs:{href:"mailto:"+e.githubMail}},[e._v(" "+e._s(e.githubMail)+" ")])],1)])],1),r("a-collapse-panel",{key:3,attrs:{header:"Propriété Intellectuelle"}},[e._v(" Les contenus présentés sur ce site sont propriétés intellectuelles de leurs propriétaires respectifs. Ils ne sont pas à considérer comme attribués au propriétaire du site."),r("br"),r("br"),e._v(" Les designs utilisés pour la bannière Open Graph sont la propriété de "),r("ExternalLink",{attrs:{href:"https://www.freepik.com/pikisuperstar"}},[e._v(" Pikisuperstar. ")])],1)],1),r("br"),r("a-row",{attrs:{type:"flex",justify:"center",align:"middle",gutter:[16,16]}},[r("a-col",[r("a-button",{attrs:{type:"primary"}},[r("router-link",{attrs:{to:{name:"Home"}}},[e._v(" Retourner à l'accueil ")])],1)],1)],1)],1)},i=[],s=r("1322"),a=r("8350"),l="Mentions légales",o="Mentions légales et informations relatives à la protection des données.",u={metaInfo:Object(a["a"])({title:l,description:o,tags:"mentions,légales"}),components:{ExternalLink:s["a"]},data:function(){return{mail:"ludwig.guerin.98@gmx.fr",githubMail:"privacy@github.com"}}},c=u,d=r("2877"),p=Object(d["a"])(c,n,i,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-6461f60b.js.map