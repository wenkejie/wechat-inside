//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

Zepto(function($){

    var checkControl = $('label.j-checkControl');
    checkControl.tap(function() {
      var checkStatus = $(this).parent();
      if (!checkStatus.hasClass('wui-checkbox-active')) {
        checkStatus.addClass('wui-checkbox-active');
      }else{
        checkStatus.removeClass('wui-checkbox-active');
      };
    })
})