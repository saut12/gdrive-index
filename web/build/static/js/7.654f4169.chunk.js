(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[7],{41:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(10),c=n.n(a),r=n(14),o=n(8),u=n(0),s=n.n(u);function i(){var e=Object(u.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(u.useState)(!1),l=Object(o.a)(i,2),b=l[0],h=l[1],p=Object(u.useState)(""),d=Object(o.a)(p,2),f=d[0],m=d[1],w=Object(u.useState)(""),j=Object(o.a)(w,2),v=j[0],O=j[1],g=Object(u.useState)(""),k=Object(o.a)(g,2),E=k[0],x=k[1],y=function(){var e=Object(r.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return");case 2:return a(!0),t=btoa("".concat(f,":").concat(v)),r="localhost:3000"===window.location.host?"http://localhost:3001":"",e.next=7,fetch("".concat(r,"/checkAuth?basicauth=").concat(t)).then((function(e){return e.json()}));case 7:e.sent.auth?(document.cookie="basicauth=".concat(t),h(!0)):(x("Wrong username or password"),a(!1));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return b?(window.location="/",null):s.a.createElement("div",{className:"login-div"},s.a.createElement("h2",{style:{textAlign:"center"}},"Log in"),s.a.createElement("input",{type:"text",name:"username",value:f,onChange:function(e){return m(e.target.value)}}),s.a.createElement("input",{type:"password",name:"password",value:v,onChange:function(e){return O(e.target.value)}}),s.a.createElement("button",{onClick:y,disabled:n},"Login"),E&&s.a.createElement("h4",{style:{color:"red"}},E))}}}]);
//# sourceMappingURL=7.654f4169.chunk.js.map