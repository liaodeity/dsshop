(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"1c02":function(e,t,i){"use strict";var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("2edd")),s={getList:function(e,t,i){a.default.setGetMessage("shipping",e,"加载中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},getOne:function(e,t,i){a.default.setPostMessage("shippingOne",e,"加载中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},getDetails:function(e,t,i,n){a.default.setGetMessage("shipping/"+e,t,"加载中",(function(e){i(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},createSubmit:function(e,t,i){a.default.setPostMessage("shipping",e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},updateSubmit:function(e,t,i){a.default.setPostMessage("shipping/"+e.id,e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},deleteSubmit:function(e,t,i){a.default.setPostMessage("shippingDelete/"+e,{},"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},checkSubmit:function(e,t,i){a.default.setPostMessage("shippingCheck",e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))}};t.default=s},"2edd":function(e,t,i){"use strict";var n=i("4ea4");i("4d63"),i("ac1f"),i("25f0"),i("5319");i("ffe2");var a=n(i("ee1d"));function s(e,t,i,n,a,s){this.requestLoading(e,t,i,n,"",a,s)}function o(e,t,i,n){this.requestLoading(e,"get",t,"","",i,n)}function d(e,t,i,n,a){this.requestLoading(e,"get",t,"",i,n,a)}function c(e,t,i,n){this.requestLoading(e,"post",t,"","",i,n)}function u(e,t,i,n,a){this.requestLoading(e,"post",t,"",i,n,a)}function r(e,t,i,n){this.requestLoading(e,"put",t,"","",i,n)}function f(e,t,i,n,a){this.requestLoading(e,"put",t,"",i,n,a)}function l(e,t,i,n){this.requestLoading(e,"delete",t,"","",i,n)}function g(e,t,i,n,a){this.requestLoading(e,"delete",t,"",i,n,a)}function p(e,t,i,n,s,o,d){uni.showNavigationBarLoading(),""!=s&&uni.showLoading({title:s});var c=uni.getStorageSync("dsshopApplytoken");uni.request({url:a.default.BaseURL+e,data:i,header:n||{"content-type":"application/json","apply-secret":a.default.secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+c},method:t||"get",success:function(e){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),200==e.statusCode?"ok"===e.data.result?o(e.data.message):d({message:e.data}):500==e.statusCode?d({message:"服务器异常，请重新尝试"}):302==e.statusCode?d({message:"登录超时，请重新登录"}):401==e.statusCode?d({message:e.data.message}):d({message:"服务器异常，请重新尝试"})},fail:function(e){uni.hideNavigationBarLoading(),""!=s&&uni.hideLoading(),e.data?d({message:e.data.message}):d({message:"服务器异常"})},complete:function(e){}})}e.exports={request:s,setGet:o,setGetMessage:d,setPost:c,setPostMessage:u,setPut:r,setPutMessage:f,setDelete:l,setDeleteMessage:g,requestLoading:p}},5355:function(e,t,i){"use strict";var n=i("e221"),a=i.n(n);a.a},"912d":function(e,t,i){"use strict";i.r(t);var n=i("c09e"),a=i("eb3f");for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("5355");var o,d=i("f0c5"),c=Object(d["a"])(a["default"],n["b"],n["c"],!1,null,"7f6d269d",null,!1,n["a"],o);t["default"]=c.exports},b9ca:function(e,t,i){"use strict";var n=i("4ea4");i("99af"),i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("5530")),s=n(i("1c02")),o=i("2f62"),d={data:function(){return{source:0,addressList:[],type:0,addressData:{name:"",cellphone:"",location:"",address:"",latitude:"",longitude:"",house:"",default:!1}}},onLoad:function(e){this.loginCheck(),e.type&&(this.type=e.type),this.loadData()},methods:(0,a.default)((0,a.default)({},(0,o.mapMutations)(["loginCheck"])),{},{loadData:function(){var e=this;s.default.getList({},(function(t){e.addressList=t.data}))},checkAddress:function(e){var t=this;e.defaults?"1"===t.type&&(t.$api.prePage().refreshAddress(e),uni.navigateBack()):uni.showModal({content:"设为默认地址？",success:function(i){i.confirm?s.default.checkSubmit(e,(function(i){"1"===t.type?(t.$api.prePage().refreshAddress(e),uni.navigateBack()):(t.$api.msg("设置成功"),t.loadData())})):"1"===t.type&&(t.$api.prePage().refreshAddress(e),uni.navigateBack())}})},addAddress:function(e,t){var i="";t&&(i="&data="+JSON.stringify(t)),uni.navigateTo({url:"/pages/address/addressManage?type=".concat(e).concat(i)})},getWxaddAddress:function(){var e=this;if(!e.configURL.lbsQq)return e.$api.msg("请配置config.js的lbsQq参数"),!1},refreshList:function(){this.loadData()},deleteAddress:function(e,t){var i=this,n=this;uni.showModal({content:"确定要删除该地址吗？",success:function(a){if(a.confirm){if(t.defaults)return i.$api.msg("默认收货地址无法删除"),!1;s.default.deleteSubmit(t.id,(function(t){n.addressList.splice(e,1)}))}}})}})};t.default=d},c09e:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content b-t"},[e._l(e.addressList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"list b-b",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.checkAddress(t)}}},[i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"address-box"},[t.defaults?i("v-uni-text",{staticClass:"tag"},[e._v("默认")]):e._e(),i("v-uni-text",{staticClass:"address"},[e._v(e._s(t.location?t.location+"(":"")+e._s(t.address)+" "+e._s(t.house?")"+t.house:""))])],1),i("v-uni-view",{staticClass:"u-box"},[i("v-uni-text",{staticClass:"name"},[e._v(e._s(t.name))]),i("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.cellphone))])],1)],1),i("v-uni-text",{staticClass:"yticon icon-bianji",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.addAddress("edit",t)}}}),i("v-uni-text",{staticClass:"cuIcon-delete",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.deleteAddress(n,t)}}})],1)})),0==e.addressList.length?i("v-uni-view",[i("v-uni-view",{staticClass:"no-data flex justify-center"},[e._v("还没有收货地址, 请添加~")])],1):e._e(),i("v-uni-button",{staticClass:"add-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增地址")])],2)},s=[]},e221:function(e,t,i){var n=i("fe73");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("9665f360",n,!0,{sourceMap:!1,shadowMode:!1})},eb3f:function(e,t,i){"use strict";i.r(t);var n=i("b9ca"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},fe73:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-7f6d269d]{padding-bottom:%?120?%}.content[data-v-7f6d269d]{position:relative}.list[data-v-7f6d269d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-7f6d269d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-7f6d269d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-7f6d269d]{font-size:%?24?%;color:#fa436a;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;min-width:%?80?%;line-height:1}.address-box .address[data-v-7f6d269d]{font-size:%?30?%;color:#303133}.u-box[data-v-7f6d269d]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-7f6d269d]{margin-right:%?30?%}.icon-bianji[data-v-7f6d269d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-7f6d269d]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}.add-btn1[data-v-7f6d269d]{position:fixed;left:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?290?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}.add-btn2[data-v-7f6d269d]{position:fixed;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?290?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}.cuIcon-delete[data-v-7f6d269d]{padding-left:%?10?%;padding-top:%?18?%;height:%?80?%;font-size:%?40?%;color:#909399}.no-data[data-v-7f6d269d]{padding-top:%?400?%;font-size:%?32?%}',""]),e.exports=t}}]);