(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),i=r(9),a=(r(0),r(183)),o=(r(185),{id:"HierarchyTree",title:"Hierarchy Tree"}),c={id:"utils/HierarchyTree",title:"Hierarchy Tree",description:"// Add to the top of the file below the front matter.",source:"@site/docs/utils/HierarchyTree.mdx",permalink:"/docs/utils/HierarchyTree",sidebar:"sideBar",previous:{title:"Tag Cloud",permalink:"/docs/utils/TagCloud"},next:{title:"Parallel Coordinates",permalink:"/docs/utils/ParallelCoordinates"}},l=[{value:"Visualize Node Contribution",id:"visualize-node-contribution",children:[]},{value:"Mini Map",id:"mini-map",children:[]},{value:"Search, Find, Seek",id:"search-find-seek",children:[]},{value:"Expand on Demand",id:"expand-on-demand",children:[]},{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiNjM3MjgxYmItZDBmMy00ZjM5LThkZmMtOTBhMTNiODdjOTU0IiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(a.b)("p",null,"The Hierarchical Tree for Power BI is an advanced custom visual built to showcase hierarchies in a more visually appealing manner.\nIt comes handy with a lot of features and the flexibility to customize it in such a way that it suits a lot of business requirements where we deal with Hierarchies.\nIt is different from visual in the form of a table or at times in the form of a selector."),Object(a.b)("h3",{id:"visualize-node-contribution"},"Visualize Node Contribution"),Object(a.b)("p",null,"Contribution of a particular node is displayed on the parent node that can be configured for the immediate / the parent node"),Object(a.b)("h3",{id:"mini-map"},"Mini Map"),Object(a.b)("p",null,"Easy Navigation within the Hierarchical Tree can be facilitated with the in- built mini map functionality"),Object(a.b)("h3",{id:"search-find-seek"},"Search, Find, Seek"),Object(a.b)("p",null,"Advanced Search Option in the Hierarchical Tree for Power BI lets you search and find important specific data present in the table."),Object(a.b)("h3",{id:"expand-on-demand"},"Expand on Demand"),Object(a.b)("p",null,"Expand / Decompose each node in the Hierarchal Tree for Power BI to view more insights within that categorical member"),Object(a.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(a.b)("p",null,"Alerting options for the progress bar and for the nodes can be configured "),Object(a.b)("h3",{id:"use-cases"},"Use Cases"),Object(a.b)("p",null,"Analyze Performance and contribution of individual nodes to the parent Node"),Object(a.b)("p",null,"Model your business needs and create the budget for upcoming year"),Object(a.b)("p",null,"Analyze the important KPI\u2019s in a business scenario using Hierarchical Tree Node Structure"))}u.isMDXComponent=!0},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||a;return r?i.a.createElement(h,c({ref:t},s,{components:r})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},184:function(e,t,r){"use strict";var n=r(0),i=r(52);t.a=function(){return Object(n.useContext)(i.a)}},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r(186);var n=r(184);function i(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},186:function(e,t,r){"use strict";var n=r(12),i=r(24),a=r(187),o="".startsWith;n(n.P+n.F*r(188)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,r):t.slice(r,r+n.length)===n}})},187:function(e,t,r){var n=r(76),i=r(25);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},188:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}}}]);