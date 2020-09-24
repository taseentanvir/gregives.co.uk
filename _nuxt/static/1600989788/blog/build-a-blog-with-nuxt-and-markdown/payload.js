__NUXT_JSONP__("/blog/build-a-blog-with-nuxt-and-markdown", {data:[{post:{title:"Build a Blog with Nuxt and Markdown",date:new Date(1581120000000),description:"Learn how to build a blog with Nuxt and Markdown. This first blog post of the series will explain how to load Markdown files and display them using a Markdown component.",tags:[],slug:"build-a-blog-with-nuxt-and-markdown",link:"\u002Fblog\u002Fbuild-a-blog-with-nuxt-and-markdown\u002F",mins:9,vue:{render:"return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"markdown\"},[_c('p'),_vm._m(0),_c('p'),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_vm._m(3),_vm._v(\" \"),_vm._m(4),_vm._v(\" \"),_c('p',[_vm._v(\"In this series of blog posts, I’m going to detail how I use Markdown for the content of my website, how I created a responsive, lazy image component, a dark theme and more.\")]),_vm._v(\" \"),_vm._m(5),_vm._v(\" \"),_vm._m(6),_vm._v(\" \"),_vm._m(7),_vm._v(\" \"),_vm._m(8),_vm._v(\" \"),_vm._m(9),_vm._v(\" \"),_vm._m(10),_vm._v(\" \"),_vm._m(11),_vm._v(\" \"),_vm._m(12),_vm._v(\" \"),_vm._m(13),_vm._v(\" \"),_vm._m(14),_vm._v(\" \"),_vm._m(15),_vm._v(\" \"),_vm._m(16),_vm._v(\" \"),_c('p',[_vm._v(\"In our component’s render function, we simply call the template render function which we assigned when the component was created, or create an empty div if the template render function doesn’t exist. That’s pretty much it, add some styles to your Markdown component and you’re good to go!\")]),_vm._v(\" \"),_vm._m(17),_vm._v(\" \"),_vm._m(18),_vm._v(\" \"),_vm._m(19),_vm._v(\" \"),_vm._m(20),_vm._v(\" \"),_vm._m(21),_vm._v(\" \"),_vm._m(22),_vm._v(\" \"),_vm._m(23),_vm._v(\" \"),_vm._m(24),_vm._v(\" \"),_vm._m(25),_vm._v(\" \"),_vm._m(26),_vm._v(\" \"),_vm._m(27),_vm._v(\" \"),_vm._m(28),_vm._v(\" \"),_vm._m(29),_vm._v(\" \"),_vm._m(30),_vm._v(\" \"),_vm._m(31),_vm._v(\" \"),_vm._m(32),_vm._v(\" \"),_c('p',[_vm._v(\"The template of our blog post displays the title and the date from the attributes of the Markdown file, then uses our Markdown component to render the body of the blog post!\")]),_vm._v(\" \"),_vm._m(33),_vm._v(\" \"),_vm._m(34),_vm._v(\" \"),_vm._m(35),_vm._v(\" \"),_c('p',[_vm._v(\"Feel free to \"),_c('nuxt-link',{attrs:{\"to\":\"\u002Fcontact\u002F\"}},[_vm._v(\"contact me\")]),_vm._v(\" if you have any queries or feedback and keep an eye out for my next blog post!\")],1)]) }",staticRenderFns:"return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"table-of-contents\"},[_c('ul',[_c('li',[_c('a',{attrs:{\"href\":\"#the-nuxt-big-thing\"}},[_vm._v(\"The Nuxt Big Thing\")])]),_c('li',[_c('a',{attrs:{\"href\":\"#why-markdown%3F\"}},[_vm._v(\"Why Markdown?\")])]),_c('li',[_c('a',{attrs:{\"href\":\"#loading-markdown-files\"}},[_vm._v(\"Loading Markdown Files\")])]),_c('li',[_c('a',{attrs:{\"href\":\"#a-markdown-component\"}},[_vm._v(\"A Markdown Component\")])]),_c('li',[_c('a',{attrs:{\"href\":\"#writing-your-blog-posts\"}},[_vm._v(\"Writing Your Blog Posts\")]),_c('ul',[_c('li',[_c('a',{attrs:{\"href\":\"#nuxt-configuration\"}},[_vm._v(\"Nuxt Configuration\")])])])]),_c('li',[_c('a',{attrs:{\"href\":\"#creating-the-blog-pages\"}},[_vm._v(\"Creating the Blog Pages\")]),_c('ul',[_c('li',[_c('a',{attrs:{\"href\":\"#listing-your-blog-posts\"}},[_vm._v(\"Listing Your Blog Posts\")])]),_c('li',[_c('a',{attrs:{\"href\":\"#showing-an-individual-blog-post\"}},[_vm._v(\"Showing an Individual Blog Post\")])])])]),_c('li',[_c('a',{attrs:{\"href\":\"#wrapping-up\"}},[_vm._v(\"Wrapping Up\")])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"I recently redesigned my website to showcase my projects and facilitate writing my new blog, which you’re reading right now! I wanted my new website to be performant, look good and be accessible to everyone. However, I also wanted \"),_c('em',[_vm._v(\"my\")]),_vm._v(\" experience to be good — I wanted to be able to easily write new blog posts and for it to just work, without writing code for each new page I wanted to add to my website.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"the-nuxt-big-thing\"}},[_vm._v(\"The Nuxt Big Thing\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#the-nuxt-big-thing\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"At the moment, \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Fjamstack.org\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}},[_vm._v(\"JAMstack\")]),_vm._v(\" seems to be all the rage, with an increasing number of websites being pre-rendered and served by a \"),_c('abbr',{attrs:{\"title\":\"Content Delivery Network\"}},[_vm._v(\"CDN\")]),_vm._v(\". Building websites in this manner brings brilliant performance at a cheap cost; this website is hosted for free on Netlify, I just pay around $10 a year for my domain.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"I decided to make my new website using Nuxt, a static site generator (amongst other things) which is built upon Vue. Nuxt has allowed me to build a performant website, with a great \"),_c('em',[_vm._v(\"developer\")]),_vm._v(\" experience as well as user experience.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"why-markdown%3F\"}},[_vm._v(\"Why Markdown?\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#why-markdown%3F\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"In my opinion, Markdown is a fantastic middle ground between writing markup (for example, HTML) and writing normal text. It allows you to express everything you might need in a blog post, like \"),_c('em',[_vm._v(\"italics\")]),_vm._v(\", \"),_c('strong',[_vm._v(\"emphasis\")]),_vm._v(\", \"),_c('code',{pre:true},[_vm._v(\"inline code\")]),_vm._v(\" and images with a very concise syntax.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"md\"}},[_c('code',{pre:true},[_c('span',{pre:true,attrs:{\"class\":\"highlight__section\"}},[_vm._v(\"# An Example Blog Post\")]),_vm._v(\"\\n\\nMay look something like this. It's easy to \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__strong\"}},[_vm._v(\"**emphasise**\")]),_vm._v(\" words, link to [\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"other sites\")]),_vm._v(\"](\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__link\"}},[_vm._v(\"https:\u002F\u002Fgregiv.es\")]),_vm._v(\"), write \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__code\"}},[_vm._v(\"`inline code`\")]),_vm._v(\" or standalone code blocks, and add images.\\n\\n![\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"Smiley face for Markdown\")]),_vm._v(\"](\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__link\"}},[_vm._v(\"smiley.gif\")]),_vm._v(\")\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"loading-markdown-files\"}},[_vm._v(\"Loading Markdown Files\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#loading-markdown-files\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"In order to load Markdown files into Nuxt, we need to use a webpack loader. A webpack loader simply preprocesses a file, of a given type, to allow us to include it into our application. Conveniently, \"),_c('code',{pre:true},[_vm._v(\"frontmatter-markdown-loader\")]),_vm._v(\" does exactly what we want: it compiles our Markdown into HTML and then gives it to us \"),_c('em',[_vm._v(\"as a Vue render function\")]),_vm._v(\", including the front matter attributes from the top of the Markdown file. All we need to do is to tell webpack to use \"),_c('code',{pre:true},[_vm._v(\"frontmatter-markdown-loader\")]),_vm._v(\" whenever it sees a Markdown file, which we can do in \"),_c('code',{pre:true},[_vm._v(\"nuxt.config.js\")]),_vm._v(\".\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"js\"}},[_c('code',{pre:true},[_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"import\")]),_vm._v(\" FMMode \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"from\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'frontmatter-markdown-loader\u002Fmode'\")]),_vm._v(\"\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"export\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"default\")]),_vm._v(\" {\\n  ...\\n  build: {\\n    extend(config) {\\n      config.module.rules.push({\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"test\")]),_vm._v(\": \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__regexp\"}},[_vm._v(\"\u002F\\\\.md$\u002F\")]),_vm._v(\",\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"loader\")]),_vm._v(\": \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'frontmatter-markdown-loader'\")]),_vm._v(\",\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"options\")]),_vm._v(\": {\\n          \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"mode\")]),_vm._v(\": [FMMode.VUE_RENDER_FUNCTIONS],\\n          \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"vue\")]),_vm._v(\": {\\n            \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"root\")]),_vm._v(\": \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'markdown'\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__comment\"}},[_vm._v(\"\u002F\u002F The class name of the root div\")]),_vm._v(\"\\n          }\\n        }\\n      })\\n    }\\n  }\\n  ...\\n}\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"By default, \"),_c('code',{pre:true},[_vm._v(\"frontmatter-markdown-loader\")]),_vm._v(\" uses \"),_c('code',{pre:true},[_vm._v(\"markdown-it\")]),_vm._v(\" to compile the Markdown. If you wish, you can pass your own options to \"),_c('code',{pre:true},[_vm._v(\"markdown-it\")]),_vm._v(\" or override the Markdown compilation completely with your Markdown compiler of choice, see \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Fhmsk.github.io\u002Ffrontmatter-markdown-loader\u002Foptions.html#markdown-compilation\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}},[_vm._v(\"the documentation\")]),_vm._v(\" on how to do this.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"a-markdown-component\"}},[_vm._v(\"A Markdown Component\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#a-markdown-component\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"Now we have told webpack how to load Markdown files, we need some way to show them to the user! Let’s create a Markdown component, I’ve just called mine \"),_c('code',{pre:true},[_vm._v(\"Markdown.vue\")]),_vm._v(\" for ease, within your \"),_c('code',{pre:true},[_vm._v(\"components\")]),_vm._v(\" directory.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"vue\"}},[_c('code',{pre:true},[_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"script\")]),_vm._v(\"\u003E\")]),_c('span',{pre:true,attrs:{\"class\":\"javascript\"}},[_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"export\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"default\")]),_vm._v(\" {\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"props\")]),_vm._v(\": {\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"markdown\")]),_vm._v(\": {\\n      \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"type\")]),_vm._v(\": \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__built_in\"}},[_vm._v(\"Object\")]),_vm._v(\",\\n      \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"required\")]),_vm._v(\": \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__literal\"}},[_vm._v(\"true\")]),_vm._v(\"\\n    }\\n  },\\n  created() {\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__comment\"}},[_vm._v(\"\u002F\u002F eslint-disable-next-line no-new-func\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"this\")]),_vm._v(\".templateRender = \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"new\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__built_in\"}},[_vm._v(\"Function\")]),_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"this\")]),_vm._v(\".markdown.vue.render)()\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__comment\"}},[_vm._v(\"\u002F\u002F eslint-disable-next-line no-new-func\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"this\")]),_vm._v(\".$options.staticRenderFns = \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"new\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__built_in\"}},[_vm._v(\"Function\")]),_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"this\")]),_vm._v(\".markdown.vue.staticRenderFns)()\\n  },\\n  render(h) {\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"return\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"this\")]),_vm._v(\".templateRender ? \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"this\")]),_vm._v(\".templateRender() : h(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'div'\")]),_vm._v(\")\\n  }\\n}\\n\")]),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"script\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"style\")]),_vm._v(\"\u003E\")]),_c('span',{pre:true,attrs:{\"class\":\"css\"}},[_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__selector-class\"}},[_vm._v(\".markdown\")]),_vm._v(\" {\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__comment\"}},[_vm._v(\"\u002F* Put your Markdown styles here *\u002F\")]),_vm._v(\"\\n}\\n\")]),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"style\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"If you’re new to Vue, you might be surprised to see that our Markdown component doesn’t have a \"),_c('code',{pre:true},[_vm._v(\"\u003Ctemplate\u003E\")]),_vm._v(\" at the top. Instead of this, we have a \"),_c('code',{pre:true},[_vm._v(\"render\")]),_vm._v(\" function on the component which is used to render the HTML — behind the scenes, Vue converts all templates into render functions anyway. The render function takes a single argument, which is used to create elements. It’s convention \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Fcss-tricks.com\u002Fwhat-does-the-h-stand-for-in-vues-render-method\u002F\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}},[_vm._v(\"to name this parameter \"),_c('code',{pre:true},[_vm._v(\"h\")])]),_vm._v(\", but it can be thought of as \"),_c('code',{pre:true},[_vm._v(\"createElement\")]),_vm._v(\".\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"Our Markdown component has a single required prop, a \"),_c('code',{pre:true},[_vm._v(\"markdown\")]),_vm._v(\" object, which contains the render functions exposed by \"),_c('code',{pre:true},[_vm._v(\"frontmatter-markdown-loader\")]),_vm._v(\". These functions are actually passed as strings, so when the component is created we turn these back into functions by using \"),_c('code',{pre:true},[_vm._v(\"new Function()\")]),_vm._v(\". Note I’ve added two comments for ESLint above these lines, as \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Feslint.org\u002Fdocs\u002Frules\u002Fno-new-func\",\"target\":\"_blank\",\"rel\":\"noopener noreferrer\"}},[_vm._v(\"it’s considered bad practice to create functions in this way\")]),_vm._v(\", but this is a valid case.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"writing-your-blog-posts\"}},[_vm._v(\"Writing Your Blog Posts\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#writing-your-blog-posts\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"Now it’s time to write your first blog post and let Nuxt know that you’ve written one. Create a new directory in the root of your project called \"),_c('code',{pre:true},[_vm._v(\"contents\")]),_vm._v(\" and then create a Markdown file in there called \"),_c('code',{pre:true},[_vm._v(\"my-first-blog-post.md\")]),_vm._v(\". At the start of the Markdown file, we’re going to write some front matter, which is just some extra information about our blog post, such as the date and title. Front matter is always placed at the top of the file and is denoted by the \"),_c('code',{pre:true},[_vm._v(\"---\")]),_vm._v(\" three dashes. You can also put Vue components in your Markdown files, because we’re using Vue render functions, to give your blog posts special powers!\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"md\"}},[_c('code',{pre:true},[_vm._v(\"---\\ndate: 2015-10-21\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__section\"}},[_vm._v(\"title: My First Blog Post\\n---\")]),_vm._v(\"\\n\\nWho moved my cheese cow mascarpone. Cheese on toast cheese on toast mozzarella bavarian bergkase emmental gouda cheese triangles. Croque monsieur dolcelatte macaroni cheese taleggio parmesan cheese triangles St. Agur blue cheese. Everyone loves cheese.\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"xml\"}},[_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"cheese-slideshow\")]),_vm._v(\" \u002F\u003E\")])]),_vm._v(\"\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"In the \"),_c('code',{pre:true},[_vm._v(\"contents\")]),_vm._v(\" directory, we’re also going to create an \"),_c('code',{pre:true},[_vm._v(\"index.js\")]),_vm._v(\" JavaScript file. We’ll use this file to let Nuxt know which blog posts we want to generate a page for, and the route corresponding to the pages.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"js\"}},[_c('code',{pre:true},[_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"export\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"const\")]),_vm._v(\" postSlugs = [\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'my-first-blog-post'\")]),_vm._v(\"]\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"export\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"const\")]),_vm._v(\" postRoutes = postSlugs.map(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__function\"}},[_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__params\"}},[_vm._v(\"postSlug\")]),_vm._v(\") =\u003E\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"`\u002Fblog\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__subst\"}},[_vm._v(\"${postSlug}\")]),_vm._v(\"`\")]),_vm._v(\")\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{\"id\":\"nuxt-configuration\"}},[_vm._v(\"Nuxt Configuration\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#nuxt-configuration\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"We need to change the configuration of Nuxt slightly, to let it know about our blog posts. This is because the pages for our blog posts will be generated \"),_c('em',[_vm._v(\"dynamically\")]),_vm._v(\", i.e. we’re not manually creating a page for each of them. In \"),_c('code',{pre:true},[_vm._v(\"nuxt.config.js\")]),_vm._v(\", we’re going to import the routes for our blog posts at the top, and then pass them to \"),_c('code',{pre:true},[_vm._v(\"generate.routes\")]),_vm._v(\". This ensures that Nuxt will generate these pages when we run \"),_c('code',{pre:true},[_vm._v(\"nuxt generate\")]),_vm._v(\".\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"js\"}},[_c('code',{pre:true},[_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"import\")]),_vm._v(\" { postRoutes } \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"from\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'.\u002Fcontents'\")]),_vm._v(\"\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"export\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"default\")]),_vm._v(\" {\\n  ...\\n  generate: {\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"routes\")]),_vm._v(\": postRoutes\\n  }\\n  ...\\n}\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"creating-the-blog-pages\"}},[_vm._v(\"Creating the Blog Pages\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#creating-the-blog-pages\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"Finally, we need to actually create the pages for our blog. Let’s create a new directory in the \"),_c('code',{pre:true},[_vm._v(\"pages\")]),_vm._v(\" directory called \"),_c('code',{pre:true},[_vm._v(\"blog\")]),_vm._v(\" and in this we’ll create two pages: \"),_c('code',{pre:true},[_vm._v(\"index.vue\")]),_vm._v(\" to list the blog posts and \"),_c('code',{pre:true},[_vm._v(\"_post.vue\")]),_vm._v(\" for the individual blog posts. Note that any dynamic page \"),_c('strong',[_vm._v(\"must be prefixed by an underscore\")]),_vm._v(\".\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{\"id\":\"listing-your-blog-posts\"}},[_vm._v(\"Listing Your Blog Posts\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#listing-your-blog-posts\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"In \"),_c('code',{pre:true},[_vm._v(\"index.vue\")]),_vm._v(\", we’re going to use \"),_c('code',{pre:true},[_vm._v(\"asyncData\")]),_vm._v(\" to load the blog posts before the component is created. We’ll map over the \"),_c('code',{pre:true},[_vm._v(\"postSlugs\")]),_vm._v(\" array which we exported earlier, importing each blog post; this will use \"),_c('code',{pre:true},[_vm._v(\"frontmatter-markdown-loader\")]),_vm._v(\" which we also set up earlier. In this page, we only need the attributes of each blog post so we’ll return just the attributes and then sort the posts depending on their date.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"vue\"}},[_c('code',{pre:true},[_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"template\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"main\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"h1\")]),_vm._v(\"\u003E\")]),_vm._v(\"My Blog\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"h1\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"ol\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n      \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"li\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"v-for\")]),_vm._v(\"=\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"\\\"post in posts\\\"\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\":key\")]),_vm._v(\"=\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"\\\"post.title\\\"\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"nuxt-link\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\":to\")]),_vm._v(\"=\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"\\\"`\u002Fblog\u002F${post.slug}`\\\"\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n          {{ post.title }}\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"nuxt-link\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n        — {{ post.date.toLocaleDateString() }}\\n      \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"li\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"ol\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"main\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"template\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"script\")]),_vm._v(\"\u003E\")]),_c('span',{pre:true,attrs:{\"class\":\"javascript\"}},[_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"import\")]),_vm._v(\" { postSlugs } \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"from\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'~\u002Fcontents'\")]),_vm._v(\"\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"export\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"default\")]),_vm._v(\" {\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"async\")]),_vm._v(\" asyncData() {\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"const\")]),_vm._v(\" posts = \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"await\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__built_in\"}},[_vm._v(\"Promise\")]),_vm._v(\".all(\\n      postSlugs.map(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"async\")]),_vm._v(\" (postSlug) =\u003E {\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"const\")]),_vm._v(\" post = \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"await\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"import\")]),_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"`~\u002Fcontents\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__subst\"}},[_vm._v(\"${postSlug}\")]),_vm._v(\".md`\")]),_vm._v(\")\\n        post.attributes.date = \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"new\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__built_in\"}},[_vm._v(\"Date\")]),_vm._v(\"(post.attributes.date)\\n\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"return\")]),_vm._v(\" post.attributes\\n      })\\n    )\\n    posts.sort(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__function\"}},[_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__params\"}},[_vm._v(\"postA, postB\")]),_vm._v(\") =\u003E\")]),_vm._v(\" postB.date - postA.date)\\n\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"return\")]),_vm._v(\" {\\n      posts\\n    }\\n  }\\n}\\n\")]),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"script\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{attrs:{\"id\":\"showing-an-individual-blog-post\"}},[_vm._v(\"Showing an Individual Blog Post\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#showing-an-individual-blog-post\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"The last thing we need to do is create the page for the individual blog posts, the content itself! In a dynamic route such as \"),_c('code',{pre:true},[_vm._v(\"_post.vue\")]),_vm._v(\", the route parameters are passed into the context of \"),_c('code',{pre:true},[_vm._v(\"asyncData\")]),_vm._v(\": we can access the slug of our post (\"),_c('code',{pre:true},[_vm._v(\"my-first-blog-post\")]),_vm._v(\") using \"),_c('code',{pre:true},[_vm._v(\"params.post\")]),_vm._v(\". If you named your dynamic route \"),_c('code',{pre:true},[_vm._v(\"_slug.vue\")]),_vm._v(\" instead, then you would access the route as \"),_c('code',{pre:true},[_vm._v(\"params.slug\")]),_vm._v(\".\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"When we have the slug of the blog post, we’re going to import the corresponding Markdown file, again which will be loaded using \"),_c('code',{pre:true},[_vm._v(\"frontmatter-markdown-loader\")]),_vm._v(\". Note that if the user has requested a blog post which doesn’t exist, for example \"),_c('code',{pre:true},[_vm._v(\"\u002Fblog\u002Fnon-existent-blog-post\")]),_vm._v(\", this would try to load \"),_c('code',{pre:true},[_vm._v(\"contents\u002Fnon-existent-blog-post.md\")]),_vm._v(\" which would error. We need to catch this error and instead render the error page by calling \"),_c('code',{pre:true},[_vm._v(\"error()\")]),_vm._v(\" with the status code and error message.\")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pre',{staticClass:\"highlight\",attrs:{\"data-language\":\"vue\"}},[_c('code',{pre:true},[_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"template\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"main\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"h1\")]),_vm._v(\"\u003E\")]),_vm._v(\"{{ post.title }}\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"h1\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"p\")]),_vm._v(\"\u003E\")]),_vm._v(\"{{ post.date.toLocaleDateString() }}\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"p\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__comment\"}},[_vm._v(\"\u003C!-- Our Markdown component! --\u003E\")]),_vm._v(\"\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"markdown\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\":markdown\")]),_vm._v(\"=\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"\\\"post\\\"\")]),_vm._v(\" \u002F\u003E\")]),_vm._v(\"\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"main\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"template\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"script\")]),_vm._v(\"\u003E\")]),_c('span',{pre:true,attrs:{\"class\":\"javascript\"}},[_vm._v(\"\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"import\")]),_vm._v(\" Markdown \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"from\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'~\u002Fcomponents\u002FMarkdown'\")]),_vm._v(\"\\n\\n\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"export\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"default\")]),_vm._v(\" {\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"components\")]),_vm._v(\": {\\n    Markdown\\n  },\\n  \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"async\")]),_vm._v(\" asyncData({ params, error }) {\\n    \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"try\")]),_vm._v(\" {\\n      \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"const\")]),_vm._v(\" post = \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"await\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"import\")]),_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"`~\u002Fcontents\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__subst\"}},[_vm._v(\"${params.post}\")]),_vm._v(\".md`\")]),_vm._v(\")\\n      post.attributes.date = \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"new\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__built_in\"}},[_vm._v(\"Date\")]),_vm._v(\"(post.attributes.date)\\n\\n      \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"return\")]),_vm._v(\" {\\n        \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"post\")]),_vm._v(\": {\\n          ...post.attributes,\\n          \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"vue\")]),_vm._v(\": post.vue\\n        }\\n      }\\n    } \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__keyword\"}},[_vm._v(\"catch\")]),_vm._v(\" {\\n      error({ \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"statusCode\")]),_vm._v(\": \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__number\"}},[_vm._v(\"404\")]),_vm._v(\", \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__attr\"}},[_vm._v(\"message\")]),_vm._v(\": \"),_c('span',{pre:true,attrs:{\"class\":\"highlight__string\"}},[_vm._v(\"'This post could not be found'\")]),_vm._v(\" })\\n    }\\n  }\\n}\\n\")]),_c('span',{pre:true,attrs:{\"class\":\"highlight__tag\"}},[_vm._v(\"\u003C\u002F\"),_c('span',{pre:true,attrs:{\"class\":\"highlight__name\"}},[_vm._v(\"script\")]),_vm._v(\"\u003E\")]),_vm._v(\"\\n\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{attrs:{\"id\":\"wrapping-up\"}},[_vm._v(\"Wrapping Up\"),_c('a',{staticClass:\"header-anchor\",attrs:{\"href\":\"#wrapping-up\"}},[_vm._v(\" #\")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(\"That’s everything! When you’ve finished all of these steps, you’ll be able to write blog posts in Markdown and see them appear in your \"),_c('code',{pre:true},[_vm._v(\"\u002Fblog\")]),_vm._v(\" page. Clicking on a blog post will take you to \"),_c('code',{pre:true},[_vm._v(\"\u002Fblog\u002Fname-of-blog-post\")]),_vm._v(\", where you’ll see your blog post compiled from the Markdown using Vue’s render functions.\")]) }]"}}}],fetch:[],mutations:void 0});