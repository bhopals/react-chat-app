(this["webpackJsonpreact-test-chat"]=this["webpackJsonpreact-test-chat"]||[]).push([[0],{1526:function(e,t,s){},1527:function(e,t,s){},1528:function(e,t,s){},1529:function(e,t,s){},1530:function(e,t,s){},1531:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(8),r=s.n(c),i=(s(32),s(2)),o=s(10),l=s(14),d=s(6),u=s(4),j=s.n(u),h=s(1533),b=[{text:"Yo!",isOwnSentMessage:!0},{text:"It is really hard to run for 10KM in an hour!!",isOwnSentMessage:!1},{text:"I got two tickets to go see this awesome band called, Lorem lpsum Dollars!! Do you want to come?",isOwnSentMessage:!1},{text:"Hey, How are you doing?",isOwnSentMessage:!1},{text:"It is gonna rain this weekend, so we probably need to rethink our lunch plan",isOwnSentMessage:!1},{text:j.a.lorem.sentence(),isOwnSentMessage:!0},{text:"I don't think I will be able to make it, but I Heard they're great! Have fun and let's try and catch up at some point this week!",isOwnSentMessage:!1},{text:"Yo! Lex is being a lill bi*ch!",isOwnSentMessage:!1},{text:"My phone battery is dead. I will call you back once it is charged.",isOwnSentMessage:!0},{text:"The network ain't got shit on me!",isOwnSentMessage:!0},{text:"Last night game was pretty Awesome! Raptors nailed it",isOwnSentMessage:!1},{text:"Are you joining us for a lunch this week?",isOwnSentMessage:!0},{text:"The weather is good. I hope it will not spoil the weekend plan!!",isOwnSentMessage:!0},{text:"Have you seen Merton?",isOwnSentMessage:!1},{text:"What's your thoughts on picking up a delivery from the Apple Store",isOwnSentMessage:!1},{text:"I really hope the new show is going to be a blockbuster!",isOwnSentMessage:!0},{text:"I love listening to Simple Plan!!",isOwnSentMessage:!1},{text:"How is your day going?",isOwnSentMessage:!0},{text:"Are you okay sending over the list of the books that I need to buy?",isOwnSentMessage:!1}],m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return b.sort((function(){return.5-Math.random()})).slice(1,e<b.length?e:b.length-1)},O=[],g=function(){var e=j.a.name.findName();return{coverPhoto:j.a.image.image(),createdAt:"May 17, 2021 03:24:00",description:j.a.lorem.sentences(),email:j.a.internet.email(e),id:Object(h.a)(),lastSeen:"Oct 15, 2021 03:24:00",messages:m(7),name:j.a.name.findName(),profilePhoto:j.a.internet.avatar(),username:j.a.internet.userName(e),website:j.a.internet.url()}},x=function(){return{email:"bhopalsinghsis@gmail.com",id:Object(h.a)(),lastSeen:"Oct 10, 2021 03:24:00",messages:m(7),name:"Bhopal Singh",profilePhoto:"https://avatars.githubusercontent.com/u/17331876?s=400&u=09765a4e69d46ba6b92c81673b3a4e06be110bc6&v=4",username:"bsingh"}},p=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t=O.length;0===t&&--e>=0;)O.push(g());return O}(),v=x(),f={users:p,selectedUser:p.length>0?p[0]:v,loggedInUser:v};console.log("ChatService>users>",p);var w=v,N=Object(o.b)({name:"chat",initialState:f,reducers:{setSelectedUser:function(e,t){var s=e.users.find((function(e){return e.id===t.payload.id}))||w;return Object(d.a)(Object(d.a)({},e),{},{selectedUser:s})},addConversation:function(e,t){var s,n=t.payload,a=n.id,c=n.message,r=e.users.map((function(e){return e.id===a&&(e=Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(l.a)(e.messages),[{text:c,isOwnSentMessage:!1}])}),s=e),e}));return Object(d.a)(Object(d.a)({},e),{},{selectedUser:s,users:Object(l.a)(r)})}}}),S=N.actions,M=S.setSelectedUser,y=S.addConversation,k=N.reducer,C=Object(o.a)({reducer:{chat:k}}),E=s(0),I=function(e){var t=e.message,s=e.showArrow,n=e.isOwnSentMessage;return Object(E.jsx)("div",{className:"chat-body-message ".concat(n?s?"dark arrow-top ":"dark ":s?"light arrow-bottom  ":"light "),children:t})},P=function(e){var t=e.messages;return Object(E.jsx)("div",{className:"chat-body-text",children:t.map((function(e,s){return Object(E.jsx)(I,{message:e.text,isOwnSentMessage:e.isOwnSentMessage,showArrow:0===s||s===t.length-1},s)}))})};P.defaultProps={messages:[]};var T=P,L=function(e){var t=e.user;return Object(E.jsxs)("div",{className:"chat-body-header",children:[Object(E.jsxs)("div",{className:"chat-body-user-profile",children:[Object(E.jsx)("div",{className:"chat-body-avatar",children:Object(E.jsx)("img",{src:t.profilePhoto})}),Object(E.jsx)("div",{className:"chat-body-title",children:t.name})]}),Object(E.jsxs)("div",{className:"chat-body-actions",children:[Object(E.jsx)("div",{className:"chat-app-icon message-icon",onClick:function(){return alert("Type a message to a user and press ENTER or Message Icon to send a message ")}}),Object(E.jsx)("div",{className:"chat-app-icon video-icon",onClick:function(){return alert("Making a Video Call to a user from the App is not Supported!!")}}),Object(E.jsx)("div",{className:"chat-app-icon call-icon",onClick:function(){return alert("Making a Phone Call to a user from the App is not Supported!!")}})]})]})},H=s(5),U=s(3),Y=function(e){var t=e.onDispatchHandler,s=Object(n.useState)(U.EMPTY),a=Object(H.a)(s,2),c=a[0],r=a[1],i=function(e,t){return e&&0!==e.trim().length&&(t===U.ENTER||t==U.CLICK)};return Object(E.jsxs)("div",{className:"chat-body-write-text",children:[Object(E.jsx)("div",{className:"chat-body-write-text-area",children:Object(E.jsx)("textarea",{value:c,placeholder:"Write a message...",onChange:function(e){return r(e.target.value)},onKeyDown:function(e){i(c,e.key)&&(t(c.trim()),r(U.EMPTY),e.preventDefault())}})}),Object(E.jsxs)("div",{className:"chat-body-write-text-buttons",children:[Object(E.jsx)("div",{className:"chat-app-icon write-message-icon",onClick:function(){i(c,U.CLICK)&&(t(c.trim()),r(U.EMPTY))}}),Object(E.jsx)("div",{className:"chat-app-icon microphone-icon",onClick:function(){return alert("Sending an audio to participants is not Supported!!")}})]})]})},A=(s(1526),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.chat})).selectedUser,s=t.messages;return Object(E.jsxs)("div",{className:"chat-body",children:[Object(E.jsx)(L,{user:t}),Object(E.jsx)(T,{messages:s}),Object(E.jsx)(Y,{onDispatchHandler:function(s){return e(y({id:t.id,message:s}))}})]})});s(1527);function D(e){var t=e.user,s=void 0===t?{}:t,a=Object(n.useRef)(null),c=s.email,r=s.name,i=s.username,o=s.messages,l=s.lastSeen,d=function(e,t){var s=Object(n.useState)(t),a=Object(H.a)(s,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){var t=function(t){null===e.current||e.current.contains(t.target)||r(!c)};return c&&window.addEventListener("click",t),function(){window.removeEventListener("click",t)}}),[c,e]),[c,r]}(a,!1),u=Object(H.a)(d,2),j=u[0],h=u[1];return Object(E.jsxs)("div",{className:"drop-down-menu-container",children:[Object(E.jsx)("div",{className:"down-arrow-icon down-arrow drop-down-menu-trigger",onClick:function(){return h(!j)}}),Object(E.jsx)("nav",{ref:a,className:"drop-down-menu-items ".concat(j?"active":"inactive"),children:Object(E.jsxs)("ul",{className:"user-profile",children:[Object(E.jsx)("li",{children:r}),Object(E.jsxs)("li",{children:["Signed in as ",Object(E.jsx)("b",{children:i})]}),Object(E.jsx)("li",{children:c}),Object(E.jsxs)("li",{children:["Messages Received \xa0",Object(E.jsx)("b",{children:Object(E.jsx)("span",{className:"messages-count",children:o.length})})]}),Object(E.jsxs)("li",{children:["Status ",Object(E.jsxs)("b",{children:[Object(E.jsx)("span",{className:"green-dot"}),"Online"]})]}),Object(E.jsxs)("li",{children:["Last Seen on ",Object(E.jsxs)("b",{children:[Object(E.jsx)("span",{className:"last-seen"}),l]})]})]})})]})}s(1528);var R=function(){var e=Object(i.c)((function(e){return e.chat.loggedInUser}));return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsxs)("div",{className:"chat-header",children:[Object(E.jsxs)("div",{className:"left",children:[Object(E.jsx)("span",{className:"close"}),Object(E.jsx)("span",{className:"minimize"}),Object(E.jsx)("span",{className:"maximize"})]}),Object(E.jsx)("div",{className:"right",children:Object(E.jsxs)("div",{className:"user-profile",children:[Object(E.jsx)("div",{className:"user-avatar",children:Object(E.jsx)("img",{src:e.profilePhoto})}),Object(E.jsx)("div",{className:"user-name",children:e.name}),Object(E.jsx)("div",{children:Object(E.jsx)(D,{user:e})})]})})]})})},K=function(e){var t=e.onSearchChange,s=Object(n.useState)(U.EMPTY),a=Object(H.a)(s,2),c=a[0],r=a[1];return Object(E.jsxs)("div",{className:"chat-side-bar-search",children:[Object(E.jsxs)("div",{className:"search-box",children:[Object(E.jsx)("div",{className:"chat-app-icon search-icon search"}),Object(E.jsx)("input",{type:"text",placeholder:"Search...",value:c,onChange:function(e){var s=e&&e.target.value.trim()||U.EMPTY;r(s),t(s)}})]}),Object(E.jsx)("div",{className:"chat-app-icon compose-message-icon compose-message",onClick:function(){return alert("Type a message to a user and press ENTER or Message Icon to send a message ")}})]})},z=function(e){var t=e.user,s=e.onClickHandler,n=Object(i.c)((function(e){return e.chat})),a=n.users,c=n.selectedUser,r=(a.find((function(e){return e.id===t.id}))||c).messages,o=void 0===r?[]:r;return Object(E.jsxs)("div",{className:"card-item ".concat(c.id===t.id?U.SELECTED:U.EMPTY),onClick:function(){return s(t)},children:[Object(E.jsx)("div",{className:"avatar",children:Object(E.jsx)("img",{src:t.profilePhoto})}),Object(E.jsxs)("div",{className:"profile",children:[Object(E.jsx)("div",{className:"name",children:t.name}),Object(E.jsx)("div",{className:"preview",children:o.length>0?o[o.length-1].text:U.EMPTY})]})]},t.id)};z.defaultProps={user:{}};var B=z,F=function(e){var t=e.users,s=Object(i.b)(),n=Object(i.c)((function(e){return e.chat.selectedUser})),a=function(e){return s(M(e))};return Object(E.jsx)("div",{className:"card-items",children:t.map((function(e,t){return Object(E.jsx)(B,{user:e,onClickHandler:a,isSelected:n.id===e.id},t)}))})};F.defaultProps={users:[]};var J=F,W=(s(1529),function(){var e=Object(i.c)((function(e){return e.chat.users})),t=Object(n.useState)(e),s=Object(H.a)(t,2),a=s[0],c=s[1];return Object(E.jsxs)("div",{className:"chat-side-bar",children:[Object(E.jsx)(K,{onSearchChange:function(t){return c((s=t.toLowerCase(),e.filter((function(e){return e.name.toLowerCase().includes(s)}))));var s}}),Object(E.jsx)(J,{users:a})]})});s(1530);function V(){return Object(E.jsx)(a.a.Fragment,{children:Object(E.jsxs)("div",{className:"chat-app-container",children:[Object(E.jsx)("div",{className:"header-container",children:Object(E.jsx)(R,{})}),Object(E.jsxs)("div",{className:"body-container",children:[Object(E.jsx)("div",{className:"panel left-panel",children:Object(E.jsx)(W,{})}),Object(E.jsx)("div",{className:"panel right-panel",children:Object(E.jsx)(A,{})})]})]})})}function q(){return Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(i.a,{store:C,children:Object(E.jsx)(V,{})})})}r.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(i.a,{store:C,children:Object(E.jsx)(q,{})})}),document.getElementById("root"))},3:function(e,t){e.exports={CLICK:"click",EMPTY:"",ENTER:"Enter",SELECTED:"selected"}},32:function(e,t,s){}},[[1531,1,2]]]);
//# sourceMappingURL=main.48547c81.chunk.js.map