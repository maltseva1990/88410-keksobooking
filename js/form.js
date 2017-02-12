'use strict';

window.initializePins();

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
var currentProperty = 'value';
var roomAmount = ['1 комната', '2 комнаты', '100 комнат'];
var roomCapacity = ['не для гостей', 'для 3 гостей'];
var roomTypes = ['Квартира', 'Лачуга', 'Дворец'];
var roomPrices = [1000, 0, 10000];
adres.required = true;
price.required = true;
adTitle.required = true;
price.min = 1000;
price.max = 1000000;
adTitle.minLength = 30;
adTitle.maxLength = 100;

window.synchronizeFields(checkIn, checkOut, availableCheckIn, availableCheckOut, currentProperty);

window.synchronizeFields(checkOut, checkIn, availableCheckOut, availableCheckIn, currentProperty);

window.synchronizeFields(roomNumber, capacity, roomAmount, roomCapacity, currentProperty);

// не рботает с window.synchronizeFields: window.synchronizeFields(type, price, roomTypes, roomPrices, currentProperty);

roomNumber.addEventListener('change', function () {
    var roomValue = +roomNumber.value;
    if (roomValue === 2 || roomValue === 100) {
      capacity.value = 3;
    } else {
        capacity.value = 0;
    }
  });
