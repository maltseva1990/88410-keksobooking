'use strict';

window.similarApartments = (function () {

  return function (data) {

    var pinTemplate = document.querySelector('#pin-template');
    var pinToClone = pinTemplate.content.querySelector('.pin');
    var pinMap = document.querySelector('.tokyo__pin-map');
      // var tokyo = document.querySelector('.tokyo');

    window.similarApartments = JSON.parse(data);
    var newSimilarApartments = window.similarApartments.slice(0, 3);

    newSimilarApartments.forEach(function (newAppartment, index, array) {

      var pinNewElement = pinToClone.cloneNode(true);

      pinNewElement.setAttribute('data-pin-index', index);
      pinNewElement.children[0].alt = window.similarApartments[index].offer.address;
      pinNewElement.children[0].src = window.similarApartments[index].author.avatar;
      pinNewElement.style.top = window.similarApartments[index].location.y + 'px';
      pinNewElement.style.left = window.similarApartments[index].location.x + 'px';

      pinMap.appendChild(pinNewElement);

    });
  };
})();
