(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(e,a,n){"use strict";n(49),n(24),n(19),n(18),n(67);var r=n(0),c=n.n(r),t=n(173),s=n.n(t),i=n(178),o=n(170),l=!1;a.a=function(e){var a=Object(r.useRef)(!1),t=Object(r.useRef)(null),u=Object(i.b)(),d=Object(o.a)().siteConfig,h=(void 0===d?{}:d).baseUrl,b=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var r=h+n.url;document.createElement("a").href=r,u.push(r)}}),a.current=!0)},p=function(){l?b():Promise.all([n.e(46).then(n.bind(null,189)),Promise.all([n.e(42),n.e(45)]).then(n.bind(null,191)),n.e(0).then(n.t.bind(null,119,7))]).then((function(e){var a=e[0].default,n=e[1].default;l=!0,window.searchData=a,window.DocSearch=n,b()}))},w=Object(r.useCallback)((function(a){t.current.contains(a.target)||t.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:s()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:w,onKeyDown:w,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:s()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:w,onBlur:w,ref:t}))}}}]);