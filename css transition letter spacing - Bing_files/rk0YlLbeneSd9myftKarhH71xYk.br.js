function MMRH(){function wt(n,t,i){function f(t){for(var i,f=n.getElementsByTagName(t),e=f.length,u=0;u<e;u++)i=f[u],r(i,tt)!=null&&c(i,n)}function c(n,t){var u,f,i;if(!n[it]){for(n[it]=!0,h.push(n),u=n,f=null;!f&&u&&u!=t;)r(u,ui)!=null?f=u:u=u.parentNode;if(n[vt]=f,sj_be(n,"mouseover",e),sj_be(n,"mouseout",o),sj_be(n,"focusin",rt),sj_be(n,"focusout",ut),!n[s])for(i=n.parentNode;i!=null&&i!=t;){if(/ slide /.test(" "+i.className+" ")){sj_be(i,"focusin",ft);sj_be(i,"focusout",et);n[s]=i;i[l]=n;break}i=i.parentNode}}}if(tt=i,n!=null){t||(t=["img","span"]);for(var u=0;u<t.length;u++)f(t[u])}}function bt(){return h}function r(n,t,i){var u,f;if(n){if(u=!!n.hasAttribute,u?n.hasAttribute(t):n[t]!=null)return u?n.getAttribute(t):n[t];if(f=n[vt],f)return r(f,t)}return i}function a(n,t,i){var u=r(n,t,i),f=+u;return u==null||isNaN(f)?i:f}function f(){if(!t&&n.createEmptyHoverContent){t=sj_ce("div",n.hoverId,n.hoverClass);t.setAttribute("data-priority","2");(_w.location.href.indexOf("testhooks=1")>-1||_w.location.href.indexOf("testhooks=~1")>-1)&&t.setAttribute("data-tag","multimedia.mmRichHover");var i=sj_ce("span");n.createEmptyHoverContent(i);t.appendChild(i);sj_be(t,"mouseover",e);sj_be(t,"mouseout",o);w(!1)}return t}function kt(){return f().firstChild}function dt(n){n&&(nt.push(n),sj_be(n,"mouseover",e),sj_be(n,"mouseout",o))}function gt(){return u}function v(){var r,n,u,i;for(sj_ue(_w,"unload",v),t&&(sj_ue(t,"mouseover",e),sj_ue(t,"mouseout",o)),r=h.length,i=0;i<r;i++)n=h[i],n[it]=null,sj_ue(n,"mouseover",e),sj_ue(n,"mouseout",o),sj_ue(n,"focusin",rt),sj_ue(n,"focusout",ut),n[s]&&(u=n[s],sj_ue(u,"focusin",ft),sj_ue(u,"focusout",et),n[s]=null,u[l]=null);for(r=nt.length,i=0;i<r;i++)n=nt[i],sj_ue(n,"mouseover",e),sj_ue(n,"mouseout",o)}function e(n){y(n,!0)}function o(n){p(n,!0)}function rt(n){y(n,!1)}function ut(n){p(n,!1)}function ft(n){y(n,!1,!0)}function et(n){p(n,!1,!0)}function y(t,i,r){var f=ht(sj_et(t),r),e=a(f,yt,0);if(f&&f!=u&&(u=f,i&&(b(t),e==0&&(g=!0,sj_be(_d,"mousemove",st))),n.onHoverImmediate))n.onHoverImmediate(f)}function p(t,i,r){var f=ht(sj_mo(t),r);if(f!=u){if(n.onHoverOut)n.onHoverOut(t);at&&f&&n.enableH2H?(u=f,i&&b(t),ot(f,null,!0,!i)):(u=null,n.onHideHoverContainer&&n.onHideHoverContainer(),ct(!1),w(!1),g&&(g=!1,sj_ue(_d,"mousemove",st)))}}function ot(t,i,r,u){if(n.createHoverContent(t,i,r,u),n.setCaptions&&n.setCaptions(t),ct(!0),w(!0,!r),k(t,u),n.onHoverDisplayed)n.onHoverDisplayed(t)}function st(n){b(n);k(u)}function ht(n,i){for(var f=n;n!=null;){if(r(n,tt)!=null)return n;if(n==t)return u;if(n.getImage&&typeof(n.getImage=="function"))return n.getImage();n=n.parentNode&&n.parentNode!=n?n.parentNode:null}return i&&f&&f[l]?f[l]:null}function ct(n){var t=f();n&&!c?(_d.body.appendChild(t),c=!0):!n&&c&&(t.parentNode.removeChild(t),c=!1)}function w(n,t){var i=f();i.style.visibility=n?"visible":"hidden";at=n;n&&t&&(sj_so(i,0),sj_fader().init(i,0,100,10,function(){_G.TestEnv&&sj_evt.fire("Vi.Hover.ContainerVisible")}))}function ni(n){var h=f(),o,t,s,u,c,e,l,a;if(h){for(o=!1,i=i||sj_ce("div",null,"irhcs");i.lastChild;)i.removeChild(i.lastChild);for(t=1;t<=si;t++)if(s=r(n,"t"+t),s&&s.length>0){o=!0;u=null;try{c=r(n,"m");c&&(u=eval("("+c+")"))}catch(v){u=null}e=sj_ce("span");l=r(n,"c"+t)||"";l+=" irhcs"+t;e.className=l;u&&u.dirovr&&(a=u.dirovr,e.setAttribute("dir",a));e.appendChild(_d.createTextNode(s));i.appendChild(e)}o&&i.parentNode!=h?h.appendChild(i):o||i.parentNode==null||i.parentNode.removeChild(i)}}function b(n){n=sj_ev(n);d=n.pageX?{x:n.pageX,y:n.pageY}:{x:n.clientX+Math.max(sb_de.scrollLeft,_d.body.scrollLeft),y:n.clientY+Math.max(sb_de.scrollTop,_d.body.scrollTop)}}function k(n,t){var e=t?2:a(n,yt,0),r=f(),i,u;switch(e){case 1:i=ii(r,n);break;case 2:i=ri(n);break;default:i=ti(r,n)}i&&(u=r.style,u.left=i.l+"px",u.top=i.t+"px")}function ti(n){var t=lt(),l=d.x,e=d.y,i=l+fi,r=e+ei,u=n.clientWidth,f=n.clientHeight,o=i+u>t.r,s=r+f>t.b,h,c;return o&&s?(i=t.r-u,r=e-f-oi):o?i=t.r-u:s&&(r=t.b-f),h=i<t.l,c=r<t.t,h&&u<_w.innerWidth?i=t.l:c&&f<_w.innerHeight&&(r=t.t),{l:i,t:r}}function ii(n,t){for(var u=lt(),e=n.offsetWidth,o=n.offsetHeight,i=t.offsetLeft,r=t.offsetTop,f=t;f=f.offsetParent;)i+=f.offsetLeft,r+=f.offsetTop;return i-=(e-t.offsetWidth)/2,r-=(o-t.offsetHeight)/2,i=Math.min(i,u.r-e-2),i=Math.max(i,u.l),r=Math.min(r,u.b-o-2),r=Math.max(r,u.t),{l:i,t:r}}function lt(){var n=_w.pageXOffset||sb_de.scrollLeft,t=_w.pageYOffset||sb_de.scrollTop,i=n+(_w.innerWidth||sb_de.clientWidth)-pt,r=t+(_w.innerHeight||sb_de.clientHeight)-pt;return{l:n,t:t,r:i,b:r}}function ri(n){var u=window.scrollX?window.scrollX:window.pageXOffset,f=window.scrollY?window.scrollY:window.pageYOffset,t=n.getBoundingClientRect(),i=t.left+u,r=t.top+f;return i+=n.offsetWidth/2,r+=n.offsetHeight/2,{l:i,t:r}}var n=this,h=[],t=null,u=null,d={x:0,y:0},g=!1,i=null,at=!1,c=!1,nt=[],tt=null,vt="hvpr",ui="ihp",it="irhatt",s="sldfcele",l="slddgele",yt="hp",fi=15,ei=25,oi=7,pt=19,si=4;sj_be(_w,"unload",v);n.hoverClass="irhc";n.hoverId="irhcid";n.attach=wt;n.items=bt;n.hoverAttr=r;n.hoverAttrNum=a;n.getCont=f;n.addIntercept=dt;n.getHoverEl=gt;n.dispHov=ot;n.getContContent=kt;n.setContPos=k;n.detach=v;n.setCaptions=ni}