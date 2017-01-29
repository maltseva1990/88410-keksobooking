'use strict';

var pins = document.querySelectorAll('.pin');
var dialogWindow = document.querySelector('.dialog');
var dialogClose = dialogWindow.querySelector('.dialog__close');
var formField = document.querySelector('.notice__form');
var adTitle = formField .querySelector('#title');
var price = formField .querySelector('#price');
var adres = formField.querySelector('#address');
var checkIn = formField.querySelector('#time');
var checkOut = formField.querySelector('#timeout');
var type = formField.querySelector('#type');
var roomNumber = formField.querySelector('#room_number');
var capacity = formField.querySelector('#capacity');

adres.required = true;
price.required = true;
adTitle.required = true;
price.min = 1000;
price.max = 1000000;
adTitle.minLength = 30;
adTitle.maxLength = 100;

for (var i = 0; i < pins.length; i++) {
  pins[i].addEventListener('click', function (event) {
    deletePin();
    addPin(event.currentTarget);
    dialogWindow.style.display = 'block';
  });
}

function addPin(pin) {
  pin.classList.add('pin--active');
}

function deletePin() {
  var pinActive = document.querySelector('.pin--active');
  if (pinActive) {
    pinActive.classList.remove('pin--active');
  }
}

dialogClose.addEventListener('click', function () {
  dialogWindow.style.display = 'none';
  deletePin();
});

checkIn.addEventListener('change', function () {
  checkOut.value = checkIn.value;
});
checkOut.addEventListener('change', function () {
  checkIn.value = checkOut.value;
});

type.addEventListener('change', function () {
  switch (type.value) {
    case 'flat':
      price.min = 1000;
      break;
    case 'small-flat':
      price.min = 0;
      break;
    case 'palace':
      price.min = 10000;
      break;
  }
});

roomNumber.addEventListener('change', function () {
  var roomValue = +roomNumber.value;
  if (roomValue === 2 || roomValue === 100) {
    capacity.value = 3;
  } else {
    capacity.value = 0;
  }
});
