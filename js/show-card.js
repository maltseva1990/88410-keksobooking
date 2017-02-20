'use strict';

var INVISIBLE = 'invisible';

window.showCard = (function () {
  return function (element) {
    element.classList.remove(INVISIBLE );
    element.setAttribute('aria-hidden', 'false');
  };
})();

window.hideCard = (function () {
  return function (element) {
    element.classList.add(INVISIBLE );
  };
})();
