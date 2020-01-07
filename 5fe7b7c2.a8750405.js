(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(1),n=r(9),i=(r(0),r(168)),o=(r(169),{id:"VarianceChart",title:"Variance Chart"}),c={id:"visuals/VarianceChart",title:"Variance Chart",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter. ",source:"@site/docs/visuals/VarianceChart.mdx",permalink:"/docs/visuals/VarianceChart",sidebar:"sideBar",previous:{title:"Marimekko Chart",permalink:"/docs/visuals/MarimekkoChart"},next:{title:"Parallel Coordinates",permalink:"/docs/visuals/ParallelCoordinates"}},l=[{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Display Average Variance",id:"display-average-variance",children:[]},{value:"Sorting",id:"sorting",children:[]},{value:"RTL (Right to Left Support)",id:"rtl-right-to-left-support",children:[]},{value:"Consolidated Tooltip",id:"consolidated-tooltip",children:[]},{value:"Enable/Disable Absolute and % Variance",id:"enabledisable-absolute-and--variance",children:[]},{value:"Width Customization of Series",id:"width-customization-of-series",children:[]},{value:"Orientation",id:"orientation",children:[]},{value:"Custom Theme",id:"custom-theme",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Variance Chart for Power BI provides users with the capability to compare performance and benchmark with variance visualized in both absolute & % terms.\nThe custom visual helps you to analyze comparisons of two values across three distinct visualizations (comparison chart, variance chart and variance percentage) integrated into one visual control."),Object(i.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(i.b)("p",null,"The excel-like feature in Variance Chart for Power BI allows you to highlight data that meets specific conditions"),Object(i.b)("h3",{id:"display-average-variance"},"Display Average Variance"),Object(i.b)("p",null,"Display averages for performance, benchmark, absolute variance, overall average % variance"),Object(i.b)("h3",{id:"sorting"},"Sorting"),Object(i.b)("p",null,"The chart allows you to sort values by performance, comparison, absolute variance or % variance."),Object(i.b)("h3",{id:"rtl-right-to-left-support"},"RTL (Right to Left Support)"),Object(i.b)("p",null,"Leverage RTL Support to enhance readability of languages like Arabic, Hebrew and many more"),Object(i.b)("h3",{id:"consolidated-tooltip"},"Consolidated Tooltip"),Object(i.b)("p",null,"The tooltip of the custom visual is consolidated, allowing you to view all the data at once."),Object(i.b)("h3",{id:"enabledisable-absolute-and--variance"},"Enable/Disable Absolute and % Variance"),Object(i.b)("p",null,"The Variance chart visual gives you the option to hide either (or both) of these"),Object(i.b)("h3",{id:"width-customization-of-series"},"Width Customization of Series"),Object(i.b)("p",null,"Depending on the real estate, customize width for Base Series, Absolute Variance and % Variance"),Object(i.b)("h3",{id:"orientation"},"Orientation"),Object(i.b)("p",null,"The custom visual for Power BI enables you to choose between horizontal or vertical orientation."),Object(i.b)("h3",{id:"custom-theme"},"Custom Theme"),Object(i.b)("p",null,"The Variance chart custom visual allows you to switch between the Standard, Microsoft & Custom themes"),Object(i.b)("h3",{id:"use-cases"},"Use Cases"),Object(i.b)("p",null,"Comparing \u201cActual vs. Planned\u201d, \u201cForecast vs. Planned\u201d, and \u201cForecast vs. Previous Year\u201d"),Object(i.b)("p",null,"Calculation of Profit Gained by comparing Retail and Selling Price"),Object(i.b)("p",null,"Analysis of predicted and actual rainfall data over a period of time"),Object(i.b)("p",null,"Differentiation of Revenue Generated and the Overall Cost incurred for Sales."),Object(i.b)("p",null,"Track employee performance by comparing their target and achieved values"),Object(i.b)("p",null,"Comparison of different aspects of employment across regions over a specific period"))}u.isMDXComponent=!0},167:function(e,t,r){"use strict";var a=r(0),n=r(48);t.a=function(){return Object(a.useContext)(n.a)}},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return r?n.a.createElement(h,c({ref:t},s,{components:r})):n.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(173);var a=r(167);function n(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},171:function(e,t,r){var a=r(66),n=r(23);e.exports=function(e,t,r){if(a(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(e))}},172:function(e,t,r){var a=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,!"/./"[e](t)}catch(n){}}return!0}},173:function(e,t,r){"use strict";var a=r(17),n=r(34),i=r(171),o="".startsWith;a(a.P+a.F*r(172)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return o?o.call(t,a,r):t.slice(r,r+a.length)===a}})}}]);