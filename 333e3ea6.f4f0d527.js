(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{138:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(171)),o=(n(172),{id:"GanttChart",title:"Gantt Chart"}),s={id:"special/GanttChart",title:"Gantt Chart",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter. ",source:"@site/docs/special/GanttChart.mdx",permalink:"/docs/special/GanttChart",sidebar:"sideBar",previous:{title:"Bullet Chart",permalink:"/docs/special/BulletChart"},next:{title:"Linear Gauge",permalink:"/docs/gauges/LinearGauge"}},l=[{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Multi-Mode Functionality",id:"multi-mode-functionality",children:[]},{value:"Zoom Range",id:"zoom-range",children:[]},{value:"Status Flags",id:"status-flags",children:[]},{value:"Display Additional Columns",id:"display-additional-columns",children:[]},{value:"Milestones",id:"milestones",children:[]},{value:"Date Formats",id:"date-formats",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],c={rightToc:l};function u(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiN2IxYWI5MWMtZjgxMy00MGZiLWJhMDAtOWE1Mjk1MGU0MTM5IiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(i.b)("p",null,"The Gantt Chart for Power BI shows activities (tasks or events) displayed along a given timeline.\nOn the left side of the chart is the Data Grid, which displays lists all the tasks as part of the project or work breakdown the structure to be completed.\nIt is one of the most widely used project planning tools. It helps you visualize your project plan to articulate, communicate and monitor the progress."),Object(i.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(i.b)("p",null,"The projects that have missed deadlines can be spotted easily using the advanced conditional formatting option"),Object(i.b)("h3",{id:"multi-mode-functionality"},"Multi-Mode Functionality"),Object(i.b)("p",null,"This Feature enables you to Switch between Gantt chart & Gantt Resource chart visualization in One Click"),Object(i.b)("h3",{id:"zoom-range"},"Zoom Range"),Object(i.b)("p",null,"This feature enables you to range on your zoom to have a dynamic visual in the Gantt Chart"),Object(i.b)("h3",{id:"status-flags"},"Status Flags"),Object(i.b)("p",null,"Status Flag Alerting in addition to conditional formatting to spot the projects that are over running deadlines"),Object(i.b)("h3",{id:"display-additional-columns"},"Display Additional Columns"),Object(i.b)("p",null,"Apart from the project progress displayed in the Gantt Chart, the visual enables you to add more columns to provide information"),Object(i.b)("h3",{id:"milestones"},"Milestones"),Object(i.b)("p",null,"Milestones can be added to the Gantt Chart to keep track of deliverables"),Object(i.b)("h3",{id:"date-formats"},"Date Formats"),Object(i.b)("p",null,"Extensive Support for the Date formats to provide insights and to track performance in Gantt Chart for Power BI"),Object(i.b)("h3",{id:"use-cases"},"Use Cases"),Object(i.b)("p",null,"Analyze progress made by task groups functioning in an Organization by pictorial representation of data "),Object(i.b)("p",null,"Handling multiple resources across various timelines can be catered using this visual"),Object(i.b)("p",null,"Additional information regarding projects can be viewed on Power BI itself, without having to use additional tools"))}u.isMDXComponent=!0},170:function(t,e,n){"use strict";var r=n(0),a=n(48);e.a=function(){return Object(r.useContext)(a.a)}},171:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=a.a.createContext({}),u=function(t){var e=a.a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s({},e,{},t)),n},d=function(t){var e=u(t.components);return a.a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},f=Object(r.forwardRef)((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return n?a.a.createElement(h,s({ref:e},c,{components:n})):a.a.createElement(h,s({ref:e},c))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(176);var r=n(170);function a(t){var e=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?n+t.slice(1):n+t}},174:function(t,e,n){var r=n(66),a=n(23);t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(t))}},175:function(t,e,n){var r=n(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(a){}}return!0}},176:function(t,e,n){"use strict";var r=n(17),a=n(34),i=n(174),o="".startsWith;r(r.P+r.F*n(175)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return o?o.call(e,r,n):e.slice(n,n+r.length)===r}})}}]);