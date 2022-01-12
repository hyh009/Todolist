(this.webpackJsonptodolistreact=this.webpackJsonptodolistreact||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),a=c(15),s=c.n(a),r=c(5),i=(c(24),c(8)),l=c(4),d=c(0),j=function(e){var t=e.setIsDarkMode,c=e.isDarkMode,o=new Date,n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][o.getDay()],a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][o.getMonth()],s="".concat(o.getFullYear()," ").concat(a," ").concat(o.getDate()," ").concat(n);return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"modeContainer ".concat(c?"isDark":""),onClick:function(){return t((function(e){return!e}))},children:[Object(d.jsx)(i.a,{icon:l.m,style:{color:"#FFBF00",fontSize:"18px"}}),Object(d.jsx)(i.a,{icon:l.g,style:{color:"#FFBF00",fontSize:"18px"}})]}),Object(d.jsx)("h1",{className:"title",children:"My Todo List"}),Object(d.jsx)("span",{className:"time",children:s})]})},b=c(6),u=c(9),O=c(7),m=c(19),x=c(34),h={work:{icon:l.d,color:"#f5433d",colorDark:"#e24f74"},read:{icon:l.b,color:"#0b5fbe",colorDark:"#3287e7"},watch:{icon:l.h,color:"#4b02c0",colorDark:"#7a2ff3"},exercise:{icon:l.k,color:"#1e9b8a",colorDark:"#0bb9b9"},others:{icon:l.l,color:"#ff9047",colorDark:"#e0b942"}},f=function(e){var t=e.setTodos,c=e.todos,n=e.setFilters,a=e.isDarkMode,s=Object(m.a)(),j=s.register,f=s.handleSubmit,p=s.reset,v=s.formState.errors,g=function(){var e=[!1];return Object.keys(h).forEach((function(t){return e.push(!1)})),e},y=Object(o.useState)(!1),N=Object(r.a)(y,2),k=N[0],S=N[1],D=Object(o.useState)(!1),C=Object(r.a)(D,2),w=C[0],T=C[1],M=Object(o.useState)(g()),I=Object(r.a)(M,2),F=I[0],z=I[1],J=Object(o.useState)(g()),B=Object(r.a)(J,2),E=B[0],A=B[1],L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;"category"===t?(z((function(e){return e.map((function(e,t){return t===o}))})),n((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},t,c))}))):"completed"===t?(A((function(e){return e.map((function(e,t){return t===o}))})),n((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(u.a)({},t,c.toString()))}))):n((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(u.a)({},e.target.name,e.target.value))}))};return Object(d.jsxs)("form",{className:"todoForm",onSubmit:f((function(e){t([].concat(Object(b.a)(c),[Object(O.a)(Object(O.a)({},e),{},{completed:!1,id:Object(x.a)()})])),p({todo:"",category:"",date:""})})),children:[Object(d.jsxs)("div",{className:"iconContainer largeIcon",children:[Object(d.jsxs)("div",{className:"icon iconGrid",onClick:function(){S((function(e){return!e}))},children:[Object(d.jsx)(i.a,{icon:l.i,style:{color:"black",fontSize:"24px"}}),Object(d.jsx)("span",{className:"small",children:"\u65b0\u589e"})]}),Object(d.jsxs)("div",{className:"icon",onClick:function(){T((function(e){return!e}))},children:[Object(d.jsx)(i.a,{icon:l.f,style:{color:"black",fontSize:"22px"}}),Object(d.jsx)("span",{className:"small",children:"\u7be9\u9078"})]})]}),Object(d.jsxs)("div",{className:"inputContainer ".concat(k?"show":""),children:[Object(d.jsx)("input",Object(O.a)({type:"text",name:"todo",placeholder:"\u8f38\u5165\u5f85\u8fa6\u4e8b\u9805(20\u5b57\u5167)...",className:"InputTodo text"},j("todo",{required:"\u8acb\u586b\u5165\u5f85\u8fa6\u4e8b\u9805",maxLength:{value:20,message:"\u5f85\u8fa6\u4e8b\u9805\u4e0d\u80fd\u8d85\u904e20\u5b57"}}))),Object(d.jsxs)("select",Object(O.a)(Object(O.a)({name:"category",className:"category"},j("category",{required:"\u8acb\u9078\u64c7\u5206\u985e"})),{},{children:[Object(d.jsx)("option",{value:"",children:"\u9078\u64c7\u5206\u985e"}),Object(d.jsx)("option",{value:"work",children:"\u5de5\u4f5c"}),Object(d.jsx)("option",{value:"read",children:"\u95b1\u8b80"}),Object(d.jsx)("option",{value:"watch",children:"\u5f71\u7247"}),Object(d.jsx)("option",{value:"exercise",children:"\u904b\u52d5"}),Object(d.jsx)("option",{value:"others",children:"\u5176\u4ed6"})]})),Object(d.jsx)("input",Object(O.a)({name:"date",className:"InputTodo date",placeholder:"mm/dd/yyyy",type:"text",onFocus:function(e){return e.target.type="date"}},j("date",{required:"\u8acb\u9078\u64c7\u5b8c\u6210\u671f\u9650",onBlur:function(e){return e.target.type="text"}}))),Object(d.jsx)("button",{className:"addTodo",children:Object(d.jsx)(i.a,{icon:l.i,style:{color:"limegreen",fontSize:"36px"}})})]}),Object(d.jsxs)("div",{className:"errorContainer",children:[v.todo&&Object(d.jsx)("span",{className:"error",children:v.todo.message}),v.category&&Object(d.jsx)("span",{className:"error",children:v.category.message}),v.date&&Object(d.jsx)("span",{className:"error",children:v.date.message})]}),Object(d.jsxs)("div",{className:"iconContainer hide ".concat(w?"show":""),children:[Object(d.jsx)("div",{className:"icon status",style:{background:a&&E[0]?"#270557":a&&!E[0]?"black":E[0]?"teal":"#545454"},onClick:function(e){L(e,"completed","all",0)},children:Object(d.jsx)("span",{className:"small",children:"\u5168\u90e8"})}),Object(d.jsx)("div",{className:"icon status",style:{background:a&&E[1]?"#270557":a&&!E[1]?"black":E[1]?"teal":"#545454"},onClick:function(e){L(e,"completed",!1,1)},children:Object(d.jsx)("span",{className:"small",children:"\u5f85\u5b8c\u6210"})}),Object(d.jsx)("div",{className:"icon status",style:{background:a&&E[2]?"#270557":a&&!E[2]?"black":E[2]?"teal":"#545454"},onClick:function(e){L(e,"completed",!0,2)},children:Object(d.jsx)("span",{className:"small",children:"\u5b8c\u6210"})})]}),Object(d.jsxs)("div",{className:"iconContainer hide ".concat(w?"show":""),children:[Object(d.jsx)("div",{className:"icon",title:"all",onClick:function(e){L(e,"category","all",0)},children:Object(d.jsx)(i.a,{icon:l.c,style:{color:a&&F[0]?"white":a?"#c270e2":F[0]?"black":"gray",fontSize:"30px"}})}),Object.entries(h).map((function(e,t){var c=Object(r.a)(e,2),o=c[0],n=c[1];return Object(d.jsx)("div",{className:"icon",title:o,onClick:function(e){L(e,"category",o,t+1)},children:Object(d.jsx)(i.a,{icon:n.icon,style:{color:a&&F[t+1]?n.colorDark:a?"#c270e2":F[t+1]?n.color:"gray",fontSize:"30px"}})},Object(x.a)())}))]}),Object(d.jsxs)("div",{className:"thinContainer",children:[Object(d.jsxs)("div",{className:"filterContainer large",children:[Object(d.jsxs)("select",{onChange:L,name:"category",className:"filter",children:[Object(d.jsx)("option",{value:"all",children:"\u5206\u985e(\u5168\u90e8)"}),Object(d.jsx)("option",{value:"work",children:"\u5de5\u4f5c"}),Object(d.jsx)("option",{value:"read",children:"\u95b1\u8b80"}),Object(d.jsx)("option",{value:"watch",children:"\u5f71\u7247"}),Object(d.jsx)("option",{value:"exercise",children:"\u904b\u52d5"}),Object(d.jsx)("option",{value:"others",children:"\u5176\u4ed6"})]}),Object(d.jsxs)("select",{onChange:L,name:"completed",className:"filter",children:[Object(d.jsx)("option",{value:"all",children:"\u72c0\u614b(\u5168\u90e8)"}),Object(d.jsx)("option",{value:!0,children:"\u5b8c\u6210"}),Object(d.jsx)("option",{value:!1,children:"\u5f85\u5b8c\u6210"})]})]}),Object(d.jsxs)("div",{className:"filterContainer",children:[Object(d.jsxs)("select",{onChange:function(e){e.preventDefault();var o=Object(b.a)(c);"close"===e.target.value?o.sort((function(e,t){return new Date(e.date)-new Date(t.date)})):o.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),t(o)},name:"completed",className:"filter",children:[Object(d.jsx)("option",{value:"",children:"\u4f9d\u6642\u9593\u6392\u5e8f"}),Object(d.jsx)("option",{value:"close",children:"\u65e5\u671f\u6700\u8fd1"}),Object(d.jsx)("option",{value:"far",children:"\u65e5\u671f\u6700\u9060"})]}),Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),window.confirm("\u78ba\u5b9a\u522a\u9664\u6240\u6709\u6e05\u55ae\u55ce\uff1f")&&t([])},className:"filter Button",children:"\u6e05\u7a7a\u6e05\u55ae"})]})]})]})},p=function(e){var t,c,o,n=e.todos,a=e.setTodos,s=e.todo,r=e.isDarkMode;return localStorage.setItem("todolists",JSON.stringify(n)),Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsxs)("li",{className:"todoItem ".concat(s.completed?"completed":""),children:[Object(d.jsxs)("span",{className:"textItem",children:[Object(d.jsx)(i.a,{icon:(null===(t=h[s.category])||void 0===t?void 0:t.icon)||l.j,style:{color:r?null===(c=h[s.category])||void 0===c?void 0:c.colorDark:null===(o=h[s.category])||void 0===o?void 0:o.color,height:"30px",width:"30px"}}),s.todo]}),Object(d.jsx)("span",{className:"dateItem",children:s.date})]}),Object(d.jsxs)("div",{className:"buttonContainer",children:[Object(d.jsx)("button",{className:"completeBtn",onClick:function(e){e.preventDefault(),a(n.map((function(e){return e.id===s.id?Object(O.a)(Object(O.a)({},e),{},{completed:!e.completed}):e})))},children:Object(d.jsx)(i.a,{icon:l.e,style:{fontSize:"30px",color:"green"}})}),Object(d.jsx)("button",{className:"removeBtn",onClick:function(e){e.preventDefault(),a((function(){return n.filter((function(e){return e.id!==s.id}))}))},children:Object(d.jsx)(i.a,{icon:l.n,style:{fontSize:"30px",color:"#CD5C5C"}})})]})]})},v=function(e){var t=e.todos,c=e.setTodos,o=e.filteredTodos,n=e.isDarkMode;return Object(d.jsx)("div",{className:"todoContainer",children:Object(d.jsx)("ul",{className:"todolist",children:null===o||void 0===o?void 0:o.map((function(e){return Object(d.jsx)(p,{todo:e,setTodos:c,todos:t,isDarkMode:n},e.id)}))})})},g=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1],a=function(){window.pageYOffset>300?n(!0):n(!1)};return Object(o.useEffect)((function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[]),Object(d.jsx)("div",{className:"scrollToTop",style:{display:c?"flex":"none"},children:Object(d.jsx)("button",{className:"toTopButton",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(d.jsx)(i.a,{icon:l.a,style:{color:"#69d2e7",fontSize:"50px"}})})})},y=c.p+"static/media/empty.e2ef6c52.svg",N=c.p+"static/media/emptyDark.4e455813.svg",k=c(16);var S=function(){var e=Object(o.useState)((function(){var e=localStorage.getItem("todolists");return JSON.parse(e)||[]})),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(o.useState)({}),s=Object(r.a)(a,2),i=s[0],l=s[1],b=Object(o.useState)([]),u=Object(r.a)(b,2),O=u[0],m=u[1],x=Object(o.useState)(Boolean(JSON.parse(localStorage.getItem("mode")))),h=Object(r.a)(x,2),p=h[0],S=h[1];return Object(o.useEffect)((function(){localStorage.setItem("todolists",JSON.stringify(c)),function(){if(i){var e=c.filter((function(e){return Object.entries(i).every((function(t){var c,o=Object(r.a)(t,2),n=o[0],a=o[1];return(null===(c=e[n])||void 0===c?void 0:c.toString())===a||"all"===a}))}));m(e)}else m(c)}()}),[c,i]),Object(o.useEffect)((function(){localStorage.setItem("mode",JSON.stringify(p))}),[p]),Object(d.jsxs)("div",{className:"App ".concat(p?"AppDark":""),children:[p&&Object(d.jsx)(k.a,{children:Object(d.jsx)("style",{children:"body { background-color: #212421; }"})}),Object(d.jsx)(j,{setIsDarkMode:S,isDarkMode:p}),Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(f,{todos:c,setTodos:n,setFilters:l,isDarkMode:p}),O.length>0&&Object(d.jsx)("div",{className:"line",children:"".concat(O.length,"/").concat(c.length)}),!O.length>0&&Object(d.jsxs)("div",{className:"background",children:[Object(d.jsx)("img",{className:"img",src:p?N:y,alt:""}),Object(d.jsx)("span",{className:"text",children:"Oops!\u6c92\u6709\u8cc7\u6599..."})]}),Object(d.jsx)(v,{todos:c,setTodos:n,filteredTodos:O,isDarkMode:p}),Object(d.jsx)(g,{})]})]})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9cb79e42.chunk.js.map