(this["webpackJsonpreact-test-chat"]=this["webpackJsonpreact-test-chat"]||[]).push([[0],{1526:function(e,t,s){},1527:function(e,t,s){},1528:function(e,t,s){},1529:function(e,t,s){},1530:function(e,t,s){},1531:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(8),i=s.n(c),r=(s(32),s(2)),o=s(10),l=s(14),d=s(6),j=s(4),u=s.n(j),h=s(1533),b=[{text:"Yo!",isOwnSentMessage:!0},{text:"It is really hard to run for 10KM in an hour!!",isOwnSentMessage:!1},{text:"I got two tickets to go see this awesome band called, Lorem lpsum Dollars!! Do you want to come?",isOwnSentMessage:!1},{text:"Hey, How are you doing?",isOwnSentMessage:!1},{text:"It is gonna rain this weekend, so we probably need to rethink our lunch plan",isOwnSentMessage:!1},{text:u.a.lorem.sentence(),isOwnSentMessage:!0},{text:"I don't think I will be able to make it, but I Heard they're great! Have fun and let's try and catch up at some point this week!",isOwnSentMessage:!1},{text:"Yo! Lex is being a lill bi*ch!",isOwnSentMessage:!1},{text:"My phone battery is dead. I will call you back once it is charged.",isOwnSentMessage:!0},{text:"The network ain't got shit on me!",isOwnSentMessage:!0},{text:"Last night game was pretty Awesome! Raptors nailed it",isOwnSentMessage:!1},{text:"Are you joining us for a lunch this week?",isOwnSentMessage:!0},{text:"The weather is good. I hope it will not spoil the weekend plan!!",isOwnSentMessage:!0},{text:"Have you seen Merton?",isOwnSentMessage:!1},{text:"What's your thoughts on picking up a delivery from the Apple Store",isOwnSentMessage:!1},{text:"I really hope the new show is going to be a blockbuster!",isOwnSentMessage:!0},{text:"I love listening to Simple Plan!!",isOwnSentMessage:!1},{text:"How is your day going?",isOwnSentMessage:!0},{text:"Are you okay sending over the list of the books that I need to buy?",isOwnSentMessage:!1}],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return b.sort((function(){return.5-Math.random()})).slice(1,e<b.length?e:b.length-1)},O=[],g=function(){var e=u.a.name.findName();return{coverPhoto:u.a.image.image(),createdAt:"May 17, 2021 03:24:00",description:u.a.lorem.sentences(),email:u.a.internet.email(e),id:Object(h.a)(),lastSeen:"Oct 15, 2021 03:24:00",messages:m(7),name:u.a.name.findName(),profilePhoto:u.a.internet.avatar(),username:u.a.internet.userName(e),website:u.a.internet.url()}},x={getUsers:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=O.length;0===t&&--e>=0;)O.push(g());return O},getLoggedInUser:function(){return{email:"bhopalsinghsis@gmail.com",id:Object(h.a)(),lastSeen:"Oct 10, 2021 03:24:00",messages:m(7),name:"Bhopal Singh",profilePhoto:"https://avatars.githubusercontent.com/u/17331876?s=400&u=09765a4e69d46ba6b92c81673b3a4e06be110bc6&v=4",username:"bsingh"}}},p=x.getUsers(),v=x.getLoggedInUser(),f={users:p,selectedUser:p.length>0?p[0]:v,loggedInUser:v},w=v,N=Object(o.b)({name:"chat",initialState:f,reducers:{setSelectedUser:function(e,t){var s=e.users.find((function(e){return e.id===t.payload.id}))||w;return Object(d.a)(Object(d.a)({},e),{},{selectedUser:s})},addConversation:function(e,t){var s,a=t.payload,n=a.id,c=a.message,i=e.users.map((function(e){return e.id===n&&(e=Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[{text:c,isOwnSentMessage:!1}])}),s=e),e}));return Object(d.a)(Object(d.a)({},e),{},{selectedUser:s,users:Object(l.a)(i)})}}}),S=N.actions,y=S.setSelectedUser,M=S.addConversation,k=N.reducer,C=Object(o.a)({reducer:{chat:k}}),E=s(0),I=function(e){var t=e.message,s=e.showArrow,a=e.isOwnSentMessage;return Object(E.jsx)("div",{className:"chat-body-message ".concat(a?s?"dark arrow-top ":"dark ":s?"light arrow-bottom  ":"light "),children:t})},P=function(e){var t=e.messages;return Object(E.jsx)("div",{className:"chat-body-text",children:t.map((function(e,s){return Object(E.jsx)(I,{message:e.text,isOwnSentMessage:e.isOwnSentMessage,showArrow:0===s||s===t.length-1},s)}))})};P.defaultProps={messages:[]};var T=P,L=function(e){var t=e.user;return Object(E.jsxs)("div",{className:"chat-body-header",children:[Object(E.jsxs)("div",{className:"chat-body-user-profile",children:[Object(E.jsx)("div",{className:"chat-body-avatar",children:Object(E.jsx)("img",{src:t.profilePhoto,alt:t.name})}),Object(E.jsx)("div",{className:"chat-body-title",children:t.name})]}),Object(E.jsxs)("div",{className:"chat-body-actions",children:[Object(E.jsx)("div",{"data-testid":"chat-body-message",className:"chat-app-icon message-icon",onClick:function(){return alert("Type a message to a user and press ENTER or Message Icon to send a message ")}}),Object(E.jsx)("div",{"data-testid":"chat-body-video",className:"chat-app-icon video-icon",onClick:function(){return alert("Making a Video Call to a user from the App is not Supported!!")}}),Object(E.jsx)("div",{"data-testid":"chat-body-call",className:"chat-app-icon call-icon",onClick:function(){return alert("Making a Phone Call to a user from the App is not Supported!!")}})]})]})},U=s(5),A=s(3),H=function(e){var t=e.onDispatchHandler,s=Object(a.useState)(A.EMPTY),n=Object(U.a)(s,2),c=n[0],i=n[1],r=function(e,t){return e&&0!==e.trim().length&&(t===A.ENTER||t===A.CLICK)};return Object(E.jsxs)("div",{className:"chat-body-write-text",children:[Object(E.jsx)("div",{className:"chat-body-write-text-area",children:Object(E.jsx)("textarea",{"data-testid":"chat-message-id",value:c,placeholder:"Write a message...",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){r(c,e.key)&&(t(c.trim()),i(A.EMPTY),e.preventDefault())}})}),Object(E.jsxs)("div",{className:"chat-body-write-text-buttons",children:[Object(E.jsx)("div",{"data-testid":"chat-message-send-id",className:"chat-app-icon write-message-icon",onClick:function(){r(c,A.CLICK)&&(t(c.trim()),i(A.EMPTY))}}),Object(E.jsx)("div",{className:"chat-app-icon microphone-icon",onClick:function(){return alert("Sending an audio to participants is not Supported!!")}})]})]})},Y=(s(1526),function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.chat})).selectedUser,s=t.messages;return Object(E.jsxs)("div",{className:"chat-body",children:[Object(E.jsx)(L,{user:t}),Object(E.jsx)(T,{messages:s}),Object(E.jsx)(H,{onDispatchHandler:function(s){return e(M({id:t.id,message:s}))}})]})});s(1527);function D(e){var t=e.user,s=void 0===t?{}:t,n=Object(a.useRef)(null),c=s.email,i=s.name,r=s.username,o=s.messages,l=s.lastSeen,d=function(e,t){var s=Object(a.useState)(t),n=Object(U.a)(s,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){var t=function(t){null===e.current||e.current.contains(t.target)||i(!c)};return c&&window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[c,e]),[c,i]}(n,!1),j=Object(U.a)(d,2),u=j[0],h=j[1];return Object(E.jsxs)("div",{className:"drop-down-menu-container",children:[Object(E.jsx)("div",{className:"down-arrow-icon down-arrow drop-down-menu-trigger",onClick:function(){return h(!u)}}),Object(E.jsx)("nav",{ref:n,className:"drop-down-menu-items ".concat(u?"active":"inactive"),children:Object(E.jsxs)("ul",{className:"user-profile",children:[Object(E.jsx)("li",{children:i}),Object(E.jsxs)("li",{children:["Signed in as ",Object(E.jsx)("b",{children:r})]}),Object(E.jsx)("li",{children:c}),Object(E.jsxs)("li",{children:["Messages Received \xa0",Object(E.jsx)("b",{children:Object(E.jsx)("span",{className:"messages-count",children:o.length})})]}),Object(E.jsxs)("li",{children:["Status ",Object(E.jsxs)("b",{children:[Object(E.jsx)("span",{className:"green-dot"}),"Online"]})]}),Object(E.jsxs)("li",{children:["Last Seen on ",Object(E.jsxs)("b",{children:[Object(E.jsx)("span",{className:"last-seen"}),l]})]})]})})]})}s(1528);var R=function(){var e=Object(r.c)((function(e){return e.chat.loggedInUser}));return Object(E.jsx)(n.a.Fragment,{children:Object(E.jsxs)("div",{className:"chat-header",children:[Object(E.jsxs)("div",{className:"left",children:[Object(E.jsx)("span",{className:"close"}),Object(E.jsx)("span",{className:"minimize"}),Object(E.jsx)("span",{className:"maximize"})]}),Object(E.jsx)("div",{className:"right",children:Object(E.jsxs)("div",{className:"user-profile",children:[Object(E.jsx)("div",{className:"user-avatar",children:Object(E.jsx)("img",{src:e.profilePhoto,alt:e.name})}),Object(E.jsx)("div",{className:"user-name",children:e.name}),Object(E.jsx)("div",{children:Object(E.jsx)(D,{user:e})})]})})]})})},K=function(e){var t=e.onSearchChange,s=Object(a.useState)(A.EMPTY),n=Object(U.a)(s,2),c=n[0],i=n[1];return Object(E.jsxs)("div",{className:"chat-side-bar-search",children:[Object(E.jsxs)("div",{className:"search-box",children:[Object(E.jsx)("div",{className:"chat-app-icon search-icon search"}),Object(E.jsx)("input",{"data-testid":"search-items",type:"text",placeholder:"Search...",value:c,onChange:function(e){var s=e&&e.target.value.trim()||A.EMPTY;i(s),t(s)}})]}),Object(E.jsx)("div",{className:"chat-app-icon compose-message-icon compose-message",onClick:function(){return alert("Type a message to a user and press ENTER or Message Icon to send a message ")}})]})},z=function(e){var t=e.user,s=e.onClickHandler,a=Object(r.c)((function(e){return e.chat})),n=a.users,c=a.selectedUser,i=(n.find((function(e){return e.id===t.id}))||c).messages,o=void 0===i?[]:i;return Object(E.jsxs)("div",{"data-testid":"card-item-click",className:"card-item ".concat(c.id===t.id?A.SELECTED:A.EMPTY),onClick:function(){return s(t)},children:[Object(E.jsx)("div",{className:"avatar",children:Object(E.jsx)("img",{src:t.profilePhoto,alt:"".concat(t.name," Avatar")})}),Object(E.jsxs)("div",{className:"profile",children:[Object(E.jsx)("div",{className:"name",children:t.name}),Object(E.jsx)("div",{className:"preview",children:o.length>0?o[o.length-1].text:A.EMPTY})]})]},t.id)};z.defaultProps={user:{}};var B=z,F=function(e){var t=e.users,s=Object(r.b)(),a=Object(r.c)((function(e){return e.chat.selectedUser})),n=function(e){return s(y(e))};return Object(E.jsx)("div",{className:"card-items",children:t.map((function(e,t){return Object(E.jsx)(B,{user:e,onClickHandler:n,isSelected:a.id===e.id},t)}))})};F.defaultProps={users:[]};var J=F,W=(s(1529),function(){var e=Object(r.c)((function(e){return e.chat.users})),t=Object(a.useState)(e),s=Object(U.a)(t,2),n=s[0],c=s[1];return Object(E.jsxs)("div",{className:"chat-side-bar",children:[Object(E.jsx)(K,{onSearchChange:function(t){return c((s=t.toLowerCase(),e.filter((function(e){return e.name.toLowerCase().includes(s)}))));var s}}),Object(E.jsx)(J,{users:n})]})});s(1530);function V(){return Object(E.jsx)(n.a.Fragment,{children:Object(E.jsxs)("div",{className:"chat-app-container",children:[Object(E.jsx)("div",{className:"header-container",children:Object(E.jsx)(R,{})}),Object(E.jsxs)("div",{className:"body-container",children:[Object(E.jsx)("div",{className:"panel left-panel",children:Object(E.jsx)(W,{})}),Object(E.jsx)("div",{className:"panel right-panel",children:Object(E.jsx)(Y,{})})]})]})})}function q(){return Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(r.a,{store:C,children:Object(E.jsx)(V,{})})})}i.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(r.a,{store:C,children:Object(E.jsx)(q,{})})}),document.getElementById("root"))},3:function(e,t){e.exports={CLICK:"click",EMPTY:"",ENTER:"Enter",SELECTED:"selected"}},32:function(e,t,s){}},[[1531,1,2]]]);
//# sourceMappingURL=main.250adda7.chunk.js.map