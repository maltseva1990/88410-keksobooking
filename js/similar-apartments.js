'use strict';

window.similarApartments = (function () {

  return function (data) {

    var pinTemplate = document.querySelector('#pin-template');
    var pinToClone = pinTemplate.content.querySelector('.pin');
    var pinMap = document.querySelector('.tokyo__pin-map');
      // var tokyo = document.querySelector('.tokyo');

    var similarApartments = JSON.parse(data);
    var newSimilarApartments = similarApartments.slice(0, 3);

    newSimilarApartments.forEach(function (newAppartment, index, array) {

      var pinNewElement = pinToClone.cloneNode(true);

      pinNewElement.setAttribute('data-pin-index', index);
      pinNewElement.children[0].alt = similarApartments[index].offer.address;
      pinNewElement.children[0].src = similarApartments[index].author.avatar;
      pinNewElement.style.top = similarApartments[index].location.y + 'px';
      pinNewElement.style.left = similarApartments[index].location.x + 'px';

      pinMap.appendChild(pinNewElement);

    });
  };
})();
