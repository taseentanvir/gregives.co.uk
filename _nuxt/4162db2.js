(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{349:function(e,t){e.exports={attributes:{title:"StegaPhoto",titleShort:"",date:"2017-09-01T00:00:00.000Z",image:"/assets/images/dynamic/stegaphoto/screenshot.png",description:"Cyber security research project on steganography — created a web application which can hide any number of files inside an image.",tags:["JavaScript","Steganography","SubtleCrypto","Web workers","Bootstrap"]},body:"During Summer 2017, I undertook a cyber security research project, creating a web application which can hide files inside an image, a form of _steganography_. Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video. The advantage of steganography over cryptography alone is that the intended secret message does not attract attention to itself as an object of scrutiny.\n\n![Screenshot of the user interface to hide files](/assets/images/dynamic/stegaphoto/hide.png)\n\n## How StegaPhoto Works\n\nStegaPhoto is built in vanilla JavaScript using SubtleCrypto, Web Workers, JSZip and Bootstrap ---  StegaPhoto does not send any data to a server, it uses only client-side JavaScript. There were two viable methods to hide files inside images:\n\n- Hiding the file data within the image data, replacing unnecessary image data with the information to be hidden. This method usually works by hiding the data in the least significant bits of the colour component of images. The file size remains the same (as data is only replaced, not added) which means that the steganography is hard to spot, but only a very small amount of information can be hidden in each image.\n\n- Adding the file data alongside the image data, which increases the total file size but retains the full image quality. By adding hidden data into an ignored section of a file, such as after the logical end of the image, any amount of information can be hidden. However, this method is easier to spot as the file size will increase and the file can be examined to show the extra information.\n\nThe second method was chosen as the focus for the project, with the view of the end user hiding any number of files in an image, irrespective of the resolution of that image. StegaPhoto uses end of file (EOF) markers to add data which would not usually be found within an image file.\n\n```\n|   Original image file   |\n| Contents of image | EOF | Encrypted ZIP |\n```\n\nFor more information, have a look at [the StegaPhoto repository](https://github.com/gregives/StegaPhoto).",vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"markdown"},[_c(\'p\'),_vm._m(0),_c(\'p\'),_vm._v(" "),_vm._m(1),_vm._v(" "),_c(\'lazy-image\',{attrs:{"src":"/assets/images/dynamic/stegaphoto/hide.png","alt":""}}),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'p\',[_vm._v("StegaPhoto is built in vanilla JavaScript using SubtleCrypto, Web Workers, JSZip and Bootstrap —  StegaPhoto does not send any data to a server, it uses only client-side JavaScript. There were two viable methods to hide files inside images:")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c(\'p\',[_vm._v("The second method was chosen as the focus for the project, with the view of the end user hiding any number of files in an image, irrespective of the resolution of that image. StegaPhoto uses end of file (EOF) markers to add data which would not usually be found within an image file.")]),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5)],1) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"table-of-contents"},[_c(\'ul\',[_c(\'li\',[_c(\'a\',{attrs:{"href":"#how-stegaphoto-works"}},[_vm._v("How StegaPhoto Works")])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("During Summer 2017, I undertook a cyber security research project, creating a web application which can hide files inside an image, a form of "),_c(\'em\',[_vm._v("steganography")]),_vm._v(". Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video. The advantage of steganography over cryptography alone is that the intended secret message does not attract attention to itself as an object of scrutiny.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"how-stegaphoto-works"}},[_vm._v("How StegaPhoto Works"),_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#how-stegaphoto-works"}},[_vm._v(" #")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ul\',[_c(\'li\',[_c(\'p\',[_vm._v("Hiding the file data within the image data, replacing unnecessary image data with the information to be hidden. This method usually works by hiding the data in the least significant bits of the colour component of images. The file size remains the same (as data is only replaced, not added) which means that the steganography is hard to spot, but only a very small amount of information can be hidden in each image.")])]),_vm._v(" "),_c(\'li\',[_c(\'p\',[_vm._v("Adding the file data alongside the image data, which increases the total file size but retains the full image quality. By adding hidden data into an ignored section of a file, such as after the logical end of the image, any amount of information can be hidden. However, this method is easier to spot as the file size will increase and the file can be examined to show the extra information.")])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'pre\',{staticClass:"highlight"},[_c(\'code\',{pre:true},[_vm._v("|   Original image file   |\\n| Contents of image | EOF | Encrypted ZIP |\\n")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("For more information, have a look at "),_c(\'a\',{attrs:{"href":"https://github.com/gregives/StegaPhoto","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("the StegaPhoto repository")]),_vm._v(".")]) }]'}}}}]);