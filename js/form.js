'use strict';

var pins = document.querySelectorAll('.pin');
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

for (var i = 0; i < pins.length; i++) {
  var element = pins[i];
  if (element.classList.contains('pin--active')) {
    element.setAttribute('aria-pressed', 'true');
  } else {
    element.setAttribute('aria-pressed', 'false');
  }
}

var clickHandler = function () {
  deletePin();
  var clickedElement = event.target;
  clickedElement.parentNode.classList.add('pin--active');
  clickedElement.parentNode.setAttribute('aria-pressed', 'true');
  dialogWindow.style.display = 'block';
};

pinMap.addEventListener('click', clickHandler, true);

var keydownHandler = function (event) {
  if (event.keyCode === ENTER_KEY_CODE) {
    deletePin();
    var clickedElement = event.target;
    clickedElement.classList.add('pin--active');
    clickedElement.setAttribute('aria-pressed', 'true');
    dialogWindow.style.display = 'block';
  }
};

pinMap.addEventListener('keydown', keydownHandler, true);

function deletePin() {
  var pinActive = document.querySelector('.' + PIN_ACTIVE_CLASS_NAME);
  if (pinActive) {
    pinActive.classList.remove(PIN_ACTIVE_CLASS_NAME);
  }
  document.removeEventListener('keydown', keydownHandler);
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
