'use strict';

window.hideCard = (function () {
  var INVISIBLE = 'invisible';
  return function (element) {
    element.classList.add(INVISIBLE);
    element.setAttribute('aria-hidden', 'true');
  };
})();
