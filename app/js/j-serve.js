//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

Zepto(function($){

  var serveShadow = $('.wui-shadow-alert');
  var serveContent = $('.wui-alert');
  var openServe = function() {
  	serveShadow.removeClass('none');
    serveContent.removeClass('none');
  }//打开服务引导窗口

  var closeServe = function() {
  	serveShadow.addClass('none');
    serveContent.addClass('none');
  }//关闭服务引导窗口

  $('.j-serve-open').tap(function() {
    openServe();
  })

  $('.dialog-close').tap(function() {
    closeServe();
  })

  

})