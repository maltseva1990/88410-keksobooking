'use strict';

window.initializePinsFilters = (function () {

  return function (pinsData) {

    var tokyoFilters = document.querySelector('.tokyo__filters');
    var filterType = tokyoFilters.querySelector('#housing_type');
    var filterPrice = tokyoFilters.querySelector('#housing_price');
    var filterRoomsAmount = tokyoFilters.querySelector('#housing_room-number');
    var filterGuests = tokyoFilters.querySelector('#housing_guests-number');

    var ANY = 'any';
    var MIDDLE_PRICE = 'middle';
    var HIGH_PRICE = 'hight';
    var MIN_MIDDLE_PRICE = 10000;
    var MAX_MIDDLE_PRICE = 50000;

    var getRangePrice = function (apartmentPrice) {
      switch (filterPrice.value) {
        case 'low':
          return (apartmentPrice < MIN_MIDDLE_PRICE);
        case MIDDLE_PRICE:
          return (apartmentPrice >= MIN_MIDDLE_PRICE && apartmentPrice <= MAX_MIDDLE_PRICE);
        case HIGH_PRICE:
          return (apartmentPrice > MAX_MIDDLE_PRICE);
      }
      return false;
    };

    filterPrice.addEventListener('change', function () {
      pinsData.filter(getRangePrice);
    });
    var getRangeType = function (apartmentType) {
      return filterType.value === ANY || apartmentType === filterType.value;
    };
    filterType.addEventListener('change', function () {
      pinsData.filter(getRangeType);
    });
    var getRangeRooms = function (apartmentRooms) {
      var roomsValue = parseInt(filterRoomsAmount.value, 10);
      return filterRoomsAmount.value === ANY || apartmentRooms === roomsValue;
    };
    filterRoomsAmount.addEventListener('change', function () {
      pinsData.filter(getRangeRooms);
    });
    var getRangeGuests = function (apartmentGuests) {
      var guestValue = parseInt(filterGuests.value, 10);
      return filterGuests.value === ANY || apartmentGuests === guestValue;
    };
    filterGuests.addEventListener('change', function () {
      pinsData.filter(getRangeGuests);
    });
  };
})();
