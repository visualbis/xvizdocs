(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(9),i=(r(0),r(168)),a=(r(169),{id:"HierarchyTree",title:"Hierarchy Tree"}),c={id:"utils/HierarchyTree",title:"Hierarchy Tree",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/utils/HierarchyTree.mdx",permalink:"/docs/utils/HierarchyTree",sidebar:"sideBar",previous:{title:"Advanced Gauge",permalink:"/docs/gauges/AdvancedGauge"},next:{title:"Tag Cloud",permalink:"/docs/utils/TagCloud"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'\xa9Visual BI Solutions, Inc. ("Visual BI"). All rights reserved. No part\nof this document may be reproduced or transmitted in any form or by any\nmeans, electronic or mechanical, for any purpose, without the express\nwritten permission of Visual BI. Under the law, reproducing includes\ntranslating into another language or format. As between the parties,\nVisual BI retains title to, and ownership of, all proprietary rights\nwith respect to the software contained within its products. The software\nis protected by United States copyright laws and international treaty\nprovision. Therefore, you must treat the software like any other\ncopyrighted material (e.g. a book or sound recording). Every effort has\nbeen made to ensure that the information in this manual is accurate.\nVisual BI Solutions is not responsible for printing or clerical errors.\nInformation in this document is subject to change without notice.'))}l.isMDXComponent=!0},167:function(e,t,r){"use strict";var n=r(0),o=r(48);t.a=function(){return Object(n.useContext)(o.a)}},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,h=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return r?o.a.createElement(h,c({ref:t},u,{components:r})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(173);var n=r(167);function o(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},171:function(e,t,r){var n=r(66),o=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},172:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},173:function(e,t,r){"use strict";var n=r(17),o=r(34),i=r(171),a="".startsWith;n(n.P+n.F*r(172)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return a?a.call(t,n,r):t.slice(r,r+n.length)===n}})}}]);