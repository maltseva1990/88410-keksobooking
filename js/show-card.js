'use strict';

window.showCard = (function () {

  var dialog = document.querySelector('.dialog');
  var dialogCross = dialog.querySelector('.dialog__close');
  var PIN_ACTIVE_CLASS_NAME = 'pin--active';
  var dialogBtnCross = null;

  var dialogBtnPressed = function () {
    dialogCross.setAttribute('aria-pressed', 'true');
    hideDialog();
  };

  var showDialog = function(callback) {
    dialog.style.display = 'block';
    dialogCross.addEventListener('click', function() {
        dialogCross.setAttribute('aria-pressed', 'true');
        hideDialog();
  });
    dialogBtnCross = callback;
  };

  var hideDialog = function () {
    dialog.style.display = 'none';
    var activeElement = document.querySelector('.' + PIN_ACTIVE_CLASS_NAME);
    if (activeElement) {
      activeElement.classList.remove(PIN_ACTIVE_CLASS_NAME);
    }
    if (typeof dialogBtnCross === 'function') {
      dialogBtnCross();
    }
    dialogCross.removeEventListener('click', dialogBtnPressed);
  };

  return {
    showDialog: showDialog,
    hideDialog: hideDialog
  }
})();
