function IsPC() {
   var userAgentInfo = navigator.userAgent;
   var Agents = ["Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"];
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         flag = false;
         break;
      }
   }
   return flag;
}

// 客服地址
; (function () {
   var _53code = document.createElement("script");
   _53code.src = "https://tb.53kf.com/code/client/6806b0d67a0b08c412e210e31d43e9526/1";
   var s = document.getElementsByTagName("script")[0];
   s.parentNode.insertBefore(_53code, s);
})();

