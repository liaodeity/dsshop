(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-set"],{"0143":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("2edd")),a={goLogin:function(t,e,n){s.default.setPostMessage("login",t,"登录中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},goRegister:function(t,e,n){s.default.setPostMessage("register",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},toVerifyEmail:function(t,e,n){s.default.setPostMessage("verifyEmail",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},findPassword:function(t,e,n){s.default.setPostMessage("findPassword",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},authorizedPhone:function(t,e,n){s.default.setPost("authorizedPhone",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},getRegisterCellphoneCode:function(t,e,n){s.default.setPost("getRegisterCellphoneCode",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},getRegisterEmailCode:function(t,e,n){s.default.setPostMessage("getRegisterEmailCode",t,"处理中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},logout:function(t,e,n){s.default.setPostMessage("logout",{},"退出中",(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},user:function(t,e){s.default.setGetMessage("user",{},"加载中",(function(e){t(e)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},setUser:function(t,e,n){s.default.setPost("user",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},setNotification:function(t,e,n){s.default.setPost("userNotification",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},unsubscribe:function(t,e,n){s.default.setPost("unsubscribe",t,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};e.default=a},"0221":function(t,e,n){var i=n("33775");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("15196438",i,!0,{sourceMap:!1,shadowMode:!1})},"2edd":function(t,e,n){"use strict";var i=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),n("5319");n("ffe2");var s=i(n("ee1d"));function a(t,e,n,i,s,a){this.requestLoading(t,e,n,i,"",s,a)}function o(t,e,n,i){this.requestLoading(t,"get",e,"","",n,i)}function u(t,e,n,i,s){this.requestLoading(t,"get",e,"",n,i,s)}function c(t,e,n,i){this.requestLoading(t,"post",e,"","",n,i)}function l(t,e,n,i,s){this.requestLoading(t,"post",e,"",n,i,s)}function r(t,e,n,i){this.requestLoading(t,"put",e,"","",n,i)}function f(t,e,n,i,s){this.requestLoading(t,"put",e,"",n,i,s)}function d(t,e,n,i){this.requestLoading(t,"delete",e,"","",n,i)}function g(t,e,n,i,s){this.requestLoading(t,"delete",e,"",n,i,s)}function v(t,e,n,i,a,o,u){uni.showNavigationBarLoading(),""!=a&&uni.showLoading({title:a});var c=uni.getStorageSync("dsshopApplytoken");uni.request({url:s.default.BaseURL+t,data:n,header:i||{"content-type":"application/json","apply-secret":s.default.secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+c},method:e||"get",success:function(t){uni.hideNavigationBarLoading(),""!=a&&uni.hideLoading(),200==t.statusCode?"ok"===t.data.result?o(t.data.message):u({message:t.data}):500==t.statusCode?u({message:"服务器异常，请重新尝试"}):302==t.statusCode?u({message:"登录超时，请重新登录"}):401==t.statusCode?u({message:t.data.message}):u({message:"服务器异常，请重新尝试"})},fail:function(t){uni.hideNavigationBarLoading(),""!=a&&uni.hideLoading(),t.data?u({message:t.data.message}):u({message:"服务器异常"})},complete:function(t){}})}t.exports={request:a,setGet:o,setGetMessage:u,setPost:c,setPostMessage:l,setPut:r,setPutMessage:f,setDelete:d,setDeleteMessage:g,requestLoading:v}},33775:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-26d56a46]{background:#f8f8f8}.list-cell[data-v-26d56a46]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-26d56a46]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-26d56a46]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-26d56a46]{background:#fafafa}.list-cell.b-b[data-v-26d56a46]:after{left:%?30?%}.list-cell.m-t[data-v-26d56a46]{margin-top:%?16?%}.list-cell .cell-more[data-v-26d56a46]{-webkit-align-self:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-26d56a46]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-26d56a46]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-26d56a46]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-26d56a46]{background:#f8f8f8}',""]),t.exports=e},"4e1d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/userinfo/userinfo")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("个人资料")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/set/message")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("通知与提醒")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearCache()}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("清除缓存")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/set/about")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("关于我们")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo("/pages/set/unsubscribe")}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("注销服务")]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell log-out-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogout.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cell-tit"},[t._v("退出登录")])],1)],1)},a=[]},"882b":function(t,e,n){"use strict";n.r(e);var i=n("4e1d"),s=n("9aca");for(var a in s)"default"!==a&&function(t){n.d(e,t,(function(){return s[t]}))}(a);n("b391");var o,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,"26d56a46",null,!1,i["a"],o);e["default"]=c.exports},"9aca":function(t,e,n){"use strict";n.r(e);var i=n("bc7d"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},b391:function(t,e,n){"use strict";var i=n("0221"),s=n.n(i);s.a},bc7d:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("5530")),a=i(n("0143")),o=n("2f62"),u={data:function(){return{notification:!1}},onShow:function(){this.loginCheck()},methods:(0,s.default)((0,s.default)({},(0,o.mapMutations)(["logout","loginCheck"])),{},{testVersion:function(){this.$api.msg("已经最新了")},clearCache:function(){uni.removeStorageSync("dsshopOrderList"),uni.removeStorageSync("dsshopCartList"),this.$api.msg("缓存清除成功")},navTo:function(t){uni.navigateTo({url:t})},switchNotification:function(t){this.notification=t.detail.value},toLogout:function(){var t=this;uni.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&a.default.logout({},(function(e){t.logout(),setTimeout((function(){uni.navigateBack()}),200)}))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=u}}]);