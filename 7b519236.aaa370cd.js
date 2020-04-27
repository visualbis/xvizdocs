(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var i=r(1),a=r(9),n=(r(0),r(183)),o=(r(185),{id:"ParallelCoordinates",title:"Parallel Coordinates"}),l={id:"utils/ParallelCoordinates",title:"Parallel Coordinates",description:"// Add to the top of the file below the front matter. ",source:"@site/docs/utils/ParallelCoordinates.mdx",permalink:"/docs/utils/ParallelCoordinates",sidebar:"sideBar",previous:{title:"Hierarchy Tree",permalink:"/docs/utils/HierarchyTree"},next:{title:"Hierarchical Filter",permalink:"/docs/filters/HierarchicalFilter"}},s=[{value:"Number Formatting",id:"number-formatting",children:[]},{value:"Data Labels",id:"data-labels",children:[]},{value:"Shared Tooltip",id:"shared-tooltip",children:[]},{value:"Visualize Multi Level Hierarchies",id:"visualize-multi-level-hierarchies",children:[]},{value:"Axis Formatting",id:"axis-formatting",children:[]},{value:"Legend customization",id:"legend-customization",children:[]},{value:"Utilities menu",id:"utilities-menu",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],c={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiZjM1OWFlN2UtMGU0Zi00NWM5LTliZjQtNGNmYzgwMDMzN2FlIiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(n.b)("p",null,"The Parallel coordinates for Power BI are used to plot multivariate numerical data.\nThe ideal scenario for this visualization is to compare many variables together and seeing the relationships between them.\nFor example, if you had to compare an array of products with the same attributes.\nThe ability of this custom visual isn\u2019t to communicate the fact in the data to the users, but rather in their ability to bring some useful multivariate patterns and comparisons when used interactively for analysis."),Object(n.b)("h3",{id:"number-formatting"},"Number Formatting"),Object(n.b)("p",null,"Parallel Coordinates allows the user to Set the scaling display and customize it, add separators, prefix and suffix values could be added"),Object(n.b)("h3",{id:"data-labels"},"Data Labels"),Object(n.b)("p",null,"Parallel Coordinates for Power BI allows the user to customize the orientations, overlap labels and show background"),Object(n.b)("h3",{id:"shared-tooltip"},"Shared Tooltip"),Object(n.b)("p",null,"This feature in Parallel Coordinates Chart makes it easier to compare the current hovered value across all the other measures"),Object(n.b)("h3",{id:"visualize-multi-level-hierarchies"},"Visualize Multi Level Hierarchies"),Object(n.b)("p",null,"It helps you to visualize unlimited categories in the form of hierarchies seamlessly"),Object(n.b)("h3",{id:"axis-formatting"},"Axis Formatting"),Object(n.b)("p",null,"This feature allows you to customize the position of axis and category axis along with other options like reversal, toggling of show/hide."),Object(n.b)("h3",{id:"legend-customization"},"Legend customization"),Object(n.b)("p",null,"This custom visual lets you arrange the position of the legend, even enable the RTL Support"),Object(n.b)("h3",{id:"utilities-menu"},"Utilities menu"),Object(n.b)("p",null,"Export your visualization as PNG, PDF etc. This menu also contains features such as Lasso, Reverse Lasso for the custom visual."),Object(n.b)("h3",{id:"use-cases"},"Use Cases"),Object(n.b)("p",null,"Comparing a product across different measures such as sales, profit, discount"),Object(n.b)("p",null,"Gives a clear path of information in more intuitive manner, to figure out patterns, exceptions and observations"),Object(n.b)("p",null,"Enables you to visually identify how a KPI changes by changing the values of other parameters in the chart"))}u.isMDXComponent=!0},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(i.forwardRef)((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=i,f=d["".concat(o,".").concat(p)]||d[p]||h[p]||n;return r?a.a.createElement(f,l({ref:t},c,{components:r})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<n;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},184:function(e,t,r){"use strict";var i=r(0),a=r(52);t.a=function(){return Object(i.useContext)(a.a)}},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(186);var i=r(184);function a(e){var t=(Object(i.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},186:function(e,t,r){"use strict";var i=r(12),a=r(24),n=r(187),o="".startsWith;i(i.P+i.F*r(188)("startsWith"),"String",{startsWith:function(e){var t=n(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return o?o.call(t,i,r):t.slice(r,r+i.length)===i}})},187:function(e,t,r){var i=r(76),a=r(25);e.exports=function(e,t,r){if(i(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},188:function(e,t,r){var i=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);