"use strict";var precacheConfig=[["/index.html","c85d7a2a6b28b1827d4327fd6f5d9e6a"],["/static/css/main.7ad81982.css","24c9d4b08bc7e4765c7a50d52f61afaa"],["/static/js/main.d7de3db8.js","883041e97dc946399bf5f39e779c0163"],["/static/media/AboutMe.d266368a.scss","d266368ace3478c5409ef65d449b2ab9"],["/static/media/come_over_portfolio_1.41101b75.png","41101b75ab96676f1e8749cc1e8e806b"],["/static/media/come_over_portfolio_2.8407f6c6.png","8407f6c63816f731589d700696042b1a"],["/static/media/come_over_portfolio_3.00a25334.png","00a25334c832869559e89f6b75c91710"],["/static/media/come_over_portfolio_4.65cd193e.png","65cd193efd00f977501d68903c60ac35"],["/static/media/come_over_portfolio_5.d63feada.png","d63feada744d23f68e8312ab799fd1b4"],["/static/media/come_over_portfolio_6.04dcaaa7.png","04dcaaa7a30f23748a7f18ef37f0fc56"],["/static/media/devicon.0f964a72.woff","0f964a72f8fbdf9c8d4e0122b8effb40"],["/static/media/devicon.29f80b00.ttf","29f80b00a7b4641183f96f08be374697"],["/static/media/devicon.681fa39a.eot","681fa39a79c22f0035a0720e2b2bda3b"],["/static/media/devicon.74e6e6c3.svg","74e6e6c3dcfca56767adabe83a510f2e"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/formality_portfolio_1.c5f06eaf.png","c5f06eafc3c1b8fc19178b329b4cb2fb"],["/static/media/formality_portfolio_2.d1ede44c.png","d1ede44c0e9bcdf69ef3ee90fcf477db"],["/static/media/formality_portfolio_3.d3d37b1d.png","d3d37b1d8f65a8d1eb2fbedd3b0b1ecb"],["/static/media/formality_portfolio_4.1785ffdd.png","1785ffdd94227f9dae6b51b0c8cffa3c"],["/static/media/gryphus_portfolio_1.106f7101.png","106f7101ed57d2f8271c905e32efeca0"],["/static/media/gryphus_portfolio_2.7f2725b4.png","7f2725b47a404e14fee4cc866ba99882"],["/static/media/gryphus_portfolio_3.95b83e9a.png","95b83e9a34facd5e988984fb63625a08"],["/static/media/gryphus_portfolio_4.61c79616.png","61c79616f676e7b66dc8308a81c32ceb"],["/static/media/gryphus_portfolio_5.8d8cc441.png","8d8cc441196ef83e1f7b53a77f97c829"],["/static/media/gryphus_portfolio_6.aa6453e8.png","aa6453e8fa81b645887a76fca5e8c2a3"],["/static/media/juke_highlights_portfolio_1.2bcfbf91.png","2bcfbf911fb7b447ec5f7be0643df755"],["/static/media/juke_highlights_portfolio_2.b88a28c3.png","b88a28c30e4594cf5d99874c34a95ea9"],["/static/media/profile_picture.74eb5e48.jpg","74eb5e4859e14d41002957feb048ecb1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});