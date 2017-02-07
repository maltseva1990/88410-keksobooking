'use strict';

var dialogWindow = document.querySelector('.dialog');
var dialogClose = dialogWindow.querySelector('.dialog__close');
var pinMap = document.querySelector('.tokyo__pin-map');
var formField = document.querySelector('.notice__form');
var adTitle = formField .querySelector('#title');
var price = formField .querySelector('#price');
var adres = formField.querySelector('#address');
var checkIn = formField.querySelector('#time');
var checkOut = formField.querySelector('#timeout');
var type = formField.querySelector('#type');
var roomNumber = formField.querySelector('#room_number');
var capacity = formField.querySelector('#capacity');
var PIN_ACTIVE_CLASS_NAME = 'pin--active';
var ENTER_KEY_CODE = 13;

adres.required = true;
price.required = true;
adTitle.required = true;
price.min = 1000;
price.max = 1000000;
adTitle.minLength = 30;
adTitle.maxLength = 100;

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

var showDialog = function (element) {
  element.style.display = 'block';
};

var clickHandler = function (event) {
  deletePin();
  var elementClicked;
  if (event.target.classList.contains('pin')) {
    elementClicked = event.target;
  } else if (!event.target.classList.contains('pin')) {
    elementClicked = event.target.parentNode;
  }
  setupActivePin(elementClicked);
  showDialog(dialogWindow);
};

pinMap.addEventListener('click', clickHandler);

var keydownHandler = function (event) {
  if (event.keyCode === ENTER_KEY_CODE && event.target.classList.contains('pin')) {
    deletePin();
    setupActivePin(event.target);
    showDialog(dialogWindow);
  }
};

pinMap.addEventListener('keydown', keydownHandler);

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
