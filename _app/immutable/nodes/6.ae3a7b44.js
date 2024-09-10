import{s as D,n as M,i as ee,c as te}from"../chunks/scheduler.8159148a.js";import{S as A,i as H,g as b,s as w,h as $,j as T,x as P,c as C,f as p,k as v,y as N,a as y,z as k,C as G,m as le,n as se,o as ne,r as J,D as ae,u as K,v as Q,b as R,d as x,t as E,w as W,e as L,p as X}from"../chunks/index.4ec63fb7.js";import{e as z,u as Y,d as oe,o as re}from"../chunks/IconBase.2a01f74c.js";import{l as Z,L as ie}from"../chunks/LinkCard.fdd744cc.js";function F(u,t,e){const s=u.slice();return s[4]=t[e],s}function O(u,t){let e,s=t[4].name+"",n,a,l,o;function m(){return t[3](t[4])}return{key:u,first:null,c(){e=b("button"),n=le(s),a=w(),this.h()},l(r){e=$(r,"BUTTON",{class:!0,type:!0});var i=T(e);n=se(i,s),a=C(i),i.forEach(p),this.h()},h(){v(e,"class","tag svelte-5rbr73"),v(e,"type","button"),N(e,"active",t[1].activeTag===t[4].name),this.first=e},m(r,i){y(r,e,i),k(e,n),k(e,a),l||(o=G(e,"click",m),l=!0)},p(r,i){t=r,i&2&&s!==(s=t[4].name+"")&&ne(n,s),i&2&&N(e,"active",t[1].activeTag===t[4].name)},d(r){r&&p(e),l=!1,o()}}}function ce(u){let t,e,s="全部",n,a=[],l=new Map,o,m,r=z(u[1].tags);const i=f=>f[4].name;for(let f=0;f<r.length;f+=1){let _=F(u,r,f),d=i(_);l.set(d,a[f]=O(d,_))}return{c(){t=b("div"),e=b("button"),e.textContent=s,n=w();for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){t=$(f,"DIV",{class:!0});var _=T(t);e=$(_,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),P(e)!=="svelte-2eizyj"&&(e.textContent=s),n=C(_);for(let d=0;d<a.length;d+=1)a[d].l(_);_.forEach(p),this.h()},h(){v(e,"type","button"),v(e,"class","tag svelte-5rbr73"),N(e,"active",!u[1].activeTag),v(t,"class","w-full flex flex-row gap-2 animate-slideFromTop overflow-x-auto p-1 svelte-5rbr73")},m(f,_){y(f,t,_),k(t,e),k(t,n);for(let d=0;d<a.length;d+=1)a[d]&&a[d].m(t,null);o||(m=G(e,"click",u[2]),o=!0)},p(f,[_]){_&2&&N(e,"active",!f[1].activeTag),_&3&&(r=z(f[1].tags),a=Y(a,_,i,1,f,r,l,t,oe,O,null,F))},i:M,o:M,d(f){f&&p(t);for(let _=0;_<a.length;_+=1)a[_].d();o=!1,m()}}}function ue(u,t,e){let s,n=M,a=()=>(n(),n=ee(l,r=>e(1,s=r)),l);u.$$.on_destroy.push(()=>n());let{links:l}=t;a();const o=()=>l.set(""),m=r=>l.set(r.name);return u.$$set=r=>{"links"in r&&a(e(0,l=r.links))},[l,s,o,m]}class fe extends A{constructor(t){super(),H(this,t,ue,ce,D,{links:0})}}function S(u,t,e){const s=u.slice();return s[1]=t[e],s}function V(u){let t,e,s;return e=new ie({props:{link:u[1]}}),{c(){t=b("li"),J(e.$$.fragment)},l(n){t=$(n,"LI",{});var a=T(t);K(e.$$.fragment,a),a.forEach(p)},m(n,a){y(n,t,a),Q(e,t,null),s=!0},p(n,a){const l={};a&1&&(l.link=n[1]),e.$set(l)},i(n){s||(x(e.$$.fragment,n),s=!0)},o(n){E(e.$$.fragment,n),s=!1},d(n){n&&p(t),W(e)}}}function q(u,t){let e,s=t[1],n,a,l=V(t);return{key:u,first:null,c(){e=L(),l.c(),n=L(),this.h()},l(o){e=L(),l.l(o),n=L(),this.h()},h(){this.first=e},m(o,m){y(o,e,m),l.m(o,m),y(o,n,m),a=!0},p(o,m){t=o,m&1&&D(s,s=t[1])?(X(),E(l,1,1,M),R(),l=V(t),l.c(),x(l,1),l.m(n.parentNode,n)):l.p(t,m)},i(o){a||(x(l),a=!0)},o(o){E(l),a=!1},d(o){o&&(p(e),p(n)),l.d(o)}}}function _e(u){let t,e,s,n="所有资源",a,l,o,m,r,i=[],f=new Map,_;o=new fe({props:{links:Z}});let d=z(u[0].links);const U=c=>c[1].name;for(let c=0;c<d.length;c+=1){let h=S(u,d,c),g=U(h);f.set(g,i[c]=q(g,h))}return{c(){t=w(),e=b("main"),s=b("h1"),s.textContent=n,a=w(),l=b("div"),J(o.$$.fragment),m=w(),r=b("ul");for(let c=0;c<i.length;c+=1)i[c].c();this.h()},l(c){ae("svelte-174wvw3",document.head).forEach(p),t=C(c),e=$(c,"MAIN",{class:!0});var g=T(e);s=$(g,"H1",{class:!0,"data-svelte-h":!0}),P(s)!=="svelte-104zksb"&&(s.textContent=n),a=C(g),l=$(g,"DIV",{class:!0});var I=T(l);K(o.$$.fragment,I),m=C(I),r=$(I,"UL",{class:!0});var j=T(r);for(let B=0;B<i.length;B+=1)i[B].l(j);j.forEach(p),I.forEach(p),g.forEach(p),this.h()},h(){document.title="Mars工作室 • 资源推荐",v(s,"class","text-2xl font-semibold"),v(r,"class","grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 animate-slideFromBottom"),v(l,"class","flex flex-col gap-3"),v(e,"class","frame flex-1 flex flex-col gap-2")},m(c,h){y(c,t,h),y(c,e,h),k(e,s),k(e,a),k(e,l),Q(o,l,null),k(l,m),k(l,r);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(r,null);_=!0},p(c,[h]){h&1&&(d=z(c[0].links),X(),i=Y(i,h,U,1,c,d,f,r,re,q,null,S),R())},i(c){if(!_){x(o.$$.fragment,c);for(let h=0;h<d.length;h+=1)x(i[h]);_=!0}},o(c){E(o.$$.fragment,c);for(let h=0;h<i.length;h+=1)E(i[h]);_=!1},d(c){c&&(p(t),p(e)),W(o);for(let h=0;h<i.length;h+=1)i[h].d()}}}function he(u,t,e){let s;return te(u,Z,n=>e(0,s=n)),[s]}class ke extends A{constructor(t){super(),H(this,t,he,_e,D,{})}}export{ke as component};