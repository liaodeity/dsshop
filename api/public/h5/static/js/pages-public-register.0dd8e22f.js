(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-register"],{"0143":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("2edd")),r={goLogin:function(t,e,n){o.default.setPostMessage("login",t,"登录中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},goRegister:function(t,e,n){o.default.setPostMessage("register",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},toVerifyEmail:function(t,e,n){o.default.setPostMessage("verifyEmail",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},findPassword:function(t,e,n){o.default.setPostMessage("findPassword",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},authorizedPhone:function(t,e,n){o.default.setPost("authorizedPhone",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},getRegisterCellphoneCode:function(t,e,n){o.default.setPost("getRegisterCellphoneCode",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},getRegisterEmailCode:function(t,e,n){o.default.setPostMessage("getRegisterEmailCode",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},logout:function(t,e,n){o.default.setPostMessage("logout",{},"退出中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},user:function(t,e){o.default.setGetMessage("user",{},"加载中",(function(e){t(e)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},setUser:function(t,e,n){o.default.setPost("user",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},setNotification:function(t,e,n){o.default.setPost("userNotification",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},unsubscribe:function(t,e,n){o.default.setPost("unsubscribe",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=r},"14be":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-e8b83f12]{background:#fff}.scroll-Y[data-v-e8b83f12]{height:%?300?%;line-height:%?50?%}.container[data-v-e8b83f12]{padding-top:115px;position:relative;width:100vw;height:100vh;overflow:hidden;background:#fff}.wrapper[data-v-e8b83f12]{position:relative;z-index:90;background:#fff;padding-bottom:%?40?%}.back-btn[data-v-e8b83f12]{position:absolute;left:%?40?%;z-index:9999;padding-top:0;top:%?40?%;font-size:%?40?%;color:#303133}.left-top-sign[data-v-e8b83f12]{font-size:%?120?%;color:#f8f8f8;position:relative;left:%?-16?%}.right-top-sign[data-v-e8b83f12]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.right-top-sign[data-v-e8b83f12]:before, .right-top-sign[data-v-e8b83f12]:after{display:block;content:"";width:%?400?%;height:%?80?%;background:#b4f3e2}.right-top-sign[data-v-e8b83f12]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);border-radius:0 50px 0 0}.right-top-sign[data-v-e8b83f12]:after{position:absolute;right:%?-198?%;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);border-radius:50px 0 0 0\n  /* background: pink; */}.left-bottom-sign[data-v-e8b83f12]{position:absolute;left:%?-270?%;bottom:%?-320?%;border:%?100?% solid #d0d1fd;border-radius:50%;padding:%?180?%}.welcome[data-v-e8b83f12]{position:relative;left:%?50?%;top:%?-90?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-e8b83f12]{padding:0 %?60?%}.input-item[data-v-e8b83f12]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;border-radius:4px;margin-bottom:%?50?%}.input-item[data-v-e8b83f12]:last-child{margin-bottom:0}.input-item .tit[data-v-e8b83f12]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-e8b83f12]{height:%?60?%;font-size:%?30?%;color:#303133;width:100%}.confirm-btn[data-v-e8b83f12]{width:%?630?%;height:%?76?%;line-height:%?76?%;border-radius:50px;margin-top:%?70?%;background:#fa436a;color:#fff;font-size:%?32?%}.confirm-btn[data-v-e8b83f12]:after{border-radius:100px}.forget-section[data-v-e8b83f12]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:%?40?%}.register-section[data-v-e8b83f12]{position:absolute;left:0;bottom:%?50?%;width:100%;font-size:%?26?%;color:#606266;text-align:center}.register-section uni-text[data-v-e8b83f12]{color:#4399fc;margin-left:%?10?%}.cu-form-group .title[data-v-e8b83f12]{width:%?160?%;text-align:right}body.?%PAGE?%[data-v-e8b83f12]{background:#fff}',""]),t.exports=e},"1da1":function(t,e,n){"use strict";function i(t,e,n,i,o,r,a){try{var s=t[r](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(i,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var a=t.apply(e,n);function s(t){i(a,o,r,s,u,"next",t)}function u(t){i(a,o,r,s,u,"throw",t)}s(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},"2edd":function(t,e,n){"use strict";var i=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),n("5319");n("ffe2");var o=i(n("ee1d"));function r(t,e,n,i,o,r){this.requestLoading(t,e,n,i,"",o,r)}function a(t,e,n,i){this.requestLoading(t,"get",e,"","",n,i)}function s(t,e,n,i,o){this.requestLoading(t,"get",e,"",n,i,o)}function u(t,e,n,i){this.requestLoading(t,"post",e,"","",n,i)}function c(t,e,n,i,o){this.requestLoading(t,"post",e,"",n,i,o)}function l(t,e,n,i){this.requestLoading(t,"put",e,"","",n,i)}function d(t,e,n,i,o){this.requestLoading(t,"put",e,"",n,i,o)}function f(t,e,n,i){this.requestLoading(t,"delete",e,"","",n,i)}function p(t,e,n,i,o){this.requestLoading(t,"delete",e,"",n,i,o)}function h(t,e,n,i,r,a,s){uni.showNavigationBarLoading(),""!=r&&uni.showLoading({title:r});var u=uni.getStorageSync("dsshopApplytoken");uni.request({url:o.default.BaseURL+t,data:n,header:i||{"content-type":"application/json","apply-secret":o.default.secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+u},method:e||"get",success:function(t){uni.hideNavigationBarLoading(),""!=r&&uni.hideLoading(),200==t.statusCode?"ok"===t.data.result?a(t.data.message):s({message:t.data}):500==t.statusCode?s({message:"服务器异常，请重新尝试"}):302==t.statusCode?s({message:"登录超时，请重新登录"}):401==t.statusCode?s({message:t.data.message}):s({message:"服务器异常，请重新尝试"})},fail:function(t){uni.hideNavigationBarLoading(),""!=r&&uni.hideLoading(),t.data?s({message:t.data.message}):s({message:"服务器异常"})},complete:function(t){}})}t.exports={request:r,setGet:a,setGetMessage:s,setPost:u,setPostMessage:c,setPut:l,setPutMessage:d,setDelete:f,setDeleteMessage:p,requestLoading:h}},"587e":function(t,e,n){var i=n("14be");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("f6080228",i,!0,{sourceMap:!1,shadowMode:!1})},8941:function(t,e,n){"use strict";var i=n("587e"),o=n.n(i);o.a},"8e4f":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"left-bottom-sign"}),n("v-uni-view",{staticClass:"right-top-sign"}),n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"left-top-sign"},[t._v("DSSHOP")]),n("v-uni-view",{staticClass:"welcome"},[t._v("注册")]),n("v-uni-view",{staticClass:"bg-white"},[n("v-uni-form",[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("手机号码")]),n("v-uni-input",{attrs:{type:"number",maxlength:"11"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.cellphoneInput.apply(void 0,arguments)}},model:{value:t.ruleForm.cellphone,callback:function(e){t.$set(t.ruleForm,"cellphone",e)},expression:"ruleForm.cellphone"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("验证码")]),n("v-uni-input",{attrs:{type:"number",maxlength:"5"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.codeInput.apply(void 0,arguments)}},model:{value:t.ruleForm.code,callback:function(e){t.$set(t.ruleForm,"code",e)},expression:"ruleForm.code"}}),n("v-uni-button",{staticClass:"cu-btn bg-red shadow round getcode",attrs:{disabled:t.disabled},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.codename+t.seconds+t.unit))])],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("密码")]),n("v-uni-input",{attrs:{type:"password",password:!0},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.passwordInput.apply(void 0,arguments)}},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("重复密码")]),n("v-uni-input",{attrs:{type:"password",password:!0},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.rPasswordInput.apply(void 0,arguments)}},model:{value:t.ruleForm.rPassword,callback:function(e){t.$set(t.ruleForm,"rPassword",e)},expression:"ruleForm.rPassword"}})],1)],1)],1),n("v-uni-view",{staticClass:" flex flex-direction padding"},[n("v-uni-button",{staticClass:"cu-btn round bg-red shadow lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRegister.apply(void 0,arguments)}}},[t._v("注册")])],1)],1),n("v-uni-view",{staticClass:"register-section"},[t._v("已有账号?"),n("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("马上登录")])],1),n("v-uni-view",{staticClass:"cu-modal",class:"agreement"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[t._v("注册协议及隐私政策")])],1),n("v-uni-view",{staticClass:"padding text-left"},[n("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-y":"true"}},[n("v-uni-rich-text",{attrs:{nodes:t.nodes}})],1)],1),n("v-uni-view",{staticClass:"bg-white text-left padding text-sm"},[t._v("点击同意即表示您已阅读并同意"),n("span",{staticClass:"text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNavigator(2)}}},[t._v("《dsshop用户注册协议》")]),t._v("与"),n("span",{staticClass:"text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goNavigator(1)}}},[t._v("《dsshop隐私政策》")])]),n("v-uni-view",{staticClass:"grid bg-white col-2 solid-top"},[n("v-uni-view",{staticClass:"padding",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("不同意")]),n("v-uni-view",{staticClass:"bg-red padding",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modalName=""}}},[t._v("同意")])],1)],1)],1)],1)},r=[]},"96cf":function(t,e){!function(e){"use strict";var n,i=Object.prototype,o=i.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=y;var d="suspendedStart",f="suspendedYield",p="executing",h="completed",g={},v={};v[a]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(j([])));b&&b!==i&&o.call(b,a)&&(v=b);var w=C.prototype=k.prototype=Object.create(v);L.prototype=w.constructor=C,C.constructor=L,C[u]=L.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},l.awrap=function(t){return{__await:t}},_(P.prototype),P.prototype[s]=function(){return this},l.AsyncIterator=P,l.async=function(t,e,n,i){var o=new P(y(t,e,n,i));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},l.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,o){return s.type="throw",s.arg=t,e.next=i,o&&(e.method="next",e.arg=n),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&o.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:j(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=n),g}}}function y(t,e,n,i){var o=e&&e.prototype instanceof k?e:k,r=Object.create(o.prototype),a=new N(i||[]);return r._invoke=E(t,n,a),r}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}function k(){}function L(){}function C(){}function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function P(t){function e(n,i,r,a){var s=x(t[n],t,i);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then((function(t){e("next",t,r,a)}),(function(t){e("throw",t,r,a)})):Promise.resolve(c).then((function(t){u.value=t,r(u)}),(function(t){return e("throw",t,r,a)}))}a(s.arg)}var n;function i(t,i){function o(){return new Promise((function(n,o){e(t,i,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=i}function E(t,e,n){var i=d;return function(o,r){if(i===p)throw new Error("Generator is already running");if(i===h){if("throw"===o)throw r;return M()}n.method=o,n.arg=r;while(1){var a=n.delegate;if(a){var s=F(a,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===d)throw i=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var u=x(t,e,n);if("normal"===u.type){if(i=n.done?h:f,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=h,n.method="throw",n.arg=u.arg)}}}function F(t,e){var i=t.iterator[e.method];if(i===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,F(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(i,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){while(++i<t.length)if(o.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=n,e.done=!0,e};return r.next=r}}return{next:M}}function M(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b73c:function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),n("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=i(n("1da1")),r=i(n("5530")),a=i(n("0143")),s=n("2f62"),u={data:function(){return{tabname:["微信授权","短信验证"],codename:"获取验证码",unit:"",TabCur:0,seconds:"",ruleForm:{cellphone:"",code:"",password:"",rPassword:"",uuid:""},nodes:[{name:"span",children:[{type:"text",text:"在您注册成为dsshop用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，"}]},{name:"span",attrs:{style:"text-decoration: underline;"},children:[{type:"text",text:"请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）："}]},{name:"p",children:[{type:"text",text:"《dsshop用户注册协议》"}]},{name:"p",children:[{type:"text",text:"《dsshop隐私政策》"}]},{name:"span",attrs:{style:"text-decoration: underline;"},children:[{type:"text",text:"【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意dsshop可以依据以上的隐私政策内容来处理您的个人信息。"}]},{name:"span",children:[{type:"text",text:"如您对以上协议内容有任何疑问，您可随时与dsshop客服联系。"}]}],disabled:!1,logining:!1,modalName:"agreement"}},onLoad:function(t){this.TabCur=1,t.uuid&&(this.ruleForm.uuid=t.uuid)},methods:(0,r.default)((0,r.default)({},(0,s.mapMutations)(["login"])),{},{inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},toRegister:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var i,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e.ruleForm,o=e,!t.detail.iv){n.next=8;break}i.iv=t.detail.iv,i.session_key=uni.getStorageSync("applyDsshopSession_key"),i.encryptedData=t.detail.encryptedData,n.next=35;break;case 8:if(i.cellphone){n.next=13;break}return e.$api.msg("请填写手机号码"),n.abrupt("return",!1);case 13:if(11==i.cellphone.length){n.next=16;break}return e.$api.msg("手机号长度有误"),n.abrupt("return",!1);case 16:if(r=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/,r.test(i.cellphone)){n.next=20;break}return e.$api.msg("手机号有误"),n.abrupt("return",!1);case 20:if(i.code){n.next=23;break}return e.$api.msg("验证码必须"),n.abrupt("return",!1);case 23:if(5==i.code.length){n.next=26;break}return e.$api.msg("验证码长度有误"),n.abrupt("return",!1);case 26:if(i.password){n.next=29;break}return e.$api.msg("密码必须"),n.abrupt("return",!1);case 29:if(i.rPassword){n.next=32;break}return e.$api.msg("重复密码必须"),n.abrupt("return",!1);case 32:if(i.password==i.rPassword){n.next=35;break}return e.$api.msg("重复密码和密码不一致"),n.abrupt("return",!1);case 35:a.default.goRegister(i,(function(t){o.$api.msg("注册成功"),uni.redirectTo({url:"/pages/public/login"})}));case 36:case"end":return n.stop()}}),n)})))()},tabSelect:function(t){this.TabCur=t.currentTarget.dataset.id,this.scrollLeft=60*(t.currentTarget.dataset.id-1)},toLogin:function(){uni.redirectTo({url:"/pages/public/login"})},goNavigator:function(t){uni.navigateTo({url:"/pages/article/details?list=0&id=".concat(t)})},cellphoneInput:function(t){var e=this.ruleForm;e.cellphone=t.detail.value},codeInput:function(t){var e=this.ruleForm;e.code=t.detail.value},passwordInput:function(t){var e=this.ruleForm;e.password=t.detail.value},rPasswordInput:function(t){var e=this.ruleForm;e.rPassword=t.detail.value},getCode:function(){var t=this;if(!this.ruleForm.cellphone)return this.$api.msg("请填写手机号码"),!1;if(11!=this.ruleForm.cellphone.length)return this.$api.msg("手机号长度有误"),!1;var e=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;if(!e.test(this.ruleForm.cellphone))return this.$api.msg("手机号有误"),!1;a.default.getRegisterCellphoneCode(this.ruleForm,(function(e){t.seconds=60,t.codename="",t.unit="s",t.disabled=!0,t.timer=setInterval((function(){t.seconds=t.seconds-1,0==t.seconds&&(clearInterval(t.timer),t.seconds="",t.codename="获取验证码",t.unit="",t.disabled=!1)}),1e3),e.code&&(t.ruleForm.code=e.code.toString())}))},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null}})};e.default=u},bb0a:function(t,e,n){"use strict";n.r(e);var i=n("8e4f"),o=n("ebab");for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);n("8941");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"e8b83f12",null,!1,i["a"],a);e["default"]=u.exports},ebab:function(t,e,n){"use strict";n.r(e);var i=n("b73c"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=o.a}}]);