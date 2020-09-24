(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{348:function(e,r){e.exports={attributes:{title:"SnapScroll",titleShort:"",date:"2017-08-01T00:00:00.000Z",image:"/assets/images/dynamic/snapscroll/screenshot.png",description:"My first JavaScript library to scroll smoothly between points on a website, built as a jQuery plugin.",tags:["jQuery","Library","Scrolling","Animation"]},body:'When creating my personal site in 2016, fullscreen scrolling websites were all the rage. However, none of the open-source libraries available were what I was looking for; [fullPage by Alvaro Trigo](https://alvarotrigo.com/fullPage/) came close, but did not allow the centering of elements less than the height of the viewport. So I decided to create my own snap scrolling JavaScript library, **snapScroll.js**.\n\n**Note:** There is considerable controversy over "scroll-hijacking", whereby a website overrides the native scrolling behavior of the browser to create its own interaction, which confuses some visitors. This is a very important note to consider, and the reason why my website no longer uses snapScroll.js.\n\n<video-compat src="snapscroll/preview" autoplay muted loop />\n\n## Creating the Library\n\nSnapScroll.js was built as a jQuery plugin, in order to use jQuery\'s scrollTo function. It revolves around adding _snap points_ throughout the page, added via a `data-snap-point` attribute, which determines the scrolling flow of the page. Custom jQuery easings enable the possibility of quirky scrolling, such as a bouncing effect at the bottom of the page.\n\n## Browser Support\n\nSnapScroll.js was kindly supported by [BrowserStack](https://browserstack.com), in order to test browser support and find any problems with the scroll detection. SnapScroll.js supports the following browsers:\n\n- Chrome ≥ 26\n- Firefox ≥ 21\n- Edge ≥ 14\n- Opera ≥ 15\n- Safari ≥ 6.2\n- Internet Explorer not supported',vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"markdown"},[_c(\'p\'),_vm._m(0),_c(\'p\'),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'video-compat\',{attrs:{"src":"snapscroll/preview","autoplay":"","muted":"","loop":""}}),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7)],1) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"table-of-contents"},[_c(\'ul\',[_c(\'li\',[_c(\'a\',{attrs:{"href":"#creating-the-library"}},[_vm._v("Creating the Library")])]),_c(\'li\',[_c(\'a\',{attrs:{"href":"#browser-support"}},[_vm._v("Browser Support")])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("When creating my personal site in 2016, fullscreen scrolling websites were all the rage. However, none of the open-source libraries available were what I was looking for; "),_c(\'a\',{attrs:{"href":"https://alvarotrigo.com/fullPage/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("fullPage by Alvaro Trigo")]),_vm._v(" came close, but did not allow the centering of elements less than the height of the viewport. So I decided to create my own snap scrolling JavaScript library, "),_c(\'strong\',[_vm._v("snapScroll.js")]),_vm._v(".")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("Note:")]),_vm._v(" There is considerable controversy over “scroll-hijacking”, whereby a website overrides the native scrolling behavior of the browser to create its own interaction, which confuses some visitors. This is a very important note to consider, and the reason why my website no longer uses snapScroll.js.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"creating-the-library"}},[_vm._v("Creating the Library"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#creating-the-library"}},[_vm._v(" #")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("SnapScroll.js was built as a jQuery plugin, in order to use jQuery’s scrollTo function. It revolves around adding "),_c(\'em\',[_vm._v("snap points")]),_vm._v(" throughout the page, added via a "),_c(\'code\',{pre:true},[_vm._v("data-snap-point")]),_vm._v(" attribute, which determines the scrolling flow of the page. Custom jQuery easings enable the possibility of quirky scrolling, such as a bouncing effect at the bottom of the page.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"browser-support"}},[_vm._v("Browser Support"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#browser-support"}},[_vm._v(" #")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("SnapScroll.js was kindly supported by "),_c(\'a\',{attrs:{"href":"https://browserstack.com","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("BrowserStack")]),_vm._v(", in order to test browser support and find any problems with the scroll detection. SnapScroll.js supports the following browsers:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ul\',[_c(\'li\',[_vm._v("Chrome ≥ 26")]),_vm._v(" "),_c(\'li\',[_vm._v("Firefox ≥ 21")]),_vm._v(" "),_c(\'li\',[_vm._v("Edge ≥ 14")]),_vm._v(" "),_c(\'li\',[_vm._v("Opera ≥ 15")]),_vm._v(" "),_c(\'li\',[_vm._v("Safari ≥ 6.2")]),_vm._v(" "),_c(\'li\',[_vm._v("Internet Explorer not supported")])]) }]'}}}}]);