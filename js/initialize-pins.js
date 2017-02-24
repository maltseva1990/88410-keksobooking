'use strict';

window.initializePins = (function () {

  var dialogWindow = document.querySelector('.dialog');
  var dialogClose = dialogWindow.querySelector('.dialog__close');
  var PIN_ACTIVE_CLASS_NAME = 'pin--active';
  var onDialogClose = null;
  var pinMap = document.querySelector('.tokyo__pin-map');

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

  var hideDialog = function () {
    if (typeof onDialogClose === 'function') {
      var getActive = document.querySelector('.' + PIN_ACTIVE_CLASS_NAME);
      onDialogClose(getActive);
      onDialogClose = null;
    }
    window.hideCard(dialogWindow);
  };

  var checkEventTarget = function (event) {
    var elementClicked;
    var clickedTarget = event.target;
    var clickedTargetParent = event.target.parentNode;
    if (clickedTarget.classList.contains('pin') &&
      !clickedTarget.classList.contains('pin__main')
    ) {
      elementClicked = clickedTarget;
    } else if (
      clickedTargetParent &&
      clickedTargetParent.classList.contains('pin') &&
      !clickedTargetParent.classList.contains('pin__main')
    ) {
      elementClicked = clickedTargetParent;
    }
    if (elementClicked) {
      setupActivePin(elementClicked);
// хочу, например, передавать в функцию showCard на вход два параметра - элемент, на котором кликнули и данные из объекта
      window.showCard(elementClicked, window.similarApartments[i].offer);
    }

  };

  var clickHandler = function (event) {
    deletePin();
    checkEventTarget(event);
  };

  var keydownHandler = function (event) {
    if (window.utils.isActivateEvent(event) && event.target.classList.contains('pin')) {
      onDialogClose = window.utils.focusEvent;
      deletePin();
      checkEventTarget(event);
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

  window.load('https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data', window.similarApartments);

})();
