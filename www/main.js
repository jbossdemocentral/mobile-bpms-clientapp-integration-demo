(function(a){function u(e,j){function f(f){return a.isArray(g.readonly)?(f=a(".dwwl",t).index(f),g.readonly[f]):g.readonly}function x(a){var f="",e;for(e in T[a])f+='<li class="dw-v" data-val="'+e+'" style="height:'+H+"px;line-height:"+H+'px;"><div class="dw-i">'+T[a][e]+"</div></li>";return f}function p(){var f=document.body,a=document.documentElement;return Math.max(f.scrollHeight,f.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)}function l(f){c=a("li.dw-v",f).eq(0).index();d=a("li.dw-v",
f).eq(-1).index();y=a("ul",t).index(f);m=H;o=k}function q(f){var a=g.headerText;return a?"function"==typeof a?a.call(L,f):a.replace(/\{value\}/i,f):""}function w(){k.temp=P&&(null!==k.val&&k.val!=v.val()||!v.val().length)||null===k.values?g.parseValue(v.val()||"",k):k.values.slice(0);k.setValue(!0)}function u(f,e,g,c){K("validate",[t,e]);a(".dww ul",t).each(function(g){var x=a(this),b=a('li[data-val="'+k.temp[g]+'"]',x),d=b.index(),j=g==e||void 0===e;if(!b.hasClass("dw-v")){for(var h=b,i=0,n=0;h.prev().length&&
!h.hasClass("dw-v");)h=h.prev(),i++;for(;b.next().length&&!b.hasClass("dw-v");)b=b.next(),n++;(n<i&&n&&2!==c||!i||!h.hasClass("dw-v")||1==c)&&b.hasClass("dw-v")?d+=n:(b=h,d-=i)}if(!b.hasClass("dw-sel")||j)k.temp[g]=b.attr("data-val"),a(".dw-sel",x).removeClass("dw-sel"),b.addClass("dw-sel"),k.scroll(x,g,d,f)});k.change(g)}function W(){function f(){a(".dwc",t).each(function(){k=a(this).outerWidth(!0);e+=k;b=k>b?k:b});k=e>x?b:e;k=a(".dwwr",t).width(k+1).outerWidth();n=j.outerHeight()}if("inline"!=g.display){var e=
0,b=0,x=a(window).width(),c=window.innerHeight,d=a(window).scrollTop(),j=a(".dw",t),k,h,i,n,m,o={},F,s=void 0===g.anchor?v:g.anchor,c=c||a(window).height();if("modal"==g.display)f(),i=(x-k)/2,h=d+(c-n)/2;else if("bubble"==g.display){f();var l=s.offset(),A=a(".dw-arr",t),q=a(".dw-arrw-i",t),r=j.outerWidth();m=s.outerWidth();i=l.left-(j.outerWidth(!0)-m)/2;i=i>x-r?x-(r+20):i;i=0<=i?i:20;h=l.top-(j.outerHeight()+3);h<d||l.top>d+c?(j.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"),h=l.top+s.outerHeight()+
3,F=h+j.outerHeight(!0)>d+c||l.top>d+c):j.removeClass("dw-bubble-bottom").addClass("dw-bubble-top");h=h>=d?h:d;d=l.left+m/2-(i+(r-q.outerWidth())/2);d>q.outerWidth()&&(d=q.outerWidth());A.css({left:d})}else o.width="100%","top"==g.display?h=d:"bottom"==g.display&&(h=d+c-j.outerHeight(),h=0<=h?h:0);o.top=h;o.left=i;j.css(o);a(".dwo, .dw-persp",t).height(0).height(p());F&&a(window).scrollTop(h+j.outerHeight(!0)-c)}}function K(f,e){var b;e.push(k);a.each([U,j],function(a,d){d[f]&&(b=d[f].apply(L,e))});
return b}function aa(f){var a=+f.data("pos")+1;h(f,a>d?c:a,1)}function Y(f){var a=+f.data("pos")-1;h(f,a<c?d:a,2)}var k=this,X=a.mobiscroll,L=e,v=a(L),E,Z,g=B({},J),U={},$,H,F,t,T=[],Q={},P=v.is("input"),R=!1;k.enable=function(){g.disabled=!1;P&&v.prop("disabled",!1)};k.disable=function(){g.disabled=!0;P&&v.prop("disabled",!0)};k.scroll=function(f,a,e,b,d,g){function c(){clearInterval(Q[a]);Q[a]=void 0;f.data("pos",e).closest(".dwwl").removeClass("dwa")}var x=($-e)*H,j,g=g||C;f.attr("style",(b?N+
"-transition:all "+b.toFixed(1)+"s ease-out;":"")+(S?N+"-transform:translate3d(0,"+x+"px,0);":"top:"+x+"px;"));Q[a]&&c();b&&void 0!==d?(j=0,f.closest(".dwwl").addClass("dwa"),Q[a]=setInterval(function(){j+=0.1;f.data("pos",Math.round((e-d)*Math.sin(j/b*(Math.PI/2))+d));j>=b&&(c(),g())},100),K("onAnimStart",[a,b])):(f.data("pos",e),g())};k.setValue=function(f,a,e,b){b||(k.values=k.temp.slice(0));R&&f&&u(e);a&&(F=g.formatResult(k.temp),k.val=F,P&&v.val(F).trigger("change"))};k.validate=function(f,a){u(0.2,
f,!0,a)};k.change=function(f){F=g.formatResult(k.temp);"inline"==g.display?k.setValue(!1,f):a(".dwv",t).html(q(F));f&&K("onChange",[F])};k.hide=function(f){if(!1===K("onClose",[F]))return!1;a(".dwtd").prop("disabled",!1).removeClass("dwtd");v.blur();t&&("inline"!=g.display&&g.animate&&!f?(a(".dw",t).addClass("dw-"+g.animate+" dw-out"),setTimeout(function(){t.remove();t=null},350)):(t.remove(),t=null),R=!1,a(window).unbind(".dw"))};k.changeWheel=function(f,e){if(t){var b=0,d,c,j=f.length;for(d in g.wheels)for(c in g.wheels[d]){if(-1<
a.inArray(b,f)&&(T[b]=g.wheels[d][c],a("ul",t).eq(b).html(x(b)),j--,!j)){W();u(e);return}b++}}};k.show=function(e){if(g.disabled||R)return!1;"top"==g.display&&(g.animate="slidedown");"bottom"==g.display&&(g.animate="slideup");w();K("onBeforeShow",[t]);var d=0,c,j="",m="",o="";g.animate&&!e&&(m='<div class="dw-persp">',o="</div>",j="dw-"+g.animate+" dw-in");j='<div class="'+g.theme+" dw-"+g.display+'">'+("inline"==g.display?'<div class="dw dwbg dwi"><div class="dwwr">':m+'<div class="dwo"></div><div class="dw dwbg '+
j+'"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div><div class="dwwr">'+(g.headerText?'<div class="dwv"></div>':""));for(e=0;e<g.wheels.length;e++){j+='<div class="dwc'+("scroller"!=g.mode?" dwpm":" dwsc")+(g.showLabel?"":" dwhl")+'"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';for(c in g.wheels[e])T[d]=g.wheels[e][c],j+='<td><div class="dwwl dwrc dwwl'+d+'">'+("scroller"!=g.mode?'<div class="dwwb dwwbp" style="height:'+H+"px;line-height:"+
H+'px;"><span>+</span></div><div class="dwwb dwwbm" style="height:'+H+"px;line-height:"+H+'px;"><span>&ndash;</span></div>':"")+'<div class="dwl">'+c+'</div><div class="dww dwrc" style="height:'+g.rows*H+"px;min-width:"+g.width+'px;"><ul>',j+=x(d),j+='</ul><div class="dwwo"></div></div><div class="dwwol"></div></div></td>',d++;j+="</tr></table></div></div>"}j+=("inline"!=g.display?'<div class="dwbc'+(g.button3?" dwbc-p":"")+'"><span class="dwbw dwb-s"><span class="dwb">'+g.setText+"</span></span>"+
(g.button3?'<span class="dwbw dwb-n"><span class="dwb">'+g.button3Text+"</span></span>":"")+'<span class="dwbw dwb-c"><span class="dwb">'+g.cancelText+"</span></span></div>"+o:'<div class="dwcc"></div>')+"</div></div></div>";t=a(j);u();"inline"!=g.display?t.appendTo("body"):v.is("div")?v.html(t):t.insertAfter(v);R=!0;"inline"!=g.display&&(a(".dwb-s span",t).click(function(){if(k.hide()!==false){k.setValue(false,true);K("onSelect",[k.val])}return false}),a(".dwb-c span",t).click(function(){k.hide()!==
false&&K("onCancel",[k.val]);return false}),g.button3&&a(".dwb-n span",t).click(g.button3),g.scrollLock&&t.bind("touchmove",function(f){f.preventDefault()}),a("input,select").each(function(){a(this).prop("disabled")||a(this).addClass("dwtd")}),a("input,select").prop("disabled",!0),W(),a(window).bind("resize.dw",W));t.delegate(".dwwl","DOMMouseScroll mousewheel",function(e){if(!f(this)){e.preventDefault();var e=e.originalEvent,e=e.wheelDelta?e.wheelDelta/120:e.detail?-e.detail/3:0,b=a("ul",this),d=
+b.data("pos"),d=Math.round(d-e);l(b);h(b,d,e<0?1:2)}}).delegate(".dwb, .dwwb",M,function(){a(this).addClass("dwb-a")}).delegate(".dwwb",M,function(e){var d=a(this).closest(".dwwl");if(!f(d)&&!d.hasClass("dwa")){e.preventDefault();e.stopPropagation();var j=d.find("ul"),c=a(this).hasClass("dwwbp")?aa:Y;b=true;l(j);clearInterval(i);i=setInterval(function(){c(j)},g.delay);c(j)}}).delegate(".dwwl",M,function(e){e.preventDefault();if(!n&&!f(this)&&!b&&g.mode!="clickpick"){n=true;s=a("ul",this);s.closest(".dwwl").addClass("dwa");
A=+s.data("pos");l(s);I=Q[y]!==void 0;z=O(e);D=new Date;r=z;k.scroll(s,y,A)}});K("onShow",[t,F]);E.init(t,k)};k.init=function(f){E=B({defaults:{},init:C},X.themes[f.theme||g.theme]);Z=X.i18n[f.lang||g.lang];B(j,f);B(g,E.defaults,Z,j);k.settings=g;v.unbind(".dw");if(f=X.presets[g.preset])U=f.call(L,k),B(g,U,j),B(G,U.methods);$=Math.floor(g.rows/2);H=g.height;void 0!==v.data("dwro")&&(L.readOnly=V(v.data("dwro")));R&&k.hide();"inline"==g.display?k.show():(w(),P&&g.showOnFocus&&(v.data("dwro",L.readOnly),
L.readOnly=!0,v.bind("focus.dw",function(){k.show()})))};k.values=null;k.val=null;k.temp=null;k.init(j)}function E(e){for(var a in e)if(void 0!==Y[e[a]])return!0;return!1}function O(e){var a=e.originalEvent,f=e.changedTouches;return f||a&&a.changedTouches?a?a.changedTouches[0].pageY:f[0].pageY:e.pageY}function V(e){return!0===e||"true"==e}function q(e,a,f){e=e>f?f:e;return e<a?a:e}function h(e,b,f,x,h){var b=q(b,c,d),i=a("li",e).eq(b),n=y,x=x?b==h?0.1:Math.abs(0.1*(b-h)):0;o.scroll(e,n,b,x,h,function(){o.temp[n]=
i.attr("data-val");o.validate(n,f)})}function l(e,a,f){return G[a]?G[a].apply(e,Array.prototype.slice.call(f,1)):"object"===typeof a?G.init.call(e,a):e}var p={},i,C=function(){},m,c,d,o,w=(new Date).getTime(),n,b,s,y,z,r,D,A,I,Y=document.createElement("modernizr").style,S=E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]),N=function(){var a=["Webkit","Moz","O","ms"],b;for(b in a)if(E([a[b]+"Transform"]))return"-"+a[b].toLowerCase();return""}(),B=a.extend,
M="touchstart mousedown",J={width:70,height:40,rows:3,delay:300,disabled:!1,readonly:!1,showOnFocus:!0,showLabel:!0,wheels:[],theme:"",headerText:"{value}",display:"modal",mode:"scroller",preset:"",lang:"en-US",setText:"Set",cancelText:"Cancel",scrollLock:!0,formatResult:function(a){return a.join(" ")},parseValue:function(a,b){var f=b.settings.wheels,d=a.split(" "),c=[],h=0,i,n,m;for(i=0;i<f.length;i++)for(n in f[i]){if(void 0!==f[i][n][d[h]])c.push(d[h]);else for(m in f[i][n]){c.push(m);break}h++}return c}},
G={init:function(a){void 0===a&&(a={});return this.each(function(){this.id||(w+=1,this.id="scoller"+w);p[this.id]=new u(this,a)})},enable:function(){return this.each(function(){var a=p[this.id];a&&a.enable()})},disable:function(){return this.each(function(){var a=p[this.id];a&&a.disable()})},isDisabled:function(){var a=p[this[0].id];if(a)return a.settings.disabled},option:function(a,b){return this.each(function(){var f=p[this.id];if(f){var d={};"object"===typeof a?d=a:d[a]=b;f.init(d)}})},setValue:function(a,
b,f,d){return this.each(function(){var c=p[this.id];c&&(c.temp=a,c.setValue(!0,b,f,d))})},getInst:function(){return p[this[0].id]},getValue:function(){var a=p[this[0].id];if(a)return a.values},show:function(){var a=p[this[0].id];if(a)return a.show()},hide:function(){return this.each(function(){var a=p[this.id];a&&a.hide()})},destroy:function(){return this.each(function(){var b=p[this.id];b&&(b.hide(),a(this).unbind(".dw"),delete p[this.id],a(this).is("input")&&(this.readOnly=V(a(this).data("dwro"))))})}};
a(document).bind("touchmove mousemove",function(a){n&&(a.preventDefault(),r=O(a),o.scroll(s,y,q(A+(z-r)/m,c-1,d+1)),I=!0)});a(document).bind("touchend mouseup",function(e){if(n){e.preventDefault();var j=new Date-D,e=q(A+(z-r)/m,c-1,d+1),f;f=s.offset().top;300>j?(j=(r-z)/j,j=j*j/0.0012,0>r-z&&(j=-j)):j=r-z;if(!j&&!I){f=Math.floor((r-f)/m);var x=a("li",s).eq(f);x.addClass("dw-hl");setTimeout(function(){x.removeClass("dw-hl")},200)}else f=Math.round(A-j/m);h(s,f,0,!0,Math.round(e));n=!1;s=null}b&&(clearInterval(i),
b=!1);a(".dwb-a").removeClass("dwb-a")});a.fn.mobiscroll=function(b){B(this,a.mobiscroll.shorts);return l(this,b,arguments)};a.mobiscroll=a.mobiscroll||{setDefaults:function(a){B(J,a)},presetShort:function(a){this.shorts[a]=function(b){return l(this,B(b,{preset:a}),arguments)}},shorts:{},presets:{},themes:{},i18n:{}};a.scroller=a.scroller||a.mobiscroll;a.fn.scroller=a.fn.scroller||a.fn.mobiscroll})(jQuery);(function(a){var u=a.mobiscroll,E=new Date,O={dateFormat:"mm/dd/yy",dateOrder:"mmddy",timeWheels:"hhiiA",timeFormat:"hh:ii A",startYear:E.getFullYear()-100,endYear:E.getFullYear()+1,monthNames:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),monthNamesShort:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),dayNames:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),dayNamesShort:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
shortYearCutoff:"+10",monthText:"Month",dayText:"Day",yearText:"Year",hourText:"Hours",minuteText:"Minutes",secText:"Seconds",ampmText:"&nbsp;",nowText:"Now",showNow:!1,stepHour:1,stepMinute:1,stepSecond:1,separator:" "},V=function(q){function h(a,b,d){return void 0!==n[b]?+a[n[b]]:void 0!==d?d:S[s[b]]?S[s[b]]():s[b](S)}function l(a,b){return Math.floor(a/b)*b}function p(a){var b=h(a,"h",0);return new Date(h(a,"y"),h(a,"m"),h(a,"d",1),h(a,"ap")?b+12:b,h(a,"i",0),h(a,"s",0))}var i=a(this),C={},m;if(i.is("input")){switch(i.attr("type")){case "date":m=
"yy-mm-dd";break;case "datetime":m="yy-mm-ddTHH:ii:ssZ";break;case "datetime-local":m="yy-mm-ddTHH:ii:ss";break;case "month":m="yy-mm";C.dateOrder="mmyy";break;case "time":m="HH:ii:ss"}var c=i.attr("min"),i=i.attr("max");c&&(C.minDate=u.parseDate(m,c));i&&(C.maxDate=u.parseDate(m,i))}var d=a.extend({},O,C,q.settings),o=0,C=[],w=[],n={},b,s={y:"getFullYear",m:"getMonth",d:"getDate",h:function(a){a=a.getHours();a=I&&12<=a?a-12:a;return l(a,N)},i:function(a){return l(a.getMinutes(),B)},s:function(a){return l(a.getSeconds(),
M)},ap:function(a){return A&&11<a.getHours()?1:0}},y=d.preset,z=d.dateOrder,r=d.timeWheels,D=z.match(/D/),A=r.match(/a/i),I=r.match(/h/),E="datetime"==y?d.dateFormat+d.separator+d.timeFormat:"time"==y?d.timeFormat:d.dateFormat,S=new Date,N=d.stepHour,B=d.stepMinute,M=d.stepSecond,J=d.minDate||new Date(d.startYear,0,1),G=d.maxDate||new Date(d.endYear,11,31,23,59,59);m=m||E;if(y.match(/date/i)){a.each(["y","m","d"],function(a,d){b=z.search(RegExp(d,"i"));-1<b&&w.push({o:b,v:d})});w.sort(function(a,
b){return a.o>b.o?1:-1});a.each(w,function(a,b){n[b.v]=a});c={};for(i=0;3>i;i++)if(i==n.y){o++;c[d.yearText]={};var e=J.getFullYear(),j=G.getFullYear();for(b=e;b<=j;b++)c[d.yearText][b]=z.match(/yy/i)?b:(b+"").substr(2,2)}else if(i==n.m){o++;c[d.monthText]={};for(b=0;12>b;b++)e=z.replace(/[dy]/gi,"").replace(/mm/,9>b?"0"+(b+1):b+1).replace(/m/,b),c[d.monthText][b]=e.match(/MM/)?e.replace(/MM/,'<span class="dw-mon">'+d.monthNames[b]+"</span>"):e.replace(/M/,'<span class="dw-mon">'+d.monthNamesShort[b]+
"</span>")}else if(i==n.d){o++;c[d.dayText]={};for(b=1;32>b;b++)c[d.dayText][b]=z.match(/dd/i)&&10>b?"0"+b:b}C.push(c)}if(y.match(/time/i)){w=[];a.each(["h","i","s"],function(a,b){a=r.search(RegExp(b,"i"));-1<a&&w.push({o:a,v:b})});w.sort(function(a,b){return a.o>b.o?1:-1});a.each(w,function(a,b){n[b.v]=o+a});c={};for(i=o;i<o+3;i++)if(i==n.h){o++;c[d.hourText]={};for(b=0;b<(I?12:24);b+=N)c[d.hourText][b]=I&&0==b?12:r.match(/hh/i)&&10>b?"0"+b:b}else if(i==n.i){o++;c[d.minuteText]={};for(b=0;60>b;b+=
B)c[d.minuteText][b]=r.match(/ii/)&&10>b?"0"+b:b}else if(i==n.s){o++;c[d.secText]={};for(b=0;60>b;b+=M)c[d.secText][b]=r.match(/ss/)&&10>b?"0"+b:b}A&&(n.ap=o++,i=r.match(/A/),c[d.ampmText]={"0":i?"AM":"am",1:i?"PM":"pm"});C.push(c)}q.setDate=function(a,b,d,c){for(var e in n)this.temp[n[e]]=a[s[e]]?a[s[e]]():s[e](a);this.setValue(!0,b,d,c)};q.getDate=function(a){return p(a)};return{button3Text:d.showNow?d.nowText:void 0,button3:d.showNow?function(){q.setDate(new Date,!1,0.3,!0)}:void 0,wheels:C,headerText:function(){return u.formatDate(E,
p(q.temp),d)},formatResult:function(a){return u.formatDate(m,p(a),d)},parseValue:function(a){var b=new Date,c,e=[];try{b=u.parseDate(m,a,d)}catch(h){}for(c in n)e[n[c]]=b[s[c]]?b[s[c]]():s[c](b);return e},validate:function(b){var c=q.temp,e={y:J.getFullYear(),m:0,d:1,h:0,i:0,s:0,ap:0},i={y:G.getFullYear(),m:11,d:31,h:l(I?11:23,N),i:l(59,B),s:l(59,M),ap:1},j=!0,m=!0;a.each("y,m,d,ap,h,i,s".split(","),function(o,l){if(n[l]!==void 0){var p=e[l],q=i[l],A=31,k=h(c,l),r=a("ul",b).eq(n[l]),w,v;if(l=="d"){w=
h(c,"y");v=h(c,"m");q=A=32-(new Date(w,v,32)).getDate();D&&a("li",r).each(function(){var b=a(this),c=b.data("val"),e=(new Date(w,v,c)).getDay(),c=z.replace(/[my]/gi,"").replace(/dd/,c<10?"0"+c:c).replace(/d/,c);a(".dw-i",b).html(c.match(/DD/)?c.replace(/DD/,'<span class="dw-day">'+d.dayNames[e]+"</span>"):c.replace(/D/,'<span class="dw-day">'+d.dayNamesShort[e]+"</span>"))})}j&&J&&(p=J[s[l]]?J[s[l]]():s[l](J));m&&G&&(q=G[s[l]]?G[s[l]]():s[l](G));if(l!="y"){var y=a('li[data-val="'+p+'"]',r).index(),
C=a('li[data-val="'+q+'"]',r).index();a("li",r).removeClass("dw-v").slice(y,C+1).addClass("dw-v");l=="d"&&a("li",r).removeClass("dw-h").slice(A).addClass("dw-h")}k<p&&(k=p);k>q&&(k=q);j&&(j=k==p);m&&(m=k==q);if(d.invalid&&l=="d"){var g=[];d.invalid.dates&&a.each(d.invalid.dates,function(a,b){b.getFullYear()==w&&b.getMonth()==v&&g.push(b.getDate()-1)});if(d.invalid.daysOfWeek){var I=(new Date(w,v,1)).getDay(),u;a.each(d.invalid.daysOfWeek,function(a,b){for(u=b-I;u<A;u=u+7)u>=0&&g.push(u)})}d.invalid.daysOfMonth&&
a.each(d.invalid.daysOfMonth,function(a,b){b=(b+"").split("/");b[1]?b[0]-1==v&&g.push(b[1]-1):g.push(b[0]-1)});a.each(g,function(b,c){a("li",r).eq(c).removeClass("dw-v")})}c[n[l]]=k}})},methods:{getDate:function(b){var c=a(this).mobiscroll("getInst");if(c)return c.getDate(b?c.temp:c.values)},setDate:function(b,c,d,e){void 0==c&&(c=!1);return this.each(function(){var h=a(this).mobiscroll("getInst");h&&h.setDate(b,c,d,e)})}}}};a.each(["date","time","datetime"],function(a,h){u.presets[h]=V;u.presetShort(h)});
u.formatDate=function(q,h,l){if(!h)return null;var l=a.extend({},O,l),p=function(a){for(var c=0;m+1<q.length&&q.charAt(m+1)==a;)c++,m++;return c},i=function(a,c,b){c=""+c;if(p(a))for(;c.length<b;)c="0"+c;return c},u=function(a,c,b,d){return p(a)?d[c]:b[c]},m,c="",d=!1;for(m=0;m<q.length;m++)if(d)"'"==q.charAt(m)&&!p("'")?d=!1:c+=q.charAt(m);else switch(q.charAt(m)){case "d":c+=i("d",h.getDate(),2);break;case "D":c+=u("D",h.getDay(),l.dayNamesShort,l.dayNames);break;case "o":c+=i("o",(h.getTime()-
(new Date(h.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":c+=i("m",h.getMonth()+1,2);break;case "M":c+=u("M",h.getMonth(),l.monthNamesShort,l.monthNames);break;case "y":c+=p("y")?h.getFullYear():(10>h.getYear()%100?"0":"")+h.getYear()%100;break;case "h":var o=h.getHours(),c=c+i("h",12<o?o-12:0==o?12:o,2);break;case "H":c+=i("H",h.getHours(),2);break;case "i":c+=i("i",h.getMinutes(),2);break;case "s":c+=i("s",h.getSeconds(),2);break;case "a":c+=11<h.getHours()?"pm":"am";break;case "A":c+=
11<h.getHours()?"PM":"AM";break;case "'":p("'")?c+="'":d=!0;break;default:c+=q.charAt(m)}return c};u.parseDate=function(q,h,l){var p=new Date;if(!q||!h)return p;var h="object"==typeof h?h.toString():h+"",i=a.extend({},O,l),u=i.shortYearCutoff,l=p.getFullYear(),m=p.getMonth()+1,c=p.getDate(),d=-1,o=p.getHours(),p=p.getMinutes(),w=0,n=-1,b=!1,s=function(a){(a=D+1<q.length&&q.charAt(D+1)==a)&&D++;return a},y=function(a){s(a);a=h.substr(r).match(RegExp("^\\d{1,"+("@"==a?14:"!"==a?20:"y"==a?4:"o"==a?3:
2)+"}"));if(!a)return 0;r+=a[0].length;return parseInt(a[0],10)},z=function(a,b,c){a=s(a)?c:b;for(b=0;b<a.length;b++)if(h.substr(r,a[b].length).toLowerCase()==a[b].toLowerCase())return r+=a[b].length,b+1;return 0},r=0,D;for(D=0;D<q.length;D++)if(b)"'"==q.charAt(D)&&!s("'")?b=!1:r++;else switch(q.charAt(D)){case "d":c=y("d");break;case "D":z("D",i.dayNamesShort,i.dayNames);break;case "o":d=y("o");break;case "m":m=y("m");break;case "M":m=z("M",i.monthNamesShort,i.monthNames);break;case "y":l=y("y");
break;case "H":o=y("H");break;case "h":o=y("h");break;case "i":p=y("i");break;case "s":w=y("s");break;case "a":n=z("a",["am","pm"],["am","pm"])-1;break;case "A":n=z("A",["am","pm"],["am","pm"])-1;break;case "'":s("'")?r++:b=!0;break;default:r++}100>l&&(l+=(new Date).getFullYear()-(new Date).getFullYear()%100+(l<=("string"!=typeof u?u:(new Date).getFullYear()%100+parseInt(u,10))?0:-100));if(-1<d){m=1;c=d;do{i=32-(new Date(l,m-1,32)).getDate();if(c<=i)break;m++;c-=i}while(1)}o=new Date(l,m-1,c,-1==
n?o:n&&12>o?o+12:!n&&12==o?0:o,p,w);if(o.getFullYear()!=l||o.getMonth()+1!=m||o.getDate()!=c)throw"Invalid date";return o}})(jQuery);

FormModel = Backbone.Model.extend({
    idAttribute: 'Hash',
    sync: function(method, model, options) {
        if (method == "read") {
            this.loadForm();
        } 
    },
    defaults: {
        "Theme": "",
        "Pages": [],
        "Rules": [],
        "active_page": null,
        "page_history": []
    },
    loadForm: function() {
        var formId = this.get("formId");
        var self = this;
        $fh.forms.getForm({
            "formId": formId
        }, function(err, form) {
            if (err) {
                self.trigger("error", err);
            } else {
                self.coreModel = form;
                self.set("fh_full_data_loaded", true);
                self.id = formId;
            }
        });
    },
    get: function(key) {
        var res = Backbone.Model.prototype.get.apply(this, arguments);
        if (res && res !== "") {
            return res;
        } else if (this.coreModel) {
            return this.coreModel.get(key);
        } else {
            return res;
        }
    },
    initialize: function() {
        _.bindAll(this, "loadForm", "get");
        this.loadForm();
    }
});

FormsCollection = Backbone.Collection.extend({
    model: FormModel,
    sync: function(method, collection, options) {
        var self = this;
        if (method == "read") {
            $fh.forms.getForms({
                fromRemote: true
            }, function(err, formList) {
                if (err) {
                    self.trigger("error", err);
                    options.error(err);
                } else {
                    var count = formList.size();
                    var formIdArr = [];
                    for (var i = 0; i < formList.size(); i++) {
                        var formId = formList.getFormIdByIndex(i);
                        formIdArr.push({
                            formId: formId
                        });
                    }
                    
                    options.success(formIdArr);
                }
            });
        }
    }
});

App.collections.forms = new FormsCollection();
SubmissionModel = Backbone.Model.extend({
    sync: function(method, model, options) {
        var self = this;
        if (method == "read") {
            this.loadSubmission(this.submissionMeta, function(err, sub) {});
        } else if (method == "delete") {
            this.coreModel.clearLocal(function() {});
        } else {
            console.log("Should not be here");
        }
    },
    loadSubmission: function(submissionMeta, cb) {
        var self = this;
        $fh.forms.getSubmissions({}, function(err, subList) {
            subList.getSubmissionByMeta(submissionMeta, function(err, submission) {
                if (err) {
                    self.trigger("error", err);
                } else {
                    self.coreModel = submission;
                    self.id = submission.getLocalId();
                }

                self.coreModel.clearEvents();
                self.initModel();
                self.trigger("change");

                cb(err, submission);
            });
        });
    },
    deleteSubmission: function(cb) {
        var self = this;
        self.loadSubmission(self.submissionMeta, function(err) {
            if (err) {
                $fh.forms.log.e("Error Loading Submission: ", err);
            } else {
                self.coreModel.clearLocal(function(err) {
                    if (err) console.error("Error clearing local: ", err);

                    if (cb) {
                        return cb(err);
                    }
                    return false;
                });
            }
        });
    },
    initModel: function() {
        var coreModel = this.coreModel;
        var self = this;
        coreModel.on("inprogress", function(ut) {
            self.refreshAllCollections();
        });
        coreModel.on("submitted", function(submissionId) {
            AlertView.showAlert("Submission Upload Complete", "success", 1000);
            self.refreshAllCollections();
        });
        coreModel.on("submit", function() {
            self.refreshAllCollections();
        });
        coreModel.on("error", function() {
            AlertView.showAlert("Error Uploading Submission", "error", 1000);
            self.refreshAllCollections();
        });
        coreModel.on("queued", function() {
            AlertView.showAlert("Submission Queued for Upload", "info", 1000);
            self.refreshAllCollections();
        });
        coreModel.on("progress", function(progress) {
            App.views.pending_list.updateSubmissionProgress(progress, this.getLocalId());
        });
    },
    refreshAllCollections: function() {
        refreshSubmissionCollections();
    },
    get: function(key) {
        var res = Backbone.Model.prototype.get.apply(this, arguments);
        if (res && res !== "") {
            return res;
        } else if (this.coreModel) {
            return this.coreModel.get(key);
        } else {
            return res;
        }
    },
    initialize: function(submissionMeta, options) {
        var self = this;
        this.submissionMeta = submissionMeta;
        this.loadSubmission(submissionMeta, function(err, sub) {});
    }
});
SubmissionCollection = Backbone.Collection.extend({
    model: SubmissionModel,
    status: null,
    initialize: function() {
        Backbone.Collection.prototype.initialize.apply(this, arguments);
    },
    getSubmissionList: function(cb) {
        var self = this;
        self.reset();
        $fh.forms.getSubmissions({}, function(err, subList) {

            if (err) {
                console.log(err);
                cb(err);
            } else {
                var status = self.status;
                var sortField = self.sortField;
                var submissions = subList.getSubmissions();
                if (status) {
                    submissions = subList.findByStatus({
                        sortField: sortField,
                        status: status
                    });
                }
                self.coreModel = subList;
                if (self.models.length > submissions.length) {
                    self.length = submissions.length;
                }

                console.log("$fh.forms.getSubmissions", self.status, submissions);

                cb(null, submissions);
            }
        });
    },
    clearSentSubmissions: function(cb) {
        var self = this;
        self.coreModel.clearSentSubmission(function(err) {
            console.log("Clear Sent Submissions Finished", err);
            if (err) {
                return cb(err);
            }
            self.fetch();
            return cb();
        });
    },
    sync: function(method, collection, options) {
        if (method == "read") {
            this.getSubmissionList(function(err, submissions) {
                if (err) {
                    options.error(err);
                } else {
                    options.success(submissions);
                }
            });
        }
    }
});

SentModel = SubmissionModel.extend({});

SentCollection = SubmissionCollection.extend({
    status: "submitted",
    model: SentModel,
    sortField: "submittedDate"
});
PendingModel = SubmissionModel.extend({

});

PendingWaitingCollection = SubmissionCollection.extend({
    status: ["pending", "inprogress"],
    sortField: "submitDate"
});
PendingSubmittingCollection = SubmissionCollection.extend({
    status: "queued",
    sortField: "uploadStartDate"
});

PendingReviewCollection = SubmissionCollection.extend({
    status: "error",
    sortField: "uploadStartDate"
});

DraftModel = SubmissionModel.extend({});

DraftsCollection = SubmissionCollection.extend({
    model: DraftModel,
    status: "draft",
    sortField: "saveDate"
});


App.collections.drafts = new DraftsCollection();
App.collections.pending_submitting = new PendingSubmittingCollection();
App.collections.sent = new SentCollection();
App.collections.pending_review = new PendingReviewCollection();
App.collections.pending_waiting = new PendingWaitingCollection();

function refreshSubmissionCollections() {
    console.log("Refreshing All Collections");
    App.collections.drafts.fetch();
    App.collections.sent.fetch();
    App.collections.pending_submitting.fetch();
    App.collections.pending_waiting.fetch();
    App.collections.pending_review.fetch();
}
LoadingView = Backbone.View.extend({
    id: 'loading',
    className: '',

    templates: {
        spinner: '<div class="modal" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>'
    },

    initialize: function(model) {
        var self = this;

        this.percent = 0;
        _.bindAll(this, 'destroyView', "modelLoaded");

        $('#myModal').modal();

        if (model != null) {
            this.model = model;
            // bind to model change and error events if model not fully loaded yet
            if (!this.model.get('fh_full_data_loaded')) {
                this.listenTo(this.model, 'change:fh_full_data_loaded', self.modelLoaded);
                this.listenTo(this.model, 'error', self.modelLoadError);
            } else {
                // async behaviour
                setTimeout(function() {
                    self.modelLoaded(this.model);
                }, 0);
            }
        }
    },

    modelLoaded: function(a, b, c) {
        var self = this;
        this.model.set('fh_error_loading', false);
        this.updateMessage("Form synced");
        this.updateProgress(100);
        setTimeout(function() {
            self.hide();
        }, 1000);
    },

    modelLoadError: function(model, b, c) {
        var self = this;
        this.model.set('fh_error_loading', true);
        this.updateMessage("Error syncing form");
        this.updateProgress(100);
        setTimeout(function() {
            self.hide();
        }, 1000);
    },

    addError: function() {
        $('#myModal .progress-bar').addClass('progress-bar-danger');
    },

    removeError: function() {
        $('#myModal .progress-bar').removeClass('progress-bar-danger');
    },

    show: function(message, progress) {
        this.reset();

        this.updateMessage(message);
        if (!_.isNumber(progress)) {
            progress = 20;
        }
        this.updateProgress(progress); // halfway straight away. only a single step process

        this.$el.show();
    },

    updateMessage: function(message) {
        $('#myModalLabel').html(message);
    },

    updateProgress: function(progress) {
        $('#myModal .progress-bar').css('width', progress + '%');
    },

    reset: function() {
        this.removeError();
        this.updateProgress(5);
        this.updateMessage('');
        this.percent = 0;
        this.formsCounter = -1;
        this.totalCounter = 0;
    },

    hide: function() {
        var self = this;
        setTimeout(function(){
            $('#myModal').modal('hide');   
            self.destroyView(); 
        }, 500);
    },

    destroyView: function() {
        $(this.$el).removeData().unbind();

        if (this.model != null) {
            this.model.off(null, null, this);
        }

        //Remove view from DOM
        this.remove();
        Backbone.View.prototype.remove.call(this);
    }
});
LoadingCollectionView = LoadingView.extend({

    initialize: function() {
        var self = this;
        this.formsCounter = -1;
        this.totalCounter = 0;

        LoadingView.prototype.initialize.call(this);

        this.listenTo(App.collections.forms, 'sync', this.formFetch);

        this.listenTo(App.collections.forms, 'error', function(collection, msg, options) {
            if (collection instanceof Backbone.Collection) {
                self.updateProgress(100);
                self.updateMessage("<p>Your forms couldn't be synced.</p> <p>Please try again later<p>");
                self.addError();

                setTimeout(function() {
                    self.hide();
                    self.removeError();
                    App.views.header.showHome();
                }, 2000);
            }
        });
    },

    formFetch: function(collection, options) {
        var self = this;

        // Ignore initial reset
        if (App.collections.forms.models.length > 0) {
            self.updateLoadedCount();

            _(App.collections.forms.models).forEach(function(model) {
                if (!model.get('fh_full_data_loaded')) {
                    model.on('change:fh_full_data_loaded', self.modelLoaded, self);
                    model.on('error', self.modelLoadError, self);
                } else {
                    self.modelLoaded(model);
                }
            });
        } else {
            this.checkTotal();
        }
    },

    updateLoadedCount: function() {
        this.formsCounter += 1;
        this.updateMessage("Loading Form " + this.formsCounter + " of " + App.collections.forms.models.length);
    },

    modelLoaded: function(a, b, c) {
        this.percent += 100 / App.collections.forms.length;
        if (this.percent > 100) this.percent = 100;
        this.updateLoadedCount();
        this.totalCounter += 1;
        this.updateProgress(this.percent);
        this.checkTotal();
    },

    modelLoadError: function(model, b, c) {
        model.set('fh_error_loading', true);
        this.percent += 100 / App.collections.forms.length;
        if (this.percent > 100) this.percent = 100;
        this.totalCounter += 1;
        this.updateProgress(this.percent);
        this.checkTotal();
    },

    checkTotal: function() {
        var self = this;
        // Check total loaded to see if we should hide
        if (this.totalCounter >= App.collections.forms.models.length) {
            this.updateMessage("Form sync complete");
            setTimeout(function() {
                App.views.header.showHome();
                self.hide();
            }, 1000);
        }
    },

    destroyView: function() {
        var self = this;
        App.collections.forms.forEach(function(model) {
            model.off(null, null, self);
        });
        App.collections.forms.off(null, null, this);


        LoadingView.prototype.destroyView.call(self);
    }
});
ShowFormButtonView = Backbone.View.extend({
    events: {
        'click button.show.fetched': 'show',
        'click button.show.fetch_error': 'fetch'
    },

    templates: {
        form_button: '<button class="show btn btn-primary col-xs-12 text-center <%= enabledClass %> <%= dataClass %> fh_appform_button_action"><%= name %></button>'
    },

    initialize: function() {
        _.bindAll(this, 'render', 'unrender', 'show', 'fetch');

        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'remove', this.unrender);
    },

    render: function() {
        var html;

        var name = this.model.get("name") || "";
        var formattedName = name;

        var fullyLoaded = this.model.get('fh_full_data_loaded');
        var errorLoading = this.model.get('fh_error_loading');
        var enabled = fullyLoaded || !errorLoading;
        html = _.template(this.templates.form_button)({
            name: formattedName,
            enabledClass: enabled ? 'button-main' : '',
            dataClass: errorLoading ? 'fetch_error' : fullyLoaded ? 'fetched' : 'fetching'
        });

        this.$el.html(html);
        this.$el.find('button').not('.fh_full_data_loaded');

        return this;
    },

    unrender: function() {
        $(this.$el).remove();
    },

    show: function() {
        App.views.header.hideAll();
        App.views.form = new FormView({
            "parentEl": $("#fh_appform_content"),
            "form": this.model.coreModel,
            "autoShow": true
        });

    },

    fetch: function() {
        // show loading view
        var loadingView = new LoadingView(this.model);
        loadingView.show('Syncing form');
        this.model.fetch();
    }
});
$fh.ready({}, function() {
    FormView = $fh.forms.backbone.FormView.extend({
        initialize: function(params) {
            var self = this;
            self.options = params || {};
            $fh.forms.backbone.FormView.prototype.initialize.call(this, params);

            if (params.form) {
                params.formId = params.form.getFormId();
            }

            this.loadForm(params, function() {
                self.trigger("loaded");
                if (params.autoShow) {
                    self.$el.show();
                }
                self.render();
            });
        },
        saveToDraft: function() {
          var self = this;
            AlertView.showAlert("Saving Draft", "info", 1000);
            $fh.forms.backbone.FormView.prototype.saveToDraft.apply(this, [
                function(err) {
                    if(err){
                        AlertView.showAlert("Error Saving Draft.", "error", 1000);
                    } else {    
                        refreshSubmissionCollections();
                        self.submission.on("validationerror", self.onValidateError);
                        AlertView.showAlert("Draft Saved", "success", 1000);
                    }
                }
            ]);
        },
        submit: function() {

            AlertView.showAlert("Processing Submission", "info", 1000);

            $fh.forms.backbone.FormView.prototype.submit.apply(this, [

                function(err) {
                    if (err) {
                        console.log(err);
                        AlertView.showAlert("Submission Error", "error", 1000);
                    } else {
                        refreshSubmissionCollections();
                        App.views.header.showHome(true);
                        App.views.form = null;
                        AlertView.showAlert("Adding To Upload Queue", "info", 1000);
                    }
                }
            ]);
        }
    });
});
SubmissionListview = Backbone.View.extend({

  groupSubmissionsByForm: function(submissions){
      //Sorting by formname
      //Already sorted by

      submissions = submissions || [];

      var filteredSubmissions = {};

      _.each(submissions, function(submission){
        var submissionFormName = submission.get('formId');
        if(!filteredSubmissions[submissionFormName]){
          filteredSubmissions[submissionFormName] = [];  
        } 

        filteredSubmissions[submissionFormName].push(submission);
      });

      return filteredSubmissions;
  },
  renderGroup: function(collection){
    var self = this;
    

    var groupedSubmissions = self.groupSubmissionsByForm(collection.models);
    var groupHtml = "";

    if(collection.models.length > 0){
      _.each(groupedSubmissions, function(models, formId){
          var formName = models[0].get('formName');
          var status = collection.status;
          if(status instanceof(Array)){
            status = status[0];
          }
          var group = _.template($('#draft-list-group').html())( {
            formName: formName,
            formId: formId,
            type: status
          });
          group = $(group);

          group.find('.panel-heading').click(function(e){
            console.log(e);

            var formId = $(e.currentTarget).data().formid;
            var type = $(e.currentTarget).data().type;
            $('#drafts-list-panel-' + type + '-' + formId).slideToggle();
            $('#fh_appform_drafts-list-panel-' + type + '-' + formId + '-body-icon').toggleClass('icon-chevron-sign-up');
            $('#fh_appform_drafts-list-panel-' + type + '-' + formId + '-body-icon').toggleClass('icon-chevron-sign-down');
          });

          self.$el.append(group);
          _.each(models, function(model){
              self.appendFunction(model, formId);    
          });
      });  
    } else {
      self.$el.append('<h2 class="text-center col-xs-12">No Submissions</h2>');
    }

    return self;
  },
  appendItemView: function(form, formId, ItemView){
    var view = new ItemView({
        model: form
    });
    $('#drafts-list-group-' + formId, this.$el).append(view.render().$el);
  }
});
var FormListView = Backbone.View.extend({
    el: $('#fh_content_form_list'),

    events: {
        'click .settings': 'showSettings',
        'click button.reload': 'reload'
    },

    templates: {
        list: '<div id="fh_appform_form_list" class="col-xs-12"></div>',
        header: '<h4 class="col-xs-12 text-center">Choose a form.</h4>',
        error: '<button class="reload btn col-xs-12 fh_appform_button_cancel <%= enabledClass %> <%= dataClass %>"><%= name %><div class="loading"></div></button>'
    },

    initialize: function() {
        _.bindAll(this, 'render', 'appendForm');
        this.views = [];

        this.listenTo(App.collections.forms, 'reset', function(collection, options) {
            if (options == null || !options.noFetch) {
                App.collections.forms.each(function(form) {
                    form.fetch();
                });
            }
        });
    },

    reload: function() {
        var loadingView = new LoadingCollectionView();
        loadingView.show("Attempting to reload forms");
        App.router.reload();
    },

    show: function() {
        App.views.header.markActive('header_forms', "Forms");
        this.render();
        $(this.$el).show();
    },

    hide: function() {
        $(this.$el).hide();
    },

    renderErrorHandler: function(msg) {
        try {
            if (msg == null || msg.match("error_ajaxfail")) {
                msg = "An unexpected error occurred.";
            }
        } catch (e) {
            msg = "An unexpected error occurred.";
        }
        var html = _.template(this.templates.error)( {
            name: msg + "<br/>Please Retry Later",
            enabledClass: 'button-danger fh_appform_button_cancel',
            dataClass: 'fetched'
        });
        this.$el.append(html);
    },

    render: function() {
        // Empty our existing view
        $(this.$el).empty();

        
        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())());
        // Add list
        $(this.$el).append(this.templates.list);

        if (App.collections.forms.models.length) {
            // Add header
            $('#fh_appform_form_list', this.$el).append(this.templates.header);
            _(App.collections.forms.models).forEach(function(form) {
                this.appendForm(form);
            }, this);
        } else if (App.collections.forms.models.length === 0) {
            this.renderErrorHandler("No forms exist for this app.");
        } else {
            this.renderErrorHandler(arguments[1]);
        }
    },

    appendForm: function(form) {
        var view = new ShowFormButtonView({
            model: form
        });
        this.views.push(view);
        $('#fh_appform_form_list', this.$el).append(view.render().$el);
    },

    showSettings: function() {
        App.views.header.showSettings();
    },

    showAbout: function() {
        App.views.header.showAbout();
    }
});
SentListView = SubmissionListview.extend({
    el: $('#fh_content_sent'),

    events: {
        
    },

    templates: {
        dismiss_all: '<button class="col-xs-12 btn btn-danger fh_appform_button_cancel dismiss-all button button-main button-block">Dismiss All</button>',
        save_max: '<label for="sentSaveMax" class="col-xs-6 fh_appform_field_title">Number of sent items to keep</label><select class="fh_appform_field_input form-control col-xs-6" id="sentSaveMax"><%= options%></select>'
    },

    initialize: function() {
        _.bindAll(this, 'render', 'changed');

        this.listenTo(App.collections.sent, 'add remove reset sync',  this.changed);

        this.render();
    },
    render: function() {

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())());
        return this;
    },

    show: function() {
        App.views.header.markActive('header_sent', "Sent");
        this.changed();
        $(this.$el).show();
    },

    

    hide: function() {
        $(this.$el).hide();
    },

    changed: function() {
        var self = this;

        // Empty our existing view
        $(this.$el).empty();

        $(this.$el).append(_.template($('#forms-logo').html())());

        self.renderGroup(App.collections.sent);
    },
    appendFunction: function(form, formId) {
        this.appendItemView(form, formId, PendingSubmittedItemView);
    }
});
DraftListView = SubmissionListview.extend({
    el: $('#fh_content_drafts'),

    templates: {
    },

    initialize: function() {
        _.bindAll(this, 'render', 'changed');

        this.listenTo(App.collections.drafts, 'add remove reset sync', this.changed);

        this.render();
    },
    render: function(){
        // Empty our existing view
        $(this.$el).empty();
        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())());
    },

    show: function() {
        App.views.header.markActive('header_drafts', "Drafts");
        $(this.$el).show();
    },

    hide: function() {
        $(this.$el).hide();
    },

    changed: function() {
        var self = this;

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html()));

        self.renderGroup(App.collections.drafts);
    },

    appendFunction: function(form, formId) {
        this.appendItemView(form, formId, DraftItemView);
    }
});
$(function() {
    SettingsView = $fh.forms.backbone.ConfigView.extend({
        el: $('#fh_content_settings'),
        events: {
            "click #cancelBtn": "cancel",
            "click #saveBtn": "save",
            "click #_refreshFormsButton": "refreshForms",
            'click button.dismiss-all': 'dismissAll',
            "change #sentSaveMax": "saveMaxSelected"
        },
        templates: {
            save_max_option: '<option value="<%= value%>"><%= value%></option>'
        },
        saveMaxSelected: function() {
            var self = this;
            var saveMax = parseInt($('#sentSaveMax', this.$el).val(), 10);

            if (_.isNumber(saveMax)) {
                $fh.forms.config.set("max_sent_saved", saveMax);
                $fh.forms.config.saveConfig();
                App.collections.sent.clearSentSubmissions(function(err) {
                    console.log("Submissions cleared", err);
                });
            }
        },
        dismissAll: function(e) {
            var self = this;
            e.stopPropagation();

            var confirmDismiss = confirm("Are you sure you want to dismiss all sent submissions?");
            if (confirmDismiss) {

                var loadingView = new LoadingCollectionView();

                loadingView.show("Removing All Submissions", 10);
                var all = [];

                _(App.collections.sent.models).forEach(function(model) {
                    all.push(model);
                });

                var increment = 90 / (all.length ? all.length : 1);
                var incrIndex = 0;

                async.forEachSeries(all, function(model, cb) {
                    model.deleteSubmission(function(err) {
                        if (err) {
                            console.error("Error deleting submission: ", err);
                        }
                        incrIndex += 1;
                        console.log("Submission Deleted", model);
                        model.destroy();

                        loadingView.show("Removing Submission " + incrIndex + " of " + all.length, 10 + incrIndex * increment);

                        cb();
                    });
                }, function(err) {
                    if (err) {
                        console.log(err);
                    }

                    loadingView.show("All Submissions Removed", 100);
                    loadingView.hide();
                });
            }

            return false;
        },
        refreshForms: function() {
            var loadingView = new LoadingCollectionView();
            loadingView.show("Reloading Content.", 10);
            $fh.forms.getTheme({
                "fromRemote": true,
                "css": true
            }, function(err, themeCSS) {
                if (err) {
                    $fh.forms.log.e("Error Loading Theme, ", err);
                } else {
                    if ($('#fh_appform_style').length > 0) {
                        $('#fh_appform_style').html(themeCSS);
                    } else {
                        $('head').append('<style id="fh_appform_style">' + themeCSS + '</style>');
                    }
                }

                loadingView.show("Theme Loaded. Now Loading Config", 30);

                $fh.forms.config.refresh(function(err) {
                    if (err) {
                        console.log("Error Loading Config");
                    }

                    loadingView.show("Config Loaded. Now Loading Forms", 40);

                    App.collections.forms.fetch();
                });
            });

        },
        renderSentOptions: function(){
            var self = this;
            var defaultOptions = [5, 10, 20, 30, 40, 50, 60, 70, 80, 100];

            var configOptions = $fh.forms.config.get("sent_items_to_keep_list") || defaultOptions;

            if(configOptions.length === 0){
              configOptions = defaultOptions;
            }


            var empty = false;

            configOptions = _.map(configOptions, function(sentItem) {
                return _.template(self.templates.save_max_option)( {
                    value: sentItem
                });
            });

            var optionsHtml = _.template($('#draft-list-option').html())( {
                label: '<label for="sentSaveMax" class="fh_appform_field_title col-xs-12">Number of sent items to keep</label>',
                inputHtml: '<select class="fh_appform_field_input form-control col-xs-12" id="sentSaveMax">' + configOptions + '</select>'
            });
            
            optionsHtml += _.template($('#draft-list-option').html())( {
                label: '',
                inputHtml: '<button class="col-xs-12 btn btn-danger fh_appform_button_cancel dismiss-all button button-main button-block">Dismiss All</button>'
            });

            this.$el.find('#misc-settings-body').append(optionsHtml);
        },
        render: function() {
            SettingsView.__super__.render.apply(this);
        
            this.renderSentOptions();

            App.views.header.markActive('header_settings', "Settings");

            if ($fh.forms.config.editAllowed()) {
                this.$el.append(_.template($('#config-buttons').html())());
            }
            return this;
        },
        populate: function() {
            // Re-render save
            var maxSize = $fh.forms.config.get("max_sent_saved") ? $fh.forms.config.get("max_sent_saved") : $fh.forms.config.get("sent_save_min");
            $('#sentSaveMax', this.$el).val(maxSize);
        },
        show: function() {
            App.views.header.hideAll();
            this.render();
            this.populate();
            this.$el.show();
        },

        hide: function() {
            this.$el.hide();
        },
        save: function() {
            SettingsView.__super__.save.call(this, function() {
                App.views.header.showHome();
            });

        },
        cancel: function() {
            App.views.header.showHome();
        }
    });
});
ItemView = Backbone.View.extend({
    className: 'list-group-item fh_appform_field_area col-xs-12',
    events: {
        'click button.delete-item': 'delete',
        'click button.submit-item': 'submit',
        'click button.group-detail': 'show'
    },

    templates: {
    },

    errorTypes: {
        "validation": "Validation Error. Please review for details.",
        "offline": "Offline during submission. Ok to resubmit",
        "network": "Network issue during submission. Ok to resubmit",
        "timeout": "Form Submission timeout. Please try again later",
        "defaults": "Unknown Error. Please review for details"
    },

    initialize: function() {
        _.bindAll(this, 'render', 'unrender', 'show', 'delete', 'submit');
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'remove', this.unrender);
    },

    renderId: function() {
        if (this.model.get("Entry") && this.model.get("Entry").EntryId) {
            return "App Forms Id : " + this.model.get("Entry").EntryId;
        }
        if (this.model.idValue) {
            return this.model.idValue;
        }
        if (this.model.id) {
            return this.model.id.split(/-/)[0];
        }
        return "new";
    },

    generateButtonHtml: function(buttonSections){
        var buttonHtml = "";
        for(var buttonDetail in buttonSections){
            buttonHtml += _.template($('#draft-list-item-button').html())( 
                buttonSections[buttonDetail]   
            ); 
        }
        return buttonHtml;
    },

    render: function() {
        var time = new moment(this.model.get('savedAt')).format('HH:mm:ss DD/MM/YYYY');
        var error = this.model.get('error');
        var template = "#" + "draft-list-item";

        var buttons = _.template($('#draft-list-item-buttons').html())( {
            buttons: this.getButtons(),
            id: this.getIdText()
        });

        buttons = this.getButtons() === false ? false: buttons;

        var item = _.template($(template).html())( {
            name: this.model.get('formName'),
            id: this.getIdText(),
            timestamp: this.getItemTime(),
            error_type: (error && error.type) ? error.type : null,
            error_message: (error && error.type && this.errorTypes[error.type]) ? this.errorTypes[error.type] : this.errorTypes.defaults,
            buttons: buttons,
            type: this.getType()
        });

        $(this.$el).html(item);
        return this;
    },

    deleteSubmission: function(cb){
        var self = this;

        self.model.deleteSubmission(function(err){
            self.model.destroy();
            if(cb){
                return cb();
            }
        });
    },

    delete: function(e) {
        var self = this;
        e.stopPropagation();


        var confirmDelete = confirm("Are you sure you want to delete this submission?");
        if (confirmDelete) {
            AlertView.showAlert("Deleting Submission", "info", 1000);
            self.deleteSubmission(function(err){
                if(err){
                    AlertView.showAlert("Error deleting submission.", "warning", 1000);
                } else {
                    AlertView.showAlert("Submission Deleted.", "info", 1000);    
                }
            });   
        }
    },
    submit: function(e) {
        var self = this;
        var model = self.model;
        e.stopPropagation();

        self.model.loadSubmission(self.model.submissionMeta, function(err) {
            if (err) {
                $fh.forms.log.e("Error Loading Submission: ", err);
            } else {
                model.coreModel.upload(function(err) {
                    if (err) {
                        $fh.forms.log.e("Error Calling Upload Submission: ", err);
                    }
                    return false;
                });
            }
        });
    },

    unrender: function() {
        $(this.$el).remove();
    },

    show: function() {
        if (this.model.load) {
            this.model.load(function(err, actual) {
                var draft = new DraftModel(actual.toJSON());
                App.views.form = new DraftView({
                    model: draft
                });
                App.views.form.render();
            });
        }
    }
});
DraftItemView = ItemView.extend({

    templates: {
        item: '<td><%= name %></td> <td><%= id %></td> <td><%= timestamp %></td><td><button class="fh_appform_button_cancel button button-negative delete-item second_button btn btn-danger">Delete</button></td>'

    },

    show: function() {
        var self = this;
        App.views.header.hideAll();

        self.model.loadSubmission(self.model.submissionMeta, function(err) {
            if (err) {
                $fh.forms.log.e("Error loading submission ", err);
            }
            var submission = self.model.coreModel;
            App.views.form = new FormView({
                "parentEl": $("#fh_appform_content"),
                "formId": submission.get("formId"),
                "autoShow": true,
                "submission": submission
            });
        });
    },
    getItemTime: function() {
        return "Saved At: <br/>" + moment(this.model.get("_localLastUpdate")).calendar();
    },
    getIdText: function() {
        return this.model.get("_ludid");
    },
    getType: function(){
        return "draft";
    },
    getButtons : function(){
        var draftButtons = [
            {
                itemText: "Clear",
                itemClass: "delete-item fh_appform_button_cancel"
            },
            {
                itemText: "Edit",
                itemClass: "group-detail fh_appform_button_action"
            }
        ];

        return this.generateButtonHtml(draftButtons);
    }
});
PendingReviewItemView = ItemView.extend({
    templates: {
    },
    errorTypes: {
        "validation": "Validation Error. Please review for details.",
        "offline": "Offline during submission. Ok to resubmit",
        "network": "Network issue during submission. Ok to resubmit",
        "timeout": "Form Submission timeout. Please try again later",
        "defaults": "Unknown Error. Please review for details"
    },
    getIdText: function() {
        return "FormId: " + this.model.get("formId");
    },
    getItemTime: function() {
        return "Submitted At: <br/>" + moment(this.model.get("submitDate")).calendar();
    },
    getType: function(){
        return "review";
    },
    show: function() {
        var self = this;
        App.views.header.hideAll();

        self.model.loadSubmission(self.model.submissionMeta, function(err) {
            if (err) {
                $fh.forms.log.e("Error loading submission ", err);
            }
            var submission = self.model.coreModel;
            App.views.form = new FormView({
                "parentEl": $("#fh_appform_content"),
                "formId": submission.get("formId"),
                "autoShow": true,
                "submission": submission
            });
        });
    },
    getButtons : function(){
        var draftButtons = [
            {
                itemText: "Clear",
                itemClass: "delete-item fh_appform_button_cancel"
            },
            {
                itemText: "Edit",
                itemClass: "group-detail fh_appform_button_action"
            }
        ];

        return this.generateButtonHtml(draftButtons);
    }
});
PendingWaitingView = ItemView.extend({
    templates: {
    },
    getIdText: function() {
        return "FormId: " + this.model.get("formId");
    },
    getItemTime: function() {
        return "Submitted: <br/>" + (new moment(this.model.get("submitDate")).format('HH:mm:ss DD/MM/YYYY'));  
    },
    show: function() {
        var self = this;
        App.views.header.hideAll();

        self.model.loadSubmission(self.model.submissionMeta, function(err) {
            if (err) {
                $fh.forms.log.e("Error loading submission ", err);
            }

            var submission = self.model.coreModel;

            submission.changeStatus("draft", function(){
                    App.views.form = new FormView({
                    "parentEl": $("#fh_appform_content"),
                    "formId": submission.get("formId"),
                    "autoShow": true,
                    "submission": submission,
                    readOnly: false
                });    
            });
        });
    },
    getButtons : function(){
        var draftButtons = [
            {
                itemText: "Edit",
                itemClass: "group-detail fh_appform_button_action"
            },
            {
                itemText: "Clear",
                itemClass: "delete-item fh_appform_button_cancel"
            },
            {
                itemText: "Submit",
                itemClass: "submit-item fh_appform_button_action"
            }
        ];

        return this.generateButtonHtml(draftButtons);
    },
    getType: function(){
        return "Pending";
    }
});
PendingSubmittingItemView = ItemView.extend({
    templates: {
    },
    getIdText: function(){
        return this.model.get("_ludid");  
    },
    getItemTime: function(){
        return "Uploaded Started At: <br/>" + (new moment(this.model.get('uploadStartDate')).format('HH:mm:ss DD/MM/YYYY'));  
    },
    getButtons : function(){
        return false;
    },
    getType: function(){
        return "Queued";
    }
});
PendingSubmittedItemView = ItemView.extend({
    templates: {
    },

    show: function() {
        var self = this;
        App.views.header.hideAll();

        self.model.loadSubmission(self.model.submissionMeta, function(err) {
            if (err) {
                $fh.forms.log.e("Error loading submission ", err);
            }
            var submission = self.model.coreModel;
            App.views.form = new FormView({
                parentEl: $("#fh_appform_content"),
                formId: submission.get("formId"),
                autoShow: true,
                submission: submission,
                readOnly: true
            });
        });
    },
    getType: function(){
        return "Submitted";
    },
    getIdText: function(){
        return this.model.get("formId");    
    },
    getItemTime: function(){
        return "Submission Completed At: <br/>" + (new moment(this.model.get('submittedDate')).format('HH:mm:ss DD/MM/YYYY'));    
    },
    getButtons : function(){
        var draftButtons = [
            {
                itemText: "Clear",
                itemClass: "delete-item fh_appform_button_cancel"
            },
            {
                itemText: "View Submission",
                itemClass: "group-detail fh_appform_button_action"
            }
        ];

        return this.generateButtonHtml(draftButtons);
    }

});
PendingListView = SubmissionListview.extend({
    el: $('#fh_content_pending'),

    events: {
        'click button.submit-all': 'submitAll'
    },

    templates: {
    },

    initialize: function() {
        _.bindAll(this, 'render', 'changed');

        this.listenTo(App.collections.pending_submitting, 'change add remove reset sync', this.changed);
        this.listenTo(App.collections.pending_review, 'change add remove reset sync', this.changed);
        this.listenTo(App.collections.pending_waiting, 'change add remove reset sync', this.changed);

        this.render();
    },
    render: function(){

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())());
    },

    scrollToTop: function() {
        window.scrollTo(0, 0);
    },
    updateSubmissionProgress: function(progress, subLocalId) {
        console.log("PROGRESS", progress, subLocalId);
        var progPercentage = 0;

        if (progress && subLocalId) {

            if(progress.formJSON){
                progPercentage = 15;   
            }

            if (progress.totalSize && progress.totalSize > 0) {
                if (progress.uploaded > 0) {
                    progPercentage += ((progress.uploaded / progress.totalSize) * 85);
                }
            }
        }

        if (subLocalId && typeof subLocalId === 'string') {
            var eleToUpdate = $('#progress-' + subLocalId);
            if (eleToUpdate && eleToUpdate.length > 0) {
                eleToUpdate = $(eleToUpdate[0]);
                if(progPercentage === 100){
                    eleToUpdate.addClass('progress-bar-success');
                }
                eleToUpdate.css("width", progPercentage + "%");
                eleToUpdate.html('<span class="sr-only">' + progPercentage + '% Complete</span>');
            }
        }
    },

    submitAll: function() {
        var self = this;
        this.scrollToTop();
        var loadingView = new LoadingCollectionView();
        loadingView.show("Queueing Pending Forms For Upload", 10);
        var c = 1;
        var tasks = _.collect(App.collections.pending_waiting.models, function(model) {
            return function(callback) {
                model.loadSubmission(model.submissionMeta, function(err){
                    model.coreModel.upload(callback);    
                });
            };
        }); // Kick things off by fetching when all stores are initialised

        async.series(tasks, function(err) {
            console.log("Submissions Queued", err);
            loadingView.show("Queueing Submissions Complete", 100);
            loadingView.hide();  
        });
        return false;
    },

    show: function() {
        App.views.header.markActive('header_pending', "Pending");
        $(this.$el).show();
    },

    hide: function() {
        $(this.$el).hide();
    },

    changed: function() {
        var self = this;

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())( {}));

        var empty = App.collections.pending_waiting.models.length === 0;

        var optionsHtml = "";

        if(App.collections.pending_waiting.models.length > 0){
            optionsHtml = _.template($("#pending-list-options").html())( {}); 
        }

        var optionsTemplate = _.template($("#draft-list-options").html())( {
            optionsHtml: optionsHtml,
            hideOptions: empty,
            type: "pending"   
        });

        this.$el.append(optionsTemplate);

        this.$el.find('.panel-heading').click(function(e){
            console.log(e);

            var type = $(e.currentTarget).data().type;
            $('#submission-options-' + type).slideToggle();
            $('#fh_appform_submission-options-' + type + '-body-icon').toggleClass('icon-chevron-sign-up');
            $('#fh_appform_submission-options-' + type + '-body-icon').toggleClass('icon-chevron-sign-down');
        });

        self.renderGroup(App.collections.pending_waiting);
    },
    appendFunction: function(form, formId) {
        this.appendItemView(form, formId, PendingWaitingView);
    }
});
QueuedListView = SubmissionListview.extend({
    el: $('#fh_content_queued'),

    events: {
    },

    templates: {
    },

    initialize: function() {
        _.bindAll(this, 'render', 'changed');

        this.listenTo(App.collections.pending_submitting, 'change add remove reset sync', this.changed);
        
        this.render();
    },
    render: function(){

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())());
    },

    scrollToTop: function() {
        window.scrollTo(0, 0);
    },
    updateSubmissionProgress: function(progress, subLocalId) {
        console.log("PROGRESS", progress, subLocalId);
        var progPercentage = 0;

        if (progress && subLocalId) {

            if(progress.formJSON){
                progPercentage = 15;   
            }

            if (progress.totalSize && progress.totalSize > 0) {
                if (progress.uploaded > 0) {
                    progPercentage += ((progress.uploaded / progress.totalSize) * 85);
                }
            }
        }

        if (subLocalId && typeof subLocalId === 'string') {
            var eleToUpdate = $('#progress-' + subLocalId);
            console.log("ELE ", eleToUpdate);
            if (eleToUpdate && eleToUpdate.length > 0) {
                eleToUpdate = $(eleToUpdate[0]);
                if(progPercentage === 100){
                    eleToUpdate.addClass('progress-bar-success');
                }
                eleToUpdate.css("width", progPercentage + "%");
                eleToUpdate.html('<span class="sr-only">' + progPercentage + '% Complete</span>');
            }
        }
    },

    hide: function() {
        $(this.$el).hide();
    },
    show: function() {
        App.views.header.markActive('header_queued', "Uploading");
        $(this.$el).show();
    },

    changed: function() {
        var self = this;

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html(), {}));

        var empty = App.collections.pending_submitting.models.length === 0;


        self.renderGroup(App.collections.pending_submitting);
    },
    appendFunction: function(form, formId) {
        this.appendItemView(form, formId, PendingSubmittingItemView);
    }
});
ReviewListView = SubmissionListview.extend({
    el: $('#fh_content_review'),

    events: {
    },

    templates: {
    },

    initialize: function() {
        _.bindAll(this, 'render', 'changed');

        this.listenTo(App.collections.pending_review, 'change add remove reset sync', this.changed);

        this.render();
    },
    render: function(){

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())());
    },

    scrollToTop: function() {
        window.scrollTo(0, 0);
    },

    hide: function() {
        $(this.$el).hide();
    },

    show: function() {
        App.views.header.markActive('header_review', "Review");
        $(this.$el).show();
    },

    changed: function() {
        var self = this;

        // Empty our existing view
        $(this.$el).empty();

        //Append Logo
        $(this.$el).append(_.template($('#forms-logo').html())( {}));

        var empty = App.collections.pending_review.models.length === 0;

        self.renderGroup(App.collections.pending_review);
    },
    appendFunction: function(form, formId) {
        this.appendItemView(form, formId, PendingReviewItemView);
    }
});
HeaderView = Backbone.View.extend({
    el: '#fh_appform_header',

    events: {},

    initialize: function() {
        var self = this;
        this.undelegateEvents();
        _.bindAll(this, 'render', 'advise', 'adviseAll', 'showHome', 'showDrafts', 'showPending', 'updateCounts');
        this.initialising = false;

        this.listenTo(App.collections.drafts, 'add remove reset', this.updateCounts);
        this.listenTo(App.collections.pending_submitting, 'add remove reset', this.updateCounts);
        this.listenTo(App.collections.pending_review, 'add remove reset', this.updateCounts);
        this.listenTo(App.collections.pending_waiting, 'add remove reset', this.updateCounts);
        this.listenTo(App.collections.sent, 'add remove reset', this.updateCounts);  
        
        this.adviseAll();
        this.render();
    },

    render: function() {
        var self = this;
        $(this.$el).empty();

        var header = $(_.template($('#header-list').html(), {})());

        $(this.$el).append(header);

        $('.header_drafts').click(function(e) {
            self.showDrafts();
        });

        $('.header_forms').click(function(e) {
            self.showHome();
        });

        $('.header_pending').click(function(e) {
            self.showPending();
        });

        $('.header_queued').click(function(e) {
            self.showQueued();
        });

        $('.header_review').click(function(e) {
            self.showReview();
        });

        $('.header_sent').click(function(e) {
            self.showSent();
        });

        $('.header_settings').click(function(e) {
            self.showSettings();
        });

        $('#fh_appform_header_toggle_button').click(function(e) {
            $('.row-offcanvas').toggleClass('active');
            $('#fh_appform_header').toggleClass('active');
        });

        $(document).click(function(e) {
            if (!$(e.target).hasClass('navbar-toggle') && !$(e.target).hasClass('icon-bar')) {
                self.hideMenu();
            }
        });

        $(this.$el).show();
    },
    adviseAll: function() {
        this.showHome = this.advise(this.showHome);
        this.showDrafts = this.advise(this.showDrafts);
        this.showPending = this.advise(this.showPending);
        this.showQueued = this.advise(this.showQueued);
        this.showReview = this.advise(this.showReview);
        this.showSent = this.advise(this.showSent);
        this.showSettings = this.advise(this.showSettings);
    },
    advise: function(func) {
        var self = this;
        return function() {
            var skip = false;
            var args = arguments;
            if (args.length && args[0] === true) {
                skip = true;
            }
            var proceed = function(clear) {
                try {
                    return func.call(self, args);
                } finally {
                    if (clear && App.views.form) {
                        App.views.form = null;
                    }
                }
            };
            if (skip || App.views.form == null || App.views.form.readonly) {
                return proceed();
            } else {

                if (App.views.form.isFormEdited()) {
                    var confirmDelete = confirm('It looks like you have unsaved data -- if you leave before submitting your changes will be lost. Continue?');
                    if (confirmDelete) {
                        return proceed(true);
                    } else {
                        return false;
                    }
                } else {
                    proceed(true);
                }
            }
        };
    },

    hideMenu: function() {
        console.log("hideMenu");
        $('.row-offcanvas').removeClass('active');
        $('#fh_appform_header').removeClass('active');
        this.updateCounts();
    },

    showHome: function(e) {
        console.log("showHome");
        this.hideMenu();

        this.hideAll();
        App.views.form_list.show();
        return false;
    },

    showDrafts: function(e) {
        this.hideMenu();
        this.hideAll();
        App.views.drafts_list.show();
        return false;
    },

    showPending: function(e) {
        this.hideMenu();
        this.hideAll();
        App.views.pending_list.show();
        return false;
    },

    showQueued: function(e) {
        this.hideMenu();
        this.hideAll();
        App.views.queued_list.show();
        return false;
    },

    showReview: function(e) {
        this.hideMenu();
        this.hideAll();
        App.views.review_list.show();
        return false;
    },

    showSent: function(e) {
        this.hideMenu();
        this.hideAll();
        App.views.sent_list.show();
        return false;
    },

    showSettings: function(e) {
        this.hideMenu();
        this.hideAll();
        App.views.settings.show();
        return false;
    },
    hideAll: function() {
        App.views.form_list.hide();
        App.views.drafts_list.hide();
        App.views.pending_list.hide();
        App.views.queued_list.hide();
        App.views.review_list.hide();
        App.views.sent_list.hide();
        App.views.settings.hide();
        $('#fh_appform_content').hide();
        if (_.isObject(App.views.form)) {
            App.views.form.$el.empty();
            App.views.form = null;
        }
    },

    markActive: function(tab_class, headerText) {
        var self = this;
        tab_class = tab_class ? tab_class : "";
        tab_class = "." + tab_class;
        $('.nav.navbar-nav li').removeClass('active');
        $(tab_class).addClass('active');

        var appName = "App Forms";

        if ($fh.app_props.apptitle) {
            appName = $fh.app_props.apptitle;
        }

        if (headerText) {
            $('.navbar-header .navbar-brand').html("<div class='fh_appform_header_name'>" + appName + "</div><div class='fh_appform_header_section'> " + headerText + "</div>");
        }
    },

    updateCounts: function() {

        var forms_count = App.collections.forms.length;
        if (forms_count > 0) {
            $('#header_forms .badge').text(forms_count).show();
        } else {
            $('#header_forms .badge').hide();
        }

        var drafts_count = App.collections.drafts.length;
        if (drafts_count > 0) {
            $('#header_drafts .badge').text(drafts_count).show();
        } else {
            $('#header_drafts .badge').hide();
        }

        var pending_waiting_count = App.collections.pending_waiting.length;

        if (pending_waiting_count > 0) {
            $('#header_pending .badge').text(pending_waiting_count).show();
        } else {
            $('#header_pending .badge').hide();
        }

        var pending_queued_count = App.collections.pending_submitting.length;

        if (pending_queued_count > 0) {
            $('#header_queued .badge').text(pending_queued_count).show();
        } else {
            $('#header_queued .badge').hide();
        }

        var pending_review_count = App.collections.pending_review.length;

        if (pending_review_count > 0) {
            $('#header_review .badge').text(pending_review_count).show();
        } else {
            $('#header_review .badge').hide();
        }

        var sent_count = App.collections.sent.length;
        if (sent_count > 0) {
            $('#header_sent .badge').text(sent_count).show();
        } else {
            $('#header_sent .badge').hide();
        }

        console.log("Update Counts: ", forms_count, drafts_count, pending_waiting_count, pending_queued_count, pending_review_count, sent_count);
    }
});
AlertView = Backbone.View.extend({
    el: $("#fh_appform_alerts_area"),
    alertClasses: {
        error: 'alert-danger',
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning'
    },

    initialize: function() {},

    render: function(opts) {
        var self = this;

        opts.type = opts.type || "info";

        var alertHtml = _.template($('#alert-entry').html())( {
            alertClass: self.alertClasses[opts.type] || self.alertClasses['info'],
            alertMessage: opts.message
        });

        alertHtml = $(alertHtml);

        this.$el.append(alertHtml);

        if (typeof(opts.timeout) === "number") {
            setTimeout(function() {
                alertHtml.animate({
                    height: 0,
                    opacity: 0
                }, 'slow', function() {
                    alertHtml.remove();
                });
            }, opts.timeout);
        }

        return this;
    }
});
var alertView = new AlertView();

