!function(t){function n(n){for(var r,a,s=n[0],l=n[1],u=n[2],c=0,h=[];c<s.length;c++)a=s[c],i[a]&&h.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(d&&d(n);h.length;)h.shift()();return o.push.apply(o,u||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,s=1;s<e.length;s++){var l=e[s];0!==i[l]&&(r=!1)}r&&(o.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},i={3:0},o=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var d=l;o.push([28,0]),e()}({1:function(t,n){t.exports="img/Arthroflex_mockup_gauss_970.png"},11:function(t,n,e){var r,i;
/*! odometer 0.4.6 */
(function(){var o,a,s,l,u,d,c,h,p,m,f,v,g,y,w,b,M,z,k,x,_,L,S=[].slice;a=/^\(?([^)]*)\)?(?:(.)(d+))?$/,o=2e3,s=2,l=1e3/30,w=document.createElement("div").style,c=null!=w.transition||null!=w.webkitTransition||null!=w.mozTransition||null!=w.oTransition,g=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,u=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,p=function(t){var n;return(n=document.createElement("div")).innerHTML=t,n.children[0]},v=function(t,n){return t.className=t.className.replace(new RegExp("(^| )"+n.split(" ").join("|")+"( |$)","gi")," ")},h=function(t,n){return v(t,n),t.className+=" "+n},b=function(t,n){var e;return null!=document.createEvent?((e=document.createEvent("HTMLEvents")).initEvent(n,!0,!0),t.dispatchEvent(e)):void 0},f=function(){var t,n;return null!=(t=null!=(n=window.performance)&&"function"==typeof n.now?n.now():void 0)?t:+new Date},y=function(t,n){return null==n&&(n=0),n?(t*=Math.pow(10,n),t+=.5,t=Math.floor(t),t/=Math.pow(10,n)):Math.round(t)},M=function(t){return 0>t?Math.ceil(t):Math.floor(t)},m=function(t){return t-y(t)},k=!1,(z=function(){var t,n,e,r,i;if(!k&&null!=window.jQuery){for(k=!0,i=[],n=0,e=(r=["html","text"]).length;e>n;n++)t=r[n],i.push(function(t){var n;return n=window.jQuery.fn[t],window.jQuery.fn[t]=function(t){var e;return null==t||null==(null!=(e=this[0])?e.odometer:void 0)?n.apply(this,arguments):this[0].odometer.update(t)}}(t));return i}})(),setTimeout(z,0),(d=function(){function t(n){var e,r,i,a,u,d,c,h,p,m=this;if(this.options=n,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;for(e in this.el.odometer=this,c=t.options)i=c[e],null==this.options[e]&&(this.options[e]=i);null==(a=this.options).duration&&(a.duration=o),this.MAX_VALUES=this.options.duration/l/s|0,this.resetFormat(),this.value=this.cleanValue(null!=(h=this.options.value)?h:""),this.renderInside(),this.render();try{for(u=0,d=(p=["innerHTML","innerText","textContent"]).length;d>u;u++)r=p[u],null!=this.el[r]&&function(t){Object.defineProperty(m.el,t,{get:function(){var n;return"innerHTML"===t?m.inside.outerHTML:null!=(n=m.inside.innerText)?n:m.inside.textContent},set:function(t){return m.update(t)}})}(r)}catch(t){t,this.watchForMutations()}}return t.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},t.prototype.watchForMutations=function(){var t=this;if(null!=u)try{return null==this.observer&&(this.observer=new u(function(){var n;return n=t.el.innerText,t.renderInside(),t.render(t.value),t.update(n)})),this.watchMutations=!0,this.startWatchingMutations()}catch(t){t}},t.prototype.startWatchingMutations=function(){return this.watchMutations?this.observer.observe(this.el,{childList:!0}):void 0},t.prototype.stopWatchingMutations=function(){var t;return null!=(t=this.observer)?t.disconnect():void 0},t.prototype.cleanValue=function(t){var n;return"string"==typeof t&&(t=(t=(t=t.replace(null!=(n=this.format.radix)?n:".","<radix>")).replace(/[.,]/g,"")).replace("<radix>","."),t=parseFloat(t,10)||0),y(t,this.format.precision)},t.prototype.bindTransitionEnd=function(){var t,n,e,r,i,o,a=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,n=!1,o=[],e=0,r=(i="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd".split(" ")).length;r>e;e++)t=i[e],o.push(this.el.addEventListener(t,function(){return!!n||(n=!0,setTimeout(function(){return a.render(),n=!1,b(a.el,"odometerdone")},0),!0)},!1));return o}},t.prototype.resetFormat=function(){var t,n,e,r,i,o,s,l;if((t=null!=(s=this.options.format)?s:"(,ddd).dd")||(t="d"),!(e=a.exec(t)))throw new Error("Odometer: Unparsable digit format");return o=(l=e.slice(1,4))[0],i=l[1],r=(null!=(n=l[2])?n.length:void 0)||0,this.format={repeating:o,radix:i,precision:r}},t.prototype.render=function(t){var n,e,r,i,o,a,s,l,u,d,h,p;for(null==t&&(t=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",a=this.options.theme,o=[],l=0,d=(n=this.el.className.split(" ")).length;d>l;l++)(e=n[l]).length&&((i=/^odometer-theme-(.+)$/.exec(e))?a=i[1]:/^odometer(-|$)/.test(e)||o.push(e));for(o.push("odometer"),c||o.push("odometer-no-transitions"),o.push(a?"odometer-theme-"+a:"odometer-auto-theme"),this.el.className=o.join(" "),this.ribbons={},this.digits=[],s=!this.format.precision||!m(t)||!1,u=0,h=(p=t.toString().split("").reverse()).length;h>u;u++)"."===(r=p[u])&&(s=!0),this.addDigit(r,s);return this.startWatchingMutations()},t.prototype.update=function(t){var n,e=this;return(n=(t=this.cleanValue(t))-this.value)?(v(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),h(this.el,n>0?"odometer-animating-up":"odometer-animating-down"),this.stopWatchingMutations(),this.animate(t),this.startWatchingMutations(),setTimeout(function(){return e.el.offsetHeight,h(e.el,"odometer-animating")},0),this.value=t):void 0},t.prototype.renderDigit=function(){return p('<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner"><span class="odometer-ribbon"><span class="odometer-ribbon-inner"><span class="odometer-value"></span></span></span></span></span>')},t.prototype.insertDigit=function(t,n){return null!=n?this.inside.insertBefore(t,n):this.inside.children.length?this.inside.insertBefore(t,this.inside.children[0]):this.inside.appendChild(t)},t.prototype.addSpacer=function(t,n,e){var r;return(r=p('<span class="odometer-formatting-mark"></span>')).innerHTML=t,e&&h(r,e),this.insertDigit(r,n)},t.prototype.addDigit=function(t,n){var e,r,i,o;if(null==n&&(n=!0),"-"===t)return this.addSpacer(t,null,"odometer-negation-mark");if("."===t)return this.addSpacer(null!=(o=this.format.radix)?o:".",null,"odometer-radix-mark");if(n)for(i=!1;;){if(!this.format.repeating.length){if(i)throw new Error("Bad odometer format without digits");this.resetFormat(),i=!0}if(e=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===e)break;this.addSpacer(e)}return(r=this.renderDigit()).querySelector(".odometer-value").innerHTML=t,this.digits.push(r),this.insertDigit(r)},t.prototype.animate=function(t){return c&&"count"!==this.options.animation?this.animateSlide(t):this.animateCount(t)},t.prototype.animateCount=function(t){var n,e,r,i,o,a=this;if(e=+t-this.value)return i=r=f(),n=this.value,(o=function(){var s,l;return f()-i>a.options.duration?(a.value=t,a.render(),void b(a.el,"odometerdone")):((s=f()-r)>50&&(r=f(),l=s/a.options.duration,n+=e*l,a.render(Math.round(n))),null!=g?g(o):setTimeout(o,50))})()},t.prototype.getDigitCount=function(){var t,n,e,r,i,o;for(t=i=0,o=(r=1<=arguments.length?S.call(arguments,0):[]).length;o>i;t=++i)e=r[t],r[t]=Math.abs(e);return n=Math.max.apply(Math,r),Math.ceil(Math.log(n+1)/Math.log(10))},t.prototype.getFractionalDigitCount=function(){var t,n,e,r,i,o,a;for(n=/^\-?\d*\.(\d*?)0*$/,t=o=0,a=(i=1<=arguments.length?S.call(arguments,0):[]).length;a>o;t=++o)r=i[t],i[t]=r.toString(),e=n.exec(i[t]),i[t]=null==e?0:e[1].length;return Math.max.apply(Math,i)},t.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},t.prototype.animateSlide=function(t){var n,e,r,i,o,a,s,l,u,d,c,p,m,f,v,g,y,w,b,z,k,x,_,L,S,T,E;if(g=this.value,(l=this.getFractionalDigitCount(g,t))&&(t*=Math.pow(10,l),g*=Math.pow(10,l)),r=t-g){for(this.bindTransitionEnd(),i=this.getDigitCount(g,t),o=[],n=0,c=b=0;i>=0?i>b:b>i;c=i>=0?++b:--b){if(y=M(g/Math.pow(10,i-c-1)),a=(s=M(t/Math.pow(10,i-c-1)))-y,Math.abs(a)>this.MAX_VALUES){for(d=[],p=a/(this.MAX_VALUES+this.MAX_VALUES*n*.5),e=y;a>0&&s>e||0>a&&e>s;)d.push(Math.round(e)),e+=p;d[d.length-1]!==s&&d.push(s),n++}else d=function(){E=[];for(var t=y;s>=y?s>=t:t>=s;s>=y?t++:t--)E.push(t);return E}.apply(this);for(c=z=0,x=d.length;x>z;c=++z)u=d[c],d[c]=Math.abs(u%10);o.push(d)}for(this.resetDigits(),c=k=0,_=(T=o.reverse()).length;_>k;c=++k)for(d=T[c],this.digits[c]||this.addDigit(" ",c>=l),null==(w=this.ribbons)[c]&&(w[c]=this.digits[c].querySelector(".odometer-ribbon-inner")),this.ribbons[c].innerHTML="",0>r&&(d=d.reverse()),m=S=0,L=d.length;L>S;m=++S)u=d[m],(v=document.createElement("div")).className="odometer-value",v.innerHTML=u,this.ribbons[c].appendChild(v),m===d.length-1&&h(v,"odometer-last-value"),0===m&&h(v,"odometer-first-value");return 0>y&&this.addDigit("-"),null!=(f=this.inside.querySelector(".odometer-radix-mark"))&&f.parent.removeChild(f),l?this.addSpacer(this.format.radix,this.digits[l-1],"odometer-radix-mark"):void 0}},t}()).options=null!=(_=window.odometerOptions)?_:{},setTimeout(function(){var t,n,e,r,i;if(window.odometerOptions){for(t in i=[],r=window.odometerOptions)n=r[t],i.push(null!=(e=d.options)[t]?(e=d.options)[t]:e[t]=n);return i}},0),d.init=function(){var t,n,e,r,i,o;if(null!=document.querySelectorAll){for(o=[],e=0,r=(n=document.querySelectorAll(d.options.selector||".odometer")).length;r>e;e++)t=n[e],o.push(t.odometer=new d({el:t,value:null!=(i=t.innerText)?i:t.textContent}));return o}},null!=(null!=(L=document.documentElement)?L.doScroll:void 0)&&null!=document.createEventObject?(x=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&!1!==d.options.auto&&d.init(),null!=x?x.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){return!1!==d.options.auto?d.init():void 0},!1),r=[e(0)],void 0===(i=function(){return d}.apply(n,r))||(t.exports=i)}).call(this)},28:function(t,n,e){"use strict";e.r(n);e(7),e(3);var r=e(0);e(5);e(11);var i=document.getElementById("countdown2"),o=document.getElementById("countdown1"),a=20,s=window.setInterval(function(){a-=1,o.innerHTML=a.toString().charAt(0),i.innerHTML=a.toString().charAt(1),a<=9&&a>=3&&(o.innerHTML=0,i.innerHTML=a);a<=3&&clearInterval(s)},6e4);r(document).ready(function(){function t(t){return/^[a-zA-Z]+$/.test(t)}function n(t){return/^[a-zA-Z]+$/.test(t)}function e(t){return/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(t)}function i(t){return/^[a-zA-Z]*[\s/a-zA-Z]+[\s/0-9]+$/.test(t)}function o(t){return/^\d{5}$|^\d{2}-\d{3}$/.test(t)}function a(t){return/^[a-zA-Z]+$/.test(t)}r("#name").on("click keyup",function(){""===r("#name").val()?(r(".input-required_name").show(),r("#name_error").hide()):(r(".input-required_name").hide(),t(r("#name").val())?r("#name_error").hide():r("#name_error").show())}),r("#surname").on("click keyup",function(){""===r("#surname").val()?(r(".input-required_surname").show(),r("#surname_error").hide()):(r(".input-required_surname").hide(),n(r("#surname").val())?r("#surname_error").hide():r("#surname_error").show())}),r("#phone").on("click keyup",function(){""===r("#phone").val()?(r(".input-required_phone").show(),r("#phone_error").hide()):(r(".input-required_phone").hide(),e(r("#phone").val())?r("#phone_error").hide():r("#phone_error").show())}),r("#adress").on("click keyup",function(){""===r("#adress").val()?(r(".input-required_adress").show(),r("#adress_error").hide()):(r(".input-required_adress").hide(),i(r("#adress").val())?r("#adress_error").hide():(r(".input-required_adress").hide(),r("#adress_error").show()))}),r("#postal").on("click keyup",function(){""===r("#postal").val()?(r(".input-required_postal").show(),r("#postal_error").hide()):(r(".input-required_postal").hide(),o(r("#postal").val())?r("#postal_error").hide():(r(".input-required_postal").hide(),r("#postal_error").show()))}),r("#city").on("click keyup",function(){""===r("#city").val()?(r(".input-required_city").show(),r("#city_error").hide()):(r(".input-required_city").hide(),a(r("#city").val())?r("#city_error").hide():(r(".input-required_city").hide(),r("#city_error").show()))}),r("#email").on("keyup",function(){var t;t=r("#email").val(),/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?r("#email_error").hide():r("#email_error").show()}),r("#form_btn").on("click",function(){t(r("#name").val())&&n(r("#surname").val())&&e(r("#phone").val())&&(r("#form_button1").hide(),r(".hiden_form").slideDown(1500));var i={name:r("#name").val(),surname:r("#surname").val(),phone:r("#phone").val()};""!=r("#phone").val()&&""!=r("#name").val()&&""!=r("#surname").val()&&e(r("#phone").val())&&t(r("#name").val())&&n(r("#surname").val())?r.ajax({url:"send1.php",type:"post",data:JSON.stringify(i),success:function(t){t&&r(".alertbox").html("Dziękujemy za wiadomość.").addClass("ok").show()},error:function(t,n,e){console.log(n,e)}}):r(".alertbox").show()}),r("#form_btn2").on("click",function(){o(r("#postal").val())&&a(r("#city").val())&&i(r("#adress").val());var t={adress:r("#adress").val(),postal:r("#postal").val(),city:r("#city").val(),message:r("#message").val(),email:r("#email").val()};""!=r("#adress").val()&&""!=r("#postal").val()&&""!=r("#city").val()&&o(r("#postal").val())?r.ajax({url:"send2.php",type:"post",data:JSON.stringify(t),success:function(t){t&&r(".alertbox").html("Dziękujemy za wiadomość.").addClass("ok").show()},error:function(t,n,e){console.log(n,e)}}):r(".alertbox").show()});var s=document.getElementById("phone"),l=document.getElementById("name"),u=document.getElementById("surname"),d=[],c=[],h=[],p={};s.addEventListener("blur",function(){var t=this.value;if(t.length>=0){d.push(t);var n=d[d.length-1];p.phone=n}}),l.addEventListener("blur",function(){var t=this.value;if(t.length>=0){c.push(t);var n=c[c.length-1];p.name=n}}),u.addEventListener("blur",function(){var t=this.value;if(t.length>=0){h.push(t);var n=h[h.length-1];p.surname=n}});var m=function(){var t={user:p};r.ajax({url:"send3.php",type:"post",data:JSON.stringify(t),success:function(t){t&&console.log("ok")},error:function(t,n,e){console.log(n,e)}})};r(s).on("blur",function(t){t.preventDefault(),m()}),r(l).on("blur",function(t){t.preventDefault(),m()}),r(u).on("blur",function(t){t.preventDefault(),m()})})},5:function(t){t.exports=[{name:"Krzysztof",from:"Warszawa"},{name:"Krystyna",from:"Ełk"},{name:"Janina",from:"Gdańsk"},{name:"Joanna",from:"Starachowic"},{name:"Marianna",from:"Szczecin"},{name:"Magdalena",from:"Toruń"},{name:"Halina",from:"Piła"},{name:"Małgorzata",from:"Lubno"},{name:"Marzena",from:"Tarnów"},{name:"Ewelina",from:"Biały Bór"},{name:"Apolonia",from:"Kluszkowce"},{name:"Balbina",from:"Poronin"},{name:"Beata",from:"Kwidzyn"},{name:"Dagmara",from:"Płock"},{name:"Faustyna",from:"Pruszcz Gdański"},{name:"Eliza",from:"Chmielno"},{name:"Gabriela",from:"Czarny Młyn"},{name:"Hanna",from:"Lubań"},{name:"Ilona",from:"Malbork"},{name:"Irena",from:"Wisła"},{name:"Jadwiga",from:"Giżycko"},{name:"Jolanta",from:"Międzychód"},{name:"Klementyna",from:"Zblewo"},{name:"Laura",from:"Zakopane"},{name:"Marcelina",from:"Międzywodzie"},{name:"Mirosława",from:"Warszawa"},{name:"Nadia",from:"Warszawa"},{name:"Oliwia",from:"Łódź"}]},7:function(t,n,e){t.exports='<!DOCTYPE html>\r\n<html lang="pl">\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\r\n    <title>Dziękujemy za złożenie zamówienia</title>\r\n    <link\r\n      rel="stylesheet"\r\n      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"\r\n      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"\r\n      crossorigin="anonymous"\r\n    />\r\n    <link\r\n      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=latin-ext"\r\n      rel="stylesheet"\r\n    />\r\n    <link\r\n      rel="stylesheet"\r\n      href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"\r\n      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"\r\n      crossorigin="anonymous"\r\n    />\r\n    <link rel="stylesheet" href="./css/style.css" />\r\n    <link rel="stylesheet" href="./css/special_offer.css" />\r\n  </head>\r\n\r\n  <body class="thanks-bg">\r\n    <div class="container p-5 mt-5">\r\n      <div class="row pt-5 font-weight-bold">\r\n        <div class="col-12 col-lg-9">\r\n          <h1>Drogi Kliencie,</h1>\r\n          <br />\r\n          <p>\r\n            Dziękuję że wybrałeś nasz produkt. Jednocześnie miło mi powitać Cię\r\n            w gronie osób stosujących BioSlices. Już wkrótce osiągniesz\r\n            uprgnione rezultaty szybciej i łatwiej, niż się spodziewasz.\r\n          </p>\r\n          <p>\r\n            Jestem przekonany, że zakup BioSlices przyniesie Ci dużo\r\n            satysfakcji.\r\n          </p>\r\n        </div>\r\n        <div class="col-12 col-lg-3">\r\n          <svg\r\n            class="mt-5"\r\n            version="1.1"\r\n            id="Layer_1"\r\n            xmlns="http://www.w3.org/2000/svg"\r\n            xmlns:xlink="http://www.w3.org/1999/xlink"\r\n            x="0px"\r\n            y="0px"\r\n            viewBox="0 0 1400 621.6"\r\n            style="enable-background:new 0 0 1400 621.6;"\r\n            xml:space="preserve"\r\n          >\r\n            <style type="text/css">\r\n              .st0 {\r\n                fill: #231f20;\r\n              }\r\n\r\n              .st1 {\r\n                fill: #ffffff;\r\n                stroke: #ffffff;\r\n                stroke-miterlimit: 10;\r\n              }\r\n\r\n              .st2 {\r\n                fill: #ffffff;\r\n                stroke: #000000;\r\n                stroke-miterlimit: 10;\r\n              }\r\n            </style>\r\n            <title>Dostawa</title>\r\n            <g id="Layer_2">\r\n              <g id="Ñëîé_1">\r\n                <path\r\n                  class="st0"\r\n                  d="M992.7,0H397.5c-19.4-0.1-35.2,15.6-35.3,35v426.7c0.1,19.4,15.9,35.1,35.3,35h142.8\r\n\t\t\tc-11.6,56.2,24.6,111.2,80.8,122.8c56.2,11.6,111.2-24.6,122.8-80.8c2.9-13.8,2.9-28.1,0-42h248.8c19.4,0.1,35.2-15.6,35.3-35V35\r\n\t\t\tC1027.9,15.6,1012.1-0.1,992.7,0z M642.1,594.1c-42.2,0-76.5-34.3-76.5-76.5s34.3-76.5,76.5-76.5s76.5,34.3,76.5,76.5\r\n\t\t\tC718.6,559.8,684.3,594.1,642.1,594.1z M1000.5,461.6c-0.1,4.2-3.6,7.6-7.8,7.5H734c-26.7-50.8-89.6-70.3-140.4-43.5\r\n\t\t\tc-18.6,9.8-33.7,24.9-43.5,43.5H397.5c-4.2,0.1-7.7-3.3-7.8-7.5V35c0.1-4.2,3.6-7.6,7.8-7.5h595.2c4.2-0.1,7.7,3.3,7.8,7.5\r\n\t\t\tL1000.5,461.6z"\r\n                />\r\n                <path\r\n                  class="st0"\r\n                  d="M1341.6,204.9c-27.9-45.3-56.2-89.8-56.5-90.2l-4-6.4h-203.8c-20,0-36.3,15.1-36.3,33.5V463\r\n\t\t\tc0,13.5,8.7,25.2,21.3,30.5c-13.2,55.9,21.3,111.9,77.2,125.1c55.9,13.2,111.9-21.3,125.1-77.2c3.5-14.7,3.7-30.1,0.7-44.9h98.5\r\n\t\t\tc20,0,36.3-15,36.3-33.5V310.4C1400,304.8,1400,299.6,1341.6,204.9z M1163.4,594.1c-42.2,0-76.5-34.3-76.5-76.5\r\n\t\t\ts34.3-76.5,76.5-76.5s76.5,34.3,76.5,76.5C1239.8,559.8,1205.6,594.1,1163.4,594.1z M1372.6,463c0,2.9-3.6,6.1-8.8,6.1h-108.4\r\n\t\t\tc-26.7-50.8-89.6-70.3-140.4-43.5c-18.1,9.6-33.1,24.3-42.9,42.3c-2.3-1.2-3.7-3.1-3.7-4.9V141.8c0-2.9,3.6-6.1,8.8-6.1H1266\r\n\t\t\tc48.6,76.6,100.6,161.5,106.6,176.4L1372.6,463z"\r\n                />\r\n                <path\r\n                  class="st0"\r\n                  d="M1086.1,146.6v176.5l263.5-0.1l-102.1-176.4H1086.1z M1113.5,295.7V174.1h118.2l70.3,121.5L1113.5,295.7z"\r\n                />\r\n                <path\r\n                  class="st0"\r\n                  d="M642.1,457c-33.5,0-60.7,27.2-60.7,60.7s27.2,60.7,60.7,60.7s60.7-27.2,60.7-60.7v0\r\n\t\t\tC702.7,484.1,675.6,457,642.1,457z M642.1,550.8c-18.3,0-33.2-14.9-33.2-33.2s14.9-33.2,33.2-33.2c18.3,0,33.2,14.9,33.2,33.2\r\n\t\t\tC675.3,535.9,660.4,550.8,642.1,550.8L642.1,550.8z"\r\n                />\r\n                <path\r\n                  class="st0"\r\n                  d="M1163.4,457c-33.5,0-60.7,27.2-60.7,60.7c0,33.5,27.2,60.7,60.7,60.7s60.7-27.2,60.7-60.7\r\n\t\t\tC1224,484.1,1196.9,457,1163.4,457z M1163.4,550.8c-18.3,0-33.2-14.9-33.2-33.2c0-18.3,14.9-33.2,33.2-33.2\r\n\t\t\tc18.3,0,33.2,14.9,33.2,33.2l0,0C1196.6,535.9,1181.7,550.8,1163.4,550.8L1163.4,550.8z"\r\n                />\r\n                <path\r\n                  class="st0"\r\n                  d="M333.6,73.2H125.8c-7.6,0.2-13.6,6.5-13.4,14.1c0.2,7.3,6.1,13.2,13.4,13.4h207.8c7.6-0.2,13.6-6.5,13.4-14.1\r\n\t\t\tC346.8,79.3,340.9,73.4,333.6,73.2z"\r\n                />\r\n                <path\r\n                  class="st0"\r\n                  d="M272.5,161.2c0-7.6-6.1-13.7-13.7-13.7l0,0h-245c-7.6,0.2-13.6,6.5-13.4,14.1c0.2,7.3,6.1,13.2,13.4,13.4h245\r\n\t\t\tC266.3,174.9,272.5,168.7,272.5,161.2z"\r\n                />\r\n                <path\r\n                  class="st0"\r\n                  d="M317.7,220H111c-7.6,0.2-13.6,6.5-13.4,14.1c0.2,7.3,6.1,13.2,13.4,13.4h206.7c7.6-0.2,13.6-6.5,13.4-14.1\r\n\t\t\tC330.9,226.1,325,220.2,317.7,220z"\r\n                />\r\n              </g>\r\n            </g>\r\n            <g>\r\n              <path\r\n                class="st0"\r\n                d="M836.6,327.2H540.8c-6.6,0-12-5.4-12-12V147.9c0-6.6,5.4-12,12-12h295.8c6.6,0,12,5.4,12,12v167.3\r\n\t\tC848.6,321.8,843.2,327.2,836.6,327.2z"\r\n              />\r\n              <polygon\r\n                class="st1"\r\n                points="848.6,159.4 722.1,231.3 848.6,305.4 848.6,314.7 714,235.9 688,250.7 664.3,236.8 528.8,313.9 \r\n\t\t528.8,304.6 656.2,232.1 528.8,157.4 528.8,148.6 663.8,227.8 671.9,232.5 688,241.9 706.4,231.4 714.5,226.8 848.6,150.6 \t"\r\n              />\r\n            </g>\r\n            <line class="st2" x1="493.4" y1="130.2" x2="493.3" y2="130.2" />\r\n          </svg>\r\n        </div>\r\n      </div>\r\n      <div class="row">\r\n        <div class="col-12 position-relative">\r\n          <hr style="border-color: #000;" />\r\n          <div class="row">\r\n            <div class="col-lg-2">\r\n              <img\r\n                style="width: 140px;"\r\n                class="img-fluid d-block mx-auto"\r\n                src="'+e(1)+'"\r\n                alt=""\r\n              />\r\n            </div>\r\n            <div class="col-lg-10">\r\n              <table class="table summery-table">\r\n                <thead>\r\n                  <tr scope="row" class="font-weight-bold">\r\n                    <td scope="col">Szczegóły dotyczące zamówienia:</td>\r\n                    <td scope="col" class="text-center">Ilość:</td>\r\n                    <td scope="col" class="text-center">Cena:</td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr scope="row">\r\n                    <td>BioSlices</td>\r\n                    <td class="text-center">1</td>\r\n                    <td class="text-center">343 PLN</td>\r\n                  </tr>\r\n                  <tr scope="row">\r\n                    <td>Koszty operacyjne</td>\r\n                    <td class="text-center">1</td>\r\n                    <td class="text-center">18 PLN</td>\r\n                  </tr>\r\n                  <tr scope="row" class="font-weight-bold">\r\n                    <td>Całkowita wartość zamówienia:</td>\r\n                    <td></td>\r\n                    <td class="text-center">361 PLN</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <br /><br />\r\n          <p class="text-right">\r\n            PS. Dołożę wszelkich starań, aby przesyłka dotarła do Ciebie jak\r\n            najszybciej.\r\n          </p>\r\n          <div class="thanks">\r\n            <span>Pozdrawiam,</span>\r\n            <img\r\n              class="img-fluid col-6 text-right ml-auto"\r\n              src="'+e(8)+'"\r\n              alt="pozdrawiam"\r\n              style="width: 250px;"\r\n            />\r\n            <span>prof. Christian Maucher - Woźniak</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n'},8:function(t,n){t.exports="img/sign-2.png"}});