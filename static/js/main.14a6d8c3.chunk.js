(this.webpackJsonpwhatsend=this.webpackJsonpwhatsend||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),i=n.n(r),o=(n(11),n(2)),s=n.n(o),l=n(5),d=n(3),u=(n(13),n(0));var h=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],h=i[1],p=Object(a.useState)(91),j=Object(d.a)(p,2),b=j[0],g=j[1],f=Object(a.useState)("https://restcountries.com/data/ind.svg"),v=Object(d.a)(f,2),m=v[0],O=v[1];Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var w=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{id:"heading",children:[Object(u.jsx)("img",{src:"logo192.png",alt:"logo",className:"logo"}),Object(u.jsx)("h1",{children:" WhatSend! "})]}),Object(u.jsx)("div",{id:"main",children:Object(u.jsxs)("div",{id:"container",children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsxs)("p",{children:["Send ",Object(u.jsx)("strong",{children:"Whatsapp"})," messages without saving contact number."]})}),Object(u.jsxs)("div",{id:"number",children:[Object(u.jsxs)("div",{className:"flag-code",children:[Object(u.jsx)("div",{id:"flag",children:Object(u.jsx)("img",{src:m,alt:"country flaf"})}),Object(u.jsx)("div",{className:"countries",children:Object(u.jsx)("select",{value:b,id:"countries",onChange:function(e){return function(e){var t=e.target.selectedIndex,a=e.target.childNodes[t].getAttribute("data-alpha3code"),c=n.filter((function(e){return e.alpha3Code.includes(a)}));g(e.target.value),O(c[0].flags[0])}(e)},children:n.map((function(e){return Object(u.jsxs)("option",{"data-alpha3code":e.alpha3Code,value:e.callingCodes,children:["+",e.callingCodes," ",e.name]},e.alpha3Code)}))})})]}),Object(u.jsx)("div",{className:"input",children:Object(u.jsx)("input",{className:"shadow",value:o,onChange:function(e){var t=e.target.value;t=(t=t.replace(/\s/g,"")).replace("+".concat(b),""),h(t)},type:"tel",minLength:"5",maxLength:"15",placeholder:"Enter your number!",id:"mobile-number",required:!0})}),Object(u.jsxs)("button",{onClick:function(){var e="https://api.whatsapp.com/send?phone=".concat(b).concat(o);o.length<7?alert("Invalid phone Number"):window.open(e,"_blank")},id:"message",children:[Object(u.jsx)("img",{src:"logo192.png",alt:"logo"})," ",Object(u.jsx)("span",{children:"Send Message"})," "]})]})]})}),Object(u.jsxs)("footer",{children:[Object(u.jsx)("p",{children:"This application is not associated with WhatsApp and It uses WhatsApp api to redirect the contact number."}),Object(u.jsxs)("p",{style:{marginTop:0},children:["Created with ",Object(u.jsx)("img",{width:"20",src:"heart.svg",alt:"heart"})," by"," ",Object(u.jsx)("a",{rel:"noopener",href:"https://twitter.com/bilal8492",target:"_blank",children:"Bilal"}),". Source code available at"," ",Object(u.jsx)("a",{rel:"noopener",href:"https://github.com/bilal8492/whatSend",target:"_blank",children:"Github"})]}),Object(u.jsxs)("p",{style:{marginTop:0},children:["For any feedback and bug report create an"," ",Object(u.jsx)("a",{rel:"noopener",href:"https://github.com/bilal8492/WhatSend/issues",target:"_blank",children:"Issue"})]})]})]})},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/WhatSend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/WhatSend","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):j(t,e)}))}}(),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.14a6d8c3.chunk.js.map