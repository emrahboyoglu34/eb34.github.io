!function(e){function t(t){for(var n,i,s=t[0],a=t[1],l=t[2],u=0,_=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&_.push(c[i][0]),c[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(d&&d(t);_.length;)_.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var a=r[s];0!==c[a]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={0:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=a;o.push([130,1]),r()}({130:function(e,t,r){r(131),e.exports=r(333)},333:function(e,t,r){"use strict";r(334),r(335)},334:function(e,t,r){},335:function(e,t,r){"use strict";var n,c=r(336),o=r(342),i=(n=o)&&n.__esModule?n:{default:n};c.Creators.init(),c.Cursor.init(),c.Animation.init(),c.Nav.init();new i.default(".cx-carousel__carousel",{breakpointsInverse:!0,spaceBetween:0,slidesPerView:3,centeredSlides:!0,loop:!0,breakpoints:{768:{slidesPerView:4},992:{slidesPerView:4},1200:{slidesPerView:6,centeredSlides:!0}}});var s=document.querySelectorAll(".cx-designs__cta");if(s.length){var a=document.getElementsByClassName("cx-modal");s.forEach((function(e){e.onclick=function(){a.style.display="block",document.body.style.overflowY="hidden";var t=e.getAttribute("data-video-path");a.querySelector(".cx-modal-content").innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+t+'" title="20 Yıldır Bir Kahveye Neler Sığdırdık?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe><span class="cx-modal-close">&times;</span>',document.querySelector(".cx-modal-close").addEventListener("click",(function(){a.style.display="none",document.body.style.overflowY="auto"})),window.addEventListener("click",(function(e){e.target==a&&(a.style.display="none",document.body.style.overflowY="auto")}))}}))}var l=document.querySelectorAll(".cx-designs__m-row-wrapper-cta");if(l.length){a=document.querySelector(".cx-modal");l.forEach((function(e){e.onclick=function(){a.style.display="block",document.body.style.overflowY="hidden";var t=e.getAttribute("data-video-path");a.querySelector(".cx-modal-content").innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+t+'" title="20 Yıldır Bir Kahveye Neler Sığdırdık?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe><span class="cx-modal-close">&times;</span>',document.querySelector(".cx-modal-close").addEventListener("click",(function(){a.style.display="none",document.body.style.overflowY="auto"})),window.addEventListener("click",(function(e){e.target==a&&(a.style.display="none",document.body.style.overflowY="auto")}))}}))}},336:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Nav=t.Animation=t.Cursor=t.Creators=void 0;var n=r(337),c=r(339),o=r(340),i=r(341);t.Creators=n.Creators,t.Cursor=c.Cursor,t.Animation=o.Animation,t.Nav=i.Nav},337:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Creators=void 0;r(338),t.Creators={init:function(){var e=document.querySelectorAll(".cx-creators__boxes .cx-creators__box");e.forEach((function(t){t.onclick=function(){if(window.innerWidth>1024){var r=t.getAttribute("data-popup-box"),n=document.querySelectorAll(".cx-creators__popups .cx-creators__popup");n.forEach((function(c){if(c.getAttribute("data-popup")==r){var o=c.classList.contains("cx-creators__popup--active");n.forEach((function(e){e.classList.remove("cx-creators__popup--active")})),e.forEach((function(e){e.classList.remove("cx-creators__box--active")})),o||(t.classList.add("cx-creators__box--active"),c.classList.add("cx-creators__popup--active"))}}))}else{var c=t.querySelector(".cx-creators__mobile-popup"),o=c.style.display;c.style.display="none"===o?"block":"none",t.classList.toggle("cx-creators__box--active")}}}))}}},338:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.DetectMobile=function(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some((function(e){return navigator.userAgent.match(e)}))}},339:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Cursor={init:function(){var e=document.querySelector(".cursor"),t=document.querySelector(".cx-carousel__inner");window.onpointermove=function(t){e.style.cssText="transform:translateX("+t.clientX+"px) translateY("+t.clientY+"px);"},t.addEventListener("mousemove",(function(t){e.style.transform="translate3d(calc("+t.clientX+"px - 50%), calc("+t.clientY+"px - 50%), 0)"})),t.onmouseenter=function(){!e.classList.contains("cursor--active")&&e.classList.add("cursor--active")},t.onmouseleave=function(){e.classList.contains("cursor--active")&&e.classList.remove("cursor--active")}}}},340:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Animation=void 0;var n=r(343);t.Animation={init:function(){n.gsap.registerPlugin(n.ScrollTrigger,n.ScrollToPlugin);var e=window.innerWidth;if(document.querySelector(".cx-20-years-old__top")&&n.ScrollTrigger.create({trigger:".cx-20-years-old__top",start:"top 80%",end:"center 80%",markers:!1,onUpdate:function(e){1==e.progress?(document.querySelector(".cx-20-years-old__pattern-left").classList.remove("cx-20-years-old__pattern-left--margin"),document.querySelector(".cx-20-years-old__pattern-right").classList.remove("cx-20-years-old__pattern-right--margin")):(document.querySelector(".cx-20-years-old__pattern-left").classList.add("cx-20-years-old__pattern-left--margin"),document.querySelector(".cx-20-years-old__pattern-right").classList.add("cx-20-years-old__pattern-right--margin"))}}),document.querySelector(".cx-creators__boxes")&&e>=1024&&n.ScrollTrigger.create({trigger:".cx-creators__boxes",start:"top 80%",end:"center 100%",markers:!1,onUpdate:function(e){1==e.progress?document.querySelectorAll(".cx-creators__box").forEach((function(e,t){0==t&&e.classList.remove("cx-creators__box--margin-left"),2==t&&e.classList.remove("cx-creators__box--margin-right")})):document.querySelectorAll(".cx-creators__box").forEach((function(e,t){0==t&&e.classList.add("cx-creators__box--margin-left"),2==t&&e.classList.add("cx-creators__box--margin-right")}))}}),document.querySelector(".cx-designs"))if(e>=1024){var t=document.querySelector(".cx-designs__left").clientHeight,r=document.querySelector(".cx-designs__images ").clientHeight,c=document.querySelector(".cx-designs__row--1").clientHeight,o=document.querySelector(".cx-designs__row--2").clientHeight,i=document.querySelector(".cx-designs__row--3").clientHeight,s=100*c/t,a=100*o/t,l=100*i/t;n.ScrollTrigger.create({trigger:".cx-designs__right",start:"center 50%",end:e>=1024?"+="+(t-r)+"px":"+=1200px",pin:!0,markers:!1,onUpdate:function(e){var t=parseInt(100*e.progress),r=(document.querySelector(".cx-designs__image:nth-child(1)"),document.querySelector(".cx-designs__image:nth-child(2)")),n=document.querySelector(".cx-designs__image:nth-child(3)");t<parseInt(s-3)&&(r.classList.add("cx-designs__image--height-0"),n.classList.add("cx-designs__image--height-0")),t>parseInt(s-3)&&r.classList.remove("cx-designs__image--height-0"),t<parseInt(a+l-3)&&n.classList.add("cx-designs__image--height-0"),t>parseInt(a+l-3)&&n.classList.remove("cx-designs__image--height-0")}}),n.ScrollTrigger.create({trigger:".cx-designs__progress",start:"center 50%",end:e>=1024?"+="+(t-r)+"px":"+=1200px",pin:!0,markers:!1,onUpdate:function(e){var t=parseInt(100*e.progress);document.querySelector(".cx-designs__progress-line").style.height=t+"%"}}),n.ScrollTrigger.create({trigger:".cx-designs__number",start:"center 27%",end:e>=1024?"+="+(t-r)+"px":"+=1200px",pin:!0,scrub:!0,markers:!1,onUpdate:function(e){var t=parseInt(100*e.progress);t>0?(document.querySelector(".cx-designs__number").classList.add("cx-designs__number--active"),document.querySelectorAll(".cx-designs__images .cx-designs__image").forEach((function(e){e.querySelector("video").play()}))):document.querySelector(".cx-designs__number").classList.remove("cx-designs__number--active"),t<parseInt(s-3)&&(document.querySelector(".cx-designs__number").innerHTML="1"),t>parseInt(s-3)&&(document.querySelector(".cx-designs__number").innerHTML="2"),t>parseInt(a+l-3)&&(document.querySelector(".cx-designs__number").innerHTML="3")}})}else{var d=document.querySelector(".cx-designs__m-row--1").clientHeight,u=document.querySelector(".cx-designs__m-row--2").clientHeight,_=document.querySelector(".cx-designs__m-row--3").clientHeight;n.ScrollTrigger.create({trigger:".cx-designs__m-row--1",start:"top 50px",end:"+="+d+"px",scrub:!0,markers:!1,onUpdate:function(e){parseInt(100*e.progress)>0?document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(1)").style.opacity=1:(document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(1)").style.opacity=0,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(2)").style.opacity=0,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(3)").style.opacity=0)}}),n.ScrollTrigger.create({trigger:".cx-designs__m-row--2",start:"top 50px",end:"+="+u+"px",scrub:!0,markers:!1,onUpdate:function(e){parseInt(100*e.progress)>0?(document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(1)").style.opacity=1,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(2)").style.opacity=1):(document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(2)").style.opacity=0,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(1)").style.opacity=0)}}),n.ScrollTrigger.create({trigger:".cx-designs__m-row--3",start:"top 50px",end:"+="+_+"px",scrub:!0,markers:!1,onUpdate:function(e){var t=parseInt(100*e.progress);t>0?(document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(3)").style.opacity=1,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(2)").style.opacity=1,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(1)").style.opacity=1):(document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(3)").style.opacity=0,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(2)").style.opacity=0,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(1)").style.opacity=0),100==t&&(document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(3)").style.opacity=0,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(2)").style.opacity=0,document.querySelector(".cx-designs__m-header .cx-designs__m-row-head:nth-child(1)").style.opacity=0)}})}if(document.querySelector(".cx-navigation__items")){var g=function(){document.querySelectorAll(".cx-navigation__item").forEach((function(e){e.querySelector(".cx-navigation__link").classList.remove("cx-navigation__link--active")}))};n.ScrollTrigger.create({trigger:".cx-creators",start:"top 0%",end:"bottom 0%",pin:!1,markers:!1,onUpdate:function(e){e.progress&&(g(),document.querySelector(".cx-navigation__item:nth-child(2) .cx-navigation__link").classList.add("cx-navigation__link--active"))}}),n.ScrollTrigger.create({trigger:".cx-designs",start:"top 0%",end:"bottom 0%",pin:!1,markers:!1,onUpdate:function(e){e.progress&&(g(),document.querySelector(".cx-navigation__item:nth-child(3) .cx-navigation__link").classList.add("cx-navigation__link--active"))}}),n.ScrollTrigger.create({trigger:".cx-what-have-we-done",start:"top 0%",end:"bottom 0%",pin:!1,markers:!1,onUpdate:function(e){e.progress&&(g(),document.querySelector(".cx-navigation__item:nth-child(4) .cx-navigation__link").classList.add("cx-navigation__link--active"))}}),n.ScrollTrigger.create({trigger:".cx-starbucks-turkey-20-years-old",start:"top 0%",end:"bottom 0%",pin:!1,markers:!1,onUpdate:function(e){e.progress&&(g(),document.querySelector(".cx-navigation__item:nth-child(5) .cx-navigation__link").classList.add("cx-navigation__link--active"))}}),n.ScrollTrigger.create({trigger:".cx-banner-and-content",start:"top 0%",end:"bottom 0%",pin:!1,markers:!1,onUpdate:function(e){e.progress&&(g(),document.querySelector(".cx-navigation__item:nth-child(1) .cx-navigation__link").classList.add("cx-navigation__link--active"))}})}}}},341:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Nav={init:function(){var e=document.querySelectorAll(".cx-navigation .cx-navigation__link"),t=document.querySelectorAll(".cx-home section"),r=window.innerWidth;e.length&&e.forEach((function(n){n.onclick=function(){e.forEach((function(e){e.classList.remove("cx-navigation__link--active")}));var c=n.getAttribute("data-nav");t.forEach((function(e){var t=e.getAttribute("data-nav-section");c==t&&(n.classList.add("cx-navigation__link--active"),e.scrollIntoView({behavior:"smooth",block:r>1024?"center":"start",inline:"nearest",offset:{top:1e3}}))}))}}))}}}});