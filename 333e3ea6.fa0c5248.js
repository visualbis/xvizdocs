(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(184)),i=(n(185),{id:"GanttChart",title:"Gantt Chart"}),l={id:"special/GanttChart",isDocsHomePage:!1,title:"Gantt Chart",description:"// Add to the top of the file below the front matter.",source:"@site/docs/special/GanttChart.mdx",permalink:"/docs/special/GanttChart",sidebar:"sideBar",previous:{title:"Bullet Chart",permalink:"/docs/special/BulletChart"},next:{title:"Linear Gauge",permalink:"/docs/gauges/LinearGauge"}},c=[{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Multi-Mode Functionality",id:"multi-mode-functionality",children:[]},{value:"Zoom Range",id:"zoom-range",children:[]},{value:"Status Flags",id:"status-flags",children:[]},{value:"Display Additional Columns",id:"display-additional-columns",children:[]},{value:"Milestones",id:"milestones",children:[]},{value:"Date Formats",id:"date-formats",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],s={rightToc:c};function u(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiN2IxYWI5MWMtZjgxMy00MGZiLWJhMDAtOWE1Mjk1MGU0MTM5IiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(o.b)("p",null,"The Gantt Chart for Power BI shows activities (tasks or events) displayed along a given timeline.\nOn the left side of the chart is the Data Grid, which displays lists all the tasks as part of the project or work breakdown the structure to be completed.\nIt is one of the most widely used project planning tools. It helps you visualize your project plan to articulate, communicate and monitor the progress."),Object(o.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(o.b)("p",null,"The projects that have missed deadlines can be spotted easily using the advanced conditional formatting option"),Object(o.b)("h3",{id:"multi-mode-functionality"},"Multi-Mode Functionality"),Object(o.b)("p",null,"This Feature enables you to Switch between Gantt chart & Gantt Resource chart visualization in One Click"),Object(o.b)("h3",{id:"zoom-range"},"Zoom Range"),Object(o.b)("p",null,"This feature enables you to range on your zoom to have a dynamic visual in the Gantt Chart"),Object(o.b)("h3",{id:"status-flags"},"Status Flags"),Object(o.b)("p",null,"Status Flag Alerting in addition to conditional formatting to spot the projects that are over running deadlines"),Object(o.b)("h3",{id:"display-additional-columns"},"Display Additional Columns"),Object(o.b)("p",null,"Apart from the project progress displayed in the Gantt Chart, the visual enables you to add more columns to provide information"),Object(o.b)("h3",{id:"milestones"},"Milestones"),Object(o.b)("p",null,"Milestones can be added to the Gantt Chart to keep track of deliverables"),Object(o.b)("h3",{id:"date-formats"},"Date Formats"),Object(o.b)("p",null,"Extensive Support for the Date formats to provide insights and to track performance in Gantt Chart for Power BI"),Object(o.b)("h3",{id:"use-cases"},"Use Cases"),Object(o.b)("p",null,"Analyze progress made by task groups functioning in an Organization by pictorial representation of data "),Object(o.b)("p",null,"Handling multiple resources across various timelines can be catered using this visual"),Object(o.b)("p",null,"Additional information regarding projects can be viewed on Power BI itself, without having to use additional tools"))}u.isMDXComponent=!0},183:function(t,e,n){"use strict";var r=n(0),a=n(52);e.a=function(){return Object(r.useContext)(a.a)}},184:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=a.a.createContext({}),u=function(t){var e=a.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l({},e,{},t)),n},d=function(t){var e=u(t.components);return a.a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},f=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(b,l({ref:e},s,{components:n})):a.a.createElement(b,l({ref:e},s))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},185:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(77);var r=n(183),a=n(186);function o(t,e){var n=void 0===e?{}:e,o=n.forcePrependBaseUrl,i=void 0!==o&&o,l=n.absolute,c=void 0!==l&&l,s=Object(r.a)().siteConfig,u=(s=void 0===s?{}:s).baseUrl,d=void 0===u?"/":u,p=s.url;if(!t)return t;if(i)return d+t;if(!Object(a.a)(t))return t;var f=d+t.replace(/^\//,"");return c?p+f:f}},186:function(t,e,n){"use strict";function r(t){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(t)}n.d(e,"a",(function(){return r}))}}]);