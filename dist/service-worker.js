if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,c,a)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-176fe0b1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"images/089a5749b06646aedee7.jpg",revision:null},{url:"images/about-bg.jpg",revision:"f0aecb99c308e764e45b12904f46a25f"},{url:"images/about.jpg",revision:"e644dbf1976d2614b9c3b0c5bbc7ef8b"},{url:"images/apple-touch-icon.png",revision:"042a7e9fdd293212aca19150aef71b0d"},{url:"images/chefs/chefs-1.jpg",revision:"aed2568da3a662ed2e3f83a885ff2bf8"},{url:"images/chefs/chefs-2.jpg",revision:"56acdfbda48a9a7e176e0bb70832afbd"},{url:"images/chefs/chefs-3.jpg",revision:"2b6d43221aaa57c287386ecb55a4e190"},{url:"images/d246ce4007858a2604b4.jpg",revision:null},{url:"images/dfe20f92dd1f652efa8e.jpg",revision:null},{url:"images/event-birthday.jpg",revision:"b7bc2c434c8643d44232415b438cec86"},{url:"images/event-custom.jpg",revision:"6d60f8966b3f2444b6fbaba91a121790"},{url:"images/event-private.jpg",revision:"5b4f6910391dcc0579a85e6b58cbe28d"},{url:"images/events-bg.jpg",revision:"67f087474f7247397d09b2de4d8601f3"},{url:"images/favicon.png",revision:"fed84e16b6ccfe88ee7ffaae5dfefd34"},{url:"images/gallery/gallery-1.jpg",revision:"a3a3c0d6eb3213d68b4ed7156b64fd4e"},{url:"images/gallery/gallery-2.jpg",revision:"71984355bb9072ef144c0cc68f5b7194"},{url:"images/gallery/gallery-3.jpg",revision:"26ad6ab2b6290b221304c4a128d0614d"},{url:"images/gallery/gallery-4.jpg",revision:"088d8151a7770ebebdc49473ee1b98cb"},{url:"images/gallery/gallery-5.jpg",revision:"cc071bf750d671e4f96874fae7d573e9"},{url:"images/gallery/gallery-6.jpg",revision:"667aaeec2e8e2f3bc2ef7255ddbe0080"},{url:"images/gallery/gallery-7.jpg",revision:"f293e5f4c99f3ef4bec12571708508c2"},{url:"images/gallery/gallery-8.jpg",revision:"371937d1b76a595a158d6b3222abb33f"},{url:"images/hero-bg.jpg",revision:"a369d8921565f67d40d02d417dc4419f"},{url:"images/menu/bread-barrel.jpg",revision:"099df74422aad0a96d04f19d2ccb1640"},{url:"images/menu/caesar.jpg",revision:"3a2205f5000b08439bdc4ff5e5be1c64"},{url:"images/menu/cake.jpg",revision:"668eb87dac4074995f8fa85487f9ad9a"},{url:"images/menu/greek-salad.jpg",revision:"06b0bf199f43fcac859c413aa1501214"},{url:"images/menu/lobster-bisque.jpg",revision:"fbcfc5fd66d43e6b907048a683333964"},{url:"images/menu/lobster-roll.jpg",revision:"854f9ab46214241396c0811e41941489"},{url:"images/menu/mozzarella.jpg",revision:"84b2b7619faddf94f00b6904186ac88e"},{url:"images/menu/spinach-salad.jpg",revision:"8ed76fb3174d55064a8232185ea005e9"},{url:"images/menu/tuscan-grilled.jpg",revision:"97f7f4c7b88daac1e1b11a139a069ca1"},{url:"images/specials-1.png",revision:"1929ae86835610ab8227f47f262c960d"},{url:"images/specials-2.png",revision:"1a4af9283106befca52b36d843066093"},{url:"images/specials-3.png",revision:"9f6108893c5f4a84c362d655c44065a7"},{url:"images/specials-4.png",revision:"e8d511239aef95810843c013fb5fe8ca"},{url:"images/specials-5.png",revision:"0d6d25353789e90e2cd9e1839fab9853"},{url:"images/testimonials/testimonials-1.jpg",revision:"2eb96321ab48d0ba8c87de31ad7087fe"},{url:"images/testimonials/testimonials-2.jpg",revision:"b6d1701868336600a333ea7bec662425"},{url:"images/testimonials/testimonials-3.jpg",revision:"3d677828b23ca5dc9653eb9e8f92aa1f"},{url:"images/testimonials/testimonials-4.jpg",revision:"08d8679b1e421ad63fd4d61156a5acd1"},{url:"images/testimonials/testimonials-5.jpg",revision:"72fb04435870ed091240bd9da7474dab"},{url:"index.html",revision:"275acfbb5df758de1add7d868f7026a4"},{url:"main.js",revision:"f843a2fe5a51d36f8c715cd9fc4c545e"},{url:"main.js.LICENSE.txt",revision:"8df545be3033094eac3f9f4558816915"},{url:"src_client_style_css.css",revision:"4c0c77af6147a814d75e5fb5f5e37bfb"},{url:"src_client_style_css.js",revision:"1d86ce4174a4683648cff0566e1ca9ef"},{url:"src_client_style_css.js.LICENSE.txt",revision:"99f19cb78343dfd57ee6a3f212c5b109"},{url:"src_client_styles_about_css.css",revision:"e4fe1b9a99bc64cafbb880fa506c6143"},{url:"src_client_styles_about_css.js",revision:"500adc7204b09714510ea2081d5aa9d2"},{url:"src_client_styles_about_css.js.LICENSE.txt",revision:"613ceae4691bfaab2b89bb587b6b0d13"},{url:"src_client_styles_chefs_css.css",revision:"311980b7d73588f94361f1851b4b62a5"},{url:"src_client_styles_chefs_css.js",revision:"d5275698aa6a97e483b7d656592ab3b0"},{url:"src_client_styles_chefs_css.js.LICENSE.txt",revision:"520196623186584be402fef3b765716f"},{url:"src_client_styles_contact_css.css",revision:"11b383f2f8bd72a39f57e7281ba8fa55"},{url:"src_client_styles_contact_css.js",revision:"eaf2ae09b2e863c6c012bb63d33b6ae2"},{url:"src_client_styles_contact_css.js.LICENSE.txt",revision:"0d79292ac6b870cfdf8d958d07d3233a"},{url:"src_client_styles_events_css.css",revision:"05e24c199794f5157dab3835c4076999"},{url:"src_client_styles_events_css.js",revision:"aeb80ea6c5290d158b7d1f42e5c35310"},{url:"src_client_styles_events_css.js.LICENSE.txt",revision:"55ae12a8aa2a0465374d6662e55700f6"},{url:"src_client_styles_footer_css.css",revision:"e0a3dd6fd9ae60d0dd989ba2296c5f9e"},{url:"src_client_styles_footer_css.js",revision:"81e7222b53cc60bc569d82503b6a2d5c"},{url:"src_client_styles_footer_css.js.LICENSE.txt",revision:"5bc2077f7689a19cbcebedb63140668d"},{url:"src_client_styles_gallery_css.css",revision:"60102a0bc59fa5b4c7d7077eb1894585"},{url:"src_client_styles_gallery_css.js",revision:"2fdf843371adf6e9dbee880e530f1b41"},{url:"src_client_styles_gallery_css.js.LICENSE.txt",revision:"65763c4c1531ffe47370e6365bf59105"},{url:"src_client_styles_header_css.css",revision:"726acde62e30eb5f8575f817fc1ebfd9"},{url:"src_client_styles_header_css.js",revision:"6b55a7f9d02f2cd25760cfbe36bc2b6b"},{url:"src_client_styles_header_css.js.LICENSE.txt",revision:"aafc4663aeca6d2423d8b591d3d734cb"},{url:"src_client_styles_homepage_css.css",revision:"543b7495d2deaf6424c4b346fdfdd4ee"},{url:"src_client_styles_homepage_css.js",revision:"b8165120dcbdb31fccad6d01aa8ca861"},{url:"src_client_styles_homepage_css.js.LICENSE.txt",revision:"f215e698db35284b7ae483b4bce37cf2"},{url:"src_client_styles_mediaqueries_css.css",revision:"e4e031153b8b262894fd4dae0692964b"},{url:"src_client_styles_mediaqueries_css.js",revision:"1d8fa15f48e5968a02c6823f0dc712ab"},{url:"src_client_styles_mediaqueries_css.js.LICENSE.txt",revision:"a7b0a148a1ece65be9759d76deba5e1d"},{url:"src_client_styles_menu_css.css",revision:"b20b9cf26372e6f575e069a46a6f7b4a"},{url:"src_client_styles_menu_css.js",revision:"53ac5305d178f7814a723a29b87c2a4c"},{url:"src_client_styles_menu_css.js.LICENSE.txt",revision:"3ef41df8522bbb4f151725b95a8aae15"},{url:"src_client_styles_reservation_css.css",revision:"d11a0b9a0344a6ef113d1f609ed4778e"},{url:"src_client_styles_reservation_css.js",revision:"9e89b5eba74e82ffed1a88aabc7fd733"},{url:"src_client_styles_reservation_css.js.LICENSE.txt",revision:"bcdf8ac8187b2f0a5705d3f1260724d9"},{url:"src_client_styles_specials_css.css",revision:"1f34d7405eb8d93c2ac91c7e0c7ab47a"},{url:"src_client_styles_specials_css.js",revision:"f316428f2a762797f7566732cc544c64"},{url:"src_client_styles_specials_css.js.LICENSE.txt",revision:"67e1694f9297f0656a90d0f56b29ab66"},{url:"src_client_styles_testimonials_css.css",revision:"5d3f459e9f73994399f6568b246afdd5"},{url:"src_client_styles_testimonials_css.js",revision:"ddfc3fa408c6b8a23cd168ab185c4d4b"},{url:"src_client_styles_testimonials_css.js.LICENSE.txt",revision:"a5a2e97072c671fb260d493d08a4d017"},{url:"src_client_styles_why-us_css.css",revision:"6986def68c6b523a703dee2ca8f780c3"},{url:"src_client_styles_why-us_css.js",revision:"7f20a75a9630a9642ad191f0960f7a91"},{url:"src_client_styles_why-us_css.js.LICENSE.txt",revision:"15003b32189844ae0cae6ff14f42f0d6"}],{})}));