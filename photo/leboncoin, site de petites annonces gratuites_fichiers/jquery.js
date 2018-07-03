/* jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */
(function(b,a,c){typeof define=="function"&&define.amd?define(["jquery"],function(d){return c(d,b,a),d.mobile}):c(b.jQuery,b,a)})(this,document,function(c,a,d,b){(function(aC,am,at,ao){function G(f){while(f&&typeof f.originalEvent!="undefined"){f=f.originalEvent}return f}function W(x,g){var k=x.type,y,f,u,j,r,m,e,q,w;x=aC.Event(x),x.type=g,y=x.originalEvent,f=aC.event.props,k.search(/^(mouse|click)/)>-1&&(f=aB);if(y){for(e=f.length,j;e;){j=f[--e],x[j]=y[j]}}k.search(/mouse(down|up)|click/)>-1&&!x.which&&(x.which=1);if(k.search(/^touch/)!==-1){u=G(y),k=u.touches,r=u.changedTouches,m=k&&k.length?k[0]:r&&r.length?r[0]:ao;if(m){for(q=0,w=al.length;q<w;q++){j=al[q],x[j]=m[j]}}}return x}function ae(e){var h={},g,f;while(e){g=aC.data(e,ay);for(f in g){g[f]&&(h[f]=h.hasVirtualBinding=!0)}e=e.parentNode}return h}function aw(e,g){var f;while(e){f=aC.data(e,ay);if(f&&(!g||f[g])){return e}e=e.parentNode}return null}function Y(){aA=!1}function ag(){aA=!0}function V(){ac=0,ak.length=0,au=!1,ag()}function X(){Y()}function aH(){ad(),aE=setTimeout(function(){aE=0,V()},aC.vmouse.resetTimerDuration)}function ad(){aE&&(clearTimeout(aE),aE=0)}function Q(f,h,g){var e;if(g&&g[f]||!g&&aw(h.target,f)){e=W(h,f),aC(h.target).trigger(e)}return e}function aa(e){var g=aC.data(e.target,an),f;!au&&(!ac||ac!==g)&&(f=Q("v"+e.type,e),f&&(f.isDefaultPrevented()&&e.preventDefault(),f.isPropagationStopped()&&e.stopPropagation(),f.isImmediatePropagationStopped()&&e.stopImmediatePropagation()))}function af(f){var j=G(f).touches,g,e,h;j&&j.length===1&&(g=f.target,e=ae(g),e.hasVirtualBinding&&(ac=aj++,aC.data(g,an,ac),ad(),X(),aD=!1,h=G(f).touches[0],az=h.pageX,aq=h.pageY,Q("vmouseover",f,e),Q("vmousedown",f,e)))}function ax(f){if(aA){return}aD||Q("vmousecancel",f,ae(f.target)),aD=!0,aH()}function ab(f){if(aA){return}var j=G(f).touches[0],h=aD,e=aC.vmouse.moveDistanceThreshold,g=ae(f.target);aD=aD||Math.abs(j.pageX-az)>e||Math.abs(j.pageY-aq)>e,aD&&!h&&Q("vmousecancel",f,g),Q("vmousemove",f,g),aH()}function Z(h){if(aA){return}ag();var f=ae(h.target),i,g;Q("vmouseup",h,f),aD||(i=Q("vclick",h,f),i&&i.isDefaultPrevented()&&(g=G(h).changedTouches[0],ak.push({touchID:ac,x:g.clientX,y:g.clientY}),au=!0)),Q("vmouseout",h,f),aD=!1,aH()}function ap(e){var g=aC.data(e,ay),f;if(g){for(f in g){if(g[f]){return !0}}}return !1}function K(){}function z(e){var f=e.substr(1);return{setup:function(){ap(this)||aC.data(this,ay,{});var g=aC.data(this,ay);g[e]=!0,av[e]=(av[e]||0)+1,av[e]===1&&aF.bind(f,aa),aC(this).bind(f,K),ah&&(av.touchstart=(av.touchstart||0)+1,av.touchstart===1&&aF.bind("touchstart",af).bind("touchend",Z).bind("touchmove",ab).bind("scroll",ax))},teardown:function(){--av[e],av[e]||aF.unbind(f,aa),ah&&(--av.touchstart,av.touchstart||aF.unbind("touchstart",af).unbind("touchmove",ab).unbind("touchend",Z).unbind("scroll",ax));var h=aC(this),g=aC.data(this,ay);g&&(g[e]=!1),h.unbind(f,K),ap(this)||h.removeData(ay)}}}var ay="virtualMouseBindings",an="virtualTouchID",ar="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),al="clientX clientY pageX pageY screenX screenY".split(" "),aG=aC.event.mouseHooks?aC.event.mouseHooks.props:[],aB=aC.event.props.concat(aG),av={},aE=0,az=0,aq=0,aD=!1,ak=[],au=!1,aA=!1,ah="addEventListener" in at,aF=aC(at),aj=1,ac=0,J,ai;aC.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(ai=0;ai<ar.length;ai++){aC.event.special[ar[ai]]=z(ar[ai])}ah&&at.addEventListener("click",function(s){var h=ak.length,e=s.target,k,g,q,p,m,j;if(h){k=s.clientX,g=s.clientY,J=aC.vmouse.clickDistanceThreshold,q=e;while(q){for(p=0;p<h;p++){m=ak[p],j=0;if(q===e&&Math.abs(m.x-k)<J&&Math.abs(m.y-g)<J||aC.data(q,an)===m.touchID){s.preventDefault(),s.stopPropagation();return}}q=q.parentNode}}},!0)})(c,a,d),function(f){f.mobile={}}(c),function(h,f){var g={touch:"ontouchend" in d};h.mobile.support=h.mobile.support||{},h.extend(h.support,g),h.extend(h.mobile.support,g)}(c),function(n,v,g){function j(f,u,e,l){var r=e.type;e.type=u,l?n.event.trigger(e,g,f):n.event.dispatch.call(f,e),e.type=r}var k=n(d),w=n.mobile.support.touch,h="touchmove scroll",q=w?"touchstart":"mousedown",p=w?"touchend":"mouseup",m=w?"touchmove":"mousemove";n.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,f){n.fn[f]=function(i){return i?this.bind(f,i):this.trigger(f)},n.attrFn&&(n.attrFn[f]=!0)}),n.event.special.scrollstart={enabled:!0,setup:function(){function l(i,r){o=r,j(f,o?"scrollstart":"scrollstop",i)}var f=this,u=n(f),o,e;u.bind(h,function(i){if(!n.event.special.scrollstart.enabled){return}o||l(i,!0),clearTimeout(e),e=setTimeout(function(){l(i,!1)},50)})},teardown:function(){n(this).unbind(h)}},n.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var e=this,i=n(e),f=!1;i.bind("vmousedown",function(t){function l(){clearTimeout(r)}function x(){l(),i.unbind("vclick",z).unbind("vmouseup",l),k.unbind("vmousecancel",x)}function z(o){x(),!f&&y===o.target?j(e,"tap",o):f&&o.preventDefault()}f=!1;if(t.which&&t.which!==1){return !1}var y=t.target,r;i.bind("vmouseup",l).bind("vclick",z),k.bind("vmousecancel",x),r=setTimeout(function(){n.event.special.tap.emitTapOnTaphold||(f=!0),j(e,"taphold",n.Event("taphold",{target:y}))},n.event.special.tap.tapholdThreshold)})},teardown:function(){n(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),k.unbind("vmousecancel")}},n.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1000,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(t){var u=v.pageXOffset,o=v.pageYOffset,f=t.clientX,l=t.clientY;if(t.pageY===0&&Math.floor(l)>Math.floor(t.pageY)||t.pageX===0&&Math.floor(f)>Math.floor(t.pageX)){f-=u,l-=o}else{if(l<t.pageY-o||f<t.pageX-u){f=t.pageX-u,l=t.pageY-o}}return{x:f,y:l}},start:function(e){var i=e.originalEvent.touches?e.originalEvent.touches[0]:e,f=n.event.special.swipe.getLocation(i);return{time:(new Date).getTime(),coords:[f.x,f.y],origin:n(e.target)}},stop:function(e){var i=e.originalEvent.touches?e.originalEvent.touches[0]:e,f=n.event.special.swipe.getLocation(i);return{time:(new Date).getTime(),coords:[f.x,f.y]}},handleSwipe:function(f,u,o,e){if(u.time-f.time<n.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-u.coords[0])>n.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-u.coords[1])<n.event.special.swipe.verticalDistanceThreshold){var l=f.coords[0]>u.coords[0]?"swipeleft":"swiperight";return j(o,"swipe",n.Event("swipe",{target:e,swipestart:f,swipestop:u}),!0),j(o,l,n.Event(l,{target:e,swipestart:f,swipestop:u}),!0),!0}return !1},eventInProgress:!1,setup:function(){var e,l=this,i=n(l),f={};e=n.data(this,"mobile-events"),e||(e={length:0},n.data(this,"mobile-events",e)),e.length++,e.swipe=f,f.start=function(y){if(n.event.special.swipe.eventInProgress){return}n.event.special.swipe.eventInProgress=!0;var z,A=n.event.special.swipe.start(y),x=y.target,s=!1;f.move=function(o){if(!A||o.isDefaultPrevented()){return}z=n.event.special.swipe.stop(o),s||(s=n.event.special.swipe.handleSwipe(A,z,l,x),s&&(n.event.special.swipe.eventInProgress=!1)),Math.abs(A.coords[0]-z.coords[0])>n.event.special.swipe.scrollSupressionThreshold&&o.preventDefault()},f.stop=function(){s=!0,n.event.special.swipe.eventInProgress=!1,k.off(m,f.move),f.move=null},k.on(m,f.move).one(p,f.stop)},i.on(q,f.start)},teardown:function(){var e,f;e=n.data(this,"mobile-events"),e&&(f=e.swipe,delete e.swipe,e.length--,e.length===0&&n.removeData(this,"mobile-events")),f&&(f.start&&n(this).off(q,f.start),f.move&&k.off(m,f.move),f.stop&&k.off(p,f.stop))}},n.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(e,f){n.event.special[e]={setup:function(){n(this).bind(f,n.noop)},teardown:function(){n(this).unbind(f)}}})}(c,this)});