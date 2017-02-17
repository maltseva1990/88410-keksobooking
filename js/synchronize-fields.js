'use strict';

window.synchronizeFields = (function () {
  return function (firstField, secondField, firstArray, secondArray, property) {
    firstField.addEventListener('change', function () {
      var index = firstArray.indexOf(firstField.value);
      secondField[property] = secondArray[index];
    });
  };
})();
