'use strict';

window.showCard = (function () {
  return function (element) {
    var className = 'invisible';
    element.classList.remove(className);
    element.setAttribute('aria-hidden', 'false');
  };
})();

window.hideCard = (function () {
  return function (element) {
    var className = 'invisible';
    element.classList.add(className);
  };
})();
