(this["webpackJsonpchatsystem-frontend"]=this["webpackJsonpchatsystem-frontend"]||[]).push([[0],{113:function(e,t,n){},114:function(e,t,n){},149:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var c,a=n(2),s=n(0),r=n.n(s),i=n(30),o=n.n(i),j=(n(112),n(113),n(114),n(29)),l=n(10),d=n(106),u=n(16),b=n(98),h=n(99),x=n.n(h),O=(n(149),function(e){var t=e.room;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"infoBar",children:[Object(a.jsx)("div",{className:"leftInnerContainer",children:Object(a.jsxs)("h3",{children:["Room: ",t]})}),Object(a.jsx)("div",{className:"rightInnerContainer",children:Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)("button",{children:"Leave Room"})})})]})})}),m=n(202),p=(n(154),n(105)),v=n(43),f=function(e){var t=e.message,n=e.setMessage,c=e.sendMessage,r=Object(s.useState)(!1),i=Object(u.a)(r,2),o=i[0],j=i[1];return Object(a.jsx)("div",{children:Object(a.jsx)("form",{children:Object(a.jsxs)(m.a,{className:"bg-dark text-white ",children:[o?Object(a.jsx)(p.a,{onSelect:function(e){var t="".concat(e.native);n(t)}}):null,Object(a.jsxs)("div",{className:"inputMagic",children:[Object(a.jsx)(v.b,{size:40,onClick:function(){return j(!o)},style:{cursor:"pointer"}}),Object(a.jsx)("input",{type:"text",value:t,placeholder:"Type something .... ",onChange:function(e){n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?c(e):null}}),Object(a.jsx)("button",{onClick:function(e){return c(e)},children:"Send"})]})]})})})},g=n(63),y=n.n(g),C=n(101),N=n(199),k=n(200),S=function(e){var t=e.message,n=t.user,c=t.text,s=t.time,r=e.name;console.log(c);var i=!1,o=r.trim().toLowerCase();return n===o&&(i=!0),i?Object(a.jsx)("div",{className:"messageContainer justifyEnd",style:{float:"right"},children:Object(a.jsx)("div",{className:"messageBox",children:Object(a.jsxs)("p",{className:"messageText",style:{display:"flex"},children:[Object(a.jsx)("span",{style:{color:"grey",fontSize:"12px",marginRight:"1rem"},children:s}),Object(a.jsx)("span",{style:{backgroundColor:"#61dafb",padding:"0.75rem",borderRadius:"10%"},children:c})," ",Object(a.jsxs)("b",{children:[" \xa0 ",o]}),Object(a.jsx)("div",{style:{height:"25px",width:"25px",borderRadius:"50%",backgroundColor:"green",marginRight:"15px"}})]})})}):Object(a.jsx)("div",{className:"messageContainer justifyStart ",children:Object(a.jsx)("div",{className:"messageBox",children:Object(a.jsxs)("p",{className:"messageText",style:{display:"flex"},children:[Object(a.jsx)("div",{style:{height:"25px",width:"25px",borderRadius:"50%",backgroundColor:"blue",marginRight:"15px"}}),Object(a.jsxs)("b",{children:[" ",n]})," \xa0  ",Object(a.jsx)("span",{style:{backgroundColor:"#61dafb",padding:"0.75rem",borderRadius:"10%"},children:c}),Object(a.jsx)("span",{style:{color:"grey",fontSize:"12px",marginLeft:"1rem"},children:s})]})})})},w=n(201),I=function(e){var t=e.users,n=e.active;return Object(a.jsx)("div",{style:{backgroundColor:"rebeccapurple"},className:"col-2",children:t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{style:{color:"white "},children:"Online:"}),Object(a.jsx)("div",{className:"activeContainer",children:Object(a.jsx)(w.a,{children:t.map((function(e,t){var c=e.username;return Object(a.jsx)("div",{className:"activeItem text-center",children:Object(a.jsx)(w.a.Item,{action:!0,variant:"info",onClick:n,children:c})},t)}))})})]}):null})},R=n(102),B=n.n(R),E=n(103),M=n.n(E),T=function(e){var t=e.message,n=e.name,c=e.users,r=Object(s.useState)(!1),i=Object(u.a)(r,2),o=i[0],j=i[1],l=Object(s.useState)(),d=Object(u.a)(l,2),b=d[0],h=d[1];return Object(s.useEffect)((function(){function e(){return(e=Object(C.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://chatting-zone.herokuapp.com/api/chat/");case 2:t=e.sent,h(t.data.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:"d-flex",style:{height:"50vh",position:"relative"},children:[o?Object(a.jsxs)(N.a.Dialog,{style:{width:"100vh",position:"absolute",zIndex:"1"},className:"col-5",children:[Object(a.jsx)(N.a.Header,{onClick:function(){return j(!1)},closeButton:!0,children:Object(a.jsx)(N.a.Title,{children:"Private chat"})}),Object(a.jsx)(N.a.Body,{}),Object(a.jsx)(N.a.Footer,{children:Object(a.jsx)(k.a.Control,{type:"email",placeholder:"Type something ....."})})]}):null,Object(a.jsx)(M.a,{className:"col-10",children:Object(a.jsxs)(m.a,{style:{border:"none",height:"50vh"},children:[null===b||void 0===b?void 0:b.map((function(e){return Object(a.jsx)("p",{children:e.message})})),t.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsx)(S,{message:e,name:n})})}))]})}),Object(a.jsx)(I,{users:c,active:function(){return j(!0)}})]})},z=function(e){var t=e.location,n=Object(s.useState)(""),r=Object(u.a)(n,2),i=r[0],o=r[1],j=Object(s.useState)([]),l=Object(u.a)(j,2),h=l[0],m=l[1],p=Object(s.useState)(""),v=Object(u.a)(p,2),g=v[0],y=v[1],C=Object(s.useState)(""),N=Object(u.a)(C,2),k=N[0],S=N[1],w=Object(s.useState)(),I=Object(u.a)(w,2),R=I[0],B=I[1],E="https://chatting-zone.herokuapp.com/";Object(s.useEffect)((function(){var e=x.a.parse(t.search),n=e.name,a=e.room;S(n),y(a),(c=b.io.connect(E)).emit("join",{name:n,room:a},(function(e){e&&alert(e)}))}),[E,t.search]),Object(s.useEffect)((function(){c.on("message",(function(e){m((function(t){return[].concat(Object(d.a)(t),[e])}))})),c.on("roomUsers",(function(e){var t=e.users;B(t)}))}),[]);return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"container mt-5",children:[Object(a.jsx)("h4",{children:"Chat App"}),Object(a.jsx)(O,{room:g}),Object(a.jsx)(T,{message:h,name:k,users:R}),Object(a.jsx)(f,{message:i,setMessage:o,sendMessage:function(e){e.preventDefault(),i&&c.emit("chatMessage",i,(function(){o("")}))}})]})})},J=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.jsx)("div",{className:"container d-flex justify-content-center align-items-center",style:{height:"80vh"},children:Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h1",{children:"Join"}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",placeholder:"name",onChange:function(e){return c(e.target.value)}})}),Object(a.jsx)("br",{}),Object(a.jsx)(j.b,{to:{pathname:"/room",propName:{name:n}},onClick:function(e){return n?null:e.preventDefault()},children:Object(a.jsx)("button",{children:"Join in"})})]})})},L=n(64),D=function(e){var t,n=Object(s.useState)(""),c=Object(u.a)(n,2),r=c[0],i=c[1],o=e.location.propName.name,l=function(e){i(e.target.value)};return Object(a.jsx)("div",{className:"container d-flex justify-content-center align-items-center",style:{height:"80vh"},children:Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Rooms"}),Object(a.jsxs)(w.a,{style:{cursor:"pointer"},children:[Object(a.jsx)(w.a.Item,(t={action:!0,variant:"warning",onClick:l,value:"javascript",name:"javascript"},Object(L.a)(t,"onClick",l),Object(L.a)(t,"children","Javascript"),t)),Object(a.jsx)(w.a.Item,{action:!0,variant:"info",onClick:l,value:"linux",name:"linux",children:"Linux"}),Object(a.jsx)(w.a.Item,{action:!0,variant:"warning",onClick:l,value:"python",name:"python",children:"Python"}),Object(a.jsx)(w.a.Item,{action:!0,variant:"info",onClick:l,value:"c",name:"c",children:"C/ C++"}),Object(a.jsx)(w.a.Item,{action:!0,variant:"warning",onClick:l,value:"wordpress",name:"wordpress",children:"Wordpress"}),Object(a.jsx)(w.a.Item,{children:Object(a.jsx)("input",{placeholder:"Enter a room ..... ",onChange:function(e){return i(e.target.value)}})}),Object(a.jsx)(j.b,{to:"/chat?name=".concat(o,"&room=").concat(r),onClick:function(e){return r?null:e.preventDefault()},children:Object(a.jsx)("button",{children:"Join in"})})]})]}),Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)("h3",{children:"Create Room"}),Object(a.jsx)(v.a,{})]})]})})},F=function(){return Object(a.jsxs)(j.a,{children:[Object(a.jsx)(l.a,{path:"/",exact:!0,component:J}),Object(a.jsx)(l.a,{path:"/chat",component:z}),Object(a.jsx)(l.a,{path:"/room",component:D})]})};var P=function(){return Object(a.jsx)(F,{})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,203)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),A()}},[[196,1,2]]]);
//# sourceMappingURL=main.3c57f78f.chunk.js.map