'use strict';

window.initializePinsFilters = (function () {

  return function (pinsData) {

    var tokyoFilters = document.querySelector('.tokyo__filters');
    var tokyoMap = document.querySelector('.tokyo__pin-map');
    var filterType = tokyoFilters.querySelector('#housing_type');
    var filterPrice = tokyoFilters.querySelector('#housing_price');
    var filterRoomsAmount = tokyoFilters.querySelector('#housing_room-number');
    var filterGuests = tokyoFilters.querySelector('#housing_guests-number');

    var ANY = 'any';
    var MIN_MIDDLE_PRICE = 10000;
    var MAX_MIDDLE_PRICE = 50000;

    var getRangePrice = function (apartmentPrice) {
      switch (filterPrice.value) {
        case 'low':
          return (apartmentPrice < MIN_MIDDLE_PRICE);
        case 'middle':
          return (apartmentPrice >= MIN_MIDDLE_PRICE && apartmentPrice <= MAX_MIDDLE_PRICE);
        case 'hight':
          return (apartmentPrice > MAX_MIDDLE_PRICE);
      }
      return false;
    };

    filterPrice.addEventListener('change', function () {
      var filteredPins = pinsData.filter(getRangePrice); // присваиваю значение
      // и вот здесь по идее я должна вызвать window.initializePins (filteredPins), но в моем случае это не работает,
      // напиши, пожалуйста, подробно алгоритм как мне реализовать отрисовку
    });
    var getRangeType = function (apartmentType) {
      return apartmentType === filterType.value || filterType.value === ANY;
    };
    filterType.addEventListener('change', function () {
      var filteredPins = pinsData.filter(getRangeType);


    });
    var getRangeRooms = function (apartmentRooms) {
      var roomsValue = parseInt(filterRoomsAmount.value, 10);
      return filterRoomsAmount.value === ANY || apartmentRooms === roomsValue;
    };
    filterRoomsAmount.addEventListener('change', function () {
      var filteredPins = pinsData.filter(getRangeRooms);

    });
    var getRangeGuests = function (apartmentGuests) {
      var guestValue = parseInt(filterGuests.value, 10);
      return filterGuests.value === ANY || apartmentGuests === guestValue;
    };
    filterGuests.addEventListener('change', function () {
      var filteredPins = pinsData.filter(getRangeGuests);


    });
  };
})();
