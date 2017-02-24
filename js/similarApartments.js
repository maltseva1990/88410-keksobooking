'use strict';

window.similarApartments = (function () {

  return function (data) {

    var pinTemplate = document.querySelector('#pin-template');
    var pinToClone = pinTemplate.content.querySelector('.pin');
    var pinMap = document.querySelector('.tokyo__pin-map');
      // var tokyo = document.querySelector('.tokyo');

    var similarApartments = JSON.parse(data);
    var newSimilarApartments = similarApartments.slice(0, 3);

    for (var i = 0; i < newSimilarApartments.length; i++) {

        // var dataPinIndex = newSimilarApartments[i];
      var pinNewElement = pinToClone.cloneNode(true);

      pinNewElement.setAttribute('id', i);
        // console.log(similarApartments[i].offer);
      pinNewElement.children[0].alt = similarApartments[i].offer.address;

      pinNewElement.children[0].src = similarApartments[i].author.avatar;
      pinNewElement.style.top = similarApartments[i].location.y + 'px';
      pinNewElement.style.left = similarApartments[i].location.x + 'px';

      pinMap.appendChild(pinNewElement);

    }
  };
})();
