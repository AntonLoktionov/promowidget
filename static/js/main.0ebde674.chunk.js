(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{237:function(e,t,a){e.exports=a(459)},430:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);a(238),a(240);var n=a(0),o=a.n(n),r=a(40),c=a.n(r),i=a(38),l=a(176),s=a(39),u=a(13),p=a(6),d=a(75),v=a(41),b=a.n(v),O=a(67),y=function(e,t){return b.a.sendPromise("VKWebAppGetCommunityAuthToken",{app_id:7239017,scope:e.join(","),group_id:parseInt(t)}).then(function(e){return e.access_token||null}).catch(function(){return null})},m=function(){var e={};return window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,a,n){e[a]=n}),e},h={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},f={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},j={forms:[]},w=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel;window.history.pushState(null,null);var o=e.panelsHistory[a]||[],r=e.viewsHistory[e.activeStory]||[],c=r.indexOf(a);return-1!==c&&r.splice(c,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&O.a.send("VKWebAppEnableSwipeBack",{}),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(r),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":window.history.pushState(null,null);var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],v=e.panelsHistory[s]||[t.payload.initial_panel],b=v[v.length-1];if(t.payload.story===e.activeStory)if(v.length>1){var y=v.shift();b=(v=[y])[v.length-1]}else if(i.length>1){var m=i.shift();s=(i=[m])[i.length-1],b=(v=e.panelsHistory[s])[v.length-1]}return t.payload.story===e.activeStory&&1===v.length&&window.pageYOffset>0&&(window.scrollTo(0,30),function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))}()),(-1===l.indexOf(t.payload.story)||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:b,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,v)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var f=e.activeView,j=e.activePanel,w=e.activeStory,E=e.popouts;if(E[f])return E[f]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:E})});var S=e.modalHistory[f];if(void 0!==S&&0!==S.length){var g=S[S.length-2]||null;return null===g?S=[]:-1!==S.indexOf(g)?S=S.splice(0,S.indexOf(g)+1):S.push(g),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},f,g)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},f,S))})}var _=e.panelsHistory[f]||[],k=e.viewsHistory[e.activeStory]||[],H=e.storiesHistory;if(_.length>1)_.pop(),j=_[_.length-1];else if(k.length>1){k.pop(),f=k[k.length-1];var P=e.panelsHistory[f];j=P[P.length-1]}else if(H.length>1&&"Android"===t.payload.from){H.pop(),w=H[H.length-1],f=e.viewsHistory[w][e.viewsHistory[w].length-1];var A=e.panelsHistory[f];j=A.length>1?A[A.length-1]:A[0]}else O.a.send("VKWebAppClose",{status:"success"});return 1===_.length&&"iOS"===t.payload.from&&O.a.send("VKWebAppDisableSwipeBack",{}),Object(p.a)({},e,{activeView:f,activePanel:j,activeStory:w,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,k)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,_))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var C=t.payload.id||null,T=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===C?T=[]:-1!==T.indexOf(C)?T=T.splice(0,T.indexOf(C)+1):T.push(C),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,C)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,T))});case"CLOSE_MODAL":var V=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,M=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===V?M=[]:-1!==M.indexOf(V)?M=M.splice(0,M.indexOf(V)+1):M.push(V),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,V)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,M))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),E=a(178),S=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},g=function(){return{type:"GO_BACK",payload:{from:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS"}}},_=function(){return{type:"CLOSE_MODAL"}},k=(a(429),a(430),a(52)),H=a(53),P=a(55),A=a(54),C=a(56),T=a(5),V=a(183),M=a.n(V),L=a(131),x=a.n(L),B=a(184),D=a(185),I=a.n(D).a.create({baseURL:"https://bots-new-api.sproject.space"}),K=function(e){var t=e.data;return t.error?t:t.response},N=function(e,t,a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return"GET"===a?I.get(e,{params:t}).then(K):"POST"===a?I.post(e,t).then(K):void 0}("/group.saveAccessToken",{group_id:e,user_id:t,access_token:a})},G=a(186),R=a.n(G),W=a(187),U=a.n(W),Y=function(e,t,a){var n=1===e?o.a.createElement(U.a,{fill:"#fff",width:14,height:14}):o.a.createElement(R.a,{fill:"#fff",width:14,height:14}),r=1===e?{backgroundColor:"var(--button_commerce_background)"}:{backgroundColor:"var(--field_error_border)"};return o.a.createElement(T.r,{layout:"vertical",onClose:a,before:o.a.createElement(T.a,{size:24,style:r},n)},t)},q=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(P.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={snackbar:null},a.requestAccess=Object(B.a)(x.a.mark(function e(){var t,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=m()).vk_group_id){e.next=4;break}return a.setState({snackbar:Y(2,"\u041e\u0442\u0440\u043e\u0439\u0442\u0435 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438\u0437 \u043f\u043e\u0434 \u0433\u0440\u0443\u043f\u043f\u044b",function(){return a.setState({snackbar:null})})}),e.abrupt("return");case 4:return e.next=6,y(["app_widget"],t.vk_group_id);case 6:if(n=e.sent){e.next=10;break}return a.setState({snackbar:Y(2,"\u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e",function(){return a.setState({snackbar:null})})}),e.abrupt("return");case 10:return e.next=12,N(t.vk_group_id,t.vk_user_id,n);case 12:e.sent.error?a.setState({snackbar:Y(2,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0438 \u0442\u043e\u043a\u0435\u043d\u0430",function(){return a.setState({snackbar:null})})}):a.setState({snackbar:Y(1,"\u0422\u043e\u043a\u0435\u043d \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d",function(){return a.setState({snackbar:null})})});case 14:case"end":return e.stop()}},e)})),a}return Object(C.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props.id;return o.a.createElement(T.o,{id:e},o.a.createElement(T.p,null,"APP"),o.a.createElement(T.g,null,o.a.createElement(T.e,null,o.a.createElement(T.b,{size:"l",stretched:!0,onClick:this.requestAccess},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"))),this.state.snackbar)}}]),t}(o.a.Component),z={openPopout:function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},closePopout:function(){return{type:"CLOSE_POPOUT"}}},F=Object(s.b)(null,z)(q),J=a(93),X=a.n(J),Z=a(74),Q=a.n(Z),$=a(92),ee=a.n($),te=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Callback API \u0411\u043e\u0442",avatar:"https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg",desc:"\u0414\u0430\u0436\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0439"}],ae=function(e){function t(){return Object(k.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal;return o.a.createElement(T.l,{id:t,header:o.a.createElement(T.m,{left:!T.i&&o.a.createElement(T.h,{onClick:a},o.a.createElement(Q.a,null)),right:T.i&&o.a.createElement(T.h,{onClick:a},o.a.createElement(X.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(T.k,null,te.map(function(e,t){return o.a.createElement(T.c,{key:t,description:e.desc,before:o.a.createElement(T.a,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(ee.a,{fill:"#528bcc"})},e.name)})))}}]),t}(o.a.Component),ne={openModal:function(e){return{type:"OPEN_MODAL",payload:{id:e}}}},oe=Object(s.b)(null,ne)(ae),re=function(e){function t(){return Object(k.a)(this,t),Object(P.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(H.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return o.a.createElement(T.l,{id:t,header:o.a.createElement(T.m,{left:!T.i&&o.a.createElement(T.h,{onClick:a},o.a.createElement(Q.a,null)),right:T.i&&o.a.createElement(T.h,{onClick:a},o.a.createElement(X.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(T.c,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(T.a,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(T.k,null,o.a.createElement(T.c,null,o.a.createElement(T.j,{title:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(T.c,null,o.a.createElement(T.j,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(T.c,null,o.a.createElement(T.j,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),ce=Object(s.b)()(re),ie=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(P.a)(this,Object(A.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(C.a)(t,e),Object(H.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)(function(e){b.a.subscribe(function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(b.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))}),O.a.send("VKWebAppInit",{})}),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,r=n.activeStory,c=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==c||e.activeStory!==r){var l=i[r+"_"+o+"_"+c]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,r=e.popouts,c=e.activeView,i=e.activeStory,l=e.activePanel,s=e.activeModals,u=e.panelsHistory,p=e.colorScheme,d=void 0===u[c]?[c]:u[c],v=void 0===r[c]?null:r[c],b=void 0===s[c]?null:s[c],O=o.a.createElement(T.n,{activeModal:b},o.a.createElement(oe,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(ce,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(T.d,{isWebView:!0,scheme:p},o.a.createElement(T.f,{activeStory:i,tabbar:o.a.createElement(T.s,null,o.a.createElement(T.t,{onClick:function(){return a("home","base")},selected:"home"===i},o.a.createElement(M.a,null)))},o.a.createElement(T.q,{id:"home",activeView:c,popout:v},o.a.createElement(T.u,{id:"home",modal:O,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(F,{id:"base",withoutEpic:!1})))))}}]),t}(o.a.Component);var le=Object(s.b)(function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}},function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:S,goBack:g,closeModal:_},e))})(ie);a.d(t,"store",function(){return se});var se=Object(i.createStore)(w,Object(E.composeWithDevTools)(Object(i.applyMiddleware)(l.a)));se.dispatch(S("home","base")),c.a.render(o.a.createElement(s.a,{store:se},o.a.createElement(le,null)),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.0ebde674.chunk.js.map