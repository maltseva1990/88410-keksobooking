'use strict';

window.formFields = (function () {

  var formField = document.querySelector('.notice__form');
  var adTitle = formField.querySelector('#title');
  var price = formField.querySelector('#price');
  var adres = formField.querySelector('#address');
  var checkIn = formField.querySelector('#time');
  var checkOut = formField.querySelector('#timeout');
  var type = formField.querySelector('#type');
  var roomNumber = formField.querySelector('#room_number');
  var capacity = formField.querySelector('#capacity');
  var availableCheckIn = ['12', '13', '14'];
  var availableCheckOut = ['12', '13', '14'];

  var roomAmount = ['1', '2', '100'];
  var roomCapacity = ['0', '3', '3'];
  var roomTypes = ['flat', 'small-flat', 'palace'];
  var roomPrices = [1000, 0, 10000];
  adres.required = true;
  price.required = true;
  adTitle.required = true;

  price.max = 1000000;
  price.min = 1000;
  adTitle.minLength = 30;
  adTitle.maxLength = 100;


  var synchronizeValue = function (element, value) {
    element['value'] = value;
  };

  var synchronizeMin = function (element, value) {
    element['min'] = value;
  };

  window.synchronizeFields(checkIn, checkOut, availableCheckIn, availableCheckOut, synchronizeValue);

  window.synchronizeFields(checkOut, checkIn, availableCheckOut, availableCheckIn, synchronizeValue);

  window.synchronizeFields(roomNumber, capacity, roomAmount, roomCapacity, synchronizeValue);

  window.synchronizeFields(capacity, roomNumber, roomCapacity, roomAmount, synchronizeValue);

  window.synchronizeFields(type, price, roomTypes, roomPrices, synchronizeMin);

})();

