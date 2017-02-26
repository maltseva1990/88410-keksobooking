'use strict';

window.filterPins = (function () {
  return function (pinsData) {

    var tokyoFilters = document.querySelector('.tokyo__filters');
    var filterType = tokyoFilters.querySelector('#housing_type');
    var filterPrice = tokyoFilters.querySelector('#housing_price');
    var filterRoomsAmount = tokyoFilters.querySelector('#housing_room-number');
    var filterGuests = tokyoFilters.querySelector('#housing_guests-number');
    var ANY = 'any';
    var LOW_PRICE = 'low';
    var MIDDLE_PRICE = 'middle';
    var HIGH_PRICE = 'hight';
    var MIN_MIDDLE_PRICE = 10000;
    var MAX_MIDDLE_PRICE = 50000;

    var getRangePrice = function (apartmentPrice) {
      switch (filterPrice.value) {
        case LOW_PRICE:
          return (apartmentPrice < MIN_MIDDLE_PRICE);
        case MIDDLE_PRICE:
          return (apartmentPrice >= MIN_MIDDLE_PRICE && apartmentPrice <= MAX_MIDDLE_PRICE);
        case HIGH_PRICE:
          return (apartmentPrice > MAX_MIDDLE_PRICE);
      }
      return false;
    };

    var getRangeType = function (apartmentType) {
      return (filterType.value === ANY) || (apartmentType === filterType.value);
    };

    var getRangeRooms = function (apartmentRooms) {
      return (filterRoomsAmount.value === ANY) || (apartmentRooms === parseInt(filterRoomsAmount.value, 10));
    };

    var getRangeGuests = function (apartmentGuests) {
      return (filterGuests.value === ANY) || (apartmentGuests === parseInt(filterGuests.value, 10));
    };


      return (function (apartment) {
        pinsData.getRangeType(apartment.offer.type);
        pinsData.getRangePrice(apartment.offer.price);
        pinsData.getRangeRooms(apartment.offer.rooms) ;
        pinsData.getRangeGuests(apartment.offer.guests);
      });
  };
})();
