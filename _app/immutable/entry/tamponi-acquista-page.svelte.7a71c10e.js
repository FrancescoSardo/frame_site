import{S as ut,i as vt,s as dt,C as gt,k as _,q as k,a as V,l as m,m as f,r as z,h as n,c as b,n as o,E as tt,b as S,F as l,G as pt,Q as wt,u as he,H as yt,I as Et,J as It,g as O,d as ie,N as se,O as ae,D as Vt,f as ft,P as ht,e as lt,v as _t,y as bt,z as Dt,A as kt,B as zt}from"../chunks/index.46c359e8.js";import{r as Ct}from"../chunks/render_shark.d15f51cb.js";function st(s){let e,t,i;return{c(){e=_("div"),t=k("+€ "),i=k(s[3]),this.h()},l(c){e=m(c,"DIV",{class:!0});var v=f(e);t=z(v,"+€ "),i=z(v,s[3]),v.forEach(n),this.h()},h(){o(e,"class","cost svelte-s9o484")},m(c,v){S(c,e,v),l(e,t),l(e,i)},p(c,v){v&8&&he(i,c[3])},d(c){c&&n(e)}}}function Ht(s){let e,t,i,c,v,d,w,D;const p=s[5].default,r=gt(p,s,s[4],null);let g=s[3]>0&&st(s);return{c(){e=_("div"),t=_("div"),i=k(s[0]),c=V(),r&&r.c(),v=V(),g&&g.c(),this.h()},l(a){e=m(a,"DIV",{class:!0});var u=f(e);t=m(u,"DIV",{class:!0});var h=f(t);i=z(h,s[0]),h.forEach(n),c=b(u),r&&r.l(u),v=b(u),g&&g.l(u),u.forEach(n),this.h()},h(){o(t,"class","label svelte-s9o484"),o(e,"class","shop-btn svelte-s9o484"),tt(e,"selected",s[1])},m(a,u){S(a,e,u),l(e,t),l(t,i),l(e,c),r&&r.m(e,null),l(e,v),g&&g.m(e,null),d=!0,w||(D=pt(e,"click",function(){wt(s[2])&&s[2].apply(this,arguments)}),w=!0)},p(a,[u]){s=a,(!d||u&1)&&he(i,s[0]),r&&r.p&&(!d||u&16)&&yt(r,p,s,s[4],d?It(p,s[4],u,null):Et(s[4]),null),s[3]>0?g?g.p(s,u):(g=st(s),g.c(),g.m(e,null)):g&&(g.d(1),g=null),(!d||u&2)&&tt(e,"selected",s[1])},i(a){d||(O(r,a),d=!0)},o(a){ie(r,a),d=!1},d(a){a&&n(e),r&&r.d(a),g&&g.d(),w=!1,D()}}}function Bt(s,e,t){let{$$slots:i={},$$scope:c}=e,{label:v}=e,{selected:d}=e,{onClick:w}=e,{cost:D}=e;return s.$$set=p=>{"label"in p&&t(0,v=p.label),"selected"in p&&t(1,d=p.selected),"onClick"in p&&t(2,w=p.onClick),"cost"in p&&t(3,D=p.cost),"$$scope"in p&&t(4,c=p.$$scope)},[v,d,w,D,c,i]}class Lt extends ut{constructor(e){super(),vt(this,e,Bt,Ht,dt,{label:0,selected:1,onClick:2,cost:3})}}function at(s,e,t){const i=s.slice();return i[8]=e[t],i[9]=e,i[10]=t,i}function it(s,e,t){const i=s.slice();return i[11]=e[t],i[13]=t,i}function ct(s){let e;return{c(){e=_("input"),this.h()},l(t){e=m(t,"INPUT",{maxlength:!0,class:!0,type:!0,placeholder:!0}),this.h()},h(){o(e,"maxlength","3"),o(e,"class","incisione-text svelte-1i7uy6w"),o(e,"type","text"),o(e,"placeholder","Inserisci il testo")},m(t,i){S(t,e,i)},d(t){t&&n(e)}}}function qt(s){let e,t=s[10]===0&&s[11].label==="Si"&&ct();return{c(){t&&t.c(),e=V()},l(i){t&&t.l(i),e=b(i)},m(i,c){t&&t.m(i,c),S(i,e,c)},p(i,c){i[10]===0&&i[11].label==="Si"?t||(t=ct(),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){t&&t.d(i),i&&n(e)}}}function rt(s){let e,t;function i(){return s[4](s[8],s[13],s[9],s[10])}return e=new Lt({props:{label:s[11].label,cost:s[11].price,selected:s[8].seleted===s[13],onClick:i,$$slots:{default:[qt]},$$scope:{ctx:s}}}),{c(){bt(e.$$.fragment)},l(c){Dt(e.$$.fragment,c)},m(c,v){kt(e,c,v),t=!0},p(c,v){s=c;const d={};v&1&&(d.label=s[11].label),v&1&&(d.cost=s[11].price),v&1&&(d.selected=s[8].seleted===s[13]),v&1&&(d.onClick=i),v&16385&&(d.$$scope={dirty:v,ctx:s}),e.$set(d)},i(c){t||(O(e.$$.fragment,c),t=!0)},o(c){ie(e.$$.fragment,c),t=!1},d(c){zt(e,c)}}}function ot(s){let e,t,i,c=s[8].header+"",v,d,w,D,p=s[8].choices,r=[];for(let a=0;a<p.length;a+=1)r[a]=rt(it(s,p,a));const g=a=>ie(r[a],1,1,()=>{r[a]=null});return{c(){e=_("div"),t=V(),i=_("div"),v=k(c),d=V();for(let a=0;a<r.length;a+=1)r[a].c();w=lt(),this.h()},l(a){e=m(a,"DIV",{class:!0}),f(e).forEach(n),t=b(a),i=m(a,"DIV",{class:!0});var u=f(i);v=z(u,c),u.forEach(n),d=b(a);for(let h=0;h<r.length;h+=1)r[h].l(a);w=lt(),this.h()},h(){o(e,"class","divider svelte-1i7uy6w"),o(i,"class","title svelte-1i7uy6w")},m(a,u){S(a,e,u),S(a,t,u),S(a,i,u),l(i,v),S(a,d,u);for(let h=0;h<r.length;h+=1)r[h].m(a,u);S(a,w,u),D=!0},p(a,u){if((!D||u&1)&&c!==(c=a[8].header+"")&&he(v,c),u&1){p=a[8].choices;let h;for(h=0;h<p.length;h+=1){const Q=it(a,p,h);r[h]?(r[h].p(Q,u),O(r[h],1)):(r[h]=rt(Q),r[h].c(),O(r[h],1),r[h].m(w.parentNode,w))}for(_t(),h=p.length;h<r.length;h+=1)g(h);ft()}},i(a){if(!D){for(let u=0;u<p.length;u+=1)O(r[u]);D=!0}},o(a){r=r.filter(Boolean);for(let u=0;u<r.length;u+=1)ie(r[u]);D=!1},d(a){a&&n(e),a&&n(t),a&&n(i),a&&n(d),ht(r,a),a&&n(w)}}}function Mt(s){let e,t,i,c,v,d,w,D,p,r,g,a,u,h,Q,_e,me,L,R,ge,pe,U,we,ye,Ee,H,q,N,ce,Ie,j,Ve,be,K,De,ke,M,A,re,ze,W,Ce,He,X,Be,Le,oe,qe,F,Me,ne=nt+s[1]+"",de,Se,Y,Z,Pe,Ne,G,T,ue,Ae,x,Ge,ve,J=s[0],I=[];for(let y=0;y<J.length;y+=1)I[y]=ot(at(s,J,y));const mt=y=>ie(I[y],1,1,()=>{I[y]=null});return{c(){e=_("div"),t=_("div"),i=_("div"),c=_("img"),d=V(),w=_("div"),D=k("Galleria"),p=V(),r=_("div"),g=k("hai qualche "),a=_("span"),u=k("domanda?"),h=k(`
        scrivi a questo numero`),Q=_("br"),_e=k(" +3987223423"),me=V(),L=_("div"),R=_("div"),ge=k("Personalizza il tuo componente"),pe=V(),U=_("div"),we=k("qui puoi scegliere"),ye=V();for(let y=0;y<I.length;y+=1)I[y].c();Ee=V(),H=_("div"),q=_("div"),N=se("svg"),ce=se("path"),Ie=V(),j=_("div"),Ve=k("consegna gratuita garantita"),be=V(),K=_("div"),De=k("guarda le tempistiche"),ke=V(),M=_("div"),A=se("svg"),re=se("path"),ze=V(),W=_("div"),Ce=k("politica di reso"),He=V(),X=_("div"),Be=k("guarda le tempistiche"),Le=V(),oe=_("div"),qe=V(),F=_("div"),Me=k("€"),de=k(ne),Se=V(),Y=_("div"),Z=_("div"),Pe=k("Ordina subito!"),Ne=V(),G=_("div"),T=se("svg"),ue=se("path"),Ae=V(),x=_("div"),Ge=k("Aggiungi al carrello"),this.h()},l(y){e=m(y,"DIV",{class:!0});var C=f(e);t=m(C,"DIV",{class:!0});var E=f(t);i=m(E,"DIV",{class:!0});var P=f(i);c=m(P,"IMG",{class:!0,src:!0,alt:!0}),d=b(P),w=m(P,"DIV",{class:!0});var Fe=f(w);D=z(Fe,"Galleria"),Fe.forEach(n),p=b(P),r=m(P,"DIV",{class:!0});var $=f(r);g=z($,"hai qualche "),a=m($,"SPAN",{class:!0});var Je=f(a);u=z(Je,"domanda?"),Je.forEach(n),h=z($,`
        scrivi a questo numero`),Q=m($,"BR",{}),_e=z($," +3987223423"),$.forEach(n),P.forEach(n),me=b(E),L=m(E,"DIV",{class:!0});var ee=f(L);R=m(ee,"DIV",{class:!0});var Qe=f(R);ge=z(Qe,"Personalizza il tuo componente"),Qe.forEach(n),pe=b(ee),U=m(ee,"DIV",{class:!0});var Re=f(U);we=z(Re,"qui puoi scegliere"),Re.forEach(n),ye=b(ee);for(let Oe=0;Oe<I.length;Oe+=1)I[Oe].l(ee);ee.forEach(n),E.forEach(n),Ee=b(C),H=m(C,"DIV",{class:!0});var B=f(H);q=m(B,"DIV",{class:!0});var te=f(q);N=ae(te,"svg",{xmlns:!0,viewBox:!0,class:!0});var Ue=f(N);ce=ae(Ue,"path",{d:!0}),f(ce).forEach(n),Ue.forEach(n),Ie=b(te),j=m(te,"DIV",{class:!0});var je=f(j);Ve=z(je,"consegna gratuita garantita"),je.forEach(n),be=b(te),K=m(te,"DIV",{class:!0});var Ke=f(K);De=z(Ke,"guarda le tempistiche"),Ke.forEach(n),te.forEach(n),ke=b(B),M=m(B,"DIV",{class:!0});var le=f(M);A=ae(le,"svg",{xmlns:!0,viewBox:!0,class:!0});var We=f(A);re=ae(We,"path",{d:!0}),f(re).forEach(n),We.forEach(n),ze=b(le),W=m(le,"DIV",{class:!0});var Xe=f(W);Ce=z(Xe,"politica di reso"),Xe.forEach(n),He=b(le),X=m(le,"DIV",{class:!0});var Ye=f(X);Be=z(Ye,"guarda le tempistiche"),Ye.forEach(n),le.forEach(n),Le=b(B),oe=m(B,"DIV",{class:!0}),f(oe).forEach(n),qe=b(B),F=m(B,"DIV",{class:!0});var Te=f(F);Me=z(Te,"€"),de=z(Te,ne),Te.forEach(n),Se=b(B),Y=m(B,"DIV",{class:!0});var Ze=f(Y);Z=m(Ze,"DIV",{class:!0});var xe=f(Z);Pe=z(xe,"Ordina subito!"),xe.forEach(n),Ze.forEach(n),Ne=b(B),G=m(B,"DIV",{class:!0});var fe=f(G);T=ae(fe,"svg",{xmlns:!0,viewBox:!0,class:!0});var $e=f(T);ue=ae($e,"path",{d:!0}),f(ue).forEach(n),$e.forEach(n),Ae=b(fe),x=m(fe,"DIV",{class:!0});var et=f(x);Ge=z(et,"Aggiungi al carrello"),et.forEach(n),fe.forEach(n),B.forEach(n),C.forEach(n),this.h()},h(){o(c,"class","render svelte-1i7uy6w"),Vt(c.src,v=Ct)||o(c,"src",v),o(c,"alt",""),o(w,"class","galleria link svelte-1i7uy6w"),o(a,"class","svelte-1i7uy6w"),o(r,"class","info svelte-1i7uy6w"),o(i,"class","render-container svelte-1i7uy6w"),o(R,"class","titolo svelte-1i7uy6w"),o(U,"class","sub-titolo svelte-1i7uy6w"),o(L,"class","form svelte-1i7uy6w"),o(t,"class","content svelte-1i7uy6w"),o(ce,"d","M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"),o(N,"xmlns","http://www.w3.org/2000/svg"),o(N,"viewBox","0 0 640 512"),o(N,"class","svelte-1i7uy6w"),o(j,"class","text cut svelte-1i7uy6w"),o(K,"class","link  svelte-1i7uy6w"),o(q,"class","container consegna desktop-only svelte-1i7uy6w"),o(re,"d","M45.9 42.1c3-6.1 9.6-9.6 16.3-8.7L307 64 551.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L426.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L307 64 223.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L24.1 170.6C4.8 165.1-4.7 143.4 4.2 125.5L45.9 42.1zM308.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L563 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C66 419.7 51 400.5 51 378.5v-167L178.6 248c27.8 8 57.6-3.8 72.5-28.6L305.9 128h2.2z"),o(A,"xmlns","http://www.w3.org/2000/svg"),o(A,"viewBox","0 0 640 512"),o(A,"class","svelte-1i7uy6w"),o(W,"class","text cut svelte-1i7uy6w"),o(X,"class","link  svelte-1i7uy6w"),o(M,"class","container tempistica desktop-only svelte-1i7uy6w"),o(oe,"class","spacer desktop-only svelte-1i7uy6w"),o(F,"class","container prezzo svelte-1i7uy6w"),o(Z,"class","button svelte-1i7uy6w"),o(Y,"class","container ordina noselect svelte-1i7uy6w"),o(ue,"d","M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"),o(T,"xmlns","http://www.w3.org/2000/svg"),o(T,"viewBox","0 0 576 512"),o(T,"class","svelte-1i7uy6w"),o(x,"class","link svelte-1i7uy6w"),o(G,"class","container carrello noselect svelte-1i7uy6w"),o(H,"class","pricebar svelte-1i7uy6w"),o(e,"class","acquista svelte-1i7uy6w")},m(y,C){S(y,e,C),l(e,t),l(t,i),l(i,c),l(i,d),l(i,w),l(w,D),l(i,p),l(i,r),l(r,g),l(r,a),l(a,u),l(r,h),l(r,Q),l(r,_e),l(t,me),l(t,L),l(L,R),l(R,ge),l(L,pe),l(L,U),l(U,we),l(L,ye);for(let E=0;E<I.length;E+=1)I[E].m(L,null);l(e,Ee),l(e,H),l(H,q),l(q,N),l(N,ce),l(q,Ie),l(q,j),l(j,Ve),l(q,be),l(q,K),l(K,De),l(H,ke),l(H,M),l(M,A),l(A,re),l(M,ze),l(M,W),l(W,Ce),l(M,He),l(M,X),l(X,Be),l(H,Le),l(H,oe),l(H,qe),l(H,F),l(F,Me),l(F,de),l(H,Se),l(H,Y),l(Y,Z),l(Z,Pe),l(H,Ne),l(H,G),l(G,T),l(T,ue),l(G,Ae),l(G,x),l(x,Ge),ve=!0},p(y,[C]){if(C&1){J=y[0];let E;for(E=0;E<J.length;E+=1){const P=at(y,J,E);I[E]?(I[E].p(P,C),O(I[E],1)):(I[E]=ot(P),I[E].c(),O(I[E],1),I[E].m(L,null))}for(_t(),E=J.length;E<I.length;E+=1)mt(E);ft()}(!ve||C&2)&&ne!==(ne=nt+y[1]+"")&&he(de,ne)},i(y){if(!ve){for(let C=0;C<J.length;C+=1)O(I[C]);ve=!0}},o(y){I=I.filter(Boolean);for(let C=0;C<I.length;C+=1)ie(I[C]);ve=!1},d(y){y&&n(e),ht(I,y)}}}let nt=100;function St(s,e,t){let{data:i}=e,c=0,v=0,d=null,w=null,D=i.shopinfo.sections;function p(g){d&&clearInterval(d),d=setInterval(()=>{v===c?(clearInterval(d),d=null):t(1,v+=Math.sign(c-v))},20),w&&clearTimeout(w),w=setTimeout(()=>{d&&(clearInterval(d),d=null,clearTimeout(w),w=null),t(1,v=c)},1e3)}const r=(g,a,u,h)=>{t(0,u[h].seleted=a,D),t(0,D)};return s.$$set=g=>{"data"in g&&t(2,i=g.data)},s.$$.update=()=>{s.$$.dirty&9&&(t(3,c=D.reduce((g,a)=>g+a.choices[a.seleted].price,0)),p())},[D,v,i,c,r]}class At extends ut{constructor(e){super(),vt(this,e,St,Mt,dt,{data:2})}}export{At as default};
