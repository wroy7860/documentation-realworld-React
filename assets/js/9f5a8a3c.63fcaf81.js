"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[157],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9104:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:3},l="Routing Guidelines",c={unversionedId:"specs/frontend-specs/routing",id:"specs/frontend-specs/routing",title:"Routing Guidelines",description:"- Home page (URL: /#/ )",source:"@site/docs/specs/frontend-specs/routing.md",sourceDirName:"specs/frontend-specs",slug:"/specs/frontend-specs/routing",permalink:"/docs/specs/frontend-specs/routing",draft:!1,editUrl:"https://github.com/gothinkster/realworld/tree/main/docs/docs/docs/specs/frontend-specs/routing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Styles",permalink:"/docs/specs/frontend-specs/styles"},next:{title:"Tests",permalink:"/docs/specs/frontend-specs/tests"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"routing-guidelines"},"Routing Guidelines"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Home page (URL: /#/ )",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"List of tags"),(0,i.kt)("li",{parentName:"ul"},"List of articles pulled from either Feed, Global, or by Tag"),(0,i.kt)("li",{parentName:"ul"},"Pagination for list of articles"))),(0,i.kt)("li",{parentName:"ul"},"Sign in/Sign up pages (URL: /#/login, /#/register )",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Uses JWT (store the token in localStorage)"),(0,i.kt)("li",{parentName:"ul"},"Authentication can be easily switched to session/cookie based"))),(0,i.kt)("li",{parentName:"ul"},"Settings page (URL: /#/settings )"),(0,i.kt)("li",{parentName:"ul"},"Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )"),(0,i.kt)("li",{parentName:"ul"},"Article page (URL: /#/article/article-slug-here )",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete article button (only shown to article's author)"),(0,i.kt)("li",{parentName:"ul"},"Render markdown from server client side"),(0,i.kt)("li",{parentName:"ul"},"Comments section at bottom of page"),(0,i.kt)("li",{parentName:"ul"},"Delete comment button (only shown to comment's author)"))),(0,i.kt)("li",{parentName:"ul"},"Profile page (URL: /#/profile/:username, /#/profile/:username/favorites )",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Show basic user info"),(0,i.kt)("li",{parentName:"ul"},"List of articles populated from author's created articles or author's favorited articles")))))}m.isMDXComponent=!0}}]);