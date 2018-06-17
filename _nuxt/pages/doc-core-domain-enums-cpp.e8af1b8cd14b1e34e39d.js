webpackJsonp([3],{"5axn":function(e,t,i){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("a",{attrs:{href:"https://github.com/VSS-SDK/"+this.project+"/stargazers",target:"_blank"}},[t("span",{staticStyle:{"margin-left":"8px"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/VSS-SDK/"+this.project+".svg?style=social&label=Stars"}})])]),t("a",{attrs:{href:"https://github.com/VSS-SDK/"+this.project+"/fork",target:"_blank"}},[t("span",{staticStyle:{"margin-left":"8px"}},[t("img",{attrs:{src:"https://img.shields.io/github/forks/VSS-SDK/"+this.project+".svg?style=social&label=Fork"}})])]),t("a",{attrs:{href:"https://github.com/VSS-SDK/"+this.project+"/watchers",target:"_blank"}},[t("span",{staticStyle:{"margin-left":"8px"}},[t("img",{attrs:{src:"https://img.shields.io/github/watchers/VSS-SDK/"+this.project+".svg?style=social&label=Watch"}})])])])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s},"6stf":function(e,t,i){var n=i("zzPi");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("257ba647",n,!1,{sourceMap:!1})},"9DPk":function(e,t,i){"use strict";t.a={props:["project"],data:function(){return{}}}},AujS:function(e,t,i){"use strict";var n=i("9DPk"),s=i("5axn"),a=!1;var l=function(e){a||i("JIT3")},o=i("VU/8")(n.a,s.a,!1,l,null,null);o.options.__file="components/GithubBadges.vue",t.a=o.exports},Beoq:function(e,t,i){"use strict";t.a={data:function(){return{menu:[{id:"",label:"Visão geral",link:"/",menu:[{id:"A.",label:"Instalação",link:"/doc-overview-install"},{id:"B.",label:"Utilização",link:"/doc-overview-use"},{id:"C.",label:"Desenvolvimento",link:"/doc-overview-dev"}]},{id:"1.",label:"VSS-Core",link:"/doc-core",menu:[{id:"1.1.",label:"Domínio",link:"/doc-core-domain",menu:[{id:"1.1.1.",label:"Constantes",link:"/doc-core-domain-constants"},{id:"1.1.2.",label:"Enums",link:"/doc-core-domain-enums-cpp"},{id:"1.1.3.",label:"Modelos básicos",link:"/doc-core-domain-simple-models"},{id:"1.1.4.",label:"Modelos de comunicação",link:"doc-core-domain-communication-models"}]},{id:"1.2.",label:"Interfaces de comunicação",link:"/doc-core-coomunication-interfaces"},{id:"1.3.",label:"Arquivos protos",link:"/doc-core-protos"}]},{id:"2.",label:"VSS-Samples",link:"/doc-samples",menu:[{id:"2.1.",label:"C++",link:"/doc-samples-cpp"},{id:"2.2.",label:"Rust",link:"/doc-samples-rust"}]},{id:"3.",label:"VSS-Simulator",link:"/doc-simulator",menu:[{id:"3.1.",label:"Enviando comandos",link:"/doc-simulator-send-commands"},{id:"3.2.",label:"Obtendo estados",link:"/doc-simulator-get-states"}]},{id:"4.",label:"VSS-Viewer",link:"",menu:[{id:"4.1.",label:"Enviando Debug",link:""},{id:"4.2.",label:"Pausando partidas",link:""},{id:"4.3.",label:"Manipulando objetos em campo",link:""},{id:"4.4.",label:"Alterando câmeras",link:""}]},{id:"5.",label:"VSS-Joystick",link:"",menu:[{id:"5.1.",label:"Controlando robôs no VSS-Simulator",link:""}]},{id:"6.",label:"VSS-Vision",link:"",menu:[{id:"6.1.",label:"Rotina de calibragem",link:"",menu:[{id:"6.1.1.",label:"Calibrando cores",link:""},{id:"6.1.2.",label:"Calibração rotação",link:""},{id:"6.1.3.",label:"Calibrando corte",link:""},{id:"6.1.4.",label:"Salvando calibragem",link:""},{id:"6.1.5.",label:"Carregando calibragem",link:""}]},{id:"6.2.",label:"Rotina de jogo",link:"",menu:[{id:"6.2.1.",label:"Carregando calibragem",link:""},{id:"6.2.2.",label:"Iniciando processamento",link:""}]},{id:"6.3.",label:"Obtendo estados",link:""}]}]}}}},JIT3:function(e,t,i){var n=i("fVjO");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("514f32d0",n,!1,{sourceMap:!1})},"RV+5":function(e,t,i){"use strict";t.a={props:["languageProp"],data:function(){return{}}}},"RZ/c":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"p{margin-top:30px}.li-default{padding-bottom:10px}.figure{font-size:14px}",""])},U1lO:function(e,t,i){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[void 0!==this.languageProp&&this.languageProp.hasLanguages?t("div",{staticClass:"col-sm-12",attrs:{div:""}},[t("b-breadcrumb",{attrs:{items:this.languageProp.items}})],1):this._e()])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s},UopX:function(e,t,i){"use strict";var n=i("p0RR"),s=i("XN39"),a=i("a9Wq"),l=i("AujS");t.a={components:{LeftBar:n.a,Title:s.a,LanguageBreadcrumb:a.a,GithubBadges:l.a},data:function(){return{project:"VSS-Core",languageProp:{hasLanguages:!0,items:[{text:"C++",active:!0},{text:"Rust",href:"/doc-core-domain-enums-rust"}]},teamType:"",fieldTransaformationType:""}},created:function(){this.loadTeamType(),this.loadFieldTransaformationType()},methods:{loadTeamType:function(){this.teamType+='<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-87673c31a5b37b5e6556b63e1081ebbc.css">',this.teamType+='<div id="gist90040214" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-test-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-test-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-test-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">namespace</span> <span class="pl-en">vss</span> {</td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-test-cpp-LC2" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">enum</span> TeamType{</td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-test-cpp-LC3" class="blob-code blob-code-inner js-file-line">        Yellow = <span class="pl-c1">0</span>,</td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-test-cpp-LC4" class="blob-code blob-code-inner js-file-line">        Blue = <span class="pl-c1">1</span></td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-test-cpp-LC5" class="blob-code blob-code-inner js-file-line">    };     </tr>\n      <tr>\n        <td id="file-test-cpp-L10" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-test-cpp-LC10" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n          </div>\n</div>\n'},loadFieldTransaformationType:function(){this.fieldTransaformationType+='<link rel="stylesheet" href="https://assets-cdn.github.com/assets/gist-embed-87673c31a5b37b5e6556b63e1081ebbc.css">',this.fieldTransaformationType+='<div id="gist90040214" class="gist">\n    <div class="gist-file">\n      <div class="gist-data">\n        <div class="js-gist-file-update-container js-task-list-container file-box">\n  <div id="file-test-cpp" class="file">\n    \n\n  <div itemprop="text" class="blob-wrapper data type-c">\n      <table class="highlight tab-size js-file-line-container" data-tab-size="8">\n      <tr>\n        <td id="file-test-cpp-L1" class="blob-num js-line-number" data-line-number="1"></td>\n        <td id="file-test-cpp-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">namespace</span> <span class="pl-en">vss</span> {</td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L2" class="blob-num js-line-number" data-line-number="2"></td>\n        <td id="file-test-cpp-LC2" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">enum</span> FieldTransformationType{</td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L3" class="blob-num js-line-number" data-line-number="3"></td>\n        <td id="file-test-cpp-LC3" class="blob-code blob-code-inner js-file-line">        None = <span class="pl-c1">0</span>,</td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L4" class="blob-num js-line-number" data-line-number="4"></td>\n        <td id="file-test-cpp-LC4" class="blob-code blob-code-inner js-file-line">        Flip180Degrees = <span class="pl-c1">1</span></td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L5" class="blob-num js-line-number" data-line-number="5"></td>\n        <td id="file-test-cpp-LC5" class="blob-code blob-code-inner js-file-line">    };</td>\n      </tr>\n      <tr>\n        <td id="file-test-cpp-L6" class="blob-num js-line-number" data-line-number="6"></td>\n        <td id="file-test-cpp-LC6" class="blob-code blob-code-inner js-file-line">}</td>\n      </tr>\n</table>\n\n\n  </div>\n\n  </div>\n</div>\n\n      </div>\n         </div>\n</div>\n'}}}},VBWW:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"sidenav"},[i("left-bar")],1),i("div",{staticClass:"main"},[i("div",{staticClass:"container"},[i("Title"),i("LanguageBreadcrumb",{attrs:{languageProp:e.languageProp}}),i("div",{staticClass:"row"},[i("div",{staticClass:"col-sm-10 offset-sm-1",staticStyle:{color:"#444",padding:"20px 20px 20px 20px"}},[e._m(0),i("GithubBadges",{attrs:{project:e.project}}),i("h5",{staticStyle:{"margin-top":"40px"}},[e._v("TeamType")]),i("b",{staticStyle:{"font-size":"15px"}},[e._v('#include "Domain/TeamType.h"')]),i("div",{domProps:{innerHTML:e._s(e.teamType)}}),i("h5",{staticStyle:{"margin-top":"40px"}},[e._v("FieldTransformationType")]),i("b",{staticStyle:{"font-size":"15px"}},[e._v('#include "Domain/FieldTransformationType.h"')]),i("div",{domProps:{innerHTML:e._s(e.fieldTransaformationType)}})],1)])],1)])])};n._withStripped=!0;var s={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticStyle:{"margin-bottom":"10px"}},[this._v("Enums "),t("small",{staticStyle:{color:"#999"}},[this._v(" / C++")])])}]};t.a=s},XN39:function(e,t,i){"use strict";var n=i("cg/V"),s=i("duXM"),a=!1;var l=function(e){a||i("jWMY")},o=i("VU/8")(n.a,s.a,!1,l,null,null);o.options.__file="components/Title.vue",t.a=o.exports},a9Wq:function(e,t,i){"use strict";var n=i("RV+5"),s=i("U1lO"),a=!1;var l=function(e){a||i("6stf")},o=i("VU/8")(n.a,s.a,!1,l,null,null);o.options.__file="components/LanguageBreadcrumb.vue",t.a=o.exports},cPtu:function(e,t,i){var n=i("RZ/c");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("021b0e4e",n,!1,{sourceMap:!1})},"cg/V":function(e,t,i){"use strict";t.a={data:function(){return{}}}},dhgJ:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},duXM:function(e,t,i){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-4 offset-sm-4"},[t("center",{staticStyle:{"font-size":"22px",padding:"10px 10px 10px 10px",color:"#ccc"}},[this._v("VSS-SDK")])],1)])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s},fVjO:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},gfdU:function(e,t,i){var n=i("mROm");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("d2149b62",n,!1,{sourceMap:!1})},iCJz:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("UopX"),s=i("VBWW"),a=!1;var l=function(e){a||i("cPtu")},o=i("VU/8")(n.a,s.a,!1,l,null,null);o.options.__file="pages/doc-core-domain-enums-cpp.vue",t.default=o.exports},jWMY:function(e,t,i){var n=i("dhgJ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("2c9d3aac",n,!1,{sourceMap:!1})},mROm:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"b>a,ul>a{color:#444}.li-without-dot{list-style-type:none;padding-bottom:2px;padding-left:8px}ul{padding:0;margin:0}.sidenav{height:100%;width:280px;position:fixed;z-index:1;top:0;left:0;background-color:#f8f8f8;overflow-x:hidden;overflow-y:scroll;padding-top:10px}.sidenav ul{padding:3px 0 3px 8px;text-decoration:none;display:block;font-size:14px;color:#333}.sidenav ul:hover{color:#428bca;cursor:pointer}.main{margin-left:280px;padding:0 10px}@media screen and (max-height:450px){.sidenav{padding-top:15px}.sidenav a{font-size:18px}}",""])},p0RR:function(e,t,i){"use strict";var n=i("Beoq"),s=i("vyvD"),a=!1;var l=function(e){a||i("gfdU")},o=i("VU/8")(n.a,s.a,!1,l,null,null);o.options.__file="components/LeftBar.vue",t.a=o.exports},vyvD:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("li",{staticClass:"li-without-dot"},e._l(e.menu,function(t){return i("ul",{key:t.id},[i("b",[i("nuxt-link",{attrs:{to:t.link}},[e._v(" "+e._s(t.id)+" "+e._s(t.label)+" ")])],1),void 0!==t.menu?i("li",{staticClass:"li-without-dot"},e._l(t.menu,function(t){return i("ul",{key:t.id},[i("nuxt-link",{attrs:{to:t.link}},[e._v(" "+e._s(t.id)+" "+e._s(t.label)+" ")]),void 0!==t.menu?i("li",{staticClass:"li-without-dot"},e._l(t.menu,function(t){return i("ul",{key:t.id},[i("nuxt-link",{attrs:{to:t.link}},[e._v(" "+e._s(t.id)+" "+e._s(t.label)+" ")])],1)})):e._e()],1)})):e._e()])}))])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s},zzPi:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])}});