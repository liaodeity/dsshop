(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"16dd":function(t,e,n){"use strict";(function(t){n("ebeb");r(n("66fd"));var e=r(n("9f42"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"265a":function(t,e,n){"use strict";var r=n("9288"),a=n.n(r);a.a},9288:function(t,e,n){},"9f42":function(t,e,n){"use strict";n.r(e);var r=n("c247"),a=n("b900");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("265a");var i,s=n("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},b900:function(t,e,n){"use strict";n.r(e);var r=n("deb9"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},c247:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={uniLoadMore:function(){return n.e("components/uni-load-more/uni-load-more").then(n.bind(null,"7e40"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.navList,(function(e,n){var r=t.__get_orig(e),a=t.__map(e.orderList,(function(e,n){var r=t.__get_orig(e),a=t.__map(e.goods_list,(function(e,n){var r=t.__get_orig(e),a=t._f("smallImage")(e.img);return{$orig:r,f0:a}})),o=t._f("1000")(e.total);return{$orig:r,l0:a,f1:o}}));return{$orig:r,l1:a}})));t.$mp.data=Object.assign({},{$root:{l2:n}})},o=[]},deb9:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),a=n("2f62"),o=i(n("3589"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function i(t){s(o,r,a,i,c,"next",t)}function c(t){s(o,r,a,i,c,"throw",t)}i(void 0)}))}}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=function(){n.e("components/uni-load-more/uni-load-more").then(function(){return resolve(n("7e40"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/empty").then(function(){return resolve(n("9a4b"))}.bind(null,n)).catch(n.oe)},p={components:{uniLoadMore:f,empty:g},data:function(){var t=this.getDate({format:!0});return{CustomBar:0,tabCurrentIndex:0,page:1,modalName:"",details:{startTime:t,endTime:t},swiperTab:!1,navList:[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待发货",loadingType:"more",orderList:[]},{state:3,text:"待收货",loadingType:"more",orderList:[]}]}},onLoad:function(t){this.tabCurrentIndex=t.state},onShow:function(){this.loginCheck(),this.loadData()},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:d(d({},(0,a.mapMutations)(["loginCheck"])),{},{loadData:function(t,e){var n=this;return c(r.default.mark((function a(){var i,s,c,u;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(i=n.tabCurrentIndex,s=n.navList[i],s.state,"tabChange"!==t&&t||(s.loadingType="more",s.orderList=[]),"loading"!==s.loadingType){r.next=6;break}return r.abrupt("return");case 6:if("noMore"!==s.loadingType){r.next=8;break}return r.abrupt("return");case 8:return s.loadingType="loading",c=[],u=n,r.next=13,o.default.getList({limit:5,page:n.page,index:i,startTime:n.details.startTime,endTime:n.details.endTime,search:e},(function(t){c=t.data,t.last_page>u.page?(u.page++,u.$set(s,"loadingType","more")):u.$set(s,"loadingType","noMore"),c.forEach((function(t){switch(t.state){case 1:t.class="text-orange";break;case 2:t.class="text-red";break;case 3:t.class="text-green";break;case 4:t.class="text-brown";break}t.goods_list.forEach((function(t){t.good_sku&&(t.good_sku.product_sku.forEach((function(e){t.specification?t.specification+=e.value+";":t.specification=e.value+";"})),t.specification=t.specification.substr(0,t.specification.length-1))})),s.orderList.push(t)})),u.$set(s,"loaded",!0),u.swiperTab=!0}));case 13:case"end":return r.stop()}}),a)})))()},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.page=1,this.swiperTab&&this.loadData("tabChange")},tabClick:function(t){this.swiperTab=!1,this.tabCurrentIndex=t,this.page=1,this.loadData("tabChange")},deleteOrder:function(e){var n=this;t.showModal({title:"提示",content:"是否确认删除订单？",success:function(r){r.confirm&&o.default.deleteSubmit(n.navList[n.tabCurrentIndex].orderList[e].id,(function(r){n.navList[n.tabCurrentIndex].orderList.splice(e,1),n.$api.msg("删除成功"),t.hideLoading()}))}})},goPay:function(e){t.navigateTo({url:"/pages/money/pay?id="+e.id})},cancelOrder:function(e){var n=this;t.showModal({title:"提示",content:"是否确认取消订单？",success:function(t){t.confirm&&o.default.getCancel(e.id,(function(t){n.$api.msg("操作成功"),n.refreshOderList()}))}})},orderStateExp:function(t){var e="",n="#fa436a";switch(+t){case 1:e="待付款";break;case 2:e="待发货";break}return{stateTip:e,stateTipColor:n}},goOrder:function(e){t.navigateTo({url:"/pages/order/createOrder?id=".concat(e.id)})},goShowOrder:function(e){t.navigateTo({url:"/pages/order/showOrder?id=".concat(e.id)})},refreshOderList:function(){this.navList=[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待发货",loadingType:"more",orderList:[]},{state:3,text:"待收货",loadingType:"more",orderList:[]}],this.page=1,this.loadData()},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},bindDateChange:function(t){1==t.target.dataset.type?this.details.startTime=t.target.value:this.details.endTime=t.target.value},getSearch:function(){this.navList=[{state:0,text:"全部",loadingType:"more",orderList:[]},{state:1,text:"待付款",loadingType:"more",orderList:[]},{state:2,text:"待发货",loadingType:"more",orderList:[]},{state:3,text:"待收货",loadingType:"more",orderList:[]}],this.hideModal(),this.loadData(null,1)},confirmReceipt:function(e){var n=this;t.showModal({title:"提示",content:"是否确认收货？",success:function(t){t.confirm&&o.default.getReceipt(e.id,(function(t){n.$api.msg("操作成功"),n.refreshOderList()}))}})}})};e.default=p}).call(this,n("543d")["default"])}},[["16dd","common/runtime","common/vendor"]]]);