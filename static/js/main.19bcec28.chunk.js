(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(t,e,c){},33:function(t,e,c){"use strict";c.r(e);var n=c(23),a=c.n(n),s=c(8),i=c(2),r=(c(28),c(29),c(30),c(17)),b=c.n(r),j=c(3),l=function(t){var e=t.to,c=t.text;return Object(j.jsx)(s.b,{to:e,className:function(t){var e=t.isActive;return b()("navbar-item",{"is-active":e})},children:c})},o=function(){return Object(j.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow has-navbar-fixed-top","data-cy":"Nav",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(l,{to:"/",text:"Home"}),Object(j.jsx)(l,{to:"/tabs",text:"Tabs"})]})})})},d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{}),Object(j.jsx)("div",{className:"section",children:Object(j.jsx)(i.b,{})})]})},x=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Home page"})})},h=function(t){var e=t.tabs,c=t.selectedTabId,n=e.find((function(t){return t.id===c}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tabs is-boxed",children:Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":t.id===c}),children:Object(j.jsx)(s.a,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),Object(j.jsx)("div",{className:"block","data-cy":"TabContent",children:n?n.content:"Please select a tab"})]})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],m=function(){var t=Object(i.q)().tabId;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Tabs page"}),Object(j.jsx)(h,{tabs:u,selectedTabId:t})]})},O=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"Page not found"}),Object(j.jsx)("img",{src:"https://i.redd.it/0wi4mopf1zm21.gif",alt:"Trevolta",style:{width:"100%"}})]})},f=c(0),v=function(){var t=Object(i.o)();return Object(f.useEffect)((function(){t("/not-found")}),[]),null},p=Object(s.c)([{path:"/",element:Object(j.jsx)(d,{}),errorElement:Object(j.jsx)(v,{}),children:[{index:!0,element:Object(j.jsx)(x,{})},{path:"home",element:Object(j.jsx)(i.a,{to:"/",replace:!0})},{path:"tabs",element:Object(j.jsx)(m,{}),children:[{path:":tabId"}]},{path:"not-found",element:Object(j.jsx)(O,{})}]}]),N=function(){return Object(j.jsx)(i.d,{router:p})};a.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.19bcec28.chunk.js.map