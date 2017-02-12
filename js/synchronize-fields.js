'use strict';

window.synchronizeFields = function (firstField, secondField, firstArray, secondArray, property) {
  firstField.addEventListener('change', function () {
    for (var i = 0; i < secondArray.length; i++) {
      if (firstField.value === firstArray[i]) {
        secondField[property] = secondArray[i];
        break;
      }
    }
  });
};
