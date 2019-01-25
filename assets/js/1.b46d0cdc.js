(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{156:function(t,s,a){t.exports=a.p+"assets/img/jquery-pills-use-right.12797e06.png"},157:function(t,s,a){t.exports=a.p+"assets/img/factory-we-need-more-lumber.b8a65b6c.png"},158:function(t,s,a){t.exports=a.p+"assets/img/single-does-not-mean-super.39efdaa7.png"},159:function(t,s,a){t.exports=a.p+"assets/img/even-if-there-are-a-lot-of-them.09068ad7.png"},169:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("If you write frontend application - I assume that it interacts with backend API server. If your app is small - you do not think about architecture and scaling. But if it is a big LTS application - you need to think about it! Why? Because You will develop and support that application in future, so just pray that you wont hate yourself in time. I want to tell you how people often develop an interaction between UI and API.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("You can try to search some solution! And you may find some guidelines or libraries, also it may be a part of a framework you use, like "),n("a",{attrs:{href:"https://docs.angularjs.org/api/ngResource/service/$resource",target:"_blank",rel:"noopener noreferrer"}},[t._v("angular.$resource"),n("OutboundLink")],1),t._v(". In general, there will be 4 types of "),n("em",[t._v("Interaction")]),t._v(" architecture.")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("So you will find that there is no silver bullet, which will be the best or the most popular.")]),t._v(" "),n("p",[t._v("I do not want to describe the implementation of every approach because it is your job. 😃 I want to show how you will use it, pros and cons.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("img",{attrs:{title:"jQuery pills use right",srcset:a(156)+" 100w",sizes:"50px",src:a(156)}}),t._v(" "),n("p",[t._v("So the first style - is to write an AJAX query immediately when you need it.")]),t._v(" "),t._m(6),n("p",[t._v("I do not want even to discuss why that way is bad. If you will try to write SPA in a such way - you may find that all your requests are scattered by your application. And if you will make a small error - you will find it, only when user will do the action to run that query.")]),t._v(" "),n("p",[t._v('And as always - one day someone would say "We need some time for refactoring".')]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("img",{attrs:{title:"Factory? We need more lumber!",srcset:a(157)+" 100w",sizes:"50px",src:a(157)}}),t._v(" "),n("p",[t._v("Lets imagine two most popular interfaces with configuration:")]),t._v(" "),t._m(9),n("p",[t._v("Usage #1:")]),t._v(" "),t._m(10),n("p",[t._v("Usage #2:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),n("p",[t._v("Singleton - is the most popular pattern in software development. So we have a single class to keep all requests and configurations.")]),t._v(" "),n("img",{attrs:{title:"Single does not mean Super",srcset:a(158)+" 100w",sizes:"50px",src:a(158)}}),t._v(" "),t._m(13),t._m(14),t._v(" "),n("p",[t._v("I assume that your architecture will be next:")]),t._v(" "),t._m(15),n("p",[t._v("And usage will be changed to the next one:")]),t._v(" "),t._m(16),n("p",[t._v("It looks nice and understandable, but there is one small problem - separation of contests. So working with project API - you have an access to client API and you can remove it, instead of a project. That is why you need to isolate classes.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),n("p",[t._v("It seems that last solution is ideal. But the more services you have - the more imports and dependencies you need. Some can say that you need to separate by logic and make some groups of services. But it is a long way to discuss.")]),t._v(" "),n("img",{attrs:{title:"Even if there are a lot of them",srcset:a(159)+" 100w",sizes:"50px",src:a(159)}}),t._v(" "),t._m(20),t._v(" "),n("p",[t._v("Every solution has pros and cons, and only you can define what is relevant for you.")]),t._v(" "),n("p",[t._v("I told you how to develop an interaction between UI and API. And I hope you defined what approach is the best for you! Write your comment and let me know!")]),t._v(" "),n("p",[t._v("P.S.:")]),t._v(" "),n("p",[t._v("I want to mention that the more you write - the more you repeat yourself and others. Who knows, maybe we will return to simple jQuery style one day. 😃")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"evolution-of-interaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#evolution-of-interaction","aria-hidden":"true"}},[this._v("#")]),this._v(" Evolution of Interaction")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("To be on the same page, lets define that "),s("strong",[this._v("Interaction")]),this._v(" - is an object/class/method/function that allows you to send requests to a backend server.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"no-silver-bullet-or-types-of-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#no-silver-bullet-or-types-of-architecture","aria-hidden":"true"}},[this._v("#")]),this._v(" No silver bullet or Types of architecture")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("On-flight")]),this._v(" "),s("li",[this._v("Factory")]),this._v(" "),s("li",[this._v("Singleton")]),this._v(" "),s("li",[this._v('"Micro" services')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"on-flight-or-jquery-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on-flight-or-jquery-style","aria-hidden":"true"}},[this._v("#")]),this._v(" On-flight or jQuery style")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("I suppose you remember how popular jQuery was, maybe it is still the best tool for somebody. jQuery provided us a big amount of good things, one of them - is a short notation of the AJAX. No XmlHttpRequest more, just simple "),s("code",[this._v("$.ajax")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("jQuery"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ajax"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v("'http://super-app.com/api/client'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    success"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      client "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    error"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'blah blah blah'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"factory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#factory","aria-hidden":"true"}},[this._v("#")]),this._v(" Factory")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now we have a configuration of all our requests, and you create them dynamically when you need. For example "),s("code",[this._v("resource")]),this._v(" in angular 1.x, someone may say that example is not good, but I want to note that implementation may vary. The idea of the factory - generate objects (requests in our case) dynamically depending on some configuration.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  host"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'http://super-app.com/api/'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v("'client'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    clientData "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'error handler'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" client "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("request")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'client'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclient"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    clientData "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'error handler'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"singleton"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#singleton","aria-hidden":"true"}},[this._v("#")]),this._v(" Singleton")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("api"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getProjectList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getProjectById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("updateClient")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("deleteUser")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ... and so on")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The approach is not so bad, but "),s("code",[this._v("api.js")]),this._v(" will grow in time. So it becomes really hard to change and to add new queries. Gritting one's teeth you will add new methods to the file, and one day you will decide that you need to split it.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("-/ api\n |- client.js\n |- project.js\n |- user.js\n  \\ api.js\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("api"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("project"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("project"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ... and so on")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"micro-services"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#micro-services","aria-hidden":"true"}},[this._v("#")]),this._v(' "Micro" services')])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("No, wait! I do not want to talk about some big changes to split everything. I just want to note that every such file as "),s("code",[this._v("./app/api/client.js")]),this._v(" is a service. And we do not need that singleton to keep the composition of all that services.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("projectApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nprojectApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getById")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nclientApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nuserApi"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// ... and so on")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Summary")])}],!1,null,null,null);e.options.__file="index.md";s.default=e.exports}}]);