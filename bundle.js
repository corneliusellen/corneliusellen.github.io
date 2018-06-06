!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=15)}([function(n,t,e){"use strict";n.exports={baseURL:function(){window.location.hostname;return"https://outbreak-ready-be.herokuapp.com"}}},function(n,t,e){"use strict";var o=e(0).baseURL();n.exports={patchQuestionnaire:function(n,t){fetch(o+"/api/v1/questionnaires/1",{method:""+n,headers:{"Content-Type":"application/json",Questions:""+JSON.stringify(t)}})}}},function(n,t,e){"use strict";var o=e(0).baseURL(),r=function(n){return fetch(o+"/api/v1/questionnaires/1/"+n,{method:"GET",headers:{"Content-Type":"application/json"}})},i=function(n){return n.forEach(function(n){s(n)})},s=function(n){$(".section.menu-items").append('<div class="selection" draggable="true">\n      <div class="select dish">'+n.dish+'</div>\n      <div class="select ingredients">'+n.ingredients+"</div>\n    </div>")},a=function(n){return n.forEach(function(n){c(n)})},c=function(n){1==n.section_id?u(n):2==n.section_id?l(n):3==n.section_id&&f(n)},u=function(n){$(".section.demographic").append('<div class="selection" draggable="true">\n      <div class="select question">'+n.text+'</div>\n      <div class="select answer">'+n.answers+"</div>\n    </div>")},l=function(n){$(".section.clinical").append('<div class="selection" draggable="true">\n      <div class="select question">'+n.text+'</div>\n      <div class="select answer">'+n.answers+"</div>\n    </div>")},f=function(n){$(".section.exposure").append('<div class="selection" draggable="true">\n      <div class="select question">'+n.text+'</div>\n      <div class="select answer">'+n.answers+"</div>\n    </div>")},p=function(n){return n.forEach(function(n){d(n)})},d=function(n){$(".options.exposure").append('<button type="button" name="button" value="'+n.id+'">'+n.text+"</button>")},h=function(n){return n.forEach(function(n){m(n)})},m=function(n){$(".options.clinical").append('<button type="button" name="button" value="'+n.id+'">'+n.text+"</button>")},g=function(n){return n.forEach(function(n){b(n)})},b=function(n){$(".options.demographics").append('<button type="button" name="button" value="'+n.id+'">'+n.text+"</button>")},v=function(n){return n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={getDemographics:function(){r("demographics").then(function(n){return v(n)}).then(function(n){return g(n)}).catch(function(n){return console.error({error:n})})},getClinicals:function(){r("clinicals").then(function(n){return v(n)}).then(function(n){return h(n)}).catch(function(n){return console.error({error:n})})},getExposures:function(){r("exposures").then(function(n){return v(n)}).then(function(n){return p(n)}).catch(function(n){return console.error({error:n})})},getQuestions:function(){r("questions").then(function(n){return v(n)}).then(function(n){return a(n)}).catch(function(n){return console.error({error:n})})},getMenuItems:function(){r("foods").then(function(n){return v(n)}).then(function(n){return i(n)}).catch(function(n){return console.error({error:n})})}}},function(n,t,e){"use strict";var o=e(0).baseURL(),r=function(n){return n.forEach(function(n){i(n)})},i=function(n){n.tags.forEach(function(t){s(t,n.name)})},s=function(n,t){0==n.options.length?$(".options."+t).children().append('<button type="button" value="'+n.id+'" name="button">'+n.name+"</button>"):($(".options."+t).append('<div class="category-box '+n.name+'"><p>'+n.name+"</p></div>"),n.options.forEach(function(t){$(".category-box."+n.name).append('<button type="button" value="'+t.tag_id+'" name="button">'+t.name+"</button>")}))},a=function(n){return n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={getTags:function(){var n,t;(n="GET",fetch(o+"/api/v1/tags",{method:""+n,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).then(function(n){return a(n)}).then(function(n){return r(n)}).catch(function(n){return console.error({error:n})})},postTags:function(n,t){fetch(o+"/api/v1/questionnaires/1/intakes",{method:""+n,headers:{"Content-Type":"application/json",Tags:""+JSON.stringify(t)}})}}},function(n,t,e){"use strict";var o=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var s,a=n[Symbol.iterator]();!(o=(s=a.next()).done)&&(e.push(s.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=e(0).baseURL(),i=function(n){return n.forEach(function(n){s(n)})},s=function(n){$(".menus").append('<div class="menu '+n.id+'">\n      <h2>Menu Name: '+n.name+"</h2>\n      <p>(click menu name to select all)</p>\n    </div>"),n.foods.forEach(function(t){a(n.id,t)})},a=function(n,t){$("body").find(".menu."+n).append('<div class="food-button">\n      <p>Item: '+t.name+"</p>\n      <p>Ingredients: "+t.description+"</p>\n    </div>")},c=function(n){return n.forEach(function(n){u(n)})},u=function(n){$(".options-restaurants").append('<div class="small-box restaurant" value='+n.venue_id+">\n      <p>"+n.name+"</p>\n      <p>"+n.address+"</p>\n    </div>")},l=function(n){return n.json().then(function(t){if(!n.ok){var e={status:n.status,statusTest:n.statusText,json:t};return Promise.reject(e)}return t})};n.exports={getRestaurants:function(){var n=$(".restaurant-search").find("input"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),function(n,t,e){return fetch(r+"/api/v1/search/restaurants?near="+t+"&query="+e,{method:""+n,headers:{"Content-Type":"application/json"}})}("GET",""+t[1],""+t[0]).then(function(n){return l(n)}).then(function(n){return c(n)}).catch(function(n){return console.error({error:n})})},getMenus:function(){(function(n,t){return fetch(r+"/api/v1/search/menus",{method:""+n,headers:{"Content-Type":"application/json",venue_id:""+t}})})("GET",$("body").find(".marked")[1].getAttribute("value")).then(function(n){return l(n)}).then(function(n){return i(n)}).catch(function(n){return console.error({error:n})})},postFoods:function(n){!function(n,t){fetch(r+"/api/v1/questionnaires/1/foods",{method:""+n,headers:{"Content-Type":"application/json",foods:""+JSON.stringify(t)}})}("POST",n)}}},function(n,t,e){"use strict";var o=function(){return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var s,a=n[Symbol.iterator]();!(o=(s=a.next()).done)&&(e.push(s.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=e(4),i=e(3),s=e(2),a=e(1);n.exports={marked:function(){$("body").on("click","button",function(){$(this).toggleClass("marked")})},markedSmallBox:function(){$("body").on("click",".small-box",function(){$(this).toggleClass("marked"),r.getMenus(),$(".header.menu-items").slideDown("fast"),$(".menus").slideDown("fast")})},markedFoodButton:function(){$("body").on("click",".food-button",function(){$(this).toggleClass("marked")})},markedAllMenuItems:function(){$("body").on("click",".menu h2",function(){$(this).siblings(".food-button").toggleClass("marked")})},etiologyIdentified:function(){$("#etiology-yes").on("click",function(){$("#etiology-no").removeClass("marked"),$(".symptom").hide(),$(".Etiology").slideDown("fast"),$(".options.symptom").find("button").removeClass("marked")}),$("#etiology-no").on("click",function(){$("#etiology-yes").removeClass("marked"),$(".Etiology").hide(),$(".symptom").slideDown("fast"),$(".options.Etiology").find("button").removeClass("marked")})},symptomOptions:function(){$(".options.symptom").find("button").one("click",function(){$(".Setting").slideDown("fast")})},etiologyOptions:function(){$("body").find(".options.Etiology").one("click","button",function(){$(".Setting").slideDown("fast")})},settingOptions:function(){$("body").find(".options.Setting").one("click","button",function(){$(".Transmission").slideDown("fast"),$(".one-link.intake").slideDown("fast")})},goBack:function(){$(".link.back").on("click",function(){window.history.back()})},searchRestaurants:function(){$(".restaurant-search-button").on("click",function(){r.getRestaurants(),$(".header.restaurants").slideDown("fast"),$(".options-restaurants").slideDown("fast")})},populateTags:function(){i.getTags()},sendIntake:function(){$(".link.next.intake").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),t.splice(0,1),i.postTags("POST",t)})},sendDemographics:function(){$(".link.next.demographic").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),a.patchQuestionnaire("PUT",t)})},sendClinicals:function(){$(".link.next.clinical").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),a.patchQuestionnaire("PUT",t)})},sendExposures:function(){$(".link.next.exposure").on("click",function(){var n=$("body").find(".marked"),t=[];Object.entries(n).forEach(function(n){var e=o(n,2),r=(e[0],e[1]);t.push(r.value)}),t.splice(-2,2),a.patchQuestionnaire("PUT",t)})},sendFoods:function(){$(".link.next.restaurant").on("click",function(){var n=[],t=$("body").find(".marked");t.splice(0,2),Object.entries(t).forEach(function(t){var e=o(t,2),r=(e[0],e[1]);n.push(r)}),n.splice(-2,2);var e=[];n.forEach(function(n){e.push([n.getElementsByTagName("p")[0].innerHTML,n.getElementsByTagName("p")[1].innerHTML])}),r.postFoods(e)})},populateDemographics:function(){s.getDemographics()},populateClinicals:function(){s.getClinicals()},populateExposures:function(){s.getExposures()},populateQuestions:function(){s.getQuestions(),s.getMenuItems()}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){var o,r,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),a=function(n){var t={};return function(n){if("function"==typeof n)return n();if(void 0===t[n]){var e=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),c=null,u=0,l=[],f=e(6);function p(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](o.parts[s]);for(;s<o.parts.length;s++)r.parts.push(v(o.parts[s],t))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(v(o.parts[s],t));i[o.id]={id:o.id,refs:1,parts:a}}}}function d(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(a):e.push(o[s]={id:s,parts:[a]})}return e}function h(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,r)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function g(n){var t=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),b(t,n.attrs),h(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var s=u++;e=c||(c=g(t)),o=k.bind(null,e,s,!1),r=k.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),h(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=f(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([o],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,t),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=g(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return p(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var s=e[r];(a=i[s.id]).refs--,o.push(a)}n&&p(d(n,t),t);for(r=0;r<o.length;r++){var a;if(0===(a=o[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete i[a.id]}}}};var y,x=(y=[],function(n,t){return y[n]=t,y.filter(Boolean).join("\n")});function k(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(i,s[t]):n.appendChild(i)}}},function(n,t,e){n.exports=e.p+"8810db825f77c760eb816c9b1b9c5911.png"},function(n,t,e){n.exports=e.p+"a7a65bad96b6c72d21859e81ad765c02.otf"},function(n,t,e){n.exports=e.p+"ef5a32c267adadd7f5ebaa8f89e62b45.otf"},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var s=n[r];"number"==typeof s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t,e){var o=e(12);(n.exports=e(11)(!1)).push([n.i,'@font-face {\n  font-family: "Maven-light";\n  src: url('+o(e(10))+'); }\n\n@font-face {\n  font-family: "Maven-heavy";\n  src: url('+o(e(9))+'); }\n\nbody, html {\n  margin: 0px;\n  height: 100%;\n  color: #1F2232;\n  font-family: "Maven-heavy", Arial, Helvetica, sans-serif;\n  font-size: 18px; }\n\n.main {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.header {\n  font-size: 22px;\n  background-color: #075290;\n  color: white; }\n\n.subheader {\n  background-color: #a8e2f9; }\n\n.options {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.options-restaurants {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.small-box {\n  display: flex;\n  flex-direction: column;\n  border: 3px solid #a8e2f9;\n  background-color: white;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #1F2232;\n  font-family: Arial; }\n\n.category-box {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column; }\n\n.category-box-big {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\nbutton {\n  border: 3px solid #a8e2f9;\n  background-color: white;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #1F2232;\n  font-family: Arial;\n  width: 230px; }\n\nbutton:focus {\n  outline: 0; }\n\n.one-link {\n  margin-top: 20px;\n  display: flex;\n  justify-content: flex-end; }\n\n.links {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between; }\n\n.link {\n  background-color: #075290;\n  color: white;\n  text-transform: uppercase;\n  font-size: 20px; }\n\n.link:hover {\n  background-color: #05365f;\n  color: white; }\n\n.welcome-box {\n  display: flex;\n  justify-content: center;\n  background-color: #71d0f5;\n  margin-top: 130px;\n  min-height: 160px; }\n  .welcome-box h2 {\n    color: white;\n    text-shadow: 1px 1px #596475;\n    padding: 10px;\n    font-size: 50px;\n    font-weight: 1500; }\n  .welcome-box p {\n    align-self: flex-end;\n    padding-bottom: 42px; }\n\n.section {\n  display: flex;\n  flex-direction: column; }\n\n.questions {\n  display: flex;\n  flex-direction: column; }\n\n.selection {\n  display: flex;\n  justify-content: space-between;\n  border: 3px solid #a8e2f9;\n  background-color: white;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 14px;\n  color: #1F2232;\n  font-family: Arial; }\n\n.select {\n  padding: 20px;\n  max-width: 600px; }\n\n.menus {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px; }\n  .menu h2 {\n    cursor: pointer; }\n\n.food-button {\n  display: flex;\n  flex-direction: column;\n  border: 3px solid #a8e2f9;\n  background-color: white;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 10px 20px;\n  letter-spacing: 1px;\n  font-size: 10px;\n  color: #1F2232;\n  font-family: Arial;\n  max-width: 200px; }\n\n.marked {\n  background-color: #075290;\n  color: white; }\n\n.index {\n  background-image: url('+o(e(8))+");\n  background-repeat: no-repeat;\n  height: 100%;\n  background-size: cover;\n  background-position: center; }\n\n.start {\n  margin-top: 220px;\n  background-color: white;\n  color: #1F2232; }\n\n.restaurant-search-button:hover {\n  background-color: #075290;\n  color: white; }\n",""])},function(n,t,e){var o=e(13);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(7)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){"use strict";e(14);var o=e(5),r=location.pathname.split("/").slice(-1)[0];$(document).ready(function(){i(r),$(".Etiology").hide(),$(".symptom").hide(),$(".Setting").hide(),$(".Transmission").hide(),$(".one-link.intake").hide(),$(".header.restaurants").hide(),$(".options-restaurants").hide(),$(".header.menu-items").hide(),$(".menus").hide(),o.etiologyIdentified(),o.symptomOptions(),o.etiologyOptions(),o.settingOptions(),o.goBack(),o.searchRestaurants(),o.marked(),o.markedSmallBox(),o.markedFoodButton(),o.markedAllMenuItems(),o.sendIntake(),o.sendDemographics(),o.sendClinicals(),o.sendExposures(),o.sendFoods()});var i=function(n){"intake.html"===n||"intake"===n?o.populateTags():"demographics.html"===n||"demographics"===n?o.populateDemographics():"clinical.html"===n||"clinical"===n?o.populateClinicals():"exposures.html"===n||"exposures"===n?o.populateExposures():"builder.html"!==n&&"builder"!==n||o.populateQuestions()}}]);