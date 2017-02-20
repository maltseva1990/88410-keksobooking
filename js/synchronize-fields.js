'use strict';

window.synchronizeValue = (function () {
  return function (firstField, secondField, firstArray, secondArray, callback) {
    firstField.addEventListener('change', function () {
      var index = firstArray.indexOf(firstField.value);
      callback(secondField, secondArray[index]);
    });
  };
})();
