(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{335:function(t,r,e){"use strict";e.d(r,"a",(function(){return n})),e.d(r,"b",(function(){return l}));var o=e(3);function n(t){return c.apply(this,arguments)}function c(){return(c=Object(o.a)((function*(t){var r=yield e(336)("./".concat(t,".md"));return r.attributes.slug=t,r.attributes.date=new Date(r.attributes.date),r.attributes.link="/projects/".concat(t,"/"),r.attributes.mins=Math.round(r.body.length/1250)||1,r}))).apply(this,arguments)}var l=["dissertation","festimap","hacksheffield","hype","icon-packs","picnic-spots","snapscroll","stegaphoto","tv-remote","university-of-sheffield-brass-band"]},336:function(t,r,e){var map={"./dissertation.md":[342,26],"./festimap.md":[343,27],"./hacksheffield.md":[344,28],"./hype.md":[345,29],"./icon-packs.md":[346,30],"./picnic-spots.md":[347,31],"./snapscroll.md":[348,32],"./stegaphoto.md":[349,33],"./tv-remote.md":[350,34],"./university-of-sheffield-brass-band.md":[351,35]};function o(t){if(!e.o(map,t))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=map[t],o=r[0];return e.e(r[1]).then((function(){return e.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=336,t.exports=o},357:function(t,r,e){var content=e(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("db987f7a",content,!0,{sourceMap:!1})},375:function(t,r,e){"use strict";var o=e(357);e.n(o).a},376:function(t,r,e){var o=e(5),n=e(8),c=e(9),l=e(10);r=o(!1);var m=n(c),d=n(l);r.push([t.i,':root{--color__primary:#35f;--color__primary--muted:rgba(51,85,255,0.3);--color__primary--hue:230deg;--color__body:#f9f9fb;--color__body--overlay:#fff;--color__body--blur:hsla(0,0%,100%,0.9);--color__text:rgba(0,0,0,0.87);--color__text--muted:rgba(0,0,0,0.6);--color__text--muter:rgba(0,0,0,0.02);--color__transparent:rgba(249,249,251,0);--box-shadow:0 0 2rem -1rem rgba(0,0,0,0.2);--box-shadow--small:0 0 0.5rem -0.25rem rgba(0,0,0,0.2);--box-shadow--primary:0 0.5rem 1rem -0.5rem #35f;--box-shadow--primary-small:0 0.25rem 0.5rem -0.25rem #35f}@media screen{:root[data-theme=dark]{--color__primary:#89f;--color__primary--muted:rgba(136,153,255,0.3);--color__primary--hue:231.42857deg;--color__body:#1a1b23;--color__body--overlay:#22242f;--color__body--blur:rgba(34,36,47,0.9);--color__text:hsla(0,0%,100%,0.87);--color__text--muted:hsla(0,0%,100%,0.6);--color__text--muter:hsla(0,0%,100%,0.04);--box-shadow:0 0 2rem -1rem rgba(0,0,0,0.4);--box-shadow--small:0 0 0.5rem -0.25rem rgba(0,0,0,0.4);--box-shadow--primary:0 0.5rem 1rem -0.5rem #22242f;--box-shadow--primary-small:0 0.25rem 0.5rem -0.25rem #22242f}}@media print{:root{--color__body:#fff}}@font-face{font-display:swap;font-family:"DM Serif Text";font-style:normal;font-weight:400;src:local("DM Serif Text Regular"),local("DMSerifText-Regular"),url('+m+') format("woff2"),url('+d+') format("woff")}.project{margin:0 auto;max-width:1152px;position:relative;width:90%;min-height:calc(100vh - 6.5rem);min-height:calc(var(--vh, 1vh)*100 - 6.5rem);padding-top:7.5rem;padding-bottom:4.5rem}@media (min-width:800px){.project{min-height:calc(100vh - 4rem);min-height:calc(var(--vh, 1vh)*100 - 4rem);padding-top:9rem}}@media print{.project{margin:0;padding:0;width:100%}}',""]),t.exports=r},406:function(t,r,e){"use strict";e.r(r);e(55),e(26);var o=e(20),n=e(3),c=e(56),l=e(335);function m(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var f={components:{PostArticle:Object(c.b)(()=>e.e(0).then(e.bind(null,400)))},asyncData:t=>Object(n.a)((function*(){var{params:r,error:e}=t;try{var o=yield Object(l.a)(r.project);return{project:d(d({},o.attributes),{},{vue:o.vue})}}catch(t){e({statusCode:404,message:"This project could not be found"})}}))(),head(){return{title:this.project.title,meta:[{hid:"description",name:"description",content:this.project.description},{hid:"og:title",property:"og:title",content:this.project.title},{hid:"og:description",property:"og:description",content:this.project.description},{hid:"og:url",property:"og:url",content:"https://gregives.co.uk".concat(this.project.link)},{hid:"og:image",property:"og:image",content:"https://gregives.co.uk".concat(this.project.link,"/og.png")}]}}},h=(e(375),e(2)),component=Object(h.a)(f,(function(){var t=this.$createElement,r=this._self._c||t;return r("main",{staticClass:"project"},[r("post-article",{attrs:{post:this.project,project:!0}})],1)}),[],!1,null,null,null);r.default=component.exports}}]);