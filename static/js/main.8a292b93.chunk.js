(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,c){e.exports={"message-form":"Contact_message-form__1iscz",wrapper:"Contact_wrapper__15WHV",wrapper__header:"Contact_wrapper__header__-YJDF"}},22:function(e,t,c){e.exports={"link-btn":"LinkBtn_link-btn__TP1W4","link-btn--blueblack":"LinkBtn_link-btn--blueblack__6nSL1","link-btn--reverse_blueblack":"LinkBtn_link-btn--reverse_blueblack__K5CV7"}},25:function(e,t,c){},3:function(e,t,c){e.exports={"project-category-name":"Projects_project-category-name__iRHq8",wrapper:"Projects_wrapper__m5SVW",project__header1:"Projects_project__header1__xMawZ",project__header2:"Projects_project__header2__1xeYk","project-lists":"Projects_project-lists__2hB6l","personal-project-wrapper":"Projects_personal-project-wrapper__3U2Ac","project-list":"Projects_project-list__pPhUn","project-list__info":"Projects_project-list__info__2jr2c","project-list__logo":"Projects_project-list__logo__37a3c","project-list-header":"Projects_project-list-header__5tPSA","project-list__name":"Projects_project-list__name__35im5","project-list__summary":"Projects_project-list__summary__2anx9","project-list__detail":"Projects_project-list__detail__2P4jD",sl_subtitle01:"Projects_sl_subtitle01__28KNC",sl_subtitle02:"Projects_sl_subtitle02__2i1sP",sl_subtitle03:"Projects_sl_subtitle03__oC3CD","portfolio-logo":"Projects_portfolio-logo__1P3EI","portfolio-logo__wc":"Projects_portfolio-logo__wc__1ZBzb","portfolio-logo__hu":"Projects_portfolio-logo__hu__1SF9M","list-image":"Projects_list-image__JPiYn"}},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n,r,s=c(1),i=c.n(s),l=c(16),a=c.n(l),o=c(9),j=(c(33),c(2)),b=(c(25),c(12)),d=c(4),h=(c(34),c(35),c(22)),u=c.n(h);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}function f(e,t){var c=e.title,i=e.titleId,l=x(e,["title","titleId"]);return s.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"current",ref:t,"aria-labelledby":i},l),c?s.createElement("title",{id:i},c):null,n||(n=s.createElement("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:.87})),r||(r=s.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})))}var O=s.forwardRef(f),p=(c.p,c(0));var _=function(e){var t="blueblack";return"reverse_blueblack"===e.thema&&(t="reverse_blueblack"),Object(p.jsxs)("a",{href:e.link,target:e.openNewTab&&"_blank",rel:e.openNewTab&&"noopener noreferrer",className:u.a["link-btn"]+" "+u.a["link-btn--"+t],children:[e.children,Object(p.jsx)(O,{width:"20",height:"20",fill:"reverse_blueblack"===t?"#001A23":"#FFFFFA"})]})};var g=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"article_title",children:e.title}),Object(p.jsxs)("div",{className:"article-wrapper",children:[Object(p.jsxs)("div",{className:"article-wrapper-tags",children:[Object(p.jsx)("div",{style:{height:"15vh",width:"15vh"}}),e.tags.map((function(e,t){return Object(p.jsx)("div",{children:e},t)}))]}),Object(p.jsxs)("div",{className:"article-wrapper-contents",children:[Object(p.jsx)("ul",{className:"article-wrapper__ul",children:e.contents.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}))}),Object(p.jsx)("div",{className:"article-wrapper-contents__link-button",children:Object(p.jsx)(_,{link:e.linkInfo.link,children:e.linkInfo.alt})})]})]})]})};var v=function(e){return Object(p.jsx)("img",{src:"https://img.shields.io/badge/-".concat(e.name,"-").concat(e.color,"?style=flat&logo=").concat(e.logo?e.logo:e.name).concat(e.logoColor?"&logoColor="+e.logoColor:""),alt:e.name})};var w=function(){var e=this,t=Object(s.useRef)(null),c=Object(s.useRef)(null),n=Object(s.useRef)(null),r=Object(s.useRef)(null),i=Object(s.useRef)(null),l=function(e){},a=function(e){},o=function(e,t,c){var n=c==e[t];return n||(e[t]=c),n},j=function s(){t.current&&(t.current.cnt<30&&(window.scrollY+=c.current.clientHeight/30,t.current.cnt++),function(){if(window.scrollY<c.current.clientHeight)o(r.current.style,"transform","translate(0px, 0px)");else{var e=window.scrollY-c.current.clientHeight,t=window.innerHeight,s=n.current.clientHeight-t,i=Math.max(0,Math.min(.9999,e/s)),l=Math.min(s,e),a=r.current.clientWidth-n.current.clientWidth;if(!o(r.current.style,"transform","translate(".concat((-i*a).toFixed(0),"px, ").concat(l.toFixed(0),"px)"))){var j=r.current.children[0].childElementCount,b=1/(j-1),d=Math.floor(i/b),h=(b-i%b)/b,u=r.current.children[0].children[d].style;if(h>.15?(o(u,"opacity","1"),o(u,"transform","translateY(0px)")):(o(u,"opacity","0"),o(u,"transform","")),!(j<=1)){var m=d+1,x=1-h,f=r.current.children[0].children[m].style;x>.2?(o(f,"opacity","1"),o(f,"transform","translateY(0px)")):(o(f,"opacity","0"),o(f,"transform",""))}}}}()),i=requestAnimationFrame(s.bind(e))};Object(s.useEffect)((function(){t.current.addEventListener("scroll",l);var e=r.current.children[0].childElementCount;return n.current.style.height=e*window.innerHeight+"px",window.addEventListener("resize",a),i.current=requestAnimationFrame(j),function(){window.removeEventListener("resize",a),i.current&&cancelAnimationFrame(i.current)}}),[]);var b=null,d=[{title:"About me",tags:["#\ud6a8\uc728\uc9c0\ud5a5\uc801","#\ucc3d\uc758\uc801","#\uae30\ubcf8\uc5d0 \ucda9\uc2e4\ud55c"],contents:["\uac1c\ubc1c\uc744 \ud1b5\ud574 \ub354 \ub098\uc740 \uac00\uce58\ub97c \uc804\ub2ec\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud558\uace0\uc788\uc2b5\ub2c8\ub2e4.","\uc0ac\ub78c\ub4e4\uc774 \ud544\uc694\ub85c \ud558\ub294 \uac83\uc5d0 \ub300\ud574 \uc0dd\uac01\ud558\uace0 \uadf8 \uac83\uc744 \uad6c\ud604\ud558\ub294 \uac83\uc744 \uc88b\uc544\ud569\ub2c8\ub2e4.",Object(p.jsxs)(p.Fragment,{children:["\uad00\uc2ec \uae30\uc220 :",Object(p.jsx)("br",{}),Object(p.jsxs)("span",{style:{fontSize:"1px"},children:[Object(p.jsx)(v,{name:"HTML5",color:"001A23"})," \xa0",Object(p.jsx)(v,{name:"SASS",color:"001A23"})," \xa0",Object(p.jsx)(v,{name:"JavaScript",color:"001A23"})," \xa0",Object(p.jsx)(v,{name:"React",color:"001A23"}),"\xa0",Object(p.jsx)(v,{name:"Recoil",color:"001A23",logo:"react"})," \xa0",Object(p.jsx)(v,{name:"Jest",color:"001A23",logoColor:"007ACC"})]})]})],linkInfo:{alt:"About me & Skills",link:"/portfolio/about"}},{title:"Experience",tags:["#\ube44\uad50\uc640 \ubd84\uc11d","#\uc9c0\uc18d\uac00\ub2a5\ud55c \ucf54\ub4dc","#\ubc31\ubb38\uc774\ubd88\uc5ec\uc77c\ud0c0"],contents:["1\ub144 \uacbd\ub825\uc758 \uc8fc\ub2c8\uc5b4 \uc6f9\uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.","\uac1c\ubc1c\uc5d0\uc11c \ube48\ud2c8\uc5c6\ub294 \ucf54\ub4dc, \uc9c0\uc18d\uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uc704\ud574 \ud56d\uc0c1 \uace0\ubbfc\ud569\ub2c8\ub2e4.","\uac00\uc7a5 \uc88b\uc740 \ud559\uc2b5\ubc29\ubc95\uc774 \uc2e4\uc2b5\uc774\ub77c\uace0 \uc0dd\uac01\ud558\uae30\uc5d0 \ubc30\uc6b0\uba74 \uae30\ub85d\ud558\uace0, \uc0ac\uc774\ub4dc \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud558\ub098\uc529 \uc801\uc6a9\ud574\ubd05\ub2c8\ub2e4."],linkInfo:{alt:"Projects",link:"/portfolio/projects"}},{title:"Communication",tags:["#\uc5ed\uc9c0\uc0ac\uc9c0","#\uc608\uc758\uc640 \ubc30\ub824","#Open mind"],contents:["\uc608\uc758\uc640 \ubc30\ub824\ub85c \uc758\uc0ac\uc18c\ud1b5\ud558\uace0, \ub2e4\ub978 \uc0ac\ub78c\uc758 \uc785\uc7a5\uc5d0\uc11c \ud55c\ubc88 \ub354 \uc0dd\uac01\ud569\ub2c8\ub2e4.","\uc81c\uc758, \uc9c8\ubb38, \ud53c\ub4dc\ubc31, \uae30\ud0c0 \ub4f1\ub4f1\ub3c4 \ubaa8\ub450 \ud658\uc601\ud569\ub2c8\ub2e4. \ubd80\ub2f4 \uc5c6\uc774 \uc5f0\ub77d\uc8fc\uc138\uc694."],linkInfo:{alt:"Contact",link:"/portfolio/contact"}}];return Object(p.jsxs)("div",{ref:t,onScroll:l,className:"wrapper",children:[Object(p.jsxs)("div",{ref:c,className:"flex-wrapper__intro",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"intro__header1",children:"Write code for"}),Object(p.jsx)("div",{className:"intro__header2",children:"humans!"})]}),Object(p.jsx)("div",{className:"intro__message",children:Object(p.jsx)("div",{children:"\uc548\ub155\ud558\uc138\uc694, \uc6f9 \uac1c\ubc1c\uc790 \uc870\uc131\ube48\uc785\ub2c8\ub2e4."})}),Object(p.jsx)("div",{className:"intro__button",onClick:function(e){t.current.cnt=Math.floor(window.scrollY/(c.current.clientHeight/30))},children:Object(p.jsx)(O,{width:"150",height:"150",fill:"white"})})]}),Object(p.jsx)("div",{ref:n,onTouchStart:function(e){b=e.touches},onTouchMove:function(e){for(var t=0,c=0,n=0;n<e.changedTouches.length;n++)for(var r=0;r<b.length;r++)if(b[r].identifier===e.changedTouches[n].identifier){t+=e.changedTouches[n].clientX-b[r].clientX,++c;break}window.scrollTo(0,window.scrollY-t/c),b=e.changedTouches},onTouchEnd:function(e){b=null},className:"flex-wrapper__article",children:Object(p.jsx)("div",{ref:r,className:"article-frame",children:Object(p.jsx)("div",{className:"article-ul",children:d.map((function(e,t){return Object(p.jsx)("li",{children:Object(p.jsx)(g,{title:e.title,tags:e.tags,contents:e.contents,linkInfo:e.linkInfo})},t)}))})})}),Object(p.jsx)("div",{className:"test",children:"test"})]})};c(37);var k=function(e){var t=Object(s.useRef)(null),c=Object(s.useRef)(null),n=0,r=!1,i=!1,l=1,a=function(e){return(e%360+360)%360},o=function(e){e=a(e),t.current.style.transform="rotateY(".concat(Math.round(e),"deg)"),c.current.style.zIndex=90<e&&e<270?"1":""},j=function(e){if(!i){i=!0,r=!1;var t=n,c=0;c=90>t?180-t:180>t||270>t?360-t:540-t,e<0&&(c=360-c);var s=0;!function t(r){var l=0;s&&(l=r-s),s=r;var j=Math.min(l/2,c);c-=j,n=a(n+e*j),c>0?requestAnimationFrame(t):(n=Math.round(n),i=!1),o(n)}(s)}};return Object(p.jsxs)("div",{className:"about_wrapper",children:[Object(p.jsxs)("div",{className:"about-box about-box--blueblack",children:[Object(p.jsx)("h1",{className:"about_header",children:"About"}),Object(p.jsxs)("div",{className:"about_detail",children:["\uac1c\ubc1c\uc744 \ud1b5\ud574 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \ub354 \ub098\uc740 \uac00\uce58\ub97c \uc804\ud558\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",Object(p.jsx)("li",{children:"\uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\ub294 \uac83\uc5d0 \ub300\ud574 \uc0dd\uac01\ud558\uace0, \uadf8 \uac83\uc744 \uad6c\ud604\ud558\ub294\ub370\uc11c \ubcf4\ub78c\uc744 \ub290\ub08d\ub2c8\ub2e4."}),Object(p.jsx)("br",{}),"\ube48\ud2c8\uc5c6\uace0 \uc9c0\uc18d\uac00\ub2a5\ud55c \ucf54\ub4dc\ub97c \uc791\uc131\ud558\uae30 \uc704\ud574 \ud56d\uc0c1 \uace0\ubbfc\ud569\ub2c8\ub2e4.",Object(p.jsx)("li",{children:"\ud14c\uc2a4\ud2b8\uc640 \uac80\uc99d, \ucf54\ub529 \ucee8\ubca4\uc158 \uc900\uc218\uc640 \uac00\ub3c5\uc131\uc788\ub294 \ucf54\ub4dc \uc791\uc131, \uc9c0\uc18d\uc801\uc778 \ub9ac\ud399\ud1a0\ub9c1\uc744 \uc218\ud589\ud569\ub2c8\ub2e4."}),Object(p.jsx)("br",{}),"\uc6b0\uc120\uc21c\uc704\uc5d0 \ub530\ub978 \uacc4\ud68d\uc788\ub294 \uac1c\ubc1c\uc744 \uc120\ud638\ud569\ub2c8\ub2e4.",Object(p.jsx)("li",{children:"\ub2f9\uc7a5\uc758 \ud3b8\uc758\ubcf4\ub2e4 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc804\ud574\uc9c8 \uac00\uce58\ub97c \uc6b0\uc120\uc2dc \ud569\ub2c8\ub2e4."})]})]}),Object(p.jsxs)("div",{className:"about-box",onMouseDown:function(e){r=!0},onMouseMove:function(e){r&&(n=a(n+e.movementX/3),l=e.movementX>0?1:-1,o(n))},onMouseUp:function(e){r=!1,j(l)},onMouseLeave:function(e){!1!==r&&(r=!1,j(l))},children:[Object(p.jsx)("h2",{children:" Skills "}),Object(p.jsxs)("div",{ref:t,className:"skill-box-wrapper",children:[Object(p.jsxs)("div",{ref:c,className:"skill-box skill-box--back",children:[Object(p.jsx)("h2",{className:"skill-box__header",children:"Backend"}),Object(p.jsxs)("div",{className:"skill-box__contents",children:[Object(p.jsx)("h3",{children:"Server"}),Object(p.jsx)(v,{name:"Spring",color:"001A23"})," ",Object(p.jsx)(v,{name:"Apache tomcat",color:"001A23",logoColor:"FFFFFF"})," / ",Object(p.jsx)(v,{name:"Node.js",color:"001A23"})," ",Object(p.jsx)(v,{name:"Express",color:"001A23"}),Object(p.jsx)("br",{}),"\uae30\ubcf8\uc801\uc778 \ud658\uacbd \uad6c\uc131\uacfc Restful API\ub97c \uc791\uc131 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(p.jsx)("br",{}),Object(p.jsx)("h3",{children:"DB"}),Object(p.jsx)(v,{name:"Oracle",color:"001A23"})," ",Object(p.jsx)("br",{}),"\uc815\uaddc\ud654\uc640 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574 \uc774\ud574\ud558\uace0 \uae30\ubcf8\uc801\uc778 SQL\uc744 \uc791\uc131 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(p.jsx)("h2",{className:"skill-box__header",children:"ETC "}),Object(p.jsxs)("div",{className:"skill-box__contents",children:[Object(p.jsx)(v,{name:"Python",color:"001A23"})," ",Object(p.jsx)(v,{name:"Linux",color:"001A23",logoColor:"FFFFFF"})," ",Object(p.jsx)(v,{name:"Azure Functions",color:"001A23"})," ",Object(p.jsx)(v,{name:"EC2",color:"001A23",logo:"Amazon AWS"})]})]}),Object(p.jsxs)("div",{className:"skill-box skill-box--front",children:[Object(p.jsx)("h2",{className:"skill-box__header",children:"Frontend"}),Object(p.jsxs)("div",{className:"skill-box__contents",children:[Object(p.jsx)("h3",{children:"Publishing"}),Object(p.jsx)(v,{name:"HTML5",color:"fffff5"})," ",Object(p.jsx)(v,{name:"CSS3",color:"fffff5",logoColor:"007ACC"})," ",Object(p.jsx)(v,{name:"SASS",color:"fffff5"})," ",Object(p.jsx)("br",{}),"\ub514\uc790\uc778\uc774 \uc8fc\uc5b4\uc9c0\uba74 \uc6f9\ud45c\uc900\uacfc \uc6f9\ud638\ud658\uc131\uc744 \uace0\ub824\ud558\uc5ec \ud654\uba74\uc744 \uad6c\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(p.jsx)("br",{}),"css\ub97c \ud65c\uc6a9\ud558\uc5ec \uc560\ub2c8\uba54\uc774\uc158\uacfc \ubc18\uc751\ud615 \uc6f9\uc744 \uad6c\ud604 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(p.jsxs)("div",{className:"skill-box__contents",children:[Object(p.jsx)("h3",{children:"Programing language"}),Object(p.jsx)(v,{name:"JavaScript",color:"fffff5"})," ",Object(p.jsx)("br",{}),"Javascript \ud504\ub85c\ud1a0\ud0c0\uc785\uac1c\ub150\uc744 \uc774\ud574\ud558\uace0, es6\ubb38\ubc95\uacfc \uc5ec\ub7ec \ud45c\uc900\ub0b4\uc7a5\uac1d\uccb4\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4. ",Object(p.jsx)("br",{})]}),Object(p.jsxs)("div",{className:"skill-box__contents",children:[Object(p.jsx)("h3",{children:"Libraries"}),Object(p.jsx)(v,{name:"React",color:"fffff5"})," ",Object(p.jsx)(v,{name:"Recoil",color:"fffff5",logo:"react"}),"  ",Object(p.jsx)(v,{name:"Jest",color:"fffff5",logoColor:"007ACC"}),Object(p.jsx)("br",{}),"\ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc131, hook\uc758 \uc0ac\uc6a9\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4.",Object(p.jsx)("br",{}),"Flux\ud328\ud134\uc5d0 \ub300\ud574 \uc774\ud574\ud558\uace0, \uc0c1\ud0dc\uad00\ub9ac\uc5d0 Recoil\uc744 \ud65c\uc6a9 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(p.jsx)("br",{}),"\ucef4\ud3ec\ub10c\ud2b8 \ud14c\uc2a4\ud2b8\uc640 mocking\uc73c\ub85c \ub3c5\ub9bd\ub41c \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(p.jsxs)("div",{className:"skill-box__contents",children:[Object(p.jsx)("h3",{children:" Tools"}),Object(p.jsx)(v,{name:"visual studio code",color:"fffff5",logoColor:"007ACC"}),"  ",Object(p.jsx)(v,{name:"git",color:"fffff5"})]}),Object(p.jsx)("br",{})]})]})]}),Object(p.jsxs)("div",{className:"skill-btns",children:[Object(p.jsxs)("div",{className:"skill-btns-left",onClick:function(){return j(-1)},children:[Object(p.jsx)(O,{className:"skill-btns-left__large",width:"110",height:"100",fill:"lightgrey"}),Object(p.jsx)(O,{className:"skill-btns-left__small",width:"50",height:"50",fill:"lightgrey"})]}),Object(p.jsxs)("div",{className:"skill-btns-right",onClick:function(){return j(1)},children:[Object(p.jsx)(O,{className:"skill-btns-right__large",width:"110",height:"100",fill:"lightgrey"}),Object(p.jsx)(O,{className:"skill-btns-right__small",width:"50",height:"50",fill:"lightgrey"})]})]})]})},N=c(19),y=c.n(N),A="6Ld9SUIbAAAAAN__YHlRxYzmc-G8NXAfvk8XdjN5";var S=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),l=i[0],a=i[1],o=Object(s.useState)(""),b=Object(j.a)(o,2),h=b[0],u=b[1],m=Object(s.useRef)(""),x=Object(d.g)();return Object(s.useEffect)((function(){var e=document.createElement("style");e.innerHTML=".grecaptcha-badge {visibility : visible;}",m.current.appendChild(e)}),[]),Object(p.jsxs)("div",{className:y.a.wrapper,ref:m,onWheel:function(e){return window.onWheelStopPropa(e)},children:[Object(p.jsx)("h1",{className:y.a.wrapper__header,children:"Contact"}),Object(p.jsxs)("div",{className:y.a["message-form"],children:[Object(p.jsx)("label",{children:"Name : "}),Object(p.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)},value:c}),Object(p.jsx)("label",{children:"Email : "}),Object(p.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},value:l}),Object(p.jsx)("label",{children:"Message : "}),Object(p.jsx)("textarea",{name:"message",cols:"40",rows:"10","aria-invalid":"false",onChange:function(e){return u(e.target.value)},value:h}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){window.grecaptcha.ready((function(){window.grecaptcha.execute(A,{action:"submit"}).then((function(e){!function(e){fetch("https://99-interactions-functions.azurewebsites.net/api/send_contact?code=tTrkanYWNrTsl87QAyaNKbHNQw7UTqflaYzvwsi5RJ5JuAfoIarOFg==",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c,email:l,message:h,"g-recaptcha-response":e})}).then((function(e){alert("\uba54\uc77c\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),x.push("/portfolio")})).catch((function(e){alert("\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694")}))}(e)}))}))},children:"SUBMIT"}),Object(p.jsx)("br",{})]})]})},C=c(3),P=c.n(C);var F=function(e){return Object(p.jsxs)("div",{className:P.a["project-list"],children:[Object(p.jsxs)("div",{className:P.a["project-list-header"],children:[Object(p.jsxs)("div",{className:P.a["project-list__name"],children:[Object(p.jsx)("div",{className:P.a["project-list__logo"],children:e.logo}),Object(p.jsxs)("div",{className:P.a["project-list__info"],children:[Object(p.jsx)("br",{}),Object(p.jsx)("div",{children:e.info.name}),Object(p.jsx)("div",{children:e.info.periord}),Object(p.jsx)("div",{children:e.info.organization}),e.info.link&&Object(p.jsx)(_,{link:e.info.link,thema:e.thema,openNewTab:!0,children:" \ub9c1\ud06c "})]})]}),Object(p.jsxs)("div",{className:P.a["project-list__summary"],children:[Object(p.jsx)("div",{style:{transform:"translate(-5px)",marginBottom:"10px"},children:"\ud504\ub85c\uc81d\ud2b8 \uc18c\uac1c :"}),e.summary.map((function(e,t){return Object(p.jsx)("div",{children:e},t)})),Object(p.jsx)("br",{}),Object(p.jsx)("div",{style:{transform:"translate(-5px)",marginBottom:"10px"},children:"\uc8fc\uc694 \uae30\uc220 :"}),Object(p.jsx)("div",{children:e.tech.join(", ")})]})]}),Object(p.jsx)("div",{className:P.a["project-list__detail"],children:e.detail})]})},M=c.p+"static/media/imlogo.2349e7f6.png",E=c.p+"static/media/imageMosaicShow1.6063f30e.gif",T=c.p+"static/media/imageMosaicShow2.4525c709.gif";var I=function(){var e=[{logo:Object(p.jsxs)("figure",{style:{margin:"0px"},children:[Object(p.jsx)("div",{className:P.a.sl_subtitle01,children:"\uc5c5\ubb34\ud3ec\ud138\uc2dc\uc2a4\ud15c"}),Object(p.jsx)("span",{className:P.a.sl_subtitle02,children:"Smart"}),Object(p.jsx)("span",{className:P.a.sl_subtitle03,children:"Portal"})]}),info:{name:"Smartportal",periord:"2019.9 ~ 2020.8",organization:"\ub098\ub214\uae30\uc220",link:"http://www.nanum.co.kr/?page_id=165"},summary:["\uadf8\ub8f9\uc6e8\uc5b4 \uc11c\ube44\uc2a4\uc640 \uc0ac\uc6a9\uc790\ub97c \uc5f0\uacb0\ud558\ub294 \ud3ec\ud0c8 \uc11c\ube44\uc2a4"],tech:["Jquery, JSP, Spring, Oracle"],detail:Object(p.jsxs)("ol",{children:[Object(p.jsx)("li",{children:"4\uac1c \uace0\uac1d\uc0ac \ud3ec\ud0c8 \uc2dc\uc2a4\ud15c \uac1c\ubc1c \ubc0f \uc720\uc9c0\ubcf4\uc218"}),Object(p.jsx)("li",{children:"SPA \ud788\uc2a4\ud1a0\ub9ac, \uc0ac\uc6a9\uc790 \uc815\uc758 \uac8c\uc2dc\ud310 \ub4f1 \uac01\uc885 \uae30\ub2a5 \uac1c\ubc1c"}),Object(p.jsx)("li",{children:"\uc694\uad6c\ubd84\uc11d, \uc11c\ubc84 \uc694\uccad \ucd5c\uc18c\ud654\ub85c \ucd08\uae30\uc751\ub2f5\uc2dc\uac04 \uac1c\uc120, \uc9c1\uad00\uc801\ub3d9\uc791\uc744 \ud1b5\ud55c UX\uac1c\uc120"})]})},{logo:Object(p.jsxs)("figure",{style:{margin:"0px"},children:[Object(p.jsx)("div",{className:P.a.sl_subtitle01,children:"\ubb38\uc11c\uad00\ub9ac\uc2dc\uc2a4\ud15c"}),Object(p.jsx)("span",{className:P.a.sl_subtitle02,children:"Smart"}),Object(p.jsx)("span",{className:P.a.sl_subtitle03,children:"EDMS"})]}),info:{name:"SmartEDMS",periord:"2020.3 ~ 2020.8",organization:"\ub098\ub214\uae30\uc220",link:"http://www.nanum.co.kr/?page_id=166"},summary:["\uc870\uc9c1 \ub0b4 \ubb38\uc11c\ub97c \uccb4\uacc4\uc801\uc73c\ub85c \uad00\ub9ac\ud558\ub294 \ubb38\uc11c\uad00\ub9ac \uc2dc\uc2a4\ud15c"],tech:["Jquery, Servlet, Oracle"],detail:Object(p.jsxs)("ol",{children:[Object(p.jsx)("li",{children:"\uad6c\ud615\ube0c\ub77c\uc6b0\uc800(IE)\uc5d0 \ub9de\ucdb0\uc9c4 \uc2dc\uc2a4\ud15c\uc744 \ucd5c\uc2e0 \ube0c\ub77c\uc6b0\uc800\ub97c \uc9c0\uc6d0\ud558\ub3c4\ub85d \ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5 \uc791\uc5c5"}),Object(p.jsx)("li",{children:"\ud30c\uc77c\uad00\ub9ac, XML\ud30c\uc2f1 \ud3f4\ub9ac\ud544 \uc791\uc131"}),Object(p.jsx)("li",{children:"\uc6f9\ud45c\uc900\uc5d0 \ub9de\ucd98 \uac1c\ubc1c \ubc0f UX\uac1c\uc120"})]})}],t=[{logo:Object(p.jsx)("img",{style:{borderRadius:"50%"},src:M}),info:{name:"\uc774\ubbf8\uc9c0 \ubaa8\uc790\uc774\ud06c",periord:"2021.5 ~ ",organization:"\uac1c\uc778\ud504\ub85c\uc81d\ud2b8",link:"https://bearsharks.github.io/99-interactions"},summary:["\uc6f9\uc0c1\uc5d0\uc11c \uac80\uc0c9\ub41c \uc5ec\ub7ec \uc774\ubbf8\uc9c0\ub85c \uc0ac\uc9c4\ubaa8\uc790\uc774\ud06c\ub97c","\uc2e4\uc2dc\uac04\uc73c\ub85c \uc0dd\uc131\ud558\ub294 \uc6f9\uc571\uc785\ub2c8\ub2e4."],tech:["React","HTML5 CANVAS","WebWorker","Bing image Search API","Azure Functions"],detail:Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("h3",{children:"\ud2b9\uc9d5"}),Object(p.jsx)("li",{children:"\uc218 \ub9cc\uac1c\uc758 \uc774\ubbf8\uc9c0 \uc870\uac01\ub4e4\ub85c \uc0ac\uc9c4\ubaa8\uc790\uc774\ud06c\ub97c \ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ud569\ub2c8\ub2e4."}),Object(p.jsx)("img",{className:P.a["list-image"],src:E,alt:"\uc774\ubbf8\uc9c0 \ubaa8\uc790\uc774\ud06c \ubcf4\uc5ec\uc8fc\uae30"}),Object(p.jsx)("li",{children:"\uce90\uc2f1, WebWorker\ub97c \uc774\uc6a9\ud55c \ubcd1\ub82c\ucc98\ub9ac\ub85c \uc800\uc0ac\uc591 \uae30\uae30\uc5d0\uc11c\ub3c4 \ube60\ub974\uac8c \uc774\ubbf8\uc9c0\ub97c \ucc98\ub9ac\ud569\ub2c8\ub2e4."}),Object(p.jsx)("img",{className:P.a["list-image"],src:T,alt:"\uc774\ubbf8\uc9c0 \ubaa8\uc790\uc774\ud06c \ubcf4\uc5ec\uc8fc\uae30"}),Object(p.jsx)("li",{children:"\uc0ac\uc6a9\uc790\ub294 \uc2a4\ud06c\ub864, \ub4dc\ub798\uadf8, \ud074\ub9ad \ub4f1 \uc9c1\uad00\uc801 \ub3d9\uc791\uc73c\ub85c \uc0ac\uc9c4\ubaa8\uc790\uc774\ud06c\uc640 \uc778\ud130\ub799\uc158 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),Object(p.jsx)("li",{children:"\ud540\uce58 \uc90c \ub4f1\uc758 \ubaa8\ubc14\uc77c \uc778\ud130\ub799\uc158\ub3c4 \uc9c0\uc6d0\ud558\uc5ec \ub2e4\uc591\ud55c \ub514\ubc14\uc774\uc2a4\uc5d0\uc11c \ub3d9\uc77c\ud55c UX\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),Object(p.jsx)(_,{link:"https://github.com/bearsharks/99-interactions",openNewTab:!0,children:"\uae43\ud5c8\ube0c \ub9c1\ud06c"})]})})},{logo:Object(p.jsxs)("div",{className:P.a["portfolio-logo"],children:[Object(p.jsx)("div",{className:P.a["portfolio-logo__wc"],children:"Write code for"}),Object(p.jsx)("div",{className:P.a["portfolio-logo__hu"],children:"Humans!"})]}),info:{name:"\uc6f9 \ud3ec\ud2b8\ud3f4\ub9ac\uc624",periord:"2021.6 ~ ",organization:"\uac1c\uc778\ud504\ub85c\uc81d\ud2b8",link:"https://bearsharks.github.io/portfolio"},summary:["\uc6f9 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc785\ub2c8\ub2e4."],tech:["React","SCSS","ReCaptcha v3","Google OAuth2","Azure Functions"],detail:Object(p.jsxs)("ul",{style:{listStyle:"disc"},children:[Object(p.jsx)("h3",{children:"\ud2b9\uc9d5"}),Object(p.jsx)("li",{children:"\ub9ac\uc561\ud2b8\ub97c \ud65c\uc6a9\ud55c \ucef4\ud3ec\ub10c\ud2b8\uae30\ubc18 \uc6f9 \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc785\ub2c8\ub2e4."}),Object(p.jsx)("li",{children:"\ubc14\ub0a0\ub77c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uad6c\ud604\ud55c \uc5ec\ub7ec\uac00\uc9c0 \uc778\ud130\uc561\uc158\uc694\uc18c\ub4e4\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."}),Object(p.jsx)("li",{children:"\ubc18\uc751\ud615 \ub514\uc790\uc778\uacfc \ud06c\ub85c\uc2a4\ube0c\ub77c\uc6b0\uc9d5\uc744 \uc801\uc6a9\ud558\uc5ec \ub2e4\uc591\ud55c \ud658\uacbd\uc5d0\uc11c \ub3d9\uc77c\ud55c UX\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. "}),Object(p.jsx)("li",{children:"GitHub Pages\ub85c \ud638\uc2a4\ud305\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(p.jsx)(_,{link:"https://github.com/bearsharks/portfolio",openNewTab:!0,children:"\uae43\ud5c8\ube0c \ub9c1\ud06c"})]})}];return Object(p.jsxs)("div",{className:P.a.wrapper,children:[Object(p.jsx)("h1",{className:P.a.project__header1,children:"Projects"}),Object(p.jsxs)("h2",{className:P.a.project__header2,children:["\uc2e4\uc2b5\uc744 \ud1b5\ud574 \uc775\ud788\uba70, \uc774\ub97c \ud1b5\ud574 \uc313\uc740 \uacbd\ud5d8\uc73c\ub85c \uc131\uc7a5\ud558\uace0\uc790 \ud569\ub2c8\ub2e4.",Object(p.jsx)("br",{}),"\ub2e4\uc591\ud55c \ubb38\uc81c\ub97c \uace0\ubbfc\ud558\uace0 \uac1c\uc120\ud55c \uacbd\ud5d8\ub4e4\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4"]}),Object(p.jsxs)("div",{className:P.a["project-lists"],children:[Object(p.jsx)("h2",{className:P.a["project-category-name"],children:"Work Experience"}),e.map((function(e,t){return Object(p.jsx)(F,{logo:e.logo,info:e.info,summary:e.summary,tech:e.tech,detail:e.detail,thema:"reverse_blueblack"},t)}))]}),Object(p.jsx)("div",{className:P.a["personal-project-wrapper"],children:Object(p.jsxs)("ul",{className:P.a["project-lists"],children:[Object(p.jsx)("h2",{className:P.a["project-category-name"],children:"Side Projects"}),t.map((function(e,t){return Object(p.jsx)(F,{logo:e.logo,info:e.info,summary:e.summary,tech:e.tech,detail:e.detail},t)}))]})})]})},z=(c(43),Object(o.b)({key:"isNavActive",default:!1}));var R=function(e){var t=e.children,c=Object(o.c)(z),n=Object(j.a)(c,2),r=n[0],s=n[1];return Object(p.jsx)("div",{onClick:function(e){e.target.href&&s(!1)},onWheel:function(e){return window.onWheelStopPropa(e)},className:"navigation "+(r?"navigation--active":"navigation--inactive"),children:t})};var W=function(e){var t=Object(d.g)(),c=function(e){var t=e.pathname,c=e.search,n=e.hash;return t+(c?"?"+c:"")+(n?"#"+n:"")};return Object(s.useEffect)((function(){t.block((function(e,n){return"PUSH"!==n||c(e)!==c(t.location)}))}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(R,{children:[Object(p.jsx)(b.b,{to:"/home",activeClassName:"linkActive",style:{zIndex:4},children:"Home"}),Object(p.jsx)(b.b,{to:"/about",activeClassName:"linkActive",style:{zIndex:3},children:"About"}),Object(p.jsx)(b.b,{to:"/projects",activeClassName:"linkActive",style:{zIndex:2},children:"Projects"}),Object(p.jsx)(b.b,{to:"/contact",activeClassName:"linkActive",style:{zIndex:1},children:"Contact"})]}),Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{exact:!0,path:"/",children:Object(p.jsx)(d.a,{to:"/home"})}),Object(p.jsx)(d.b,{path:"/home",component:w}),Object(p.jsx)(d.b,{path:"/projects",component:I}),Object(p.jsx)(d.b,{path:"/about",component:k}),Object(p.jsx)(d.b,{path:"/contact",component:S})]})]})};c(44);var H=function(e){var t=Object(o.c)(z),c=Object(j.a)(t,2),n=c[0],r=c[1];return Object(p.jsx)("div",{className:"hamburger-btn",onClick:function(){r(!n)},children:Object(p.jsx)("div",{className:n?"hamburger hamburger--active":"hamburger"})})};var L=function(e){var t=Object(s.useState)(!1),c=Object(j.a)(t,2),n=c[0],r=c[1],i=Object(o.d)(z);return Object(s.useEffect)((function(){if(!document.getElementById("recaptcha")){var e=document.createElement("script");e.type="text/javascript",e.id="recaptcha",e.src="https://www.google.com/recaptcha/api.js?render=".concat(A),document.body.appendChild(e)}}),[]),Object(p.jsxs)("div",{className:"App",onWheel:function(e){e.deltaY<0&&!0===n?r(!1):e.deltaY>0&&!1===n&&r(!0)},children:[Object(p.jsx)("header",{children:Object(p.jsxs)("div",{className:"header-wrapper"+(n?" header-wrapper--hide":"")+(i?" header-wrapper--navActive":""),onWheel:function(e){return window.onWheelStopPropa(e)},children:[Object(p.jsx)("div",{className:"home-btn"}),Object(p.jsx)(H,{})]})}),Object(p.jsx)("main",{children:Object(p.jsx)(b.a,{basename:"/portfolio",children:Object(p.jsx)(d.b,{component:W})})})]})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(L,{})})}),document.getElementById("root")),window.onWheelStopPropa=function(e){e.stopPropagation()},Y()}},[[45,1,2]]]);
//# sourceMappingURL=main.8a292b93.chunk.js.map