AlertView.showAlert = function(message, type, timeout) {
    alertView.render({
        message: message,
        type: type,
        timeout: timeout
    });
};
App.Router = Backbone.Router.extend({
    routes: {
        "form_list": "form_list",
        "*path": "form_list" // Default route
    },

    initialize: function() {
        _.bindAll(this, "form_list", "onReady", "onResume", "onConfigLoaded", "reload", "fetchCollections", "onPropsRead");
    },

    form_list: function() {
        var self = this;
        var initRetryLimit = 20;
        var initRetryAttempts = 0;
        self.loadingView = new LoadingCollectionView();
        self.deviceReady = false;
        self.initReady = false;

        function startForms() {
            self.loadingView.show("Initialising Forms", 10);
            $fh.forms.init({}, function() {
                self.loadingView.show("Fetching Theme", 15);
                $fh.forms.getTheme({
                    "fromRemote": true,
                    "css": true
                }, function(err, themeCSS) {
                    if (err) console.error(err);
                    App.views.form_list = new FormListView();
                    App.views.drafts_list = new DraftListView();
                    App.views.pending_list = new PendingListView();
                    App.views.queued_list = new QueuedListView();
                    App.views.review_list = new ReviewListView();
                    App.views.sent_list = new SentListView();
                    App.views.settings = new SettingsView();
                    App.views.header = new HeaderView();

                    if ($('#fh_appform_style').length > 0) {
                        $('#fh_appform_style').html(themeCSS);
                    } else {
                        $('head').append('<style id="fh_appform_style">' + themeCSS + '</style>');
                    }

                    $fh.forms.config.mbaasOnline(function() {
                        $fh.forms.log.d("Device online");
                        AlertView.showAlert("Working Online", "info", 1000);
                    });

                    $fh.forms.config.mbaasOffline(function() {
                        $fh.forms.log.d("Device offline");
                        AlertView.showAlert("Working Offline", "error", 1000);
                    });

                    self.onReady();
                });
            });
        }

        
        $("#includedContent").load("templates/templates.html");

        self.loadingView.show("App Starting", 10);
        if (window.PhoneGap || window.cordova) {
            document.addEventListener("deviceready", function() {
                self.deviceReady = true;
            }, false);
            document.addEventListener("backbutton", function() {
                $fh.forms.log.d("Back Button Clicked");
                if (App.views.form && typeof(App.views.form.backEvent) === 'function') {
                    if (App.views.form.backEvent() === false) { //Clicked back while on the first page. Should go home
                        App.views.header.showHome();
                    }
                } else {
                    App.views.header.showHome();
                }
            }, false);
        } else {
            self.deviceReady = true;
        }
        $fh.on('fhinit', function(err, cloudProps) {
            console.log("fhinit called");
            if (err) {
                console.error("Error on fhinit", err);
            }

            self.initReady = true;
        });
        var deviceReadyInterval = setInterval(function() {
            if (self.deviceReady === true && self.initReady === true) {
                startForms();
                clearInterval(deviceReadyInterval);
            } else {
                if (initRetryAttempts > initRetryLimit) {
                    console.error("Forms Not Ready Yet. Retry Attempts Exceeded");

                    if (self.deviceReady === true) {
                        console.error("Forms Not Ready Yet. Device Ready. Starting in offline mode.");
                        startForms();
                        clearInterval(deviceReadyInterval);
                    } else {
                        console.error("Forms Device Not Ready. Trying again.");
                        initRetryAttempts = 0;
                    }
                } else {
                    initRetryAttempts += 1;
                }
            }
        }, 500);
    },
    onReady: function() {
        this.loadingView.show("App Ready, Loading Form List", 20);

        $fh.env(this.onPropsRead);

        // by default, allow fetching on resume event.
        // Can be set to false when taking a pic so refetch doesn't happen on resume from that
        App.resumeFetchAllowed = true;
        document.addEventListener("resume", this.onResume, false);
        var banner = false;
        $('#fh_appform_banner .list li').each(function(i, e) {
            banner = true;
        });
        this.onConfigLoaded();
    },

    // run App.router.onResume() to test this in browser
    onResume: function() {
        // only trigger resync of forms if NOT resuming after taking a photo
        if (App.resumeFetchAllowed) {
            App.collections.forms.fetch();
        } else {
            // reset flag to true for next time
            App.resumeFetchAllowed = true;
        }
    },
    onConfigLoaded: function() {
        this.fetchCollections("Config Loaded, Fetching Forms", 30);
    },

    reload: function() {
        App.collections.forms.reset();
        this.fetchCollections("Reloading Forms", 10);
    },

    fetchCollections: function(msg, progress) {
        this.loadingView.show(msg, progress);
        App.collections.forms.fetch();

        refreshSubmissionCollections();
    },
    onPropsRead: function(props) {
        this.props = props;
    }
});

App.router = new App.Router();
Backbone.history.start();
