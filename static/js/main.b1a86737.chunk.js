(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(15),a=c.n(i),o=(c(29),c(22),c(12)),s=c(3),l=(c(30),c(1));var j=function(){var e=this,t=Object(n.useRef)(null),c=Object(n.useRef)(null),r=Object(n.useRef)(null),i=Object(n.useRef)(null),a=0,o=function(e){},s=function(e){},j=function n(){var o="translate(0,0)";if(t.current.scrollTop<c.current.clientHeight)(o="translate(0,0)")!==i.current.style.transform&&(i.current.style.transform=o);else{var s=t.current.scrollTop-c.current.clientHeight,l=t.current.clientHeight,j=r.current.clientHeight-l,b=Math.max(0,Math.min(.9999,s/j)),u=Math.min(j,s),h=i.current.clientWidth-r.current.clientWidth;if((o="translate(".concat(-b*h,"px, ").concat(u,"px)"))!==i.current.style.transform){i.current.style.transform=o;var d=1/(i.current.children[0].childElementCount-1),f=Math.floor(b/d),O=(d-b%d)/d,m=i.current.children[0].children[f].style;O>.15?m.opacity&&m.transform||(m.opacity=1,m.transform="translateY(0)"):m.opacity&&m.transform&&(m.opacity="",m.transform="");var v=f+1,x=1-O,p=i.current.children[0].children[v].style;x>.15?p.opacity&&p.transform||(p.opacity=1,p.transform="translateY(0)"):p.opacity&&p.transform&&(p.opacity="",p.transform=""),a=requestAnimationFrame(n.bind(e))}}};return Object(n.useEffect)((function(){return t.current.addEventListener("scroll",o),window.addEventListener("resize",s),j(),function(){window.removeEventListener("resize",s),a&&cancelAnimationFrame(a)}}),[]),Object(l.jsxs)("div",{ref:t,onScroll:o,className:"flex-wrapper",children:[Object(l.jsx)("div",{ref:c,className:"flex-wrapper__intro",children:"\uc2a4\ud06c\ub864\uc744 \uc544\ub798\ub85c \ub0b4\ub824\uc8fc\uc138\uc694"}),Object(l.jsx)("div",{ref:r,className:"flex-wrapper-article",children:Object(l.jsx)("div",{ref:i,className:"article-frame",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"a"}),Object(l.jsx)("li",{children:"b"}),Object(l.jsx)("li",{children:"c"}),Object(l.jsx)("li",{children:"d"}),Object(l.jsx)("li",{children:"e"})]})})}),Object(l.jsx)("div",{className:"test",children:"test"})]})};c(32);var b=function(e){return Object(l.jsx)("div",{children:"About"})};c(33);var u=function(){return Object(l.jsx)("div",{children:"Contact"})};c(34);var h=function(){return Object(l.jsx)("div",{children:"Experience"})},d=c(2),f=(c(35),c(10)),O=Object(f.b)({key:"isNavActive",default:!1});var m=function(e){var t=e.children,c=Object(f.c)(O),n=Object(d.a)(c,2),r=n[0],i=n[1];return Object(l.jsx)("div",{onClick:function(e){e.target.href&&i(!1)},className:"navigation "+(r?"navigation--active":"navigation--inactive"),children:t})};var v=function(e){var t=Object(s.g)(),c=function(e){var t=e.pathname,c=e.search,n=e.hash;return t+(c?"?"+c:"")+(n?"#"+n:"")};return Object(n.useEffect)((function(){t.block((function(e,n){return"PUSH"!==n||c(e)!==c(t.location)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(m,{children:[Object(l.jsx)(o.b,{to:"/portfolio/home",activeClassName:"linkActive",children:"Home"}),Object(l.jsx)(o.b,{to:"/portfolio/about",activeClassName:"linkActive",children:"About"}),Object(l.jsx)(o.b,{to:"/portfolio/works",activeClassName:"linkActive",children:"Works"}),Object(l.jsx)(o.b,{to:"/portfolio/contact",activeClassName:"linkActive",children:"Contact"})]}),Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{exact:!0,path:"/portfolio",children:Object(l.jsx)(s.a,{to:"/portfolio/home"})}),Object(l.jsx)(s.b,{path:"/portfolio/home",children:Object(l.jsx)(j,{})}),Object(l.jsx)(s.b,{path:"/portfolio/works",children:Object(l.jsx)(h,{})}),Object(l.jsx)(s.b,{path:"/portfolio/about",component:b}),Object(l.jsx)(s.b,{path:"/portfolio/contact",children:Object(l.jsx)(u,{})})]})]})};c(42);var x=function(e){var t=Object(f.c)(O),c=Object(d.a)(t,2),n=c[0],r=c[1];return Object(l.jsx)("div",{className:"hamburger-btn",onClick:function(){r(!n)},children:Object(l.jsx)("div",{className:n?"hamburger hamburger--active":"hamburger"})})};var p=function(e){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"header-wrapper",children:[Object(l.jsx)("div",{className:"home-btn",children:"home\ubc84\ud2bc"}),Object(l.jsx)(x,{})]})}),Object(l.jsx)("main",{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(s.b,{component:v})})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f.a,{children:Object(l.jsx)(p,{})})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.b1a86737.chunk.js.map