(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[6],{32:function(e,t,a){"use strict";t.a=function(e){var t,a=e<0,n=["B","kB","MB","GB","TB","PB","EB","ZB","YB"];return a&&(e=-e),e<1?(a?"-":"")+e+" B":(t=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),n.length-1),(a?"-":"")+(e=Number((e/Math.pow(1e3,t)).toFixed(2)))+" "+n[t])}},33:function(e,t,a){"use strict";t.a=function(e){var t=new Date(e);return"".concat(t.getHours(),":").concat(t.getMinutes()," on ").concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())}},34:function(e,t,a){"use strict";t.a=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},36:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(0),c=a.n(r),i=a(1),o=a(35),l=a(11),s=a(32),m=a(33),u=a(34);var d=function(e){var t=e.id,a=e.name,n=e.modifiedTime,r=e.iconLink,i=e.mimeType,o=e.size,d="application/vnd.google-apps.folder"===i;return c.a.createElement("div",{className:"drive-item"},c.a.createElement(l.b,{to:d?"/".concat(t):"/file/".concat(t),className:"drive-item-main"},c.a.createElement("div",{className:"row items-center"},c.a.createElement("img",{className:"drive-item-icon",src:r,alt:i}),c.a.createElement("h3",{className:"drive-item-title"},a)),c.a.createElement("div",{className:"drive-item-info"},c.a.createElement("div",{className:"row flex-wrap space-between"},c.a.createElement("h4",null,"Modified at: ",Object(m.a)(n)),o&&c.a.createElement("h4",null,"Size: ",Object(s.a)(o))))),c.a.createElement("button",{className:"no-border drive-item-btn",onClick:function(){navigator.share?navigator.share({title:a,url:"".concat(window.location.origin,"/").concat(d?"share":"file","/").concat(t)}):Object(u.a)("".concat(window.location.origin,"/").concat(d?"share":"file","/").concat(t))}},c.a.createElement("span",{className:"btn-icon"},c.a.createElement("ion-icon",{name:navigator.share?"share-social-outline":"copy-outline"}))))};function f(e){var t=e.search,a=e.share,l=Object(r.useState)(""),s=Object(n.a)(l,2),m=s[0],u=s[1],f=Object(i.f)(a?"/share/:folderId":"/:folderId"),h=f?f.params.folderId:"",v=Object(o.a)("/api/folder/".concat(h),(function(e){return fetch(e).then((function(e){return e.json()}))})),p=v.data,g=v.error,E=Object(r.useMemo)((function(){return m.length<3?[]:p.files.filter((function(e){return-1!==e.name.toLowerCase().indexOf(m.toLowerCase())}))}),[m,p]);return p||g?g?c.a.createElement("h4",{style:{textAlign:"center",color:"red"}},"Cannot find the folder"):c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("input",{type:"text",name:"query",value:m,placeholder:"Search in this folder...",onChange:function(e){return u(e.target.value)}}),m.length>=3?c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:"drive-results-title"},"Search results:"),c.a.createElement("div",{className:"drive-items"},E.map((function(e){return c.a.createElement(d,Object.assign({key:e.id},e))})))):c.a.createElement("div",{className:"drive-items"},p.files.map((function(e){return c.a.createElement(d,Object.assign({key:e.id},e))})))):c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("input",{type:"text",name:"query",value:m,placeholder:"Search in this folder...",onChange:function(e){return u(e.target.value)}}),c.a.createElement("div",{className:"loading-div"}))}f.defaultProps={search:!0,share:!1};t.default=f}}]);
//# sourceMappingURL=6.dd8483cc.chunk.js.map