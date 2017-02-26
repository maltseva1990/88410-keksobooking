'use strict';

window.initializePins = (function () {

  var PIN_ACTIVE_CLASS_NAME = 'pin--active';
  var pinMap = document.querySelector('.tokyo__pin-map');

  var tokyoFilters = document.querySelector('.tokyo__filters');

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
      window.showCard(elementClicked, elementClicked.dataset['pinIndex']);
    }

  };

  var clickHandler = function (event) {
    deletePin();
    checkEventTarget(event);
  };

  var keydownHandler = function (event) {
    if (window.utils.isActivateEvent(event) && event.target.classList.contains('pin')) {
      deletePin();
      checkEventTarget(event);
    }
  };

  pinMap.addEventListener('click', clickHandler);

  pinMap.addEventListener('keydown', keydownHandler);

  window.load('https://intensive-javascript-server-pedmyactpq.now.sh/keksobooking/data', function(){
    var pinsData = window.getSimilarApartments;
    tokyoFilters.addEventListener('change', function () {
      window.filterPins(pinsData);
    });
  });

})();
