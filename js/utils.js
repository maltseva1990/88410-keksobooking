'use strict';

window.utils = (function () {
  var ENTER_KEY_CODE = 13;
  var ESCAPE_KEY_CODE = 27;
  var isActivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };

  var isDiactivateEvent = function (evt) {
    return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
  };

  var focusEvent =  function (element) {
    element.focus();
  };
  return {
    isActivateEvent: isActivateEvent,
    isDiactivateEvent: isDiactivateEvent,
    focusEvent: focusEvent
  };
})();
