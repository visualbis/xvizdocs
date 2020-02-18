(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(9),i=(a(0),a(171)),o={id:"AdvancedGauge",title:"Advanced Gauge"},l={id:"gauges/AdvancedGauge",title:"Advanced Gauge",description:'<iframe id="tag-cloud-iframe" src="https://app.powerbi.com/view?r=eyJrIjoiMDU4YTU2YjAtM2JkMy00ZGQzLWE0NGEtN2U5NGMzZmIxNGJmIiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9" ',source:"@site/docs/gauges/AdvancedGauge.mdx",permalink:"/docs/gauges/AdvancedGauge",sidebar:"sideBar",previous:{title:"Linear Gauge",permalink:"/docs/gauges/LinearGauge"},next:{title:"Tag Cloud",permalink:"/docs/utils/TagCloud"}},s=[{value:"Conditional Formatting",id:"conditional-formatting",children:[]},{value:"Number Formatting",id:"number-formatting",children:[]},{value:"Axis formatting",id:"axis-formatting",children:[]},{value:"Actual and Target Values",id:"actual-and-target-values",children:[]},{value:"Data labels",id:"data-labels",children:[]},{value:"Data &amp; Track Colors",id:"data--track-colors",children:[]},{value:"Use Cases",id:"use-cases",children:[]}],c={rightToc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("iframe",{id:"tag-cloud-iframe",src:"https://app.powerbi.com/view?r=eyJrIjoiMDU4YTU2YjAtM2JkMy00ZGQzLWE0NGEtN2U5NGMzZmIxNGJmIiwidCI6ImJjZGYyMGNhLWRkZWMtNGY0OC1hN2Y0LWRjYzExMGY3NTdmNSIsImMiOjN9",allowfullscreen:"allowfullscreen",frameborder:"0"}),Object(i.b)("p",null,"The Advanced Gauge for Power BI helps us visualize a single value within a given scale as pointed by the needle on the colored data range or chart axis.\nThis custom visual is often used in executive dashboards to show key business indicators.\nIt is a great way to represent a metric against a scale with optional qualitative representations illustrated by colors.\nThe custom visual helps in displaying the health of the KPI using a qualitative scale for simple understanding. It also indicates the progress towards a goal."),Object(i.b)("h3",{id:"conditional-formatting"},"Conditional Formatting"),Object(i.b)("p",null,"Conditional formatting which helps in visual alerting and conveys the state of the KPI whether it is doing good or bad."),Object(i.b)("h3",{id:"number-formatting"},"Number Formatting"),Object(i.b)("p",null,"Advanced Gauge allows the user to Set the scaling display and customize it, add separators, prefix and suffix values could be added"),Object(i.b)("h3",{id:"axis-formatting"},"Axis formatting"),Object(i.b)("p",null,"This visual provides more customization option for axis such as reverse axis, Show/hide labels & the ticks within the axis"),Object(i.b)("h3",{id:"actual-and-target-values"},"Actual and Target Values"),Object(i.b)("p",null,"The Actual & target values can be compared using customizable markers in the Advanced Gauge for Power BI"),Object(i.b)("h3",{id:"data-labels"},"Data labels"),Object(i.b)("p",null,"The custom visual allows the user to customize the data labels of both primary and secondary values in the Gauge"),Object(i.b)("h3",{id:"data--track-colors"},"Data & Track Colors"),Object(i.b)("p",null,"Color themes can be set for both actual and target values if no conditional formatting is added to the visualization"),Object(i.b)("h3",{id:"use-cases"},"Use Cases"),Object(i.b)("p",null,"Measure one or more KPI of an organization such as Sales and Average Selling Price of the material"),Object(i.b)("p",null,"Measuring Gross Margins for your business using a Semi-Circular Gauge"),Object(i.b)("p",null,"Visualize Actual and Target values to reach better conclusions"))}u.isMDXComponent=!0},171:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),b=r,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return a?n.a.createElement(m,l({ref:t},c,{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);