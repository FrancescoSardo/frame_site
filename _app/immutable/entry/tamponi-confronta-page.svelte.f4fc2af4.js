import{S as Is,i as Es,s as Vs,k as a,q as T,a as f,N as Nt,l as c,m as l,r as R,h as t,c as u,O as zt,n as s,D as Qe,b as he,E as e,F as We,u as bs,G as is,P as Ts,e as ns,w as Xe,R as rs,y as os,z as ds,A as vs,T as fs,g as us,d as _s,B as hs,H as Rs,o as Ss}from"../chunks/index.7c4a083c.js";import{g as ms}from"../chunks/navigation.8d537448.js";import{l as Ue,c as Ds}from"../chunks/3D.61d78de1.js";function gs(d,o,n){const m=d.slice();return m[7]=o[n],m[9]=n,m}function ks(d){let o;return{c(){o=a("div"),this.h()},l(n){o=c(n,"DIV",{class:!0}),l(o).forEach(t),this.h()},h(){s(o,"class","divider svelte-1baq8st")},m(n,m){he(n,o,m)},d(n){n&&t(o)}}}function ps(d){let o,n=d[7].label+"",m,q,I,E,_;function g(){return d[6](d[9],d[7])}let v=d[9]<d[2].length-1&&ks();return{c(){o=a("div"),m=T(n),q=f(),v&&v.c(),I=ns(),this.h()},l(i){o=c(i,"DIV",{class:!0});var h=l(o);m=R(h,n),h.forEach(t),q=u(i),v&&v.l(i),I=ns(),this.h()},h(){s(o,"class","item svelte-1baq8st")},m(i,h){he(i,o,h),e(o,m),he(i,q,h),v&&v.m(i,h),he(i,I,h),E||(_=We(o,"click",g),E=!0)},p(i,h){d=i,h&4&&n!==(n=d[7].label+"")&&bs(m,n),d[9]<d[2].length-1?v||(v=ks(),v.c(),v.m(I.parentNode,I)):v&&(v.d(1),v=null)},d(i){i&&t(o),i&&t(q),v&&v.d(i),i&&t(I),E=!1,_()}}}function ws(d){let o,n,m,q=d[2][d[3]].label+"",I,E,_,g,v,i,h,F,S,O,G,w=d[2],k=[];for(let r=0;r<w.length;r+=1)k[r]=ps(gs(d,w,r));return{c(){o=a("div"),n=a("div"),m=a("div"),I=T(q),E=f(),_=a("div"),g=Nt("svg"),v=Nt("title"),i=T("chevron-down"),h=Nt("path"),F=f(),S=a("div");for(let r=0;r<k.length;r+=1)k[r].c();this.h()},l(r){o=c(r,"DIV",{class:!0});var j=l(o);n=c(j,"DIV",{class:!0});var D=l(n);m=c(D,"DIV",{class:!0});var P=l(m);I=R(P,q),P.forEach(t),E=u(D),_=c(D,"DIV",{class:!0});var H=l(_);g=zt(H,"svg",{xmlns:!0,viewBox:!0,class:!0});var C=l(g);v=zt(C,"title",{class:!0});var M=l(v);i=R(M,"chevron-down"),M.forEach(t),h=zt(C,"path",{d:!0,class:!0}),l(h).forEach(t),C.forEach(t),H.forEach(t),D.forEach(t),F=u(j),S=c(j,"DIV",{class:!0});var V=l(S);for(let A=0;A<k.length;A+=1)k[A].l(V);V.forEach(t),j.forEach(t),this.h()},h(){s(m,"class","text svelte-1baq8st"),s(v,"class","svelte-1baq8st"),s(h,"d","M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"),s(h,"class","svelte-1baq8st"),s(g,"xmlns","http://www.w3.org/2000/svg"),s(g,"viewBox","0 0 24 24"),s(g,"class","svelte-1baq8st"),s(_,"class","arrow svelte-1baq8st"),s(n,"class","selected noselect svelte-1baq8st"),Qe(n,"active",d[4]),s(S,"class","options svelte-1baq8st"),Qe(S,"active",d[4]),s(o,"class","selector svelte-1baq8st")},m(r,j){he(r,o,j),e(o,n),e(n,m),e(m,I),e(n,E),e(n,_),e(_,g),e(g,v),e(v,i),e(g,h),e(o,F),e(o,S);for(let D=0;D<k.length;D+=1)k[D].m(S,null);O||(G=We(n,"click",d[5]),O=!0)},p(r,[j]){if(j&12&&q!==(q=r[2][r[3]].label+"")&&bs(I,q),j&16&&Qe(n,"active",r[4]),j&31){w=r[2];let D;for(D=0;D<w.length;D+=1){const P=gs(r,w,D);k[D]?k[D].p(P,j):(k[D]=ps(P),k[D].c(),k[D].m(S,null))}for(;D<k.length;D+=1)k[D].d(1);k.length=w.length}j&16&&Qe(S,"active",r[4])},i:is,o:is,d(r){r&&t(o),Ts(k,r),O=!1,G()}}}function Ps(d,o,n){let m=0,q=!1,{options:I=[]}=o,{selected_L:E}=o,{selected_R:_}=o;const g=()=>{n(4,q=!q)},v=(i,h)=>{n(3,m=i),n(4,q=!1),E!=null&&n(0,E=h.label),_!=null&&n(1,_=h.label)};return d.$$set=i=>{"options"in i&&n(2,I=i.options),"selected_L"in i&&n(0,E=i.selected_L),"selected_R"in i&&n(1,_=i.selected_R)},[E,_,I,m,q,g,v]}class qs extends Is{constructor(o){super(),Es(this,o,Ps,ws,Vs,{options:2,selected_L:0,selected_R:1})}}const se={Long:{label:"Long",descD:["Long Design 1","Long Design 2"],descT:["Long Tecnico 1","Long Design 2"],descdim:["Dimensione  1","DImensione 2"]},Plane:{label:"Plane",descD:["dest Design 1","Desc Design 2"],descT:["dest Tecnico 1","Desc Design 2"],descdim:["Dimensione  1","DImensione 2"]},Shark:{label:"Shark",descD:["Shark Design 1","Shark Design 2"],descT:["Shark Tecnico 1","Shark Design 2"],descdim:["Dimensione  1","DImensione 2"]},Tampone:{label:"Tampone",descD:["Tampone Design 1","Tampone Design 2"],descT:["Tampone Tecnico 1","Tampone Design 2"],descdim:["Dimensione  1","DImensione 2"]}};function Os(d){let o,n,m,q,I,E,_,g,v,i,h,F,S,O,G,w,k,r,j,D,P,H,C,M,V,A,Ye,xe,le,$e,et,$,tt,st,Z,me,lt,J,ae,at,ct,De,it,ge,nt,ke,rt,K,pe,ot,Q,ce,dt,vt,qe,ft,Ie,ut,Ee,_t,p,N,ht,mt,ie,Dt,ne,U,Ve,gt,re,kt,pt,be,qt,B,oe,It,Et,de,Vt,bt,ee,yt,jt,W,X,ve,Lt,Tt,ye,Rt,je,St,Le,wt,Te,Pt,Y,x,fe,Ot,Ct,Re,At,Se,Bt,we,Ft,Pe,Ce,Mt,Gt;function ys(L){d[9](L)}let Ht={options:[{label:"Long",value:"Long"},{label:"Shark",value:"Shark"},{label:"Plane",value:"Plane"},{label:"Tampone",value:"Tampone"}]};d[0]!==void 0&&(Ht.selected_L=d[0]),h=new qs({props:Ht}),Xe.push(()=>rs(h,"selected_L",ys));function js(L){d[12](L)}let Zt={options:[{label:"Long",value:"Long"},{label:"Shark",value:"Shark"},{label:"Plane",value:"Plane"},{label:"Tampone",value:"Tampone"}]};return d[1]!==void 0&&(Zt.selected_R=d[1]),N=new qs({props:Zt}),Xe.push(()=>rs(N,"selected_R",js)),{c(){o=a("div"),n=a("div"),m=a("div"),q=T("Confronta i modelli"),I=f(),E=a("div"),_=T("ti serve un consiglio? manda un messaggio a questo numero +39 349302390"),g=f(),v=a("div"),i=a("div"),os(h.$$.fragment),S=f(),O=a("div"),G=f(),w=a("div"),k=a("div"),r=a("div"),j=f(),D=a("div"),P=T("Carbonio"),H=f(),C=a("div"),M=f(),V=a("div"),A=a("div"),Ye=T("a partire da"),xe=f(),le=a("div"),$e=T("99$"),et=f(),$=a("div"),tt=T("acquista"),st=f(),Z=a("div"),me=a("div"),lt=f(),J=a("div"),ae=a("div"),at=T("Tecnico"),ct=f(),De=a("div"),it=f(),ge=a("div"),nt=f(),ke=a("div"),rt=f(),K=a("div"),pe=a("div"),ot=f(),Q=a("div"),ce=a("div"),dt=T("Design"),vt=f(),qe=a("div"),ft=f(),Ie=a("div"),ut=f(),Ee=a("div"),_t=f(),p=a("div"),os(N.$$.fragment),mt=f(),ie=a("div"),Dt=f(),ne=a("div"),U=a("div"),Ve=a("div"),gt=f(),re=a("div"),kt=T("Carbonio"),pt=f(),be=a("div"),qt=f(),B=a("div"),oe=a("div"),It=T("a partire da"),Et=f(),de=a("div"),Vt=T("99$"),bt=f(),ee=a("div"),yt=T("acquista"),jt=f(),W=a("div"),X=a("div"),ve=a("div"),Lt=T("tecnico"),Tt=f(),ye=a("div"),Rt=f(),je=a("div"),St=f(),Le=a("div"),wt=f(),Te=a("div"),Pt=f(),Y=a("div"),x=a("div"),fe=a("div"),Ot=T("tecnico"),Ct=f(),Re=a("div"),At=f(),Se=a("div"),Bt=f(),we=a("div"),Ft=f(),Pe=a("div"),this.h()},l(L){o=c(L,"DIV",{class:!0});var z=l(o);n=c(z,"DIV",{class:!0});var te=l(n);m=c(te,"DIV",{class:!0});var Oe=l(m);q=R(Oe,"Confronta i modelli"),Oe.forEach(t),I=u(te),E=c(te,"DIV",{class:!0});var Jt=l(E);_=R(Jt,"ti serve un consiglio? manda un messaggio a questo numero +39 349302390"),Jt.forEach(t),te.forEach(t),g=u(z),v=c(z,"DIV",{class:!0});var Ae=l(v);i=c(Ae,"DIV",{class:!0});var b=l(i);ds(h.$$.fragment,b),S=u(b),O=c(b,"DIV",{class:!0});var Ls=l(O);Ls.forEach(t),G=u(b),w=c(b,"DIV",{class:!0});var Kt=l(w);k=c(Kt,"DIV",{class:!0});var Be=l(k);r=c(Be,"DIV",{class:!0}),l(r).forEach(t),j=u(Be),D=c(Be,"DIV",{class:!0});var Qt=l(D);P=R(Qt,"Carbonio"),Qt.forEach(t),Be.forEach(t),Kt.forEach(t),H=u(b),C=c(b,"DIV",{class:!0}),l(C).forEach(t),M=u(b),V=c(b,"DIV",{class:!0});var ue=l(V);A=c(ue,"DIV",{class:!0});var Ut=l(A);Ye=R(Ut,"a partire da"),Ut.forEach(t),xe=u(ue),le=c(ue,"DIV",{class:!0});var Wt=l(le);$e=R(Wt,"99$"),Wt.forEach(t),et=u(ue),$=c(ue,"DIV",{class:!0});var Xt=l($);tt=R(Xt,"acquista"),Xt.forEach(t),ue.forEach(t),st=u(b),Z=c(b,"DIV",{class:!0});var Fe=l(Z);me=c(Fe,"DIV",{class:!0}),l(me).forEach(t),lt=u(Fe),J=c(Fe,"DIV",{class:!0});var Me=l(J);ae=c(Me,"DIV",{class:!0});var Yt=l(ae);at=R(Yt,"Tecnico"),Yt.forEach(t),ct=u(Me),De=c(Me,"DIV",{class:!0}),l(De).forEach(t),Me.forEach(t),Fe.forEach(t),it=u(b),ge=c(b,"DIV",{class:!0}),l(ge).forEach(t),nt=u(b),ke=c(b,"DIV",{class:!0}),l(ke).forEach(t),rt=u(b),K=c(b,"DIV",{class:!0});var Ne=l(K);pe=c(Ne,"DIV",{class:!0}),l(pe).forEach(t),ot=u(Ne),Q=c(Ne,"DIV",{class:!0});var ze=l(Q);ce=c(ze,"DIV",{class:!0});var xt=l(ce);dt=R(xt,"Design"),xt.forEach(t),vt=u(ze),qe=c(ze,"DIV",{class:!0}),l(qe).forEach(t),ze.forEach(t),Ne.forEach(t),ft=u(b),Ie=c(b,"DIV",{class:!0}),l(Ie).forEach(t),ut=u(b),Ee=c(b,"DIV",{class:!0}),l(Ee).forEach(t),b.forEach(t),_t=u(Ae),p=c(Ae,"DIV",{class:!0});var y=l(p);ds(N.$$.fragment,y),mt=u(y),ie=c(y,"DIV",{class:!0}),l(ie).forEach(t),Dt=u(y),ne=c(y,"DIV",{class:!0});var $t=l(ne);U=c($t,"DIV",{class:!0});var Ge=l(U);Ve=c(Ge,"DIV",{class:!0}),l(Ve).forEach(t),gt=u(Ge),re=c(Ge,"DIV",{class:!0});var es=l(re);kt=R(es,"Carbonio"),es.forEach(t),Ge.forEach(t),$t.forEach(t),pt=u(y),be=c(y,"DIV",{class:!0}),l(be).forEach(t),qt=u(y),B=c(y,"DIV",{class:!0});var _e=l(B);oe=c(_e,"DIV",{class:!0});var ts=l(oe);It=R(ts,"a partire da"),ts.forEach(t),Et=u(_e),de=c(_e,"DIV",{class:!0});var ss=l(de);Vt=R(ss,"99$"),ss.forEach(t),bt=u(_e),ee=c(_e,"DIV",{class:!0});var ls=l(ee);yt=R(ls,"acquista"),ls.forEach(t),_e.forEach(t),jt=u(y),W=c(y,"DIV",{class:!0});var He=l(W);X=c(He,"DIV",{class:!0});var Ze=l(X);ve=c(Ze,"DIV",{class:!0});var as=l(ve);Lt=R(as,"tecnico"),as.forEach(t),Tt=u(Ze),ye=c(Ze,"DIV",{class:!0}),l(ye).forEach(t),Ze.forEach(t),Rt=u(He),je=c(He,"DIV",{class:!0}),l(je).forEach(t),He.forEach(t),St=u(y),Le=c(y,"DIV",{class:!0}),l(Le).forEach(t),wt=u(y),Te=c(y,"DIV",{class:!0}),l(Te).forEach(t),Pt=u(y),Y=c(y,"DIV",{class:!0});var Je=l(Y);x=c(Je,"DIV",{class:!0});var Ke=l(x);fe=c(Ke,"DIV",{class:!0});var cs=l(fe);Ot=R(cs,"tecnico"),cs.forEach(t),Ct=u(Ke),Re=c(Ke,"DIV",{class:!0}),l(Re).forEach(t),Ke.forEach(t),At=u(Je),Se=c(Je,"DIV",{class:!0}),l(Se).forEach(t),Je.forEach(t),Bt=u(y),we=c(y,"DIV",{class:!0}),l(we).forEach(t),Ft=u(y),Pe=c(y,"DIV",{class:!0}),l(Pe).forEach(t),y.forEach(t),Ae.forEach(t),z.forEach(t),this.h()},h(){s(m,"class","h1 svelte-1kqa5yj"),s(E,"class","h2 svelte-1kqa5yj"),s(n,"class","testo svelte-1kqa5yj"),s(O,"class","render_conteiner svelte-1kqa5yj"),s(r,"class","circle svelte-1kqa5yj"),s(D,"class","text svelte-1kqa5yj"),s(k,"class","material svelte-1kqa5yj"),s(w,"class","material-content svelte-1kqa5yj"),s(C,"class","line svelte-1kqa5yj"),s(A,"class","text svelte-1kqa5yj"),s(le,"class","price"),s($,"class","button svelte-1kqa5yj"),s(V,"class","content-box svelte-1kqa5yj"),s(me,"class","spacer-1"),s(ae,"class","text svelte-1kqa5yj"),s(De,"class","line svelte-1kqa5yj"),s(J,"class","cc svelte-1kqa5yj"),s(Z,"class","content-tec svelte-1kqa5yj"),s(ge,"class","img svelte-1kqa5yj"),s(ke,"class","img svelte-1kqa5yj"),s(pe,"class","spacer-1"),s(ce,"class","text svelte-1kqa5yj"),s(qe,"class","line svelte-1kqa5yj"),s(Q,"class","cc svelte-1kqa5yj"),s(K,"class","content-tec svelte-1kqa5yj"),s(Ie,"class","img svelte-1kqa5yj"),s(Ee,"class","img svelte-1kqa5yj"),s(i,"class","left svelte-1kqa5yj"),s(ie,"class","render_conteiner svelte-1kqa5yj"),s(Ve,"class","circle svelte-1kqa5yj"),s(re,"class","text svelte-1kqa5yj"),s(U,"class","material svelte-1kqa5yj"),s(ne,"class","material-content svelte-1kqa5yj"),s(be,"class","line svelte-1kqa5yj"),s(oe,"class","text svelte-1kqa5yj"),s(de,"class","price"),s(ee,"class","button svelte-1kqa5yj"),s(B,"class","content-box svelte-1kqa5yj"),s(ve,"class","text svelte-1kqa5yj"),s(ye,"class","line svelte-1kqa5yj"),s(X,"class","cc svelte-1kqa5yj"),s(je,"class","spacer-1"),s(W,"class","content-tec svelte-1kqa5yj"),s(Le,"class","img svelte-1kqa5yj"),s(Te,"class","img svelte-1kqa5yj"),s(fe,"class","text svelte-1kqa5yj"),s(Re,"class","line svelte-1kqa5yj"),s(x,"class","cc svelte-1kqa5yj"),s(Se,"class","spacer-1"),s(Y,"class","content-tec svelte-1kqa5yj"),s(we,"class","img svelte-1kqa5yj"),s(Pe,"class","img svelte-1kqa5yj"),s(p,"class","right svelte-1kqa5yj"),s(v,"class","content svelte-1kqa5yj"),s(o,"class","confronta svelte-1kqa5yj")},m(L,z){he(L,o,z),e(o,n),e(n,m),e(m,q),e(n,I),e(n,E),e(E,_),e(o,g),e(o,v),e(v,i),vs(h,i,null),e(i,S),e(i,O),d[10](O),e(i,G),e(i,w),e(w,k),e(k,r),e(k,j),e(k,D),e(D,P),e(i,H),e(i,C),e(i,M),e(i,V),e(V,A),e(A,Ye),e(V,xe),e(V,le),e(le,$e),e(V,et),e(V,$),e($,tt),e(i,st),e(i,Z),e(Z,me),e(Z,lt),e(Z,J),e(J,ae),e(ae,at),e(J,ct),e(J,De),e(i,it),e(i,ge),e(i,nt),e(i,ke),e(i,rt),e(i,K),e(K,pe),e(K,ot),e(K,Q),e(Q,ce),e(ce,dt),e(Q,vt),e(Q,qe),e(i,ft),e(i,Ie),e(i,ut),e(i,Ee),e(v,_t),e(v,p),vs(N,p,null),e(p,mt),e(p,ie),d[13](ie),e(p,Dt),e(p,ne),e(ne,U),e(U,Ve),e(U,gt),e(U,re),e(re,kt),e(p,pt),e(p,be),e(p,qt),e(p,B),e(B,oe),e(oe,It),e(B,Et),e(B,de),e(de,Vt),e(B,bt),e(B,ee),e(ee,yt),e(p,jt),e(p,W),e(W,X),e(X,ve),e(ve,Lt),e(X,Tt),e(X,ye),e(W,Rt),e(W,je),e(p,St),e(p,Le),e(p,wt),e(p,Te),e(p,Pt),e(p,Y),e(Y,x),e(x,fe),e(fe,Ot),e(x,Ct),e(x,Re),e(Y,At),e(Y,Se),e(p,Bt),e(p,we),e(p,Ft),e(p,Pe),Ce=!0,Mt||(Gt=[We($,"click",d[11]),We(ee,"click",d[14])],Mt=!0)},p(L,[z]){const te={};!F&&z&1&&(F=!0,te.selected_L=L[0],fs(()=>F=!1)),h.$set(te);const Oe={};!ht&&z&2&&(ht=!0,Oe.selected_R=L[1],fs(()=>ht=!1)),N.$set(Oe)},i(L){Ce||(us(h.$$.fragment,L),us(N.$$.fragment,L),Ce=!0)},o(L){_s(h.$$.fragment,L),_s(N.$$.fragment,L),Ce=!1},d(L){L&&t(o),hs(h),d[10](null),hs(N),d[13](null),Mt=!1,Rs(Gt)}}}function Cs(d,o,n){let m="Long",q="Long",I="Long",E="Long",_={},g,v,i,h;Ss(async()=>{Ue("/solo_tampone.gltf",V=>{g.remove(_.Tampone),n(6,_.Tampone=V,_),g.add(V)}),Ue("/long.gltf",V=>{g.remove(_.Long),n(6,_.Long=V,_)}),Ue("/plane.gltf",V=>{g.remove(_.Plane),n(6,_.Plane=V,_)}),Ue("/shark.gltf",V=>{n(6,_.Shark=V,_)});let r=await Ds(i);n(7,g=r.scene);let j=r.renderer,D=r.camera,P=await Ds(h);n(8,v=P.scene);let H=P.renderer,C=P.camera;function M(V){requestAnimationFrame(M),j.render(g,D),H.render(v,C)}requestAnimationFrame(M)});function F(r){m=r,n(0,m)}function S(r){Xe[r?"unshift":"push"](()=>{i=r,n(2,i)})}const O=()=>{ms("/frame_site/tamponi/panoramica")};function G(r){I=r,n(1,I)}function w(r){Xe[r?"unshift":"push"](()=>{h=r,n(3,h)})}const k=()=>{ms("/frame_site/tamponi/panoramica")};return d.$$.update=()=>{if(d.$$.dirty&209&&g&&(g.remove(_[q]),n(4,q=m),g.add(_[q])),d.$$.dirty&354&&v&&(v.remove(_[E]),n(5,E=I),v.add(_[E])),d.$$.dirty&3){let r=0;for(;Object.values(se)[r];)Object.values(se)[r].label==m&&(Object.values(se)[r].descD,Object.values(se)[r].descT),Object.values(se)[r].label==I&&(Object.values(se)[r].descD,Object.values(se)[r].descT),r++}},[m,I,i,h,q,E,_,g,v,F,S,O,G,w,k]}class Ms extends Is{constructor(o){super(),Es(this,o,Cs,Os,Vs,{})}}export{Ms as default};