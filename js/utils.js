'use strict'

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;
window.utils = {

  isActivateEvent: function (evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  },

  isDiactivateEvent: function (evt) {
    return evt.keyCode && evt.keyCode === ESCAPE_KEY_CODE;
  }
}
