(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{343:function(e,t){e.exports={attributes:{title:"Festimap",titleShort:"",date:"2019-04-01T00:00:00.000Z",image:"/assets/images/dynamic/festimap/screenshots1.png",description:"Progressive web app designed to share photos at festivals around the world, created for a university module on modern web development.",tags:["Node.js","Express","socket.io","MongoDB","Passport","Vue","Mapbox"]},body:"Festimap is a progressive web app designed to share photos from festivals around the world. Created as a university project with [Tom Croasdale](https://tomcroasdale.dev), Festimap was built with Express, Node.js, MongoDB and Vue.\n\n![Screenshots of Festimap app](/assets/images/dynamic/festimap/screenshots1.png)\n\n![Screenshots of Festimap app](/assets/images/dynamic/festimap/screenshots2.png)\n\n## Requirements\n\nWe were tasked with creating a progressive web app for use at festivals, which must work both offline and online. Users should be able to take photos using the app and upload the photos to the festival they are attending, along with an optional description. Users should be able to browse festivals on a map and create a new festival at a given location (which would then be verified). In order to satisfy the requirements of the system, we created 6 pages including: a login/signup page; a home page which displays a typical social media feed of users' posts; a page to create a post and take a photo; a profile page for each user; a map of all current festivals; and a page to create new festivals.\n\n## Implementation\n\nThe server uses Node.js and Express for the routing of the application and MongoDB for our document-driven database. We use both AJAX and socket.io for communicating between the client and the server. We used Passport, an authentication middleware for Express, in order to create and validate users' authentication when logging into the app.\n\nThe front-end uses Vue and Bootstrap for the interface, with some custom branding on top. The interactive map to view the festivals uses [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/overview/), a JavaScript library that uses WebGL to render interactive maps from vector tiles.\n\nA focus of the project was to make the app a fully-fledged progressive web app, which works both offline and online. Key to this was the service worker which would cache resources and the IndexedDB. The IndexedDB was designed to mirror the MongoDB server, with very similar documents for stories and events --- when the app was online, it would sync the IndexedDB with the MongoDB, so that when the app went offline it would fallback to the mirrored version on the device. When taking a photo on the device, it was first stored into the IndexedDB; if there was no internet connection it would then sync the photo at a later date and upload the photo to the server.\n\n![Diagram showing the layout of the progressive web app's pages and data flow](/assets/images/dynamic/festimap/diagram.png)",vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"markdown"},[_c(\'p\'),_vm._m(0),_c(\'p\'),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"/assets/images/dynamic/festimap/screenshots1.png","alt":""}}),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"/assets/images/dynamic/festimap/screenshots2.png","alt":""}}),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'p\',[_vm._v("We were tasked with creating a progressive web app for use at festivals, which must work both offline and online. Users should be able to take photos using the app and upload the photos to the festival they are attending, along with an optional description. Users should be able to browse festivals on a map and create a new festival at a given location (which would then be verified). In order to satisfy the requirements of the system, we created 6 pages including: a login/signup page; a home page which displays a typical social media feed of users’ posts; a page to create a post and take a photo; a profile page for each user; a map of all current festivals; and a page to create new festivals.")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'p\',[_vm._v("The server uses Node.js and Express for the routing of the application and MongoDB for our document-driven database. We use both AJAX and socket.io for communicating between the client and the server. We used Passport, an authentication middleware for Express, in order to create and validate users’ authentication when logging into the app.")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_c(\'p\',[_vm._v("A focus of the project was to make the app a fully-fledged progressive web app, which works both offline and online. Key to this was the service worker which would cache resources and the IndexedDB. The IndexedDB was designed to mirror the MongoDB server, with very similar documents for stories and events — when the app was online, it would sync the IndexedDB with the MongoDB, so that when the app went offline it would fallback to the mirrored version on the device. When taking a photo on the device, it was first stored into the IndexedDB; if there was no internet connection it would then sync the photo at a later date and upload the photo to the server.")]),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"/assets/images/dynamic/festimap/diagram.png","alt":""}})],1) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"table-of-contents"},[_c(\'ul\',[_c(\'li\',[_c(\'a\',{attrs:{"href":"#requirements"}},[_vm._v("Requirements")])]),_c(\'li\',[_c(\'a\',{attrs:{"href":"#implementation"}},[_vm._v("Implementation")])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("Festimap is a progressive web app designed to share photos from festivals around the world. Created as a university project with "),_c(\'a\',{attrs:{"href":"https://tomcroasdale.dev","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Tom Croasdale")]),_vm._v(", Festimap was built with Express, Node.js, MongoDB and Vue.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"requirements"}},[_vm._v("Requirements"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#requirements"}},[_vm._v(" #")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"implementation"}},[_vm._v("Implementation"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#implementation"}},[_vm._v(" #")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("The front-end uses Vue and Bootstrap for the interface, with some custom branding on top. The interactive map to view the festivals uses "),_c(\'a\',{attrs:{"href":"https://docs.mapbox.com/mapbox-gl-js/overview/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("Mapbox GL JS")]),_vm._v(", a JavaScript library that uses WebGL to render interactive maps from vector tiles.")]) }]'}}}}]);