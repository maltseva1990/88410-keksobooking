'use strict';

window.initializePins = (function () {

  var dialogWindow = document.querySelector('.dialog');
  var dialogClose = dialogWindow.querySelector('.dialog__close');
  var pinMap = document.querySelector('.tokyo__pin-map');
  var PIN_ACTIVE_CLASS_NAME = 'pin--active';
  var onDialogClose = null;

  var setupActivePin = function (element) {
    element.classList.add(PIN_ACTIVE_CLASS_NAME);
    element.setAttribute('aria-pressed', 'true');
  };

  var removeActivePin = function (element) {
    element.classList.remove(PIN_ACTIVE_CLASS_NAME);
    element.setAttribute('aria-pressed', 'false');

  };

  var deletePin = function () {
    var pinActive = document.querySelector('.' + PIN_ACTIVE_CLASS_NAME);
    if (pinActive) {
      removeActivePin(pinActive);
    }
    document.removeEventListener('keydown', keydownHandler);
  };

  var clickHandler = function (event) {
    deletePin();
    var elementClicked;
    if (event.target.classList.contains('pin')) {
      onDialogClose = window.utils.focusEvent;
      elementClicked = event.target;

    } else if (event.target.parentNode.classList.contains('pin')) {
      elementClicked = event.target.parentNode;
    }
    if (elementClicked) {
      setupActivePin(elementClicked);
    }
    // // добавила функцию вместо display block
    window.showCard(dialogWindow);
  };

  var hideDialog = function () {
    if (typeof onDialogClose === 'function') {
      var getActive = document.querySelector('.' + PIN_ACTIVE_CLASS_NAME);
      onDialogClose(getActive);
      onDialogClose = null;
    }
    // добавила функцию вместо display none
    window.hideCard(dialogWindow);
  };

  var keydownHandler = function (event) {
    if (window.utils.isActivateEvent(event) && event.target.classList.contains('pin')) {
      onDialogClose = window.utils.focusEvent;
      deletePin();
      setupActivePin(event.target);
      window.showCard(dialogWindow, 'dialog');
    }
  };

  pinMap.addEventListener('click', clickHandler);

  pinMap.addEventListener('keydown', keydownHandler);

  dialogClose.addEventListener('click', function () {
    hideDialog();
  });

  dialogClose.addEventListener('keydown', function (event) {
    if (window.utils.isDiactivateEvent(event) || window.utils.isActivateEvent(event)) {
      hideDialog();
    }
  });
})();
