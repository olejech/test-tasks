(this["webpackJsonptz1-hooks-router"]=this["webpackJsonptz1-hooks-router"]||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(27),a(4)),u=Object(n.createContext)(),s=function(){var e=Object(n.useContext)(u),t=e.auth,a=e.signOut;return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__logo"},r.a.createElement("h1",null,r.a.createElement(o.c,{exact:!0,to:"/"},"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 #3"))),t.token?r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/auth",onClick:function(e){e.preventDefault(),a()}},"\u0412\u044b\u0445\u043e\u0434")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/posts"},"\u041f\u043e\u0441\u0442\u044b")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/profile/".concat(t.userId)},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"))):r.a.createElement("ul",{className:"nav__list"},r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/auth"},"\u0412\u0445\u043e\u0434/\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),r.a.createElement("li",{className:"nav__item"},r.a.createElement(o.c,{to:"/posts"},"\u041f\u043e\u0441\u0442\u044b"))))},i=a(1),m=a.n(i),p=a(3),E=a(8),d=function(e,t){switch(t.type){case"SIGNIN":return Object(E.a)({},e,{token:t.payload.token,userId:t.payload.userId});case"SIGNOUT":return Object(E.a)({},e,{token:null,userId:null});case"SIGNIN_AUTO":return Object(E.a)({},e,{token:t.payload.token,userId:t.payload.userId});default:return e}},f=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1];return{loading:a,request:Object(n.useCallback)((function(e){var t,a,n,l,c,o,u=arguments;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,n=u.length>3&&void 0!==u[3]?u[3]:{},r(!0),s.prev=4,a&&(a=JSON.stringify(a),n["Content-Type"]="application/json"),s.next=8,m.a.awrap(fetch(e,{method:t,body:a,headers:n}));case 8:return l=s.sent,s.next=11,m.a.awrap(l.json());case 11:if(c=s.sent,l.ok){s.next=14;break}throw c;case 14:return r(!1),s.abrupt("return",c);case 18:throw s.prev=18,s.t0=s.catch(4),s.t0.errors||(alert(s.t0.message),r(!1)),o=s.t0.errors.map((function(e){return e.msg})).join("\n"),alert("".concat(s.t0.message,":\n").concat(o)),r(!1),s.t0;case 25:case"end":return s.stop()}}),null,null,[[4,18]])}),[])}},h=a(21),v=a.n(h),b=a(9),g=function(e){var t=e.children,a=Object(n.useReducer)(d,{token:null,userId:null}),l=Object(p.a)(a,2),c=l[0],o=l[1],s=Object(n.useState)(!1),i=Object(p.a)(s,2),E=i[0],h=i[1],g=f(),O=g.request,k=g.loading,x=Object(b.f)(),j=Object(n.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u0412\u044b\u0448\u043b\u0438 \u0438\u0437 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430";localStorage.removeItem("userData"),o({type:"SIGNOUT"}),x.push("/auth"),alert(e)}),[x]),w=Object(n.useCallback)((function(e){o({type:"SIGNIN_AUTO",payload:e})}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"))||{},t=e.token,a=void 0===t?null:t,n=e.userId,r=void 0===n?null:n;a&&r&&(!function(e){var t=v()(e).exp,a=void 0===t?0:t;return(new Date).getTime()/1e3<a}(a)?j("\u0421\u0440\u043e\u043a \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0441\u0442\u0451\u043a. \u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0437\u0430\u043d\u043e\u0432\u043e"):w({token:a,userId:r})),h(!0)}),[w,j]),r.a.createElement(u.Provider,{value:{auth:c,signIn:function(e){var t,a,n,r;return m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,m.a.awrap(O("/api/auth/login","POST",e));case 3:return t=l.sent,a=t.token,n=t.userId,r=t.message,localStorage.setItem("userData",JSON.stringify({userId:n,token:a})),o({type:"SIGNIN",payload:{token:a,userId:n}}),l.abrupt("return",{message:r,userId:n});case 12:l.prev=12,l.t0=l.catch(0);case 14:case"end":return l.stop()}}),null,null,[[0,12]])},signOut:j,register:function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.awrap(O("/api/auth/register","POST",e));case 3:return t=a.sent,a.abrupt("return",t);case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])},loading:k,ready:E}},t)};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u041e \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u043c \u0437\u0430\u0434\u0430\u043d\u0438\u0438"),r.a.createElement("p",null,"\u0412 \u0437\u0430\u0434\u0430\u043d\u0438\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e full-stack \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),r.a.createElement("p",null,r.a.createElement("strong",null,"Frontend:")),r.a.createElement("ul",null,r.a.createElement("li",null,"React"),r.a.createElement("li",null,"React router"),r.a.createElement("li",null,"SCSS")),r.a.createElement("p",null,r.a.createElement("strong",null,"Backend:")),r.a.createElement("ul",null,r.a.createElement("li",null,"Atlas MongoDB"),r.a.createElement("li",null,"Mongoose"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"Express-validator"),r.a.createElement("li",null,"Bcrypt"),r.a.createElement("li",null,"JWT"),r.a.createElement("li",null,"Config")),r.a.createElement("p",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f. Middleware \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"),r.a.createElement("p",null,"Localstorage, \u0430\u0432\u0442\u043e\u043b\u043e\u0433\u0438\u043d, \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0440\u043e\u043a\u0430 JWT \u0442\u043e\u043a\u0435\u043d\u0430"),r.a.createElement("p",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0441\u0432\u043e\u0438\u0445 \u0438 \u0432\u0441\u0435\u0445 \u043f\u043e\u0441\u0442\u043e\u0432"),r.a.createElement("p",null,"404"),r.a.createElement("p",null,"Loader"),r.a.createElement("p",null,"\u0418 react hooks"," ",r.a.createElement("span",{role:"img","aria-label":"heard"},"\u2764\ufe0f")))},k=function(){return r.a.createElement("div",{className:"loader"})},x=function(e){var t=e.loading,a=e.posts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),t?r.a.createElement(k,null):a.length?a.map((function(e){return r.a.createElement("div",{className:"posts",key:e._id},r.a.createElement("h2",null,r.a.createElement(o.b,{to:"/post/".concat(e._id)},e.title)),r.a.createElement("p",null,e.text),r.a.createElement("p",null,new Date(e.date).toLocaleString()))})):"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")},j=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],c=f(),o=c.request,u=c.loading,s=Object(n.useCallback)((function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(o("/api/post/fetchAll"));case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}))}),[o]);return Object(n.useEffect)((function(){s()}),[s]),r.a.createElement(x,{loading:u,posts:a})},w=function(e){var t=Object(n.useContext)(u).auth,a=f(),l=a.request,c=a.loading,s=Object(n.useState)({posts:[]}),i=Object(p.a)(s,2),E=i[0],d=i[1],h=Object(n.useCallback)((function(){var e;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,m.a.awrap(l("/api/profile/","GET",null,{Authorization:"Bearer ".concat(t.token)}));case 3:e=a.sent,d(e),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),null,null,[[0,7]])}),[t,l]);return Object(n.useEffect)((function(){h()}),[h]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(k,null):E?r.a.createElement("div",{className:"profile"},r.a.createElement("h1",null,"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c ",E.id),r.a.createElement("p",null,"\u041f\u043e\u0447\u0442\u0430: ",E.email),r.a.createElement("ol",null,E.posts.length?E.posts.map((function(e){return r.a.createElement(o.b,{to:"/post/".concat(e._id),key:e._id},r.a.createElement("li",null,e.title))})):"\u041f\u043e\u0441\u0442\u043e\u0432 \u043d\u0435\u0442"),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return e.history.push("/post/create")}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"),r.a.createElement("button",{onClick:function(){return e.history.push("/profile/posts")}},"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"))):"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445")},y=a(11),I=function(e){var t=e.loading,a=e.submitLoginHandler,n=e.submitRegisterHandler,l=e.changeHandler;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f / \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),t?r.a.createElement(k,null):r.a.createElement("form",{className:"form"},r.a.createElement("input",{type:"email",placeholder:"email",name:"email",onChange:l}),r.a.createElement("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",onChange:l}),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{disabled:t,onClick:a},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("button",{disabled:t,onClick:n},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))},N=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(p.a)(t,2),l=a[0],c=a[1],o=Object(n.useContext)(u),s=o.signIn,i=o.loading,d=o.register,f=function(e){var t=e.email,a=e.password;return!(!t&&!a)};return r.a.createElement(I,{loading:i,submitLoginHandler:function(t){var a,n,r;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(t.preventDefault(),f(l)){c.next=3;break}return c.abrupt("return",alert("\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b"));case 3:return c.prev=3,c.next=6,m.a.awrap(s(l));case 6:a=c.sent,n=a.message,r=a.userId,alert(n),e.history.push("/profile/".concat(r)),c.next=15;break;case 13:c.prev=13,c.t0=c.catch(3);case 15:case"end":return c.stop()}}),null,null,[[3,13]])},submitRegisterHandler:function(t){var a,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),f(l)){r.next=3;break}return r.abrupt("return",alert("\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b"));case 3:return r.prev=3,r.next=6,m.a.awrap(d(l));case 6:a=r.sent,n=a.message,alert(n),e.history.push("/auth"),r.next=14;break;case 12:r.prev=12,r.t0=r.catch(3);case 14:case"end":return r.stop()}}),null,null,[[3,12]])},changeHandler:function(e){var t=e.target,a=t.name,n=t.value;c(Object(E.a)({},l,Object(y.a)({},a,n)))}})},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430. ",r.a.createElement(o.b,{to:"/"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))},C=function(){var e=Object(n.useState)({title:"",text:""}),t=Object(p.a)(e,2),a=t[0],l=t[1],c=f(),o=c.request,s=c.loading,i=Object(n.useContext)(u).auth,d=function(e){var t=e.target,n=t.name,r=t.value;l(Object(E.a)({},a,Object(y.a)({},n,r)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"),r.a.createElement("form",{className:"form",onSubmit:function(e){var t,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.preventDefault(),a.title&&a.text){r.next=3;break}return r.abrupt("return",alert("\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b"));case 3:return r.next=5,m.a.awrap(o("/api/post/create","POST",a,{Authorization:"Bearer ".concat(i.token)}));case 5:t=r.sent,n=t.message,alert(n);case 8:case"end":return r.stop()}}))}},r.a.createElement("div",{className:"form-create"},r.a.createElement("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",name:"title",onChange:d}),r.a.createElement("textarea",{rows:"5",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",name:"text",onChange:d})),r.a.createElement("button",{disabled:s},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")))},_=function(e){var t=e.loading,a=e.post;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(k,null):r.a.createElement("div",{key:a._id},r.a.createElement("h2",null,a.title),r.a.createElement("p",null,a.text),r.a.createElement("p",null,new Date(a.date).toLocaleString())))},T=function(e){var t=e.match.params.id,a=Object(n.useState)([]),l=Object(p.a)(a,2),c=l[0],o=l[1],u=f(),s=u.request,i=u.loading,E=Object(n.useCallback)((function(){var e;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(s("/api/post/fetchByPostId/".concat(t)));case 2:e=a.sent,o(e);case 4:case"end":return a.stop()}}))}),[t,s]);return Object(n.useEffect)((function(){E()}),[E]),r.a.createElement(_,{loading:i,post:c})},D=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],l=t[1],c=f(),o=c.request,s=c.loading,i=Object(n.useContext)(u).auth,E=Object(n.useCallback)((function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(o("/api/post/fetchByUserId","GET",null,{Authorization:"Bearer ".concat(i.token)}));case 2:e=t.sent,l(e);case 4:case"end":return t.stop()}}))}),[i.token,o]);return Object(n.useEffect)((function(){E()}),[E]),r.a.createElement(x,{loading:s,posts:a})},B=function(){var e=Object(n.useContext)(u),t=e.auth;return e.ready?t.token?r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",component:O,exact:!0}),r.a.createElement(b.a,{path:"/profile/posts",component:D}),r.a.createElement(b.a,{path:"/profile/:id",component:w}),r.a.createElement(b.a,{path:"/posts",component:j}),r.a.createElement(b.a,{path:"/post/create",component:C}),r.a.createElement(b.a,{path:"/post/:id",component:T}),r.a.createElement(b.a,{path:"",component:S})):r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",component:O,exact:!0}),r.a.createElement(b.a,{path:"/auth",component:N}),r.a.createElement(b.a,{path:"/posts",component:j}),r.a.createElement(b.a,{path:"/post/create",component:S}),r.a.createElement(b.a,{path:"/post/:id",component:T}),r.a.createElement(b.a,{path:"",component:S})):r.a.createElement(k,null)};var G=function(){return r.a.createElement(g,null,r.a.createElement("div",{className:"container"},r.a.createElement(s,null),r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var F=r.a.createElement(o.a,null,r.a.createElement(G,null));c.a.render(F,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.3f3bd530.chunk.js.map