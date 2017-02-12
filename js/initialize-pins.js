'use strict';

window.initializePins = function () {
  var dialogWindow = document.querySelector('.dialog');
  var dialogClose = dialogWindow.querySelector('.dialog__close');
  var pinMap = document.querySelector('.tokyo__pin-map');
  var PIN_ACTIVE_CLASS_NAME = 'pin--active';
  var ENTER_KEY_CODE = 13;

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

  var showDialog = function (element) {
    element.style.display = 'block';
  };

  var clickHandler = function (event) {
    deletePin();
    var elementClicked;
    if (event.target.classList.contains('pin')) {
      elementClicked = event.target;
    } else if (event.target.parentNode.classList.contains('pin')) {
      elementClicked = event.target.parentNode;
    }
    if (elementClicked) {
      setupActivePin(elementClicked);
      showDialog(dialogWindow);
    }
  };

  pinMap.addEventListener('click', clickHandler);

  var keydownHandler = function (event) {
    if (event.keyCode === ENTER_KEY_CODE && event.target.classList.contains('pin')) {
      deletePin();
      setupActivePin(event.target);
      showDialog(dialogWindow);
    }
  };

  pinMap.addEventListener('keydown', keydownHandler);

  dialogClose.addEventListener('click', function () {
    dialogWindow.style.display = 'none';
    deletePin();
  });
};
