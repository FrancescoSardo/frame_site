import{S as pe,i as be,s as ke,k as l,a as h,q as H,l as c,m as r,h as a,c as m,r as j,n as s,C as Ce,D as S,b as ge,E as e,F as J,G as ne,H as ye,I as ae,J as Ae,y as Ee,z as Ie,A as Ve,K as Be,L as Le,M as Te,g as he,d as me,B as De,o as Fe}from"../chunks/index.56c1adbb.js";import{j as Y}from"../chunks/singletons.f160d8ba.js";import{p as le}from"../chunks/stores.28b5f96d.js";import{t as de,b as ue,r as Ge}from"../chunks/navbar.356c22c3.js";const Me=""+new URL("../assets/logo.19ae4c51.svg",import.meta.url).href;Y.disable_scroll_handling;const X=Y.goto;Y.invalidate;Y.invalidateAll;Y.preload_data;Y.preload_code;Y.before_navigate;Y.after_navigate;function ze(i){let t,n,b,v,o,p,E,k,$,P,y,d,V,q,_,f,D,C,N,T,w,u,M,O,K,F,U,Z,G,B,x,ee,z,te,ce;return{c(){t=l("div"),n=l("div"),b=h(),v=l("div"),o=l("img"),E=h(),k=l("div"),$=H("Frame"),P=h(),y=l("div"),d=h(),V=l("div"),q=l("div"),_=H("specchietti"),f=h(),D=l("div"),C=h(),N=l("div"),T=l("div"),w=H("tamponi"),u=h(),M=l("div"),O=h(),K=l("div"),F=h(),U=l("div"),Z=H("carrello"),G=h(),B=l("div"),x=H("chi siamo?"),ee=h(),z=l("div"),this.h()},l(A){t=c(A,"DIV",{class:!0});var g=r(t);n=c(g,"DIV",{class:!0}),r(n).forEach(a),b=m(g),v=c(g,"DIV",{class:!0});var ie=r(v);o=c(ie,"IMG",{src:!0,class:!0}),ie.forEach(a),E=m(g),k=c(g,"DIV",{class:!0});var R=r(k);$=j(R,"Frame"),R.forEach(a),P=m(g),y=c(g,"DIV",{class:!0}),r(y).forEach(a),d=m(g),V=c(g,"DIV",{class:!0});var Q=r(V);q=c(Q,"DIV",{class:!0});var re=r(q);_=j(re,"specchietti"),re.forEach(a),f=m(Q),D=c(Q,"DIV",{class:!0}),r(D).forEach(a),Q.forEach(a),C=m(g),N=c(g,"DIV",{class:!0});var se=r(N);T=c(se,"DIV",{class:!0});var L=r(T);w=j(L,"tamponi"),L.forEach(a),u=m(se),M=c(se,"DIV",{class:!0}),r(M).forEach(a),se.forEach(a),O=m(g),K=c(g,"DIV",{class:!0}),r(K).forEach(a),F=m(g),U=c(g,"DIV",{class:!0});var I=r(U);Z=j(I,"carrello"),I.forEach(a),G=m(g),B=c(g,"DIV",{class:!0});var ve=r(B);x=j(ve,"chi siamo?"),ve.forEach(a),ee=m(g),z=c(g,"DIV",{class:!0}),r(z).forEach(a),g.forEach(a),this.h()},h(){s(n,"class","spacer desktop-only svelte-11dyweu"),Ce(o.src,p=Me)||s(o,"src",p),s(o,"class","svelte-11dyweu"),s(v,"class","logo svelte-11dyweu"),s(k,"class","title desktop-only"),s(y,"class","spacer svelte-11dyweu"),s(q,"class","text"),s(D,"class","underline svelte-11dyweu"),s(V,"class","specchietti tab-link desktop-only svelte-11dyweu"),s(T,"class","text"),s(M,"class","underline svelte-11dyweu"),s(N,"class","tamponi tab-link desktop-only svelte-11dyweu"),S(N,"active",i[1].includes("tamponi")),s(K,"class","spacer desktop-only svelte-11dyweu"),s(U,"class","carrello tab-link desktop-only svelte-11dyweu"),s(B,"class","chisiamo tab-link desktop-only svelte-11dyweu"),s(z,"class","spacer desktop-only svelte-11dyweu"),s(t,"class","navbar svelte-11dyweu"),S(t,"active",i[0])},m(A,g){ge(A,t,g),e(t,n),e(t,b),e(t,v),e(v,o),e(t,E),e(t,k),e(k,$),e(t,P),e(t,y),e(t,d),e(t,V),e(V,q),e(q,_),e(V,f),e(V,D),e(t,C),e(t,N),e(N,T),e(T,w),e(N,u),e(N,M),e(t,O),e(t,K),e(t,F),e(t,U),e(U,Z),e(t,G),e(t,B),e(B,x),e(t,ee),e(t,z),te||(ce=[J(V,"click",i[2]),J(N,"click",i[3]),J(U,"click",i[4]),J(B,"click",i[5])],te=!0)},p(A,[g]){g&2&&S(N,"active",A[1].includes("tamponi")),g&1&&S(t,"active",A[0])},i:ne,o:ne,d(A){A&&a(t),te=!1,ye(ce)}}}function He(i,t,n){let b,v;ae(i,le,y=>n(6,b=y)),ae(i,de,y=>n(7,v=y));let o=v;de.subscribe(y=>{n(0,o=y)});let p=b.route.id||"";return le.subscribe(y=>{n(1,p=y.route.id||"")}),[o,p,()=>X("/frame_site/specchietti/panoramica"),()=>X("/frame_site/tamponi/panoramica"),()=>X("/frame_site/carrello"),()=>X("/frame_site/chisiamo")]}class je extends pe{constructor(t){super(),be(this,t,He,ze,ke,{})}}function Je(i){let t,n,b,v,o,p,E,k,$,P,y,d,V,q,_,f,D,C,N,T;return{c(){t=l("nav"),n=l("div"),b=h(),v=l("div"),o=H("Swab M-Bike"),p=h(),E=l("div"),k=h(),$=l("div"),P=H("panoramica"),y=h(),d=l("div"),V=H("confronta"),q=h(),_=l("div"),f=H("acquista"),D=h(),C=l("div"),this.h()},l(w){t=c(w,"NAV",{class:!0});var u=r(t);n=c(u,"DIV",{class:!0}),r(n).forEach(a),b=m(u),v=c(u,"DIV",{class:!0});var M=r(v);o=j(M,"Swab M-Bike"),M.forEach(a),p=m(u),E=c(u,"DIV",{class:!0}),r(E).forEach(a),k=m(u),$=c(u,"DIV",{class:!0});var O=r($);P=j(O,"panoramica"),O.forEach(a),y=m(u),d=c(u,"DIV",{class:!0});var K=r(d);V=j(K,"confronta"),K.forEach(a),q=m(u),_=c(u,"DIV",{class:!0});var F=r(_);f=j(F,"acquista"),F.forEach(a),D=m(u),C=c(u,"DIV",{class:!0}),r(C).forEach(a),u.forEach(a),this.h()},h(){s(n,"class","spacer-1"),s(v,"class","title"),s(E,"class","spacer-5"),s($,"class","tab-link panoramica svelte-1ay6h85"),s(d,"class","tab-link confronta svelte-1ay6h85"),S(d,"active",i[0].includes("confronta")),s(_,"class","tab-link acquista svelte-1ay6h85"),S(_,"active",i[0].includes("acquista")),s(C,"class","spacer-1"),s(t,"class","navbar svelte-1ay6h85")},m(w,u){ge(w,t,u),e(t,n),e(t,b),e(t,v),e(v,o),e(t,p),e(t,E),e(t,k),e(t,$),e($,P),e(t,y),e(t,d),e(d,V),e(t,q),e(t,_),e(_,f),e(t,D),e(t,C),N||(T=[J($,"click",i[1]),J(d,"click",i[2]),J(_,"click",i[3])],N=!0)},p(w,[u]){u&1&&S(d,"active",w[0].includes("confronta")),u&1&&S(_,"active",w[0].includes("acquista"))},i:ne,o:ne,d(w){w&&a(t),N=!1,ye(T)}}}function Ke(i,t,n){let b;ae(i,le,k=>n(5,b=k)),ae(i,ue,k=>n(6,k)),ue.subscribe(k=>{});let v=b.route.id||"";return le.subscribe(k=>{n(0,v=k.route.id||"")}),[v,()=>{X("/frame_site/tamponi/panoramica")},()=>{X("/frame_site/tamponi/confronta")},()=>{X("/frame_site/tamponi/acquista")}]}class Re extends pe{constructor(t){super(),be(this,t,Ke,Je,ke,{})}}function Ue(i){let t,n,b,v,o,p,E,k,$,P,y,d,V,q,_,f,D,C,N,T,w,u,M,O,K,F,U,Z,G,B,x,ee,z,te,ce,A,g,ie,R,Q,re,se;return{c(){t=l("div"),n=l("div"),b=h(),v=l("div"),o=l("img"),E=h(),k=l("div"),$=h(),P=l("div"),y=h(),d=l("div"),V=l("span"),q=h(),_=l("span"),f=h(),D=l("span"),C=h(),N=l("div"),T=h(),w=l("div"),u=l("div"),M=l("div"),O=H("Specchietti"),K=h(),F=l("div"),U=H("Tamponi"),Z=h(),G=l("div"),B=l("div"),x=H("Confronta"),ee=h(),z=l("div"),te=H("Panoramica"),ce=h(),A=l("div"),g=H("Chi siamo?"),ie=h(),R=l("div"),Q=H("Carrello"),this.h()},l(L){t=c(L,"DIV",{class:!0});var I=r(t);n=c(I,"DIV",{class:!0}),r(n).forEach(a),b=m(I),v=c(I,"DIV",{class:!0});var ve=r(v);o=c(ve,"IMG",{src:!0,class:!0}),ve.forEach(a),E=m(I),k=c(I,"DIV",{class:!0}),r(k).forEach(a),$=m(I),P=c(I,"DIV",{class:!0}),r(P).forEach(a),y=m(I),d=c(I,"DIV",{class:!0});var oe=r(d);V=c(oe,"SPAN",{class:!0}),r(V).forEach(a),q=m(oe),_=c(oe,"SPAN",{class:!0}),r(_).forEach(a),f=m(oe),D=c(oe,"SPAN",{class:!0}),r(D).forEach(a),oe.forEach(a),C=m(I),N=c(I,"DIV",{class:!0}),r(N).forEach(a),T=m(I),w=c(I,"DIV",{class:!0});var _e=r(w);u=c(_e,"DIV",{class:!0});var fe=r(u);M=c(fe,"DIV",{class:!0});var we=r(M);O=j(we,"Specchietti"),we.forEach(a),K=m(fe),F=c(fe,"DIV",{class:!0});var $e=r(F);U=j($e,"Tamponi"),$e.forEach(a),fe.forEach(a),Z=m(_e),G=c(_e,"DIV",{class:!0});var W=r(G);B=c(W,"DIV",{class:!0});var qe=r(B);x=j(qe,"Confronta"),qe.forEach(a),ee=m(W),z=c(W,"DIV",{class:!0});var Ne=r(z);te=j(Ne,"Panoramica"),Ne.forEach(a),ce=m(W),A=c(W,"DIV",{class:!0});var Se=r(A);g=j(Se,"Chi siamo?"),Se.forEach(a),ie=m(W),R=c(W,"DIV",{class:!0});var Pe=r(R);Q=j(Pe,"Carrello"),Pe.forEach(a),W.forEach(a),_e.forEach(a),I.forEach(a),this.h()},h(){s(n,"class","spacer-1"),Ce(o.src,p=Me)||s(o,"src",p),s(o,"class","svelte-142st2e"),s(v,"class","logo svelte-142st2e"),s(k,"class","spacer-3"),s(P,"class","spacer-3"),s(V,"class","line1 svelte-142st2e"),s(_,"class","line2 svelte-142st2e"),s(D,"class","line3 svelte-142st2e"),s(d,"class","hamburger svelte-142st2e"),S(d,"active",i[1]),s(N,"class","spacer-1"),s(M,"class","mob-link svelte-142st2e"),S(M,"active",i[0].includes("specchietti")),s(F,"class","mob-link svelte-142st2e"),S(F,"active",i[0].includes("tamponi")),s(u,"class","left half-menu svelte-142st2e"),s(B,"class","mob-link  svelte-142st2e"),S(B,"active",i[0].includes("confronta")),s(z,"class","mob-link  svelte-142st2e"),S(z,"active",i[0].includes("panoramica")),s(A,"class","mob-link  svelte-142st2e"),S(A,"active",i[0].includes("chisiamo")),s(R,"class","mob-link  svelte-142st2e"),S(R,"active",i[0].includes("carrello")),s(G,"class","right half-menu svelte-142st2e"),s(w,"class","menu svelte-142st2e"),S(w,"active",i[1]),s(t,"class","navbar svelte-142st2e")},m(L,I){ge(L,t,I),e(t,n),e(t,b),e(t,v),e(v,o),e(t,E),e(t,k),e(t,$),e(t,P),e(t,y),e(t,d),e(d,V),e(d,q),e(d,_),e(d,f),e(d,D),e(t,C),e(t,N),e(t,T),e(t,w),e(w,u),e(u,M),e(M,O),e(u,K),e(u,F),e(F,U),e(w,Z),e(w,G),e(G,B),e(B,x),e(G,ee),e(G,z),e(z,te),e(G,ce),e(G,A),e(A,g),e(G,ie),e(G,R),e(R,Q),re||(se=[J(d,"click",i[3]),J(M,"click",i[4]),J(F,"click",i[5]),J(B,"click",i[6]),J(z,"click",i[7]),J(A,"click",i[8]),J(R,"click",i[9])],re=!0)},p(L,[I]){I&2&&S(d,"active",L[1]),I&1&&S(M,"active",L[0].includes("specchietti")),I&1&&S(F,"active",L[0].includes("tamponi")),I&1&&S(B,"active",L[0].includes("confronta")),I&1&&S(z,"active",L[0].includes("panoramica")),I&1&&S(A,"active",L[0].includes("chisiamo")),I&1&&S(R,"active",L[0].includes("carrello")),I&2&&S(w,"active",L[1])},i:ne,o:ne,d(L){L&&a(t),re=!1,ye(se)}}}function Oe(i,t,n){let b;ae(i,le,q=>n(10,b=q));let v=b.route.id||"";le.subscribe(q=>{n(0,v=q.route.id||"")});let o=!1;function p(q){X(q),n(1,o=!1)}return[v,o,p,()=>{n(1,o=!o)},()=>p("/frame_site/specchietti/panoramica"),()=>p("/frame_site/tamponi/panoramica"),()=>p("/frame_site/tamponi/confronta"),()=>p("/frame_site/tamponi/panoramica"),()=>p("/frame_site/chisiamo"),()=>p("/frame_site/carrello")]}class Qe extends pe{constructor(t){super(),be(this,t,Oe,Ue,ke,{})}}function We(i){let t,n,b,v,o,p,E,k,$,P,y,d,V;v=new je({}),E=new Re({}),P=new Qe({});const q=i[1].default,_=Ae(q,i,i[0],null);return{c(){t=l("div"),n=l("div"),b=l("div"),Ee(v.$$.fragment),o=h(),p=l("div"),Ee(E.$$.fragment),k=h(),$=l("div"),Ee(P.$$.fragment),y=h(),d=l("div"),_&&_.c(),this.h()},l(f){t=c(f,"DIV",{class:!0});var D=r(t);n=c(D,"DIV",{class:!0});var C=r(n);b=c(C,"DIV",{class:!0});var N=r(b);Ie(v.$$.fragment,N),N.forEach(a),o=m(C),p=c(C,"DIV",{class:!0});var T=r(p);Ie(E.$$.fragment,T),T.forEach(a),C.forEach(a),k=m(D),$=c(D,"DIV",{class:!0});var w=r($);Ie(P.$$.fragment,w),w.forEach(a),y=m(D),d=c(D,"DIV",{class:!0});var u=r(d);_&&_.l(u),u.forEach(a),D.forEach(a),this.h()},h(){s(b,"class","top-nav svelte-b062kv"),s(p,"class","bottom-nav svelte-b062kv"),s(n,"class","navbar-desktop svelte-b062kv"),s($,"class","navbar-mobile svelte-b062kv"),s(d,"class","content svelte-b062kv"),s(t,"class","layout svelte-b062kv")},m(f,D){ge(f,t,D),e(t,n),e(n,b),Ve(v,b,null),e(n,o),e(n,p),Ve(E,p,null),e(t,k),e(t,$),Ve(P,$,null),e(t,y),e(t,d),_&&_.m(d,null),V=!0},p(f,[D]){_&&_.p&&(!V||D&1)&&Be(_,q,f,f[0],V?Te(q,f[0],D,null):Le(f[0]),null)},i(f){V||(he(v.$$.fragment,f),he(E.$$.fragment,f),he(P.$$.fragment,f),he(_,f),V=!0)},o(f){me(v.$$.fragment,f),me(E.$$.fragment,f),me(P.$$.fragment,f),me(_,f),V=!1},d(f){f&&a(t),De(v),De(E),De(P),_&&_.d(f)}}}function Xe(i,t,n){ae(i,de,o=>n(4,o)),ae(i,ue,o=>n(5,o));let{$$slots:b={},$$scope:v}=t;return le.subscribe(o=>{Ge.set(o.route.id||"")}),ue.subscribe(o=>{}),de.subscribe(o=>{}),Fe(()=>{let o=document.querySelector(":root");function p(){o.style.setProperty("--vh",`${window.innerHeight*.01}px`)}de.subscribe(E=>{o.style.setProperty("--h1",`${E?"4rem":"0rem"}`)}),ue.subscribe(E=>{o.style.setProperty("--h2",`${E?"3rem":"0rem"}`)}),p(),window.addEventListener("resize",p)}),i.$$set=o=>{"$$scope"in o&&n(0,v=o.$$scope)},[v,b]}class tt extends pe{constructor(t){super(),be(this,t,Xe,We,ke,{})}}export{tt as default};
