(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{6821:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("caad"),core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("2532"),core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("466d"),core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("1276"),core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("498a"),core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_8__);__webpack_exports__["a"]={name:"PageIndex",data:function(){return{query:"FlowLauncher",possible_results:[{icon:"/images/logo.svg",title:"FlowLauncher - a launcher for Windows",subtitle:"Boost your productivity!",link:"",color:""},{icon:"/images/logo.svg",title:"FlowLauncher - Features",subtitle:"Explore the possibilities!",link:"",color:""},{icon:"/images/logo.svg",title:"FlowLauncher - Download",subtitle:"Download from GitHub!",link:"https://github.com/Flow-Launcher/Flow.Launcher/releases",color:""},{icon:"/images/logo.svg",title:"FlowLauncher - Trouble?",subtitle:"Report an Issue!",link:"https://github.com/Flow-Launcher/Flow.Launcher/issues",color:""}],features:[{icon:"mdi-magnify",title:"Search Everything",subtitle:"Application, Files, Bookmarks, Youtube and more!"},{icon:"mdi-toy-brick",title:"Plugin Suppport",subtitle:"Extend your Flow experience with a variety of Plugins!"},{icon:"mdi-console-line",title:"Native Shell Support",subtitle:"Execute (Power)Shell commands directly with FlowLauncher!"}]}},computed:{results:function results(){var _this=this,resultList=[];if(""===this.query.trim())return resultList;var mathRegex=/^(?:\d+|\+|-|\/|\*|\(|\))*$/gm;if(this.query.match(mathRegex)){var mathString=this.query.replace(/[^-()\d/*+.]/g,"");resultList.push({icon:"/images/calculator.png",title:eval(mathString),subtitle:"Calculated from your expression",link:"",color:""})}var colorRegex=/^#[a-fA-F0-9]{6}$/gm;this.query.match(colorRegex)&&resultList.push({icon:"",title:this.query,subtitle:"",link:"",color:this.query});var terms=this.query.split(" ");return"g"===terms[0]?terms.length<2?[{icon:"/images/google.png",title:"Search Google",subtitle:"",link:"",color:""}]:[{icon:"/images/google.png",title:terms[1],subtitle:"Search Google",link:"https://www.google.com/search?q=".concat(terms[1]),color:""}]:"wiki"===terms[0]?terms.length<2?[{icon:"/images/wiki.png",title:"Search Wikipedia",subtitle:"",link:"",color:""}]:[{icon:"/images/wiki.png",title:terms[1],subtitle:"Search Wikipedia",link:"https://wikipedia.org/w/index.php?search=".concat(terms[0]),color:""}]:(this.possible_results.forEach((function(e){resultList.length<4&&e.title.toLowerCase().includes(_this.query.toLowerCase())&&resultList.push(e)})),resultList)}}}},8041:function(e,_,t){"use strict";t("cb9a")},"8b24":function(e,_,t){"use strict";t.r(_);var s=function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("q-page",[t("q-parallax",{staticClass:"row shadow-4",attrs:{id:"home",src:"/images/backdrop.jpg"}},[t("div",{staticClass:"col-7"},[t("q-card",{staticClass:"bg-grey-9 q-pa-xs shadow-4",attrs:{bordered:""}},[t("div",{staticClass:"row col-12"},[t("q-input",{staticClass:"text-h4 q-pl-md col-11",attrs:{dark:"",borderless:""},model:{value:e.query,callback:function(_){e.query=_},expression:"query"}}),t("q-icon",{staticClass:"q-pt-xs col-1",attrs:{color:"grey-7",size:"xl",name:"mdi-magnify"}})],1),e._l(e.results,(function(_,s){return t("a",{key:_.title,staticClass:"row col-12 q-pa-xs hover-effect",staticStyle:{"text-decoration":"none",cursor:"default"},attrs:{href:_.link}},[_.color?t("q-avatar",{staticClass:"q-pt-xs",style:{"background-color":_.color},attrs:{square:"",size:"md"}}):t("q-avatar",{staticClass:"q-pt-xs",attrs:{square:"",size:"md"}},[t("img",{attrs:{alt:_.title,src:_.icon}})]),t("div",{staticClass:"row col text-white q-pl-sm"},[t("div",{staticClass:"text-weight-bold col-11"},[e._v(e._s(_.title))]),t("div",{staticClass:"col-1 text-right text-grey-4"},[e._v("Alt+"+e._s(s+1))]),t("div",{staticClass:"text-grey-4"},[e._v(e._s(_.subtitle))])])],1)}))],2)],1)]),t("div",{staticClass:"row q-pt-xl"},[t("q-space"),t("div",{staticClass:"row col-md-2 col-xs-12 q-pa-md"},[t("img",{staticClass:"col-12",attrs:{alt:"Logo",src:"/images/flow_extended_logo.png"}})]),t("article",{staticClass:"col-md-2 col-xs-12 text-left q-pa-md text-justify"},[t("p",[e._v("\n        Dedicated to make your workflow flow more seamlessly.\n        Aimed at being more than an app launcher, it searches,\n        integrates and expands on functionalities.\n      ")]),t("p",[e._v("\n        Flow will continue to evolve, designed to be open and built with\n        the community at heart.\n      ")]),t("p",[e._v("\n        This Project is under heavy development, but the code base is stable, so\n        contributions are very welcome. If you would like to help maintain\n        it, please do not hesistate to get in touch.\n      ")])]),t("q-space")],1),t("div",{staticClass:"row bg-primary text-white q-py-xl shadow-up-4",attrs:{id:"features"}},[t("q-space"),e._l(e.features,(function(_){return t("div",{key:_.title,staticClass:"column col-md-3 col-xs-12 q-pb-md text-center"},[t("div",{staticClass:"col-8"},[t("q-icon",{attrs:{size:"100px",name:_.icon,color:"white"}})],1),t("div",{staticClass:"text-h5 col-2"},[e._v("\n        "+e._s(_.title)+"\n      ")]),t("div",{staticClass:"col-1"},[e._v("\n        "+e._s(_.subtitle)+"\n      ")])])})),t("q-space")],2),t("div",{staticClass:"row q-py-xl",attrs:{id:"download"}},[t("q-space"),t("div",{staticClass:"text-center"},[t("div",{staticClass:"text-h3 text-grey-8 q-pb-md"},[e._v("\n            Optimize your Work"),t("strong",[e._v("Flow")]),e._v("!\n          ")]),t("q-btn",{attrs:{type:"a",href:"https://github.com/Flow-Launcher/Flow.Launcher/releases",icon:"mdi-github",size:"lg",color:"secondary"}},[e._v("\n           Download from GitHub\n        ")]),t("p",{staticClass:"text-caption"},[t("strong",[e._v("Flow")]),e._v(" is only available for Windows™ 7 and Newer\n        ")])],1),t("q-space")],1)],1)},r=[],o=t("6821"),i=o["a"],a=(t("8041"),t("2877")),l=t("9989"),c=t("639d"),n=t("f09f"),u=t("27f9"),d=t("0016"),p=t("cb32"),m=t("2c91"),g=t("9c40"),h=t("eebe"),w=t.n(h),E=Object(a["a"])(i,s,r,!1,null,null,null);_["default"]=E.exports;w()(E,"components",{QPage:l["a"],QParallax:c["a"],QCard:n["a"],QInput:u["a"],QIcon:d["a"],QAvatar:p["a"],QSpace:m["a"],QBtn:g["a"]})},cb9a:function(e,_,t){}}]